-- CreateTable
CREATE TABLE `Cita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mascota` VARCHAR(191) NOT NULL,
    `propietario` VARCHAR(191) NOT NULL,
    `sintomas` VARCHAR(191) NOT NULL,
    `alta` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
