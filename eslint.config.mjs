import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-empty-interface": ["warn", { allowSingleExtends: true }], // Permite interfaces vazias
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignora variáveis não utilizadas que começam com "_"
    },
  },
];