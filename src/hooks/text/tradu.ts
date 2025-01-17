import { I18n } from "i18n-js";
import en from "@text/en/index.json";
import es from "@text/es/index.json";
import pt from "@text/pt/index.json";
import fr from "@text/fr/index.json";

const userLanguage = navigator.language || "es"; // Detectar el idioma del navegador o usar español por defecto.

function useTranslate(defaultLocale = "es") {
  // Asegúrate de usar el idioma detectado para la inicialización
  const i18n = new I18n({
    en,
    es,
    pt,
    fr
  });

  const idio = userLanguage.split("-")[0]; // Extraer solo el código de idioma (ej: 'es' de 'es-ES')

  // Configuración del idioma para 'i18n'
  i18n.defaultLocale = defaultLocale;
  i18n.locale = idio; // Configurar el idioma a lo que haya detectado el navegador
  i18n.enableFallback = true;

  console.log(`Idioma detectado: ${idio}`); // Verificar que se haya asignado el idioma correctamente
  return i18n;
}

// Instancia global de traducción
const translateK = useTranslate();

export function setTranslateLocale(locale: string): void {
  // Cambiar el idioma en tiempo de ejecución
  translateK.locale = 'es' // Asegurarse de usar solo el código del idioma
}

export function getTranslateLocale(): string {
  return translateK.locale;
}

export function useGetTranslate(
  key: string,
  params?: { key: string; value: string }[],
  translate = translateK
): string {
  let text = translate.t(key); // Obtiene el texto traducido por clave.

  if (params && params.length > 0) {
    for (const element of params) {
      const regex = new RegExp(element.key, "g"); // Crea un patrón global para reemplazar todas las ocurrencias.
      text = text.replace(regex, element.value);
    }
  }

  return text;
}