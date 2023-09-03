import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';


const Navbar = () => {
    return (
        <>
            <div className="w-full">
                <div className="py-4 flex justify-between">
                    <div>
                        <Link>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div>
                        <div className="flex justify-between gap-6">
                            <div className="my-auto font-semibold">
                                <Link to="/blog">Product</Link>
                            </div>
                            <div className="my-auto font-semibold">
                                <Link to="/">Services</Link>
                            </div>
                            <div className="my-auto font-semibold">
                                <Link to="/about-us">About</Link>
                            </div>
                            <div className="my-auto font-semibold">
                                <button className="py-2 px-8 rounded-3xl border-[1px] border-[#0A2640] text-center hover:bg-[#0A2640] hover:text-white">
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;