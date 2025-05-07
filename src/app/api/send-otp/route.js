import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { phoneNumber, otp } = body;

    const apiKey = process.env.TWO_FACTOR_API_KEY; // Store your API key in .env.local
    const template = "OTP1"; // Adjust if you have a different template name

    const response = await fetch(`https://2factor.in/API/V1/${apiKey}/SMS/${phoneNumber}/${otp}/${template}`, {
      method: "GET",
    });

    const data = await response.json();

    if (data.Status === "Success") {
      return NextResponse.json({ success: true, message: "OTP sent successfully", data });
    } else {
      return NextResponse.json({ success: false, message: "Failed to send OTP", data });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error sending OTP", error: error.message }, { status: 500 });
  }
}
