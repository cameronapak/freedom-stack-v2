import type { AstroBkndConfig } from "bknd/adapter/astro";
import type { APIContext } from "astro";
import { registerLocalMediaAdapter } from "bknd/adapter/node";
import { boolean, em, entity, number, text } from "bknd/data";
import { secureRandomString } from "bknd/utils";

// since we're running in node, we can register the local media adapter
const local = registerLocalMediaAdapter();

const schema = em(
  {
    posts: entity("posts", {
      // "id" is automatically added
      title: text().required(),
      slug: text().required(),
      content: text(),
      views: number()
    }),
    comments: entity("comments", {
      content: text()
    })

    // relations and indices are defined separately.
    // the first argument are the helper functions, the second the entities.
  },
  ({ relation, index }, { posts, comments }) => {
    relation(comments).manyToOne(posts);
    // relation as well as index can be chained!
    index(posts).on(["title"]).on(["slug"], true);
  }
);

// register your schema to get automatic type completion
type Database = (typeof schema)["DB"];
declare module "bknd/core" {
  interface DB extends Database {}
}

export default {
  // we can use any libsql config, and if omitted, uses in-memory
  app: (ctx: APIContext) => ({
    connection: {
      url: process.env.DB_URL ?? "file:.astro/content.db"
    }
  }),
  // an initial config is only applied if the database is empty
  initialConfig: {
    data: schema.toJSON(),
    // we're enabling auth ...
    auth: {
      allow_register: true,
      enabled: true,
      jwt: {
        issuer: "bknd-astro-example",
        secret: secureRandomString(64)
      },
      roles: {
        admin: {
          implicit_allow: true,
        },
        default: {
          permissions: [
            "data.database.sync",
            "data.entity.create",
            "data.entity.delete",
            "data.entity.update",
            "data.entity.read",
            "media.file.delete",
            "media.file.read",
            "media.file.list",
            "media.file.upload",
          ],
          is_default: true,
        }
      }
    },
    // ... and media
    media: {
      enabled: true,
      adapter: local({
        path: "./public/temp/uploads"
      })
    }
  },
  options: {
    // the seed option is only executed if the database was empty
    seed: async (ctx) => {
      // create some entries
      await ctx.em.mutator("posts").insertMany([
        { title: "First post", slug: "first-post", content: "..." },
        { title: "Second post", slug: "second-post" }
      ]);
    }
  }
} as const satisfies AstroBkndConfig<APIContext>;
