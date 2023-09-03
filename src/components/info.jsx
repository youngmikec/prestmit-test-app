

const InfoSectionComp = () => {
    return (
        <>
            <div className="bg-[#0A2640] w-full h-max">
                <div className="mx-auto w-10/12 py-12">
                    <div className="text-white my-12">
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

export default InfoSectionComp;