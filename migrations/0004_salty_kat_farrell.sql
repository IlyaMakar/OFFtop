DROP TABLE "trello_cards";--> statement-breakpoint
DROP TABLE "trello_lists";--> statement-breakpoint
ALTER TABLE "files" DROP CONSTRAINT "files_trello_card_id_trello_cards_id_fk";
--> statement-breakpoint
ALTER TABLE "folders" DROP CONSTRAINT "folders_trello_card_id_trello_cards_id_fk";
--> statement-breakpoint
ALTER TABLE "files" DROP COLUMN IF EXISTS "trello_card_id";--> statement-breakpoint
ALTER TABLE "folders" DROP COLUMN IF EXISTS "trello_card_id";