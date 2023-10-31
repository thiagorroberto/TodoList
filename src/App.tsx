import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/styles";
import { defaultTheme } from "./styles/themes/default";
import Tasks from "./pages/Tasks";



export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Tasks/>
    </ThemeProvider>
  )
}


