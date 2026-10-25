import { test, expect } from "@playwright/test";
import { servicePages } from "../../src/content/service-pages";
const routes = [
  "/",
  "/servicios",
  "/cursos",
  "/ehep",
  "/nosotros",
  "/contacto",
  ...servicePages.map((service) => "/servicios/" + service.slug),
  "/cursos/auxiliar-farmacia",
];
test("service and course detail links are reachable", async ({
  page,
  request,
}) => {
  await page.goto("/servicios");
  for (const service of servicePages)
    await expect(
      page.locator('main a[href="/servicios/' + service.slug + '"]'),
    ).toHaveCount(1);
  await page.getByRole("link", { name: "Conocer el servicio" }).first().click();
  await expect(page).toHaveURL(/asesoria-tesis$/);
  await page.getByText("¿Se garantiza la aprobación?", { exact: true }).click();
  await expect(
    page.getByText("La evaluación corresponde", { exact: false }),
  ).toBeVisible();
  await page.goto("/cursos");
  await page.getByRole("link", { name: "Ver programa completo" }).click();
  await expect(page).toHaveURL(/auxiliar-farmacia$/);
  await expect(
    page.getByRole("heading", { name: "Qué estudiarás" }),
  ).toBeVisible();
  await page.screenshot({
    path: "work/detail-" + test.info().project.name + ".png",
    fullPage: true,
  });
  expect((await request.get("/servicios/no-existe")).status()).toBe(404);
});
test("course catalog filters by area and opens requirements", async ({
  page,
}) => {
  await page.goto("/cursos");
  await expect(page.locator(".course-card")).toHaveCount(19);
  for (const [name, count] of [
    ["Salud", 4],
    ["Humana y educación", 9],
    ["Tecnología", 6],
    ["Todos", 19],
  ] as const) {
    await page.getByRole("button", { name, exact: true }).click();
    await expect(page.locator(".course-card")).toHaveCount(count);
    await expect(
      page.getByRole("button", { name, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
  }
  await page.locator(".course-card").first().locator("summary").click();
  await expect(
    page
      .locator(".course-card")
      .first()
      .getByText("Universidad Israel (UISRAEL)."),
  ).toBeVisible();
  await page.screenshot({
    path: `work/catalog-${test.info().project.name}.png`,
    fullPage: false,
  });
});
test("official brand assets and supplied photos load", async ({ page }) => {
  await page.goto("/");
  await page.locator(".training-gallery").scrollIntoViewIfNeeded();
  for (const img of await page.locator("img").all()) {
    await expect(img).toBeVisible();
    await expect
      .poll(() =>
        img.evaluate(
          (node: HTMLImageElement) => node.complete && node.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
});
for (const route of routes)
  test(`page ${route}: render, metadata and responsive layout`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page).toHaveTitle(/CEFEDEP/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.+/,
    );
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    expect(new URL(canonical!).href).toBe(`http://localhost:3000${route}`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy();
    expect(errors).toEqual([]);
    if (route === "/")
      await page.screenshot({
        path: `work/preview-${test.info().project.name}.png`,
        fullPage: true,
      });
  });
test("footer links to CEFEDEP social profiles", async ({ page }) => {
  await page.goto("/");
  for (const [name, href] of [
    ["Facebook", "https://www.facebook.com/cefedep"],
    ["Instagram", "https://www.instagram.com/cefedep_ecuador"],
    ["TikTok", "https://www.tiktok.com/@cefedep.ecuador"],
  ]) {
    const link = page.getByRole("link", {
      name: `${name} (se abre en una pestaña nueva)`,
    });
    await expect(link).toHaveAttribute("href", href);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
});
test("home hero carousel switches to video without hiding navigation", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Pausar presentación" }).click();
  await page.getByRole("button", { name: "Mostrar el video" }).click();
  await expect(
    page.getByRole("navigation", { name: "Navegación principal" }),
  ).toBeVisible();
  const video = page.getByTitle("Video de CEFEDEP");
  await expect(video).toHaveAttribute(
    "src",
    /youtube-nocookie\.com\/embed\/fjiOqLF6lac\?.*autoplay=1.*mute=0.*controls=0/,
  );
  await expect(video).toHaveAttribute("allow", "autoplay; encrypted-media");
  await page
    .getByRole("button", { name: "Mostrar la presentación de CEFEDEP" })
    .click();
  await expect(
    page.getByRole("navigation", { name: "Navegación principal" }),
  ).toBeVisible();
  await expect(video).toHaveAttribute("src", /autoplay=0/);
});
test("navigation works on the current viewport", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) {
    await page.getByRole("button", { name: "Menú" }).click();
    await expect(page.getByRole("button", { name: "Cerrar" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  }
  await page
    .getByRole("navigation", { name: "Navegación principal" })
    .getByRole("link", { name: "Cursos", exact: true })
    .click();
  await expect(page).toHaveURL(/\/cursos$/);
  if (isMobile)
    await expect(page.getByRole("button", { name: "Menú" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
});
test("form stays disabled without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://localhost:3000/contacto");
  await expect(
    page.getByRole("button", { name: "Validar consulta de prueba" }),
  ).toBeDisabled();
  await expect(page.getByLabel("Nombre", { exact: true })).toBeDisabled();
  await context.close();
});
test("form validates without submitting, storing or claiming success", async ({
  page,
}) => {
  await page.goto("/contacto");
  const outgoing: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") outgoing.push(request.url());
  });
  await page
    .getByRole("button", { name: "Validar consulta de prueba" })
    .click();
  await expect(page.getByLabel("Nombre", { exact: true })).toBeFocused();
  await expect(page.getByRole("status")).toHaveText(
    "Revisa los campos indicados.",
  );
  await page.getByLabel("Nombre", { exact: true }).fill("Persona de prueba");
  await page.getByLabel("Correo electrónico").fill("prueba@example.com");
  await page.getByLabel("¿Qué te interesa?").selectOption("Cursos");
  await page
    .getByLabel("Tu consulta", { exact: true })
    .fill("Consulta ficticia para verificar el formulario.");
  await page
    .getByRole("button", { name: "Validar consulta de prueba" })
    .click();
  await expect(page.getByRole("status")).toContainText(
    "No se ha enviado ni guardado",
  );
  expect(outgoing).toEqual([]);
  expect(
    await page.evaluate(() => localStorage.length + sessionStorage.length),
  ).toBe(0);
  await expect(page).toHaveURL(/\/contacto$/);
});
test("sitemap, robots and 404", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  for (const route of routes)
    expect(xml).toContain(
      `http://localhost:3000${route === "/" ? "/" : route}`,
    );
  expect(xml).not.toContain("cefedep.com");
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
  const missing = await request.get("/no-existe");
  expect(missing.status()).toBe(404);
});
