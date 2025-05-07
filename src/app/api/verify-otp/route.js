export async function POST(req) {
    try {
      const body = await req.json();
      const { mobile, otp } = body;
  
      if (!mobile || !otp) {
        return Response.json({ success: false, message: "Missing mobile or OTP" }, { status: 400 });
      }
  
      const apiKey = process.env.TWO_FACTOR_API_KEY; // Store your key in .env file
  
      const response = await fetch(`https://2factor.in/API/V1/${apiKey}/SMS/VERIFY3/${mobile}/${otp}`, {
        method: "GET",
      });
  
      const data = await response.json();
  
      if (data.Status === "Success") {
        return Response.json({ success: true });
      } else {
        return Response.json({ success: false, message: data.Details }, { status: 401 });
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
  }
  