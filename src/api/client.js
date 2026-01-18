
export async function apiFetch(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error('API Error')
  return res.json()
}
