/*
  Warnings:

  - You are about to drop the column `cartId` on the `book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_cartId_fkey`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `cartId`;

-- CreateTable
CREATE TABLE `_BookToCart` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BookToCart_AB_unique`(`A`, `B`),
    INDEX `_BookToCart_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BookToCart` ADD CONSTRAINT `_BookToCart_A_fkey` FOREIGN KEY (`A`) REFERENCES `Book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BookToCart` ADD CONSTRAINT `_BookToCart_B_fkey` FOREIGN KEY (`B`) REFERENCES `Cart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
