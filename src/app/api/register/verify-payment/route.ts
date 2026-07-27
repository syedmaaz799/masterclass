import { NextResponse } from "next/server";

/**
 * Payment verification is disabled — the masterclass is free.
 * Kept so old clients receive a clear response instead of a 404.
 */
export async function POST() {
  return NextResponse.json(
    { error: "Payment is not required. This masterclass is free." },
    { status: 410 },
  );
}
