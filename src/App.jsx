import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/home";
import Layout from "./Layout";
import CreateBill from "./Pages/CreateBill";

export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        
        <Route path="/" element={<LoginPage/>}/>
        <Route  path="/login" element={<LoginPage/>} />
        <Route path="/create-bill" element={<CreateBill/>}/>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<Home/>}/>
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}