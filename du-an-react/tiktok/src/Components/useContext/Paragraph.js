import { ThemeContext } from "./useContext";
import { useContext } from "react";

function Paragraph() {
  const theme = useContext(ThemeContext)  
  console.log(theme)
  return ( 
    <p className={theme}>
      Hahaha
    </p>
  );
}

export default Paragraph;