import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";
import { defineConfig } from "npm-check-updates";
export default tseslint.config(
  {
    files: ["**/*.ts"],
    ignores: [
        "**/tests/**",
        "**/dist/**",
        "**/esm/**",
        "**/lib/**",
        "**/typings/**",
        "**/.vscode/**",
        "**/.angular/**",
        "**/cache/**",
        "**/*.spec.*",
        "**/cli-module.*",
        "angular/**/polyfills.ts",  
        "angular/**/zone-flags.ts"
    ],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "warn",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@angular-eslint/no-empty-lifecycle-method": "warn",
      "@angular-eslint/prefer-inject": "warn",
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          suffixes: ["Page", "Component"],
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: ["decaf", ""],
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: ["app"],
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
