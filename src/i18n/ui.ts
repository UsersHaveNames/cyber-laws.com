/**
 * This configures the translations for all ui text in your website. 
 * 
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated 
 */
import type { SupportedLanguage } from "src/utils/i18n";

export default {
    "en": {
        "site.title": {
            text: "Cyber Laws"
        },
        "site.description": {
            text: "Practical insights at the intersection of cybersecurity and regulation."
        },
        "profile.description": {
            text: "A blog about EU cybersecurity laws, frameworks, and practical implementation."
        },
        "blog.lastUpdated": {
            text: "Last updated:"
        },
        "sidebar.tableOfContents": {
            text: "Table of Contents"
        },
        "project.platform": {
            text: "PLATFORM"
        },
        "project.stack": {
            text: "STACK"
        },
        "project.website": {
            text: "WEBSITE"
        }
    },
    "es": {
        "site.title": {
            text: "Cyber Laws"
        },
        "site.description": {
            text: "Ideas prácticas en la intersección de la ciberseguridad y la regulación."
        },
        "profile.description": {
            text: "Un blog sobre leyes de ciberseguridad de la UE, marcos y aplicación práctica."
        },
        "blog.lastUpdated": {
            text: "Última actualización:"
        },
        "sidebar.tableOfContents": {
            text: "Tabla de contenidos"
        },
        "project.platform": {
            text: "PLATAFORMA"
        },
        "project.stack": {
            text: "PILA"
        },
        "project.website": {
            text: "WEBSITE"
        }
    }
} as const satisfies TranslationUIEntries;

type TranslationUIEntries = Record<SupportedLanguage, Record<string, UIEntry>>;

export type UIEntry = { text: string };