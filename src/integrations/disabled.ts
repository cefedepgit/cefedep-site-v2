import type {
  AnalyticsPort,
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
/** Lee el Measurement ID desde la variable pública de entorno.
 * Si no está definida, measurementId es null y el componente no inyecta el script. */
export const analytics: AnalyticsPort = {
  measurementId: process.env.NEXT_PUBLIC_GA_ID ?? null,
};
