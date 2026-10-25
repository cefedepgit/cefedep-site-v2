import Script from "next/script";
import { analytics } from "@/integrations/disabled";

/**
 * Inyecta el script de Google Analytics 4 cuando NEXT_PUBLIC_GA_ID está definido.
 * No renderiza nada si el Measurement ID no está configurado.
 * Estrategia afterInteractive: no bloquea el render ni la hidratación.
 */
export function GoogleAnalytics() {
  const { measurementId } = analytics;

  if (!measurementId) return null;

  return (
    <>
      <Script
        id="ga-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
