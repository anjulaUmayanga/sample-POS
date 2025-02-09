import { useEffect, useState } from "react";
function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    
    return `${month}/${date}/${year}`;
  }
export default function Header(){
    const [currentDate, setCurrentDate]= useState(getDate());
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    return(
        <div className="flex flex-row justify-between w-full h-fit text-blue-400 bg-gray-50 py-4">
            <div className="pl-8 text-xl">
                Test POS
            </div>
            <div className="text-gray-800">
                <p>{currentDate}</p>
                <p>{currentTime}</p>
            </div>
            <div className="pr-8 flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Jhone Doe
            </div>
        </div>
    );
}