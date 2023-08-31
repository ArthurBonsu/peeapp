module.exports = {
  env: {
    browser: true,
    es6: true,
    //mocha: true,
    node: true,
  },

  plugins: ["node",  "prettier", "@typescript-eslint"],
  extends: [
    "next",
    "standard",
    "prettier",
    
  
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
    
  },
  rules: {
    "no-console": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "react/display-name":"off",
    "@next/next/link-passhref": "off",
    "spaced-comment":"off",
    "react/no-unescaped-entities": "off",
    "import/first": "off",
    "no-duplicate-imports": "off",
    "import/no-duplicates": "off",
    "no-const-assign": "off",
    "no-cond-assign":"off",
    "no-constant-condition":"off",
    "react-hooks/exhaustive-deps":"off",
     "camelcase": "off",

   // "@typescript-eslint/no-duplicate-imports": ["error"],
    "prettier/prettier": "off",
    "@typescript-eslint/no-var-requires": "off",
    "node/no-unsupported-features/es-syntax": [
      "off"
      //{ ignores: ["modules"] },
    ],
  },
 
  overrides: [
    {
      files: ["hardhat.config.js"],
      globals: { task: true },
    },
  ],
};
