import { useEffect, useState } from "react";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    
    return `${month}/${date}/${year}`;
  }
export default function CreateBillHeader(){
    const [currentDate, setCurrentDate]= useState(getDate());
        const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentTime(new Date().toLocaleTimeString());
            }, 1000);
    
            return () => clearInterval(interval); 
        }, []);
    
    return(
        <div className="flex w-full justify-between flex-row bg-gradient-to-r from-blue-500 to-green-200">
            <div className="w-1/2 ml-8 text-white">
                ABC Food Corner
            </div>
            <div className="w-1/2 ">
            
            <p>{currentTime}</p>
            </div>
            <div className="w-1/2 flex justify-end pr-12">
                Jhone Doe
            </div>
        </div>
    );
}