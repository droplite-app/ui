/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    API_DOMAIN: string;
    NODE_ENV: "development" | "production";
  }
}
