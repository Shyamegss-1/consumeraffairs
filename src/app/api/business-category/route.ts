import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const category = await prisma.category.findMany({
      where: {
        status: true,
      },
      select: {
        cid: true,
        category_name: true,
      },
      orderBy: {
        category_name: "asc",
      },
    });

    return NextResponse.json({
      message: "Data fetched successfully",
      success: true,
      data: category,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
