const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchData(endpoint) {
  try {
    const res = await fetch(`${API_URL}/api/${endpoint}`, { cache: 'no-store' });
    if (!res.ok) return endpoint === 'about' ? {} : [];
    return res.json();
  } catch (err) {
    console.error(`Failed to fetch ${endpoint}:`, err.message);
    return endpoint === 'about' ? {} : [];
  }
}

export async function submitContact(payload) {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.json();
}