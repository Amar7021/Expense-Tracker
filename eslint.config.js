import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import { defineConfig, globalIgnores } from "eslint/config"
import prettier from "eslint-config-prettier"
import unicorn from "eslint-plugin-unicorn"
import { folderNameCaseRule } from "./eslint-rules/folder-name-case.js"
import { jsxExtensionRule } from "./eslint-rules/jsx-extension-rule.js"
import react from "eslint-plugin-react"

export default defineConfig([
    globalIgnores(["dist", "src/components/ui/**", "convex/_generated/**"]),
    {
        files: ["src/**/*.{js,jsx}"],
        plugins: {
            react,
            unicorn,
            local: {
                rules: {
                    "folder-name-case": folderNameCaseRule,
                    "jsx-extension-rule": jsxExtensionRule,
                },
            },
        },
        extends: [
            js.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        rules: {
            "local/folder-name-case": "error",
            "local/jsx-extension-rule": "error",
            "no-var": "error",
            "no-debugger": "error",
            // ✅ File & folder naming (default)
            "unicorn/filename-case": [
                "error",
                {
                    cases: {
                        kebabCase: true, // folders + general files
                        camelCase: true, // allow utils like formatDate.js
                    },
                },
            ],
            "no-unused-vars": [
                "warn",
                {
                    varsIgnorePattern: "^[A-Z_]",
                    argsIgnorePattern: "^_",
                },
            ],
            "no-console": ["error", { allow: ["warn", "error"] }],
        },
    },
    // 🔹 JSX override → PascalCase ONLY
    {
        files: ["**/*.jsx"],
        rules: {
            "unicorn/filename-case": [
                "error",
                {
                    cases: {
                        pascalCase: true,
                    },
                    ignore: ["main.jsx"],
                },
            ],
        },
    },
    prettier,
])
