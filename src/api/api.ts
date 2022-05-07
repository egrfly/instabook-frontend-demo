export async function getBooks() {
  // Like `response = requests.get(...)` in Python
  const response = await fetch('http://127.0.0.1:5000/books');
  // Like `return response.json()` in Python
  return await response.json();
}

export async function getUsers() {
  const response = await fetch('http://127.0.0.1:5000/users');
  return await response.json();
}
