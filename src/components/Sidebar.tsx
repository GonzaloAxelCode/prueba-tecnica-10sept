
import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
    const location = useLocation()
    const path = location.pathname
    const Point = () => <div className="flex relative">

        <span className="absolute flex  h-2 w-2 -bottom-1 -left-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
    </div>


    return (
        <div className="hidden sm:block sticky top-0 z-50">
            <div className=" px-4 pt-8 grid gap-y-2 items-center">
                <div className=" p-2  flex flex-col  w-full">
                    <span className="mx-auto">
                        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                            <path
                                clipRule="evenodd"
                                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                    </span>

                    <p className="font-bold text-inherit text-center mx-auto">
                        <span className='text-green-400 font-bold'>Country</span>
                        Search</p>
                </div>

                <Link to="/" className={`relative text-black w-40 p-2 flex items-center gap-x-4 cursor-pointer rounded-full ${path === "/" && "bg-gray-100"}`}>
                    <span>
                        Home
                    </span>
                    <span>
                        {path === "/" && <Point />}
                    </span>


                </Link>
                <Link to="/view1" className={` relative text-black w-40 p-2 flex items-center gap-x-4 cursor-pointer rounded-full ${path === "/view1" && "bg-gray-100"}`}>
                    <span>
                        View1
                    </span>
                    <span>
                        {path === "/view1" && <Point />}
                    </span>


                </Link>
                <Link to="/view2" className={` relative text-black w-40 p-2 flex items-center gap-x-4 cursor-pointer rounded-full ${path === "/view2" && "bg-gray-100"}`}>
                    <span>
                        View2
                    </span>
                    <span>
                        {path === "/view2" && <Point />}
                    </span>


                </Link>


            </div>


        </div>

    )
}

export default Sidebar