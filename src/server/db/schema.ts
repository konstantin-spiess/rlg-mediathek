import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const redemptionCodeTable = sqliteTable(
  'redemption_codes',
  {
    redemptionCodeId: integer('redemption_code_id').primaryKey(),
    code: text('code').notNull().unique(),
    userId: text('user_id'),
    redeemedAt: text('redeemed_at'),
    contentfulId: text('contentful_id'),
  },
  (table) => {
    return {
      userIdIdx: index('user_id_idx').on(table.userId),
    };
  }
);
