import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/dashboard"
import { Card } from "./components/Card"
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  
  // <div>
  
  //   <Card type="twitter" title='tw' link="https://x.com/Priyans65890984/status/1849522394521874486"/>
  //   <Card type="youtube" title='vid' link="https://www.youtube.com/watch?v=70If81K6R6w"/>
  // </div>
}

export default App
