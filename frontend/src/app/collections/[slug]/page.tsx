import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CollectionPageContent from "@/components/CollectionPageContent";
import { collections, getCollectionBySlug, getProductsByCollection } from "@/data/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  const collectionProducts = getProductsByCollection(slug);

  if (!collection) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Collection Not Found</h1>
          <Link
            href="/collections"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED]"
          >
            Back to Collections
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <CollectionPageContent
      collection={collection}
      products={collectionProducts}
    />
  );
}
