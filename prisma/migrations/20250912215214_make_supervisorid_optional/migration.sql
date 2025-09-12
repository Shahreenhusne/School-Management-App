-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_supervisorID_fkey";

-- AlterTable
ALTER TABLE "public"."Class" ALTER COLUMN "supervisorID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_supervisorID_fkey" FOREIGN KEY ("supervisorID") REFERENCES "public"."Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
