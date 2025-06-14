import { Prisma, PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db =
  globalForPrisma.prisma || new PrismaClient()

export { Prisma }

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db