export type DemoRequestPayload = {
  name: string;
  email: string;
  phone?: string;
  property: string;
  rooms?: string;
  message?: string;
  /** Honeypot — must stay empty */
  website?: string;
};

export function parseDemoPayload(body: unknown): DemoRequestPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const property = typeof b.property === "string" ? b.property.trim() : "";
  if (!name || !email || !property) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

  return {
    name,
    email,
    property,
    phone: typeof b.phone === "string" ? b.phone.trim() : undefined,
    rooms: typeof b.rooms === "string" ? b.rooms.trim() : undefined,
    message: typeof b.message === "string" ? b.message.trim() : undefined,
    website: typeof b.website === "string" ? b.website.trim() : undefined,
  };
}
