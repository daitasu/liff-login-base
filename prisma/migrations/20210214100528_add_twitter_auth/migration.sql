/*
  Warnings:

  - You are about to drop the column `accessToken` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `expiresIn` on the `Users` table. All the data in the column will be lost.
  - Added the required column `twitterId` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImage` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "accessToken",
DROP COLUMN "expiresIn",
ADD COLUMN     "twitterId" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT NOT NULL;
