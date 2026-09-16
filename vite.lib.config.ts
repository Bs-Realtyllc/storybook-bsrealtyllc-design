/**
 * Library build config for @bsrealtyllc/design-system.
 *
 * Separate from vite.config.ts (which builds/serves the Storybook demo
 * app). Run via `npm run build:lib` — produces dist/ with:
 *   - one ES + CJS bundle per entry below (so consumers can deep-import
 *     a single component, see package.json "exports")
 *   - matching .d.ts type declarations (vite-plugin-dts)
 *   - a single combined dist/style.css (cssCodeSplit: false) covering
 *     tokens + every component's styles
 *
 * Adding a new component? Add its folder's index.ts here AND to
 * package.json's "exports" map so the deep-import path is published.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  // This is a library build, not an app build — don't copy public/
  // (app favicon/demo images) into the published dist/.
  publicDir: false,
  plugins: [
    react(),
    dts({
      // Root tsconfig.json is references-only ("files": []) for the
      // project-references setup Vite's app build uses; it has no
      // compilerOptions of its own, so point the plugin at the tsconfig
      // that actually covers src/.
      tsconfigPath: "./tsconfig.app.json",
      // entryRoot anchors the emitted .d.ts tree at src/ itself, so
      // output paths mirror src/components/Button/... exactly as
      // referenced by package.json's "exports" map below.
      entryRoot: "src",
      include: ["src"],
      // Only src/index.ts and its transitive imports (components/icons/types)
      // should get declarations.
      exclude: ["**/*.stories.*", "**/*.test.*"],
      rollupTypes: false,
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        Avatar: resolve(__dirname, "src/components/Avatar/index.ts"),
        Button: resolve(__dirname, "src/components/Button/index.ts"),
        FAQ: resolve(__dirname, "src/components/FAQ/index.ts"),
        Navbar: resolve(__dirname, "src/components/Navbar/index.ts"),
        PasswordField: resolve(
          __dirname,
          "src/components/PasswordField/index.ts",
        ),
        SearchBar: resolve(__dirname, "src/components/SearchBar/index.ts"),
        ServiceCard: resolve(__dirname, "src/components/ServiceCard/index.ts"),
        StarRating: resolve(__dirname, "src/components/StarRating/index.ts"),
        Testimonial: resolve(__dirname, "src/components/Testimonial/index.ts"),
        TextField: resolve(__dirname, "src/components/TextField/index.ts"),
        Typography: resolve(__dirname, "src/components/Typography/index.ts"),
        icons: resolve(__dirname, "src/icons/index.ts"),
        CourseCard: resolve(__dirname, "src/components/CourseCard/index.ts"),
        GooglePlayButton: resolve(
          __dirname,
          "src/components/GooglePlayButton/index.ts",
        ),
        AppStoreButton: resolve(
          __dirname,
          "src/components/AppStoreButton/index.ts",
        ),
        SocialIcon: resolve(__dirname, "src/components/SocialIcon/index.ts"),
        Dropdown: resolve(__dirname, "src/components/Dropdown/index.ts"),
        Breadcrumb: resolve(__dirname, "src/components/Breadcrumb/index.ts"),
        BackButton: resolve(__dirname, "src/components/BackButton/index.ts"),
        ActionCateg: resolve(__dirname, "src/components/ActionCateg/index.ts"),
        EvolutionCard: resolve(
          __dirname,
          "src/components/EvolutionCard/index.ts",
        ),
        FilterItem: resolve(__dirname, "src/components/FilterItem/index.ts"),
        CourseCard2: resolve(__dirname, "src/components/CourseCard2/index.ts"),
        DatePicker: resolve(__dirname, "src/components/DatePicker/index.ts"),

        // src/types/index.ts is type-only (interfaces are erased at build
        // time) — deliberately NOT a lib entry, it would emit an empty JS
        // chunk. Its .d.ts still ships via the main `index.ts` barrel, so
        // `import type { Disableable } from '@bsrealtyllc/design-system'`
        // keeps working; there's just no `./types` deep-import subpath.
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        `${entryName}.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        exports: "named",
        globals: { react: "React", "react-dom": "ReactDOM" },
        // Vite's default lib-mode CSS name is derived from `lib.name`
        // (unset here) and falls back to "design-system.css"-ish names;
        // pin it explicitly so it matches package.json's "./style.css"
        // export.
        assetFileNames: (info) =>
          info.names?.[0]?.endsWith(".css")
            ? "style.css"
            : "assets/[name]-[hash][extname]",
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: true,
  },
});
