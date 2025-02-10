import { useEffect, useState } from 'react';
import cover from '../assets/cover.jpg'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export default function LoginPage(){
    const [userData , setUserData] = useState(null);
    const [userName, setUserName] = useState("");
    const [password , setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        axios.get("https://dummyjson.com/c/125b-a8c2-4d1a-85f9")
            .then((response)=>{
                setUserData(response.data);
            })
            .catch((error)=>{
                console.error("Error while Fetch data",error);
            })
    },[]);

    function handleLogin(ev){
        ev.preventDefault();
        if (userData && userData.name === userName && userData.password === password) {
            setRedirect(true);
            setErrorMessage("");
          } else {
            setErrorMessage("Invalid username or password");
            setRedirect(false);
          }
    }
    if(redirect){
        return(<Navigate to={'/home'}/>)
    }
    return(
        <section className="flex  flex-raw bg-gray-50  w-full h-screen">
            <div className="w-1/2 pl-16 sm:pl-4 xl:pl-16 lg:pl-12 flex flex-col justify-center items-center">
            <span className='text-3xl text-blue-500 mt-4'>Login</span>
                <div className="flex  w-full">
                    
                    <form onSubmit={handleLogin}>
                        <input type="text" value={userName} onChange={ev=>setUserName(ev.target.value)} placeholder="Enter User Name" />
                        <input type="password" placeholder="Enter Password" value={password} onChange={ev=>setPassword(ev.target.value)} />
                        <button className="bg-blue-400 w-full h-12 rounded-2xl mt-4 text-xl text-white">Log</button>
                    </form>
                </div>
            </div>
            <div className="bg-blue-500 w-1/2 flex justify-center items-center lg:w-1/2 xl:w-1/2 ">
                <div className="flex flex-col justify-center items-center ">
                    <img src={cover} alt="cover" className="w-1/2 h-1/2 rounded-3xl overflow-hidden border border-blue-200"/>
                    <span className="text-blue-200 mt-8 text-3xl">TestPos</span>
                </div>
            </div>
        </section>
    );
}