/*
  Warnings:

  - You are about to alter the column `genre` on the `book` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `book` MODIFY `genre` INTEGER NOT NULL;
