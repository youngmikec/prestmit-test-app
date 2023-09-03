import profileImg1 from '../assets/images/profile-image1.png';
import profileImg2 from '../assets/images/profile-image2.png';
import profileImg3 from '../assets/images/profile-image3.png';

const CommentCard = ({ profImg, fullName, role, comment }) => {
    return (
        <>
            <div className="bg-white rounded-lg p-8">
                <p className="text-xl mb-12">{ comment }</p>
                
                <div className="flex justify-start gap-4">
                    <div>
                        <img src={profImg} width="58px" className="rounded-full" alt="profile" />
                    </div>
                    <div>
                        <p className="mb-4 font-semibold">{ fullName }</p>
                        <p className="mb-4">{ role }</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const CommentSectionComp = () => {
    return (
        <>
            <div className="bg-[#0A2640] w-full h-max">
                <div className="mx-auto w-10/12 py-24">
                    <div className="text-white my-12">
                        <p className="text-3xl font-semibold">
                            An enterprise template to ramp <br /> up your company website
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10">
                        <div className="">
                            <CommentCard fullName="Albus Dumbledore" role="Manager @ Howarts" profImg={profileImg1} comment="“Buyer buzz partner network disruptive non-disclosure agreement business”" />
                        </div>
                        <div className="flex justify-center">
                            <CommentCard fullName="Severus Snape" role="Manager @ Slytherin" profImg={profileImg2} comment="“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”" />
                        </div>
                        <div className="flex justify-center">
                            <CommentCard fullName="Harry Potter" role="Team Leader @ Gryffindor" profImg={profileImg3} comment="“Release facebook responsive web design business model canvas seed money monetization.”" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CommentSectionComp;