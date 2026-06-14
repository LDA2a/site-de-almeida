import { defineConfig } from "vite";
import { resolve } from "node:path";

const root = import.meta.dirname;

// Site multi-pages : chaque fichier HTML est un point d'entrée.
export default defineConfig({
  // Chemins relatifs dans le build => fonctionne quel que soit le dossier servi.
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        contact: resolve(root, "contact.html"),
        economiste: resolve(root, "economiste.html"),
        "maitrise-oeuvre": resolve(root, "maitrise-oeuvre.html"),
        menuiseries: resolve(root, "menuiseries.html"),
        "piscines-ibiza": resolve(root, "piscines-ibiza.html"),
      },
    },
  },
});
