import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-empty-interface": ["warn", { allowSingleExtends: true }], // Permite interfaces vazias
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            "{}": false, // Desativa a regra para o tipo "{}"
            object: false, // Desativa a regra para o tipo "object"
          },
          extendDefaults: true,
        },
      ],
      "biome-ignore lint/complexity/noBannedTypes": {
        // Ignora a regra "lint/complexity/noBannedTypes" do Biome
        "<explanation>": "O tipo '{}' é usado intencionalmente neste caso para representar um objeto vazio genérico.",
      },
    },
  },
];