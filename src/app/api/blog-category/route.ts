import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const blog_category = await prisma.blog_category.findMany({
      where: {
        b__c_status: "Active",
      },
      select: {
        b_c_id: true,
        b_c_name: true,
      },
    });

    return NextResponse.json({
      message: "Data fetched successfully",
      success: true,
      data: blog_category,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
