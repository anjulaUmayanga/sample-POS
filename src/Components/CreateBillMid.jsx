import { Link } from "react-router-dom";
import Items from "./ItemsForBill";

export default function Middle({addToBill}){
    return(
        <div className="flex flex-col">
            
            <div className="flex flex-row w-full h-fit bg-blue-500">
            <div className="bg-gray-400 flex flex-row justify-center items-center px-4 w-20 h-20">
                    <div className="bg-blue-200 w-16 h-12 flex justify-center items-center">
                        <Link to={'/home'} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                        </Link>
                    </div>
                </div>

                <button className="bg-gray-400 border-l-2 border-gray-800 flex justify-center items-center px-4 w-20 h-20">
                    <div className="bg-yellow-500 w-16 h-12 flex justify-center items-center">
                        <Link to={'/'} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-left"><path d="M18 15h-6v4l-7-7 7-7v4h6v6z"/></svg>
                        </Link>
                    </div>
                </button>

                <div className="bg-gray-400 border-l-2 border-gray-800 flex justify-center items-center px-4 w-32 h-20">
                    <div className="bg-yellow-500 w-16 h-12 flex justify-center items-center">
                        <Link to={'/'} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-right"><path d="M6 9h6V5l7 7-7 7v-4H6V9z"/></svg>                        
                        </Link>
                    </div>
                </div>

                <div className="bg-gray-400 border-l-2 border-gray-800 flex justify-center items-center px-4 w-32 h-20">
                    <div className=" w-16 h-12 flex flex-col justify-center items-center">
                        <Link to={'/'} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>                        
                        </Link>
                    CATGRY
                    </div>
                </div>



                <div className="bg-gray-400 border-l-2 border-gray-800 flex justify-center items-center px-4 w-32 h-20">
                    <div className=" w-16 h-12 flex flex-col justify-center items-center">
                        <Link to={'/'} className="flex  flex-row text-blue-800" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>                        
                        </Link>
                        MULT
                    </div>
                </div>
                
                <div className="bg-gray-400 border-l-2 border-gray-800 flex justify-center items-center px-4 w-32 h-24">
                    <div className=" w-16 h-12 flex flex-col justify-center items-center">
                        <Link to={'/'} className=" text-red-800" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>                        </Link>
                        No ADD
                    </div>
                </div>
                <div className="bg-gray-400 border-l-2 border-gray-800 flex justify-center items-center px-4 w-32 h-24">
                    <div className=" w-16 h-12 flex flex-col justify-center items-center">
                        <Link to={'/'} className=" text-red-800" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>                        </Link>
                        XTRA
                    </div>
                </div>

            </div>
            <div className="flex flex-row mt-0  h-4 text-xs justify-center items-center text-white  bg-blue-500 w-[537px]">
                        Main Menu
            </div>
            <div className="flex text-white gap-[1px] flex-row w-full mt-[1px]">
                <div className="w-1/6 h-20 border border-black flex justify-center items-center bg-blue-500">
                    LUNCH MENU
                </div>
                <div className="w-1/6 h-20 flex border border-black justify-center items-center text-center bg-blue-500">
                    NO PICTURES SAMPLE
                </div>
                <div className="w-1/6 h-20 flex border border-black justify-center items-center text-center bg-blue-500">
                    DINNER MENU
                </div>
                <div className="w-1/6 h-20 border border-black flex justify-center items-center text-center bg-blue-500">
                    BREAKFIRST MENU
                </div>
                <div className="w-1/6 h-20 flex border border-black justify-center items-center text-center bg-blue-500">
                    DRINKS
                </div>
                <div className="w-1/6 h-20 flex border border-black justify-center items-center text-center bg-blue-500">
                    MUSTARD KETCHUP 
                </div>
            </div>
            <div className="flex flex-col">
                <div className="">
                    <Items addToBill={addToBill}/>
                </div>
            </div>
                
        </div>
    );
}
