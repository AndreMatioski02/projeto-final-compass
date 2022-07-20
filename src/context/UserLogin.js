import { createContext, useState } from 'react';

export const UserLoginContext = createContext();
UserLoginContext.displayName = "UserLogin";

export const UserLoginProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [errorActive, setErrorActive] = useState(false);
  return (
    <UserLoginContext.Provider value={{ 
      email, 
      setEmail,
      emailCorrect,
      setEmailCorrect, 
      password, 
      setPassword,
      passwordCorrect,
      setPasswordCorrect,
      errorActive,
      setErrorActive
    }}>
      {children}
    </UserLoginContext.Provider>
  )
}