import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const journalRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany();
  }),
});
