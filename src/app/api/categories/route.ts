
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(request: NextRequest) {
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
    // user.verifyTokenExpiry = undefined;
    let updatedUser = await prisma.users.update({
      where: { id: user.id },
      data: {
        verify: true,
        verificationToken:
          user.userType === "USER" ? null : user.verificationToken,
      },
    });

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
      user: updatedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
