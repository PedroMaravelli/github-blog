
import { UserProvider } from "./contexts/UserContext"
import { GlobalStyle } from "./globalStyle"
import { Routers } from "./routes/Routers"


function App() {

  return (
    <UserProvider>
      <GlobalStyle></GlobalStyle>
      <Routers></Routers>
    </UserProvider>
  )
}

export default App
