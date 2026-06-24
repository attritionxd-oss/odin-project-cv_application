const cacheKey = "form_cache";

export async function getCachedData() {
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    return JSON.parse(cached);
  }
}

export async function setCachedData(data) {
  localStorage.setItem(cacheKey, JSON.stringify(data));
}

export async function removeCachedData() {
  localStorage.removeItem(cacheKey);
}
