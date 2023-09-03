import { IoIosArrowDropdownCircle } from 'react-icons/io';
import customerImg from '../assets/images/banner.png';

const CustomerSection = () => {
    return (
        <>
            <div className="full">
                <div className="mb-8">
                    <img src={customerImg} width="100%" className="rounded-lg" alt="customers" />
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div>
                        <p className="text-4xl">
                            We connect our customers with the best, and help them keep up-and stay open.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-between border-b-[1px] border-[#777777] mb-8 py-3">
                            <div>
                                <p>We connect our customers with the best?</p>
                            </div>
                            <div>
                                <IoIosArrowDropdownCircle />
                            </div>
                        </div>
                        <div className="flex justify-between border-b-[1px] border-[#777777] mb-8 py-3">
                            <div>
                                <p>Android research & development rockstar? </p>
                            </div>
                            <div>
                                <IoIosArrowDropdownCircle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerSection;