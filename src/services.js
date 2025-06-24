const API = "http://localhost:4000";

export async function createUser(data) {
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Помилка реєстрації");
  }

  return res.json();
}

export async function login(data) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Невірні дані");
  }

  return res.json();
}

export async function getCourses() {
  const res = await fetch(`${API}/courses`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("Помилка завантаження курсів");
  }
  return res.json();
}

export async function getAuthors() {
  const res = await fetch(`${API}/authors`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("Помилка завантаження авторів");
  }
  return res.json();
}
