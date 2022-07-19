import { createContext, useState } from 'react';

export const UserSignUpContext = createContext();
UserSignUpContext.displayName = "UserSingUp";

export const UserSignUpProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <UserSignUpContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </UserSignUpContext.Provider>
  )
}