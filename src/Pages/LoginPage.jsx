import cover from '../assets/cover.jpg'
export default function LoginPage(){
    return(
        <section className="flex  flex-raw bg-gray-50  w-full h-screen">
            <div className="w-1/2 pl-16 sm:pl-4 xl:pl-16 lg:pl-12 flex flex-col justify-center items-center">
            <span className='text-3xl text-blue-500 mt-4'>Login</span>
                <div className="flex  w-full">
                    
                    <form action="">
                        <input type="text" placeholder="Enter User Name" />
                        <input type="password" placeholder="Enter Password" />
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