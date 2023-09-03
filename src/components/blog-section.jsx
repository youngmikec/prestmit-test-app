import profileImg1 from '../assets/images/profile-image1.png';
import profileImg2 from '../assets/images/profile-image2.png';
import profileImg3 from '../assets/images/profile-image3.png';

import blogImg1 from '../assets/images/user1.png';
import blogImg2 from '../assets/images/female-user.png';
import blogImg3 from '../assets/images/user4.png';
import AppButton from './button';


const BlogCard = ({ img, msg, bloggerName, bloggerImg }) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <img src={img} width="100%" height="209px"  className="rounded-lg object-cover max-h-[209px]" alt="" />
                </div>

                <div className="my-6">
                    <p className="mb-4"><span className="text-[#0A2640] font-semibold">Category</span> <span className="text-[#777777]">November 22, 2021</span> </p>
                    <p className="mb-8">{ msg }</p>

                    <div className="flex justify-start gap-4">
                        <div>
                            <img src={bloggerImg} width="58px" className="rounded-full" alt="profile" />
                        </div>
                        <div>
                            <p className="mb-4 font-semibold">{ bloggerName }</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const BlogSectionComp = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="mx-auto w-10/12 py-12">
                    <div className="text-center my-12">
                        <p>Our Blog</p>
                        <p className="text-3xl font-semibold">
                            Value proposition accelerator product <br /> management venture
                        </p>
                    </div>

                    <div className="mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10">
                        <div>
                            <BlogCard msg="Pitch termsheet backing validation focus release." bloggerName="Chandler Bing" bloggerImg={profileImg1} img={blogImg3} />
                        </div>
                        <div>
                            <BlogCard msg="Seed round direct mailing non-disclosure agreement graphical user interface rockstar." bloggerName="Rachel Green" bloggerImg={profileImg2} img={blogImg2} />
                        </div>
                        <div>
                            <BlogCard msg="Beta prototype sales iPad gen-z marketing network effects value proposition." bloggerName="Monica Geller" bloggerImg={profileImg3} img={blogImg3} />
                        </div>
                    </div>

                    <div className="w-full flex justify-center my-12">
                        <AppButton color="light" labelText="Load more" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default BlogSectionComp;