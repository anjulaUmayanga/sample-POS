import Header from "../Components/Header";
import LeftBar from "../Components/LeftBar";

export default function Home(){
    return(
        <section className="flex  w-full  ">
            <div className="flex  w-1/6 ">
                <LeftBar/> 
            </div>
            <div className=" ml-8  h-fit mt-4 ">
                <div className="">
                    <span className="text-3xl text-red-400">Expireing Items</span>
                </div>
            </div>
        </section>
    );
}