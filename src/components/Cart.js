import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../store/cartSlice";

export default function Cart() {
    let selector = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    // console.log(selector);
    return (
        <>
            <div className="flex flex-col my-20">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white dark:bg-gray-500">
                                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            image
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            price
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Handle
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selector.map((item) => (
                                        <tr key={item.id} className="border-b border-neutral-200 dark:border-white/10">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {item.id}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {item.title}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <img src={item.image} alt="product" className=" w-10 h-10"/>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {item.price} $
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {item.quantity}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <button onClick={()=>{dispatch(deleteProduct(item))}} className=" bg-danger-600 text-white rounded-sm py-2 px-6">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
