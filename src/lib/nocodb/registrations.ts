import { NocoDbError, nocodbFetch, registrationsTableId } from "@/lib/nocodb/client";

export type RegistrationRecord = {
  Id: number | string;
  full_name: string;
  email: string;
  phone_number: string;
  country_code: string;
  city: string | null;
  user_role: string | null;
  slot_date: string | null;
  slot_time: string | null;
  course_name: string | null;
  CreatedAt?: string;
  created_at?: string;
};

export type CreateRegistrationInput = {
  full_name: string;
  email: string;
  phone_number: string;
  country_code: string;
  city: string;
  user_role: string;
  slot_date: string;
  slot_time: string;
  course_name: string;
};

export type UpdateRegistrationInput = {
  course_name?: string;
  slot_date?: string;
  slot_time?: string;
};

function asRecordId(id: number | string): string {
  return String(id);
}

export async function createRegistration(
  input: CreateRegistrationInput,
): Promise<RegistrationRecord> {
  const tableId = registrationsTableId();
  const created = await nocodbFetch<RegistrationRecord | RegistrationRecord[]>(
    `/api/v2/tables/${tableId}/records`,
    {
      method: "POST",
      body: JSON.stringify(input),
    },
  );

  const row = Array.isArray(created) ? created[0] : created;
  if (!row?.Id) {
    throw new Error("NocoDB did not return a registration Id.");
  }

  return row;
}

export async function getRegistrationById(
  id: string,
): Promise<RegistrationRecord | null> {
  const tableId = registrationsTableId();

  try {
    return await nocodbFetch<RegistrationRecord>(
      `/api/v2/tables/${tableId}/records/${encodeURIComponent(id)}`,
    );
  } catch (error) {
    if (error instanceof NocoDbError && error.status === 404) {
      return null;
    }
    throw error;
  }
}

export async function updateRegistration(
  id: string,
  patch: UpdateRegistrationInput,
): Promise<void> {
  const tableId = registrationsTableId();

  await nocodbFetch(`/api/v2/tables/${tableId}/records`, {
    method: "PATCH",
    body: JSON.stringify({
      Id: Number.isFinite(Number(id)) ? Number(id) : id,
      ...patch,
    }),
  });
}

export { asRecordId };
