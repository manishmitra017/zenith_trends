import { NextResponse } from "next/server";

// Local dev endpoint — mirrors the Lambda contract
// In production, NEXT_PUBLIC_QUOTE_API_URL points to API Gateway instead
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, company, phone, email, remarks, products } = body;

    if (!email || !firstName || !lastName || !company || !phone || !products?.length) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log to terminal so you can see it working
    console.log("\n════════════════════════════════════════");
    console.log("  NEW QUOTE REQUEST (local dev)");
    console.log("════════════════════════════════════════");
    console.log(`  Name:    ${firstName} ${lastName}`);
    console.log(`  Company: ${company}`);
    console.log(`  Phone:   ${phone}`);
    console.log(`  Email:   ${email}`);
    if (remarks) console.log(`  Remarks: ${remarks}`);
    console.log("  ──────────────────────────────────────");
    console.log("  Products:");
    for (const p of products) {
      console.log(`    • ${p.name} (${p.category}) ×${p.quantity}`);
    }
    console.log("════════════════════════════════════════\n");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
