import { BsFillCheckCircleFill } from 'react-icons/bs';
import AppButton from './button';
import maleUser from '../assets/images/male-user.png';
import femaleUser from '../assets/images/female-user.png';
import barChartImg from '../assets/images/bar-chart1.png';
import pieChartImg from '../assets/images/pie-chart.png';

const ConnectSection = () => {
    return (
        <>
            <div className="w-full">
                <div className="mt-16 mb-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div>
                        <div className='relative'>
                            <img src={maleUser} width="494px" height="506px" className='object-cover rounded-lg' alt="" />
                            <div className="absolute -bottom-24 left-48 bg-white p-8 rounded-lg shadow-lg">
                                <img src={barChartImg} width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-4xl mb-8 w-8/12">
                            We connect our customers with the best, and help them keep up-and stay open.
                        </p>
                        <div className="flex justify-start gap-4 mb-8 py-3">
                            <div>
                                <BsFillCheckCircleFill className='text-2xl' />
                            </div>
                            <div>
                                <p className='text-2xl'>We connect our customers with the best.</p>
                            </div>
                        </div>
                        <div className="flex justify-start gap-4 mb-8 py-3">
                            <div>
                                <BsFillCheckCircleFill className='text-2xl' />
                            </div>
                            <div>
                                <p className='text-2xl'>Advisor success customer launch party.</p>
                            </div>
                        </div>
                        <div className="flex justify-start gap-4 mb-8 py-3">
                            <div>
                                <BsFillCheckCircleFill className='text-2xl' />
                            </div>
                            <div>
                                <p className='text-2xl'>Business-to-consumer long tail.</p>
                            </div>
                        </div>

                        <div className="mt-28">
                            <AppButton color="dark" labelText="Start now" />
                        </div>
                    </div>
                </div>

                <div className="my-16 mb-80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div>
                        <p className="text-4xl mb-8 w-8/12">
                            We connect our customers with the best, and help them keep up-and stay open.
                        </p>
                        <div className="flex justify-start gap-8 mb-8 py-3 px-4 bg-white rounded-lg shadow-sm hover:text-white hover:bg-[#0A2640]">
                            <div>
                                <BsFillCheckCircleFill />
                            </div>
                            <div>
                                <p className='text-2xl'>We connect our customers with the best.</p>
                            </div>
                        </div>
                        <div className="flex justify-start gap-8 mb-8 py-3 px-4 bg-white rounded-lg shadow-sm hover:text-white hover:bg-[#0A2640]">
                            <div>
                                <BsFillCheckCircleFill />
                            </div>
                            <div>
                                <p className='text-2xl'>Advisor success customer launch party.</p>
                            </div>
                        </div>
                        <div className="flex justify-start gap-8 mb-8 py-3 px-4 bg-white rounded-lg shadow-sm hover:text-white hover:bg-[#0A2640]">
                            <div>
                                <BsFillCheckCircleFill />
                            </div>  
                            <div>
                                <p className='text-2xl'>Business-to-consumer long tail.</p>
                            </div>
                        </div>

                        <div className="my-8">
                            <AppButton color="dark" labelText="Start now" />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='relative'>
                            <img src={femaleUser} width="494px" height="506px" className='object-cover rounded-lg' alt="" />
                            <div className="absolute -bottom-60 left-16 bg-white p-8 rounded-lg shadow-lg">
                                <img src={pieChartImg} width="100%" alt="" />
                                <div className="flex justify-start gap-4 my-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <ellipse cx="3.27504" cy="2.94469" rx="2.485" ry="2.47813" fill="#0DBBFC"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p>35% -  Agile Development</p>
                                    </div>
                                </div>
                                <div className="flex justify-start gap-4 my-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <ellipse cx="3.27504" cy="2.62975" rx="2.485" ry="2.47813" fill="#69E6A6"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p>30% -  Investor bandwidth</p>
                                    </div>
                                </div>
                                <div className="flex justify-start gap-4 my-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <ellipse cx="3.27504" cy="3.31505" rx="2.485" ry="2.47813" fill="#C4C4C4"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p>35% -  A/B testing </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectSection;