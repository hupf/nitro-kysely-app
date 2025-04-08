# Nitro starter

Look at the [nitro quick start](https://nitro.unjs.io/guide#quick-start) to learn more how to get started.

## Setup

```
pnpm install
```

Start DB:

```
docker compose up
```

Migrate DB & seed data:

```
pnpm db:migrate
pnpm db:seed
```

Start server:

```
pnpm start
```

Visit:

- http://localhost:3000/users/
- http://localhost:3000/users/?filter_name=john
- http://localhost:3000/users/1
