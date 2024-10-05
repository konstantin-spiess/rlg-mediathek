import { db } from '@/server/db';
import { redemptionCodeTable } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export const runtime = 'edge';

export const getRedemptionCodes = async () => {
  'use server';

  return await db.select().from(redemptionCodeTable);
};

export const getRedemptionCodeByUserId = async (userId: string) => {
  'use server';

  return await db.select().from(redemptionCodeTable).where(eq(redemptionCodeTable.userId, userId));
};
