export async function getCachedData(key) {
  const cached = localStorage.getItem(key);

  if (cached) {
    return JSON.parse(cached);
  }
}

export async function setCachedData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export async function removeCachedData(key) {
  localStorage.removeItem(key);
}
