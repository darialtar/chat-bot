import { router } from "../trpc";
import { exampleRouter } from "./example";
import { messagingRouter } from "./messaging";

export const appRouter = router({
  example: exampleRouter,
  messaging: messagingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
