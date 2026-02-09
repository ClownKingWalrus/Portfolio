import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"

// Apps role here is to handle routing
function App() {

  return (
    //handels the routers
   <BrowserRouter>
    <Routes> {/* Handels multiple Routes */}
      <Route path="/" element={<Home />}/> {/* Main front page no extra ends */}
      <Route path="*" element={<NotFound />}/> {/* anything Extra as of now IE http://google/SomthingElse */}
    </Routes>
   </BrowserRouter>
  )
}

export default App
