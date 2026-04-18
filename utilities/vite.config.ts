/// <reference types="node" />

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

type PackageJson = {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
};

const packageJson = JSON.parse(
  readFileSync(resolve(__dirname, "package.json"), "utf8"),
) as PackageJson;

const externalDeps = new Set([
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {}),
  ...Object.keys(packageJson.optionalDependencies ?? {}),
]);

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: (id) =>
        id.startsWith("@prismatica/") ||
        Array.from(externalDeps).some((dep) => id === dep || id.startsWith(`${dep}/`)),
    },
  },
  plugins: [
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.build.json"),
      entryRoot: resolve(__dirname, "src"),
      outDir: resolve(__dirname, "dist"),
      insertTypesEntry: true,
    }),
  ],
});
