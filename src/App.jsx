
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Loginpage from "./pages/loginpage"
import Chatpage from "./pages/Chatpage"
import './App.css'

function App() {
 
  return (
  <BrowserRouter>
  <Routes>

<Route path="/login" element={<Loginpage />} />

<Route path="/" element={<Chatpage />} />

  </Routes>
  </BrowserRouter>

  );
}

export default App
