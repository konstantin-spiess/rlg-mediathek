CREATE TABLE `redemption_codes` (
	`redemption_code_id` integer PRIMARY KEY NOT NULL,
	`code` text NOT NULL,
	`user_id` text,
	`redeemed_at` text,
	`contentful_id` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `redemption_codes_code_unique` ON `redemption_codes` (`code`);--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `redemption_codes` (`user_id`);