/*
  Warnings:

  - Made the column `slug` on table `book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `book` MODIFY `slug` VARCHAR(191) NOT NULL;
