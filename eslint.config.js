import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// CommonJS değişkenlerini taklit etme
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FlatCompat'i doğru bir şekilde yapılandırma
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended, // recommendedConfig'i ayarlama
});

export default [
  // js.configs.recommended'i doğrudan ekleme
  js.configs.recommended,

  // ESLintRC tarzı extends özelliğini taklit etme
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ),

  {
    // Özel kurallarınızı buraya ekleyin
    rules: {
      "react/react-in-jsx-scope": "off", // React 17 ve sonrası için JSX kapsamı kuralını kapatma
    },
    settings: {
      react: {
        version: "detect", // React versiyonunu otomatik olarak tespit eder
      },
    },
  },
];
