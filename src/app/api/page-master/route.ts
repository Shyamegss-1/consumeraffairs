import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const pages = await prisma.pageMaster.findMany({
      where: {
        status: true,
      },
      select: {
        id: true,
        pageName: true,
      },
    });

    return NextResponse.json({
      message: "Data fetched successfully",
      success: true,
      data: pages,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
