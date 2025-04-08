import {
  DummyDriver,
  PostgresAdapter,
  PostgresIntrospector,
  PostgresQueryCompiler,
} from "kysely";
import { defineConfig } from "kysely-ctl";
import { db } from "../src/db/setup";

export default defineConfig({
  kysely: db,
  migrations: {
    migrationFolder: "src/db/migrations",
  },
  seeds: {
    seedFolder: "src/db/seeds",
  },
});
