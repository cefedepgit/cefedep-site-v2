import type {
  CrmPort,
  FirebasePort,
  IntegrationResult,
  MoodlePort,
  PayphonePort,
} from "./contracts";
async function unavailable<T>(): Promise<IntegrationResult<T>> {
  return {
    ok: false,
    code: "NOT_CONFIGURED",
    message: "Integración no configurada. No se realizó ninguna operación.",
  };
}
// No SDKs, network requests, secrets, storage, or simulated success.
export const firebase: FirebasePort = {
  getSession: unavailable,
  saveLead: unavailable,
};
export const crm: CrmPort = { createLead: unavailable };
export const payphone: PayphonePort = { createCheckout: unavailable };
export const moodle: MoodlePort = { enroll: unavailable };
