
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Loginpage from "./pages/loginpage"
import Chatpage from "./pages/Chatpage"
import Signup from "./pages/Signup"
import './App.css'

function App() {
 
  return (
  <BrowserRouter>
  <Routes>

<Route path="/" element={<Loginpage />} />
<Route path="/Signup" element={<Signup />} />

<Route path="/chatpage" element={<Chatpage />} />

  </Routes>
  </BrowserRouter>

  );
}

export default App
