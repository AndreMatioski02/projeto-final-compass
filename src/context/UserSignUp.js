import { createContext, useState } from 'react';

export const UserSignUpContext = createContext();
UserSignUpContext.displayName = "UserSingUp";

export const UserSignUpProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [errorActive, setErrorActive] = useState(false);
  const [minCharacters, setMinCharacters] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  return (
    <UserSignUpContext.Provider value={{ 
      email, 
      setEmail,
      emailCorrect,
      setEmailCorrect, 
      password, 
      setPassword,
      passwordCorrect,
      setPasswordCorrect,
      minCharacters,
      setMinCharacters,      
      lowerCase,       
      setLowerCase,      
      upperCase,       
      setUpperCase,
      number,
      setNumber,
      errorActive,
      setErrorActive }}>
      {children}
    </UserSignUpContext.Provider>
  )
}