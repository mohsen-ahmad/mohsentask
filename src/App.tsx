import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {

  return (
    <div className="w-full min-h-screen flex flex-col ">
         <ToastContainer />
   <Header/>
   <Home/>
    </div>
  )
}

export default App
