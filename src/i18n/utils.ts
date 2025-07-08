import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
  console.log("Original pathname:", url.pathname);

  // Remover el base path si existe
  let pathname = url.pathname;
  if (pathname.startsWith("/astrolocale/")) {
    pathname = pathname.replace("/astrolocale/", "");
    console.log("After removing base:", pathname);
  } else if (pathname === "/astrolocale") {
    console.log("Returning default lang:", defaultLang);
    return defaultLang;
  }

  const parts = pathname.split("/").filter((part) => part !== "");
  console.log("Path parts (filtered):", parts);
  const lang = parts[0];
  console.log("Extracted lang:", lang);

  if (lang && lang in ui) {
    console.log("Lang found in ui, returning:", lang);
    return lang as keyof typeof ui;
  }

  console.log("Lang not found, returning default:", defaultLang);
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  };
}

// Centralized getStaticPaths for all localized pages
export function getStaticPathsForLocales() {
  return Object.keys(ui).map((locale) => ({
    params: { locale },
  }));
}
