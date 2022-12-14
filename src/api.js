const API_URL = "https://dummyjson.com";

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const { users } = await response.json();
  return users;
};

export const getUsersById = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  const user = await response.json();
  return user;
};

export const login = (credentials) => {
  return fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  }).then((res) => res.json());
};
