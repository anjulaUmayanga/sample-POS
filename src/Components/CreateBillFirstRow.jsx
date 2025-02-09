export default function FirstRow(){
    return(
        <div className="flex w-full flex-col"> 
                <div className="bg-black flex-row pr-8 pl-4 justify-between p-2 w-full text-green-400 flex  h-20">
                    <div className=" flex text-lg flex-col mr-4">
                        Sub Total
                        <span>20.5</span>
                    </div>
                    <div className="flex flex-col text-white px-3 bg-gray-500 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-platter"><path d="M12 3V2"/><path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"/><path d="M2 14h12a2 2 0 0 1 0 4h-2"/><path d="M4 10h16"/><path d="M5 10a7 7 0 0 1 14 0"/><path d="M5 14v6a1 1 0 0 1-1 1H2"/></svg>
                        <span>
                        <span className="text-black">Cust Points:</span>
                        <span className="text-black"> 08</span>
                        </span>
                    </div>
                </div>
                <div className="w-full bg-gray-600 h-full   ">
                    <div className="w-full bg-yellow-500  flex justify-center text-center">
                        TAKE OUT
                    </div>
                    <div className="mr-6 ml-4  h-4 bg-white">
                    </div>
                    <div className="w-full flex h-16 bg-gray-500">
                        <div className="w-1/4 m-1 flex flex-col justify-center items-center bg-gray-300 ">
                                <div className="bg-yellow-400 w-1/2 h-1/2 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-up"><path d="M9 18v-6H5l7-7 7 7h-4v6H9z"/></svg>
                                </div>
                                <span className="font-semibold">F-11</span>
                        </div>
                        <div className="w-1/4 m-1  flex flex-col justify-center items-center bg-gray-300 ">
                                <div className="bg-yellow-400 w-1/2 h-1/2 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down"><path d="M15 6v6h4l-7 7-7-7h4V6h6z"/></svg>                                
                                </div>
                               <span className="font-semibold">F-12</span>
                        </div>
                        <div className="w-2/4 m-1 flex flex-col justify-center items-center bg-gray-300 h-30">
                                <div className="w-1/2 h-1/2 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-collapse"><path d="m3 10 2.5-2.5L3 5"/><path d="m3 19 2.5-2.5L3 14"/><path d="M10 6h11"/><path d="M10 12h11"/><path d="M10 18h11"/></svg>                                
                                </div>
                                <span className="text-blue-700 font-semibold">F2 - ITEMS</span>
                        </div>
                        
                    </div>
                    <div className="w-full flex flex-row h-52">
                           <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-200 ">
                                        <th className="w-2/4 px-4 py-2 text-left border border-gray-300">DESCRIPTION</th>
                                        <th className="w-1/4 px-4 py-2 text-center border border-gray-300">QTY</th>
                                        <th className="w-1/4 px-4 py-2 text-center border border-gray-300">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b text-start ">
                                        <td className="px-4 py-1 text-left">abnchgvcghjvhjgbkjhlikj;oklk</td>
                                        <td className="px-4 py-1  text-center bg-green-700">1</td>
                                        <td className="px-4 py-1  text-center">15</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-1 text-left">abnchgvcghjvhjgbkjhlikj;oklk</td>
                                        <td className="px-4 py-1  text-center bg-green-700">1</td>
                                        <td className="px-4 py-1  text-center">15</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div> 

                    <div className="flex w-full flex-col ">
                        <div className="flex w-full flex-row">
                            <div className="bg-gray-400 shadow-md shadow-gray-900 w-1/3 h-14 m-1 flex justify-center items-center ">
                                GFT
                            </div>
                            <div className="bg-gray-400 shadow-md shadow-gray-900 w-1/3 m-1 flex justify-center items-center ">
                                HLD
                            </div>
                            <div className="bg-gray-400 shadow-md shadow-gray-900 w-1/3 m-1 flex justify-center items-center ">
                                D-IN
                            </div>
                        </div>

                        <div className="flex w-full flex-row">
                            <div className="bg-gray-400 shadow-md shadow-gray-900 w-1/3 h-14 m-1 flex justify-center items-center ">
                                DISC
                            </div>
                            <div className="bg-gray-400 shadow-md shadow-gray-900 w-1/3 m-1 flex justify-center items-center ">
                                CPN
                            </div>
                            <div className="bg-gray-400 shadow-md shadow-gray-900 w-1/3 m-1 flex justify-center items-center ">
                                TCKTS
                            </div>
                        </div>

                        <div className="flex w-full flex-row">
                            <div className="bg-gray-400 shadow-md shadow-gray-900 w-1/3 h-14 m-1 flex justify-center items-center ">
                                TIPS
                            </div>
                            <div className="bg-gray-400 shadow-md shadow-gray-900 w-1/3 m-1 flex justify-center items-center ">
                                LOTTO
                            </div>
                            <div className="bg-gray-400 shadow-md shadow-gray-900 w-1/3 m-1 flex justify-center items-center ">
                               DWR
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    );
}