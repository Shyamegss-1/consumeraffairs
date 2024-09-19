import { prisma } from "../../../prisma/prisma";

export async function getPageMeta(slug: string) {
  // Fetch metadata from the database using Prisma
  return await prisma.inner_seo.findFirst({
    where: { page: slug },
  });
}
