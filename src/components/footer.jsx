import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';


const Footer = () => {
    return (
        <>
            <div className="w-full py-8 text-[#777777]">
                <div className="mx-auto w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="mb-4">
                            <img src={logo} alt="logo" />
                        </div>

                        <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                        <p className="mt-8">All rights reserved.</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-black">Landing</h3>
                        <ul>
                            <li className="my-4">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="my-4">
                                <Link to="/blog">Products</Link>
                            </li>
                            <li className="my-4">
                                <Link to="/">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-black">Company</h3>
                        <ul>
                            <li className="my-4">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="my-4">
                                <Link to="/blog">Careers <span className="bg-[#65E4A3] px-4 py-1 rounded-2xl ml-4 text-black">Hiring</span> </Link>
                            </li>
                            <li className="my-4">
                                <Link to="/">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-black">Resources</h3>
                        <ul>
                            <li className="my-4">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="my-4">
                                <Link to="/blog">Products</Link>
                            </li>
                            <li className="my-4">
                                <Link to="/">Services</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;