import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const messagingRouter = router({
  message: publicProcedure
    .input(z.object({
      // TODO: Change string to enum (like ['freeQuest', 'bearQuest'...])
      quest: z.string(),
      accessCode: z.string(),
      text: z.string(),
    }))
    .query(async ({ input, ctx }) => {
      await ctx.prisma.accessCode.create({ data: { code: input.text }})
      return ctx.prisma.accessCode.findMany();
    }),
});
