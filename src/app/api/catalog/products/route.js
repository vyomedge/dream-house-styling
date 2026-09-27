import { NextResponse } from "next/server";
import { getPublishedProducts } from "@/lib/catalog";

export async function GET() {
  try {
    const products = await getPublishedProducts();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Catalog products API error:", error);

    return NextResponse.json(
      { error: "Failed to load products" },
      { status: 500 },
    );
  }
}
