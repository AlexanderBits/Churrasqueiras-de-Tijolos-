"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const category = formData.get("category") as string;
  const imageUrls = (formData.get("imageUrls") as string).split(",").map(url => url.trim()).filter(Boolean);
  
  const metaTitle = formData.get("metaTitle") as string;
  const metaDescription = formData.get("metaDescription") as string;
  const keywords = formData.get("keywords") as string;

  await prisma.product.create({
    data: {
      name,
      slug,
      description,
      price,
      category,
      metaTitle,
      metaDescription,
      keywords,
      images: {
        create: imageUrls.map(url => ({ url })),
      },
    },
  });

  revalidatePath("/admin/dashboard");
  revalidatePath("/");
  redirect("/admin/dashboard");
}
