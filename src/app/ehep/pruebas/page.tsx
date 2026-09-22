import { notFound } from "next/navigation";
import bank from "@/content/ehep-bank.json";
import { EhepLab } from "@/components/ehep-lab";
import { pageMetadata } from "@/lib/seo";
import { validateBank } from "@/lib/ehep";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata(
  "Laboratorio EHEP",
  "Entorno local de pruebas del simulador y su administración.",
  "/ehep/pruebas",
);
export default function Lab() {
  if (
    process.env.EHEP_DEMO_ENABLED !== "1" ||
    process.env.VERCEL || process.env.NETLIFY

  )
    notFound();
  if (!validateBank(bank)) throw new Error("Banco EHEP inválido");
  return <EhepLab initialQuestions={bank} />;
}

