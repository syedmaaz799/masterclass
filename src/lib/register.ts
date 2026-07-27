/**
 * Client helper for free masterclass registration (no payment).
 */

export type RegisterResponse = {
  ok: boolean;
  registrationId: string;
};

export async function submitRegistration(
  registration: Record<string, unknown> & { source: "hero" | "registration" },
): Promise<RegisterResponse> {
  const res = await fetch("/api/register/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registration),
  });

  const data = (await res.json()) as RegisterResponse & { error?: string };

  if (!res.ok) {
    throw new Error(data.error ?? "Could not complete registration.");
  }

  return data;
}
