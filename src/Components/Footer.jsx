export default function Footer(){
    return(
        <div className="bg-gray-700 mt-4 w-full h-fit ">
            <div className="flex w-full text-2xl justify-center items-center text-gray-100"> 
                Test POS
            </div>
            <div className=" w-full flex justify-center items-center text-2xl mt-4 text-gray-100"> 
                
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copyright"><circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/></svg>
            <span> All right reserved</span>
            </div>
        </div>
    );
}