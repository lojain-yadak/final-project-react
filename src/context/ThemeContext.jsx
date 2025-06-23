import { createContext, useState } from "react";
import theme from "../theme/index.js";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

export const ThemeContext = createContext(null);
const ThemeContextProvider = ({children})=>{
  const [mode,setMode]= useState('dark');
  const currentTheme = theme(mode);   

  const toggleTheme = ()=>{
      setMode((prev) => (prev == 'light' ? 'dark' : 'light'));
  }
  return <ThemeContext.Provider value={{mode,toggleTheme}}>     
    <ThemeProvider theme={currentTheme}>
    <CssBaseline />
    {children}  
  </ThemeProvider>
  </ThemeContext.Provider>
}
export default ThemeContextProvider;