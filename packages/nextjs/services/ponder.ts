import { createClient } from "@ponder/client";

const rawPonderUrl = process.env.NEXT_PUBLIC_PONDER_URL || "http://localhost:42069";
const ponderUrl = rawPonderUrl.endsWith("/") ? rawPonderUrl.slice(0, -1) : rawPonderUrl;

export const ponderClient = createClient(`${ponderUrl}/sql`);
