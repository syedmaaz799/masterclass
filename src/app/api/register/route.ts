import { NextResponse } from "next/server";
import { z } from "zod";
import { event } from "@/content/event";
import { isRegistrationConfigured } from "@/lib/env";
import { asRecordId, createRegistration } from "@/lib/nocodb/registrations";
import { registrationSchema } from "@/lib/validation";

const registerSchema = registrationSchema.extend({
  source: z.enum(["hero", "registration"]),
});

const courseName = `${event.brand} ${event.series} — ${event.title}`;

/** Free registration — saves the seat to NocoDB. */
export async function POST(request: Request) {
  if (!isRegistrationConfigured()) {
    return NextResponse.json(
      { error: "Registration system is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid registration." },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const phoneNumber = data.phoneNumber.replace(/\D/g, "");

  try {
    const registration = await createRegistration({
      full_name: data.name,
      email: data.email,
      phone_number: phoneNumber,
      country_code: data.phoneCountry,
      city: data.city,
      user_role: data.currentRole,
      slot_date: data.slotDate,
      slot_time: data.slotTime,
      course_name: courseName,
    });

    return NextResponse.json({
      ok: true,
      registrationId: asRecordId(registration.Id),
    });
  } catch (error) {
    console.error("NocoDB insert failed:", error);
    const isAuth =
      error instanceof Error &&
      (error.message.toLowerCase().includes("invalid token") ||
        error.message.toLowerCase().includes("authentication") ||
        ("status" in error && (error as { status?: number }).status === 401));

    return NextResponse.json(
      {
        error: isAuth
          ? "NocoDB API token is invalid. Create a new token in NocoDB and update NOCODB_API_TOKEN in .env.local."
          : "Could not save registration. Try again.",
      },
      { status: isAuth ? 401 : 500 },
    );
  }
}
