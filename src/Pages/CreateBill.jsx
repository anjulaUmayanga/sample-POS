// import { Link } from "react-router-dom";
// import FirstRow from "../Components/CreateBillFirstRow";
// import Middle from "../Components/CreateBillMid";
// import { useState } from "react";

// export default function CreateBill(){
//     const [selectedItems, setSelectedItems] = useState([]);
//     const addToBill = (foodName, price) => {
//         setSelectedItems((prevItems) => {
//             const existingItem = prevItems.find(item => item.name === foodName);

//             if (existingItem) {
//                 return prevItems.map(item =>
//                     item.name === foodName ? { ...item, qty: item.qty + 1, total: item.total + price } : item
//                 );
//             } else {
//                 return [...prevItems, { name: foodName, price, qty: 1, total: price }];
//             }
//         });
//     };
//     return(
//         <div className="flex flex-col w-full h-screen xl:justify-center">
//             <div className="w-full h-8">
//                 a
//             </div>
//             <div className="flex flex-row w-full">
//                 <div className="flex w-4/12" >
//                     <FirstRow/>
//                 </div>
//                 <div  className="w-7/12 ">
//                     <Middle addToBill={addToBill} />
//                 </div>
//                 <div className="w-1/12">
// bcfdsghbjk
//                 </div>
//             </div>


            
//         </div>
//     );
// }
import { useState } from "react";
import FirstRow from "../Components/CreateBillFirstRow";
import Middle from "../Components/CreateBillMid";
import End from "../Components/CreateBillEnd";
import CreateBillHeader from "../Components/CreateBillHeader";

export default function CreateBill() {
    const [selectedItems, setSelectedItems] = useState([]);

    
    const addToBill = (item) => {
        
        const existingItem = selectedItems.find(i => i.id === item.id);

        if (existingItem) {
           
            setSelectedItems(prevItems =>
                prevItems.map(i =>
                    i.id === item.id ? { ...i, qty: i.qty + 1, total: i.total + item.price } : i
                )
            );
        } else {
           
            setSelectedItems(prevItems => [
                ...prevItems,
                { ...item, qty: 1, total: item.price }
            ]);
        }
    };

    return (
        <div className="flex flex-col w-full h-screen xl:justify-center">
            <div className="w-full h-8">
                <CreateBillHeader/>
            </div>
            <div className="flex flex-row w-full">
                <div className="flex w-4/12">
                    <FirstRow selectedItems={selectedItems} />
                </div>
                <div className="w-7/12">
                    <Middle addToBill={addToBill} />
                </div>
                <div className="w-1/12">
                    <End/>
                </div>
            </div>
        </div>
    );
}
