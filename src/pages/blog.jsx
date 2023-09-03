import AppButton from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import chart1 from '../assets/images/chart1.png';
import chart2 from '../assets/images/chart2.png';
import chart3 from '../assets/images/chart3.png';
import logo from '../assets/images/logo.png';
import JoinUsComp from "../components/join-us";

const Blog = () => {
    return (
        <>
            <div className="">
                <div className="mx-auto w-10/12">
                    <Navbar />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 py-4">
                        <div className="h-fit">
                            <div className="mt-40">
                                <p className="text-5xl font-semibold ">Save time by building  fast <br /> with Boldo Template </p>
                                <p className="mt-8 mb-16 text-xl text-[#777777] w-8/12">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>

                                <div className="flex justify-start gap-8 my-8">
                                    <div>
                                        <AppButton color="dark" labelText="Buy template" />
                                    </div>
                                    <div>
                                        <AppButton color="light" labelText="Explore" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <img src={chart1} width="100%" alt="" />
                            </div>

                            <div className="flex justify-between gap-10">
                                <div className="mb-4">
                                    <img src={chart2} width="100%" alt="" />
                                </div>
                                <div className="mb-4">
                                    <img src={chart3} width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-10/12">
                        <div className="flex justify-bewtween gap-20 py-4">
                            <div className="mb-4">
                                <img src={logo} width="100%" alt="" />
                            </div>
                            <div className="mb-4">
                                <img src={logo} width="100%" alt="" />
                            </div>
                            <div className="mb-4">
                                <img src={logo} width="100%" alt="" />
                            </div>
                            <div className="mb-4">
                                <img src={logo} width="100%" alt="" />
                            </div>
                            <div className="mb-4">
                                <img src={logo} width="100%" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mx-auto w-10/12 my-12">
                <JoinUsComp />
            </div>
            <Footer />
        </>
    )
}

export default Blog;