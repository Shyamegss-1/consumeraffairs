import { getListing } from "@/server-actions/getListing";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");

    // Check if domain is missing
    if (!domain) {
      return NextResponse.json({
        message: "",
        status: false,
        listing: null,
      });
    }

    const listing = await getListing(domain);
    return NextResponse.json({
      message: "",
      status: true,
      listing: listing.listing,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
