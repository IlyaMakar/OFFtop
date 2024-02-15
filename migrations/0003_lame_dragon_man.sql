CREATE TABLE IF NOT EXISTS "trello_cards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"due_date" timestamp with time zone,
	"labels" text,
	"completed" boolean DEFAULT false,
	"attachment_urls" text,
	"assigned_to" uuid,
	"list_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trello_lists" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"workspace_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "files" ADD COLUMN "trello_card_id" uuid;--> statement-breakpoint
ALTER TABLE "folders" ADD COLUMN "trello_card_id" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files" ADD CONSTRAINT "files_trello_card_id_trello_cards_id_fk" FOREIGN KEY ("trello_card_id") REFERENCES "trello_cards"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "folders" ADD CONSTRAINT "folders_trello_card_id_trello_cards_id_fk" FOREIGN KEY ("trello_card_id") REFERENCES "trello_cards"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trello_cards" ADD CONSTRAINT "trello_cards_assigned_to_users_id_fk" FOREIGN KEY ("assigned_to") REFERENCES "users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trello_cards" ADD CONSTRAINT "trello_cards_list_id_trello_lists_id_fk" FOREIGN KEY ("list_id") REFERENCES "trello_lists"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trello_lists" ADD CONSTRAINT "trello_lists_workspace_id_workspaces_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
