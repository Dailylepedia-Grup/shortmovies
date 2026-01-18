
const memory = new Map()

export function getCache(key, ttl = 300000) {
  if (memory.has(key)) return memory.get(key)
  const raw = localStorage.getItem(key)
  if (!raw) return null
  const { data, time } = JSON.parse(raw)
  if (Date.now() - time > ttl) return null
  memory.set(key, data)
  return data
}

export function setCache(key, data) {
  memory.set(key, data)
  localStorage.setItem(key, JSON.stringify({ data, time: Date.now() }))
}
