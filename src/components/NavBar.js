import { Collapse, initTWE } from "tw-elements";
import { Link } from "react-router-dom";
import "../icons/css/all.min.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function NavBar() {
    useEffect(() => {
        initTWE({ Collapse });
    }, []);
    let selector = useSelector((state) => state.cart);
    let [mode, setmode] = useState(false);
    if (mode) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
    return (
        <>
            <nav
                className="fixed top-0 w-full bg-zinc-50 py-2 flex justify-between items-center text-neutral-500 shadow-dark-mild focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:p-0"
                data-twe-navbar-ref
            >
                <div className="flex items-center px-3 w-full justify-between lg:justify-start">
                    <div className="ms-2">
                        <Link
                            className="text-xl text-black dark:text-white"
                            to="/"
                        >
                            E-Commerce
                        </Link>
                        <button>
                            <div>
                                {mode ? (
                                    <i
                                        onClick={() => {
                                            setmode((s) => !s);
                                        }}
                                        className="fa-solid fa-moon text-2xl cursor-pointer ml-4"
                                    ></i>
                                ) : (
                                    <i
                                        onClick={() => {
                                            setmode((s) => !s);
                                        }}
                                        className="fa-solid fa-sun text-2xl cursor-pointer ml-4"
                                    ></i>
                                )}
                            </div>
                        </button>
                    </div>
                    <div>
                        <button
                            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                            type="button"
                            data-twe-collapse-init
                            data-twe-target="#navbarSupportedContent2"
                            aria-controls="navbarSupportedContent2"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="[&>i]:w-7 [&>i]:stroke-black/50 dark:[&>i]:stroke-neutral-200">
                                <i className="fa-solid fa-bars" />
                            </span>
                        </button>
                        <div
                            className="lg:relative lg:bg-transparent !visible mt-2 hidden flex-grow basis-[100%] items-center w-full bg-zinc-300 absolute left-0 lg:mt-0 lg:!flex lg:basis-auto"
                            id="navbarSupportedContent2"
                            data-twe-collapse-item
                        >
                            <ul
                                className="list-style-none me-auto flex flex-col items-start ps-0 lg:mt-1 lg:flex-row lg:items-center"
                                data-twe-navbar-nav-ref
                            >
                                <li
                                    className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                                    data-twe-nav-item-ref
                                >
                                    <Link
                                        className="text-black dark:text-white lg:px-2"
                                        aria-current="page"
                                        to="/"
                                        data-twe-nav-link-ref
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                                    data-twe-nav-item-ref
                                >
                                    <Link
                                        className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                        to="/cart"
                                        data-twe-nav-link-ref
                                    >
                                        <div className="flex gap-5 items-center justify-center relative">
                                            <span>Cart</span>
                                            {selector.length > 0 && (
                                                <div className=" absolute left-11 rounded-full w-4 h-4 p-3 flex justify-center items-center bg-slate-500 text-white">
                                                    {selector.length}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
