import type { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  env: { DENO_DIR: "deno_modules" },
  unstable: true,
  lock: "deno.lock",
  importmap: "deno-imports.json",
  scripts: {
    install: {
      cmd: "deno cache src/app.ts --lock-write",
      desc: "Reload and reinstall dependencies",
      lock: "deno.lock",
      watch: false,
    },
    reinstall: {
      cmd: "deno cache src/app.ts --lock-write --reload",
      desc: "Reload and reinstall dependencies",
      lock: "deno.lock",
      watch: false,
    },
    start: {
      cmd: "src/app.ts",
      desc: "Run main app",
      allow: ["net", "env", "read"],
      lock: "deno.lock",
    },
  },
  watcher: {
    match: ["src/**/*"],
  },
};

export default config;
