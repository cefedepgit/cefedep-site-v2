import assert from "node:assert/strict";
import test from "node:test";
import { validateContact } from "../src/lib/contact";
import { resolveSiteUrl } from "../src/lib/site";
import { firebase, crm, payphone, moodle } from "../src/integrations/disabled";
const valid = {
  name: "Persona de prueba",
  email: "test@example.com",
  interest: "Cursos",
  message: "Consulta ficticia para probar.",
};
test("contact accepts complete drafts and rejects invalid or unbounded input", () => {
  assert.deepEqual(validateContact(valid), {});
  assert.equal(
    Object.keys(
      validateContact({
        name: " ",
        email: "x",
        interest: "inventado",
        message: "corto",
      }),
    ).length,
    4,
  );
  assert.ok(validateContact({ ...valid, message: "a".repeat(2001) }).message);
  assert.ok(validateContact({ ...valid, name: "a".repeat(81) }).name);
});
test("origin isolates preview from production including subdomains and trailing dots", () => {
  assert.equal(resolveSiteUrl({}), "http://localhost:3000");
  assert.equal(resolveSiteUrl({ DEPLOY_PRIME_URL: "https://preview--cefedep-v2.netlify.app", URL: "https://cefedep-v2.netlify.app" }), "https://preview--cefedep-v2.netlify.app");
  assert.throws(() => resolveSiteUrl({ DEPLOY_PRIME_URL: "https://cefedep.com" }));
  assert.equal(
    resolveSiteUrl({ VERCEL_URL: "cefedep-v2-test.vercel.app" }),
    "https://cefedep-v2-test.vercel.app",
  );
  for (const origin of [
    "https://cefedep.com",
    "https://www.cefedep.com",
    "https://CEFEDEP.COM.",
    "https://preview.cefedep.com",
    "https://user:pass@example.com",
    "http://example.com",
    "https://example.com/path",
    "https://example.com?key=test",
    "file:///tmp",
  ])
    assert.throws(() => resolveSiteUrl({ SITE_URL: origin }));
});
test("all integrations fail closed without network or writes", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    throw new Error("Network must not be used");
  };
  try {
    const lead = {
      ...valid,
      sourcePath: "/contacto",
      consent: { granted: false, policyVersion: "draft" },
    };
    const results = await Promise.all([
      firebase.getSession(),
      firebase.saveLead(lead),
      crm.createLead(lead, "test"),
      payphone.createCheckout({
        orderId: "test",
        amountCents: 100,
        currency: "USD",
        idempotencyKey: "test",
      }),
      moodle.enroll({ userId: "test", courseId: "test" }),
    ]);
    for (const result of results) {
      assert.equal(result.ok, false);
      if (!result.ok) assert.equal(result.code, "NOT_CONFIGURED");
    }
  } finally {
    globalThis.fetch = originalFetch;
  }
});
