export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export const mockUsers: Array<User & { password: string }> = [
  {
    id: "1",
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
  },
  {
    id: "2",
    email: "user@example.com",
    password: "user123",
    name: "Regular User",
    role: "user",
  },
  {
    id: "3",
    email: "demo@example.com",
    password: "demo123",
    name: "Demo User",
    role: "user",
  },
];

export const validateCredentials = (
  email: string,
  password: string
): User | null => {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );
  
  if (user) {
    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  
  return null;
};
