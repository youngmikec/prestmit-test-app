import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

import serviceImg1 from '../assets/images/user1.png';
import serviceImg2 from '../assets/images/user2.png';
import serviceImg3 from '../assets/images/user-city.png';

const ServiceCard = ({ img, title }) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <img src={img} width="300px" height="487px"  className="rounded-lg" alt="" />
                </div>

                <div className="my-6">
                    <p className="text-white mb-8">{ title }</p>
                    <Link to="/" className="text-white flex gap-5">
                        <span className="font-semibold border-b-[1px] border-white">Explore page</span>
                        <span className="my-auto"> <BsArrowRight /> </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

const ServiceComp = () => {
    return (
        <>
            <div className="bg-[#0A2640] w-full h-max">
                <div className="mx-auto w-10/12 py-12">
                    <div className="text-center text-white my-12">
                        <p>Our Services</p>
                        <p className="text-3xl font-semibold">
                            Handshake infographic mass market <br /> crowdfunding iteration.
                        </p>
                    </div>

                    <div className="mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10">
                        <div>
                            <ServiceCard title="Cool feature title" img={serviceImg2} />
                        </div>
                        <div>
                            <ServiceCard title="Even cooler feature" img={serviceImg2} />
                        </div>
                        <div>
                            <ServiceCard title="Cool feature title" img={serviceImg3} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ServiceComp;