import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  returns: v.array(v.object({
    _id: v.id("messages"),
    _creationTime: v.number(),
    text: v.string(),
    author: v.string(),
  })),
  handler: async (ctx) => {
    return await ctx.db.query("messages").order("desc").take(100);
  },
});

export const send = mutation({
  args: { 
    text: v.string(),
    author: v.string(),
  },
  returns: v.id("messages"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("messages", {
      text: args.text,
      author: args.author,
    });
  },
}); 

export const deleteMessage = mutation({
  args: {
    id: v.id("messages"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
