import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { Ripple, initTWE } from "tw-elements";
import { addProduct } from "../store/cartSlice";

export default function Home() {
    let selector = useSelector((state) => state.products);
    let dispatch = useDispatch();
    // console.log(selector);
    useEffect(() => {
        dispatch(fetchProducts());
        initTWE({ Ripple });
    }, []);
    return (
        <div className="flex flex-wrap gap-5 justify-center w-full mt-20">
        {selector.map((item)=>(
            <div key={item.id} className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark flex-1 min-w-96">
                <a href="#">
                    <img
                        className="rounded-t-lg h-96 w-full"
                        src={item.image}
                        alt=""
                    />
                </a>
                <div className="p-6 text-surface dark:text-white">
                    <h5 className="mb-2 text-xl font-medium leading-tight">
                        {item.title}
                    </h5>
                    <p className="mb-4 text-base">
                        {item.description}
                    </p>
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        onClick={()=>{dispatch(addProduct(item))}}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        ))}
        </div>
    );
}
