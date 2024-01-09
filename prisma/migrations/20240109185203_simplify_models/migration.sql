/*
  Warnings:

  - You are about to drop the `_booktocart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_booktocart` DROP FOREIGN KEY `_BookToCart_A_fkey`;

-- DropForeignKey
ALTER TABLE `_booktocart` DROP FOREIGN KEY `_BookToCart_B_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_userId_fkey`;

-- DropTable
DROP TABLE `_booktocart`;

-- DropTable
DROP TABLE `cart`;

-- CreateTable
CREATE TABLE `_BookToUser` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BookToUser_AB_unique`(`A`, `B`),
    INDEX `_BookToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BookToUser` ADD CONSTRAINT `_BookToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BookToUser` ADD CONSTRAINT `_BookToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
