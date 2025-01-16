import { I18n } from "i18n-js";
import en from "@text/en/index.json";
import es from "@text/es/index.json";

const userLanguage = navigator.language || "en"; // Detectar el idioma del navegador o usar inglés por defecto.

function useTranslate(defaultLocale = "en") {
	const i18n = new I18n({
		en,
		es,
	});

	const idio = userLanguage.split("-")[0]; // Extraer solo el código de idioma (ej: 'en' de 'en-US')

	// Configuración de idioma
	i18n.defaultLocale = defaultLocale;
	i18n.locale = idio; // Utiliza solo el código del idioma
	i18n.enableFallback = true;
	return i18n;
}

// Instancia global de traducción
const translateK = useTranslate();

export function setTranslateLocale(locale: string): void {
	// Cambiar el idioma en tiempo de ejecución
	translateK.locale = locale.split("-")[0]; // Asegurarse de usar solo el código del idioma
}

export function getTranslateLocale(): string {
	return translateK.locale;
}

export function useGetTranslate(
	key: string,
	params?: { key: string; value: string }[],
	translate = translateK,
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
