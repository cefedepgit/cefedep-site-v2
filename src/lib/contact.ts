export const interests = [
  "Servicios académicos",
  "Cursos",
  "EHEP",
  "Otra consulta",
] as const;
export interface ContactDraft {
  name: string;
  email: string;
  interest: string;
  message: string;
}
export type ContactErrors = Partial<Record<keyof ContactDraft, string>>;
export function validateContact(input: ContactDraft): ContactErrors {
  const errors: ContactErrors = {};
  if (input.name.trim().length < 2 || input.name.trim().length > 80)
    errors.name = "Escribe un nombre de entre 2 y 80 caracteres.";
  if (
    input.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())
  )
    errors.email = "Escribe un correo electrónico válido.";
  if (!interests.some((value) => value === input.interest))
    errors.interest = "Selecciona un área de interés.";
  if (input.message.trim().length < 10 || input.message.trim().length > 2000)
    errors.message = "Escribe entre 10 y 2000 caracteres.";
  return errors;
}
