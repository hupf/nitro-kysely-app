import { db } from "~/db/setup";

export async function findUsers(name?: string) {
  let query = db.selectFrom("users").selectAll();

  if (name) {
    query = query.where("name", "ilike", `%${name}%`);
  }

  return query.execute();
}

export async function findUserById(id: number) {
  const result = await db
    .selectFrom("users")
    .selectAll()
    .where("id", "=", id)
    .execute();
  return result[0] ?? null;
}
