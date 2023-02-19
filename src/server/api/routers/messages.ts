import { type Message } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const messagesRouter = createTRPCRouter({
  send: publicProcedure
    .input(z.object({ text: z.string(), code: z.string(), quest: z.string() }))
    .query(async ({ ctx, input }) => {
      await ctx.prisma.message.create({
        data: {
          author: 'user',
          code: input.code,
          quest: input.quest,
          text: input.text,
        },
      });
      const answer = await ctx.prisma.message.create({
        data: {
          author: 'system',
          code: input.code,
          quest: input.quest,
          text: `Answer on "${input.text}"`,
        },
      });
      return answer;
    }),
  getByCodeAndQuest: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.message.findMany();
  }),
  getByCodeAndQuest1: publicProcedure.query(() => {
    const res: Message[] = [
      {
        author: 'system',
        code: 'code',
        createdAt: new Date(),
        id: '1',
        quest: 'test',
        text: 'text',
        updatedAt: new Date(),
      },
    ];
    return res;
  }),
  getByCodeAndQuest2: publicProcedure.query(() => {
    const res: Message[] = [];
    return res;
  }),
});
