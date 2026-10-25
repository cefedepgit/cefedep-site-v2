"use client";
import { useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import {
  interests,
  validateContact,
  type ContactDraft,
  type ContactErrors,
} from "@/lib/contact";
const subscribe = () => () => {};
export function ContactForm() {
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const draft: ContactDraft = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      interest: String(data.get("interest") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    const issues = validateContact(draft);
    setErrors(issues);
    setStatus(
      Object.keys(issues).length
        ? "Revisa los campos indicados."
        : "Los campos son válidos. No se ha enviado ni guardado tu consulta: el canal de atención aún no está conectado.",
    );
    const first = Object.keys(issues)[0];
    if (first)
      (
        formRef.current?.elements.namedItem(first) as HTMLElement | null
      )?.focus();
  }
  function attributes(field: keyof ContactDraft) {
    return {
      id: field,
      name: field,
      "aria-invalid": Boolean(errors[field]),
      "aria-describedby": errors[field] ? `${field}-error` : undefined,
    };
  }
  function error(field: keyof ContactDraft) {
    return errors[field] ? (
      <p className="field-error" id={`${field}-error`}>
        {errors[field]}
      </p>
    ) : null;
  }
  return (
    <form
      ref={formRef}
      className="contact-form"
      noValidate
      onSubmit={handleSubmit}
      onChange={() => {
        setStatus("");
        setErrors({});
      }}
    >
      <p className="form-notice" id="demo-note">
        Formulario de demostración · Usa datos ficticios. Todos los campos son
        obligatorios.
      </p>
      <fieldset disabled={!hydrated}>
        <div className="form-pair">
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              {...attributes("name")}
              required
              autoComplete="off"
              minLength={2}
              maxLength={80}
              placeholder="Nombre de prueba"
            />
            {error("name")}
          </div>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              {...attributes("email")}
              required
              type="email"
              autoComplete="off"
              maxLength={254}
              placeholder="prueba@example.com"
            />
            {error("email")}
          </div>
        </div>
        <label htmlFor="interest">¿Qué te interesa?</label>
        <select {...attributes("interest")} required defaultValue="">
          <option value="" disabled>
            Selecciona un área
          </option>
          {interests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        {error("interest")}
        <label htmlFor="message">Tu consulta</label>
        <textarea
          {...attributes("message")}
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          placeholder="Cuéntanos sobre tu objetivo de aprendizaje…"
        />
        {error("message")}
        <button
          type="submit"
          className="button button-primary"
          aria-describedby="demo-note"
        >
          Validar consulta de prueba <span aria-hidden="true">↗</span>
        </button>
      </fieldset>
      <p role="status" aria-live="polite" className="form-status">
        {status}
      </p>
      <noscript>
        <p>Activa JavaScript para validar. Este formulario no envía datos.</p>
      </noscript>
    </form>
  );
}
