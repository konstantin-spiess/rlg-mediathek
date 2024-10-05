import { db } from '@/server/db';
import { redemptionCodeTable } from '@/server/db/schema';

export async function GET() {
  const codes = await db.select().from(redemptionCodeTable);
  return new Response(JSON.stringify(codes));
}
