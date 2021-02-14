/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[twitterId]` on the table `Users`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users.twitterId_unique" ON "Users"("twitterId");
