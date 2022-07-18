import { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = "Usuário";

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <UserContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </UserContext.Provider>
  )
}