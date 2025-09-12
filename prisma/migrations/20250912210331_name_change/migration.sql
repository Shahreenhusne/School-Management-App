/*
  Warnings:

  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Teacher" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "img" TEXT,
ADD COLUMN     "sex" "public"."UserSex" NOT NULL;
