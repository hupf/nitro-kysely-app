import type { Kysely } from "kysely";
import { DB } from "../types";

export async function seed(db: Kysely<DB>): Promise<void> {
  await db
    .insertInto("users")
    .values([
      {
        name: "John Doe",
        age: 42,
        email: "john.doe@example.com",
      },
      {
        name: "Jane Doe",
        age: 44,
        email: "jane.doe@example.com",
      },
    ])
    .execute();
}
