import { NextResponse } from "next/server";
import { getPublishedCategories } from "@/lib/catalog";

export async function GET() {
  try {
    const categories = await getPublishedCategories();

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Catalog categories API error:", error);

    return NextResponse.json(
      { error: "Failed to load categories" },
      { status: 500 },
    );
  }
}
