/// <reference types="vite/client" />

interface ImportMetaEnv {
  // readonly VITE_xKEYx: string; // will be exposed in the client bundle
  // readonly xKEYx: string; // will not be exposed in the client
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
