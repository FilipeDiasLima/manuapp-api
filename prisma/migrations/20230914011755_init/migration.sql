-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "password" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "avatar" TEXT,
    "cep" TEXT,
    "address" TEXT,
    "houseNumber" TEXT,
    "district" TEXT,
    "complement" TEXT,
    "city" TEXT,
    "country" TEXT,
    "state" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Technician" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "creaCFT" TEXT,
    "status" TEXT,
    "cep" TEXT,
    "address" TEXT,
    "houseNumber" TEXT,
    "district" TEXT,
    "complement" TEXT,
    "city" TEXT,
    "country" TEXT,
    "state" TEXT,
    "avatar" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL,
    "pmocId" TEXT,
    CONSTRAINT "Technician_pmocId_fkey" FOREIGN KEY ("pmocId") REFERENCES "Pmoc" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "mainTechnician" TEXT,
    "cep" TEXT,
    "address" TEXT,
    "houseNumber" TEXT,
    "district" TEXT,
    "complement" TEXT,
    "city" TEXT,
    "country" TEXT,
    "state" TEXT,
    "avatar" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Pmoc" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "art" TEXT NOT NULL,
    "mainTechnician" TEXT,
    "creaCFT" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL,
    CONSTRAINT "Pmoc_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MaintenanceTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL,
    "pmocModelId" TEXT,
    CONSTRAINT "MaintenanceTask_pmocModelId_fkey" FOREIGN KEY ("pmocModelId") REFERENCES "PmocModel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PmocModel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Technician_email_key" ON "Technician"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
