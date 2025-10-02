
// import { BrowserRouter, Routes , Route} from 'react-router-dom'
// import Loginpage from "./pages/loginpage"
// import Chatpage from "./pages/Chatpage"
// import Signup from "./pages/Signup"
// import { useAuth } from './hooks/useAuth';
// import './App.css'
// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = useAuth();
  

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
  
//   return children;
// };
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
        
//         {/* Protect the main chat route */}
//         <Route 
//           path="/" 
//           element={
//             <ProtectedRoute>
//               <ChatPage />
//             </ProtectedRoute>
//           } 
//         />
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes , Route, Navigate} from 'react-router-dom'
import Loginpage from "./pages/Loginpage"
import Chatpage from "./pages/Chatpage"
import Signup from "./pages/Signup"
import { useAuth } from './hooks/useAuth';
import './App.css'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  
  if (!isAuthenticated) {
    // Navigate needs to be imported: { BrowserRouter, Routes, Route, Navigate}
    return <Navigate to="/login" replace />; 
  }
  
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* FIX 1: Change LoginPage to Loginpage */}
        <Route path="/login" element={<Loginpage />} />
        
        {/* FIX 2: Change SignupPage to Signup */}
        <Route path="/signup" element={<Signup />} />
        
        {/* Protect the main chat route */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              {/* FIX 3: Change ChatPage to Chatpage */}
              <Chatpage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;