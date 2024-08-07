import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(req: NextRequest) {
  const users = await prisma.users.findMany();

  if (!users) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(users, { status: 200 });
}
