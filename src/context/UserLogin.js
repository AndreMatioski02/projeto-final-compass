import { createContext, useState } from 'react';

export const UserLoginContext = createContext();
UserLoginContext.displayName = "UserLogin";

export const UserLoginProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <UserLoginContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </UserLoginContext.Provider>
  )
}