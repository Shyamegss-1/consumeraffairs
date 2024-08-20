import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    const user = await prisma.users.findFirst({
      where: {
        verificationToken: token,
      },
      //   verifyToken: token,
      //   verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
    console.log(user);

    user.verify = true;
    user.verificationToken = null;
    // user.verifyTokenExpiry = undefined;
    let updatedUser = await prisma.users.update({
      where: { id: user.id },
      data: {
        verify: true,
        verificationToken: null,
      },
    });

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
