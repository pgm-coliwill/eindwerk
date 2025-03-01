import { NextRequest, NextResponse } from "next/server";
import Auth from "@aws-amplify/auth";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return NextResponse.redirect("/login");
  }

  try {
    await Auth.federatedSignIn({ provider: "Cognito" });
    return NextResponse.redirect("/dashboard"); // Redirect after login
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.redirect("/login"); // Redirect on error
  }
}
