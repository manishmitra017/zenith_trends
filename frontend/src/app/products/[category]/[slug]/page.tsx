import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductDetailContent from "@/components/ProductDetailContent";
import {
  products,
  getProductBySlug,
  getProductsByCategory,
  getCategoryBySlug,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const product = getProductBySlug(slug);
  const category = getCategoryBySlug(categorySlug);

  if (!product || !category) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Product Not Found
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

  const relatedProducts = getProductsByCategory(categorySlug)
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  return (
    <ProductDetailContent
      product={product}
      category={category}
      categorySlug={categorySlug}
      relatedProducts={relatedProducts}
    />
  );
}
