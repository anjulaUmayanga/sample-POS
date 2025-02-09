import { Link } from "react-router-dom";
import FirstRow from "../Components/CreateBillFirstRow";
import Middle from "../Components/CreateBillMid";

export default function CreateBill(){
    return(
        <div className="flex flex-row w-full">
            <div className="flex " >
                <FirstRow/>
            </div>
            <div >
                <Middle/>
            </div>


            <div>
                aj
            </div>
        </div>
    );
}