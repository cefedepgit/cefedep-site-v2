import type { ContactDraft } from "../lib/contact";
export type IntegrationResult<T> =
  | { ok: true; data: T }
  | { ok: false; code: "NOT_CONFIGURED"; message: string };
export interface Lead extends ContactDraft {
  sourcePath: string;
  consent: { granted: boolean; policyVersion: string };
  campaign?: { source?: string; medium?: string; campaign?: string };
}
export interface FirebasePort {
  getSession(): Promise<IntegrationResult<{ userId: string }>>;
  saveLead(lead: Lead): Promise<IntegrationResult<{ id: string }>>;
}
export interface CrmPort {
  createLead(
    lead: Lead,
    idempotencyKey: string,
  ): Promise<IntegrationResult<{ id: string }>>;
}
export interface PayphonePort {
  createCheckout(order: {
    orderId: string;
    amountCents: number;
    currency: "USD";
    idempotencyKey: string;
  }): Promise<IntegrationResult<{ checkoutUrl: string }>>;
}
export interface MoodlePort {
  enroll(input: {
    userId: string;
    courseId: string;
  }): Promise<IntegrationResult<{ enrollmentId: string }>>;
}
/** Proveedor de analíticas web (solo cliente, sin secrets). */
export interface AnalyticsPort {
  /** Measurement ID de Google Analytics 4 (G-XXXXXXXXXX) o null si no está configurado. */
  measurementId: string | null;
}
