// Sabhi cities aur unke aliases yahan define karo
// Future mein sirf yahan add karna hoga, kuch aur nahi

export const CITY_MAP = {
  // Delhi variations
  "new delhi": "delhi",
  delhi: "delhi",
  "north delhi": "delhi",
  "south delhi": "delhi",
  "east delhi": "delhi",
  "west delhi": "delhi",
  "central delhi": "delhi",

  // Noida variations
  noida: "noida",
  "greater noida": "noida",

  // Gurgaon variations
  gurgaon: "gurgaon",
  gurugram: "gurgaon",
  DelhiNcr: "delhi-ncr",
  // Ghaziabad
  ghaziabad: "ghaziabad",
};

/**
 * Nominatim response se city slug nikalta hai
 * Returns: "delhi" | "noida" | "gurgaon" | null
 */
export function detectCitySlug(addressData) {
  // Nominatim ke possible fields (priority order mein)
  const candidates = [
    addressData?.city,
    addressData?.town,
    addressData?.county,
    addressData?.state_district,
    addressData?.suburb,
    addressData?.village,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    const normalized = candidate.toLowerCase().trim();

    // Exact match
    if (CITY_MAP[normalized]) return CITY_MAP[normalized];

    // Partial match (e.g. "New Delhi District" → "delhi")
    for (const [key, slug] of Object.entries(CITY_MAP)) {
      if (normalized.includes(key) || key.includes(normalized)) {
        return slug;
      }
    }
  }

  return null; // Service area mein nahi hai
}
