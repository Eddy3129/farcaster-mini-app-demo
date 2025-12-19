import { createClient } from "@ponder/client";

const ponderUrl = process.env.NEXT_PUBLIC_PONDER_URL || "http://localhost:42069";

// Ensure no double slash and no missing slash
const baseUrl = ponderUrl.endsWith("/") ? ponderUrl.slice(0, -1) : ponderUrl;

export const ponderClient = createClient(`${baseUrl}/sql`);
