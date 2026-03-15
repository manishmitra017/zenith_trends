import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryPageContent from "@/components/CategoryPageContent";
import {
  categories,
  getProductsByCategory,
  getCategoryBySlug,
} from "@/data/products";

export function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const products = getProductsByCategory(categorySlug);

  if (!category) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Category Not Found
          </h1>
          <Link
            href="/products"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#4DB8A4]"
          >
            Back to Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <CategoryPageContent
      category={category}
      categorySlug={categorySlug}
      products={products}
    />
  );
}
