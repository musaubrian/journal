import { nanoid } from "nanoid";
import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

const removeTag = (toRemove: string): string => {
  return toRemove.replace("#", "").toLowerCase();
};

export const journalRouter = createTRPCRouter({
  new: privateProcedure
    .input(
      z.object({
        title: z.string(),
        tag: z.string(),
        content: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.entry.create({
        data: {
          id: `note_${nanoid(12)}`,
          userId: ctx.userID,
          title: input.title,
          content: input.content,
          tag: removeTag(input.tag),
        },
      });
    }),
  getUsersEntries: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany({
      where: { userId: ctx.userID },
      orderBy: [{ createdAt: "desc" }],
    });
  }),
  deleteEntry: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.entry.delete({
        where: { id: input.id },
      });
    }),
});
