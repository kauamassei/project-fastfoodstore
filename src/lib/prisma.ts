/* eslint-disable no-var */

import { PrismaClient } from "@prisma/client";

// Declaração correta para adicionar cachedPrisma ao globalThis
declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;

// Verifica se estamos no ambiente de produção
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
