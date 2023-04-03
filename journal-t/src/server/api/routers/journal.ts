import { nanoid } from "nanoid";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

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
      const entries = await ctx.prisma.entry.create({
        data: {
          id: nanoid(),
          userId: ctx.userID,
          title: input.title,
          content: input.content,
          tag: input.tag,
        },
      });
      return entries;
    }),
  getUsersEntries: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany({
      where: { userId: ctx.userID },
      orderBy: [{ createdAt: "desc" }],
    });
  }),
});
