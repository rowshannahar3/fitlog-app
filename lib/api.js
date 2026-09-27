const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";
const FALLBACK_URL = "https://api.api-store.workers.dev/api/fitlog";

async function fetchJson(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

// Tries the primary API first, falls back to the alternative API if it fails.
export async function getAllWorkouts() {
  try {
    return await fetchJson(BASE_URL);
  } catch (err) {
    return await fetchJson(FALLBACK_URL);
  }
}

export async function getWorkoutById(id) {
  try {
    return await fetchJson(`${BASE_URL}/${id}`);
  } catch (err) {
    return await fetchJson(`${FALLBACK_URL}/${id}`);
  }
}
