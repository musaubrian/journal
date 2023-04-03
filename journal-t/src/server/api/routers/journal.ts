import { nanoid } from "nanoid";
import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const journalRouter = createTRPCRouter({
  new: privateProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        tag: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const entries = await ctx.prisma.entry.create({
        data: {
          id: nanoid(),
          userId: ctx.currentUser.id,
          title: input.title,
          content: input.content,
          tag: input.tag,
        },
      });

      return entries;
    }),
  getUsersEntries: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany({
      where: { userId: ctx.currentUser.id },
    });
  }),
});
