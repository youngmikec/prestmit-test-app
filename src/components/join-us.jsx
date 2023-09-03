const JoinUsComp = () => { 
    return (
        <>
            <div className="w-full rounded-lg bg-[#0A2640] text-white py-32 px-8 overflow-hidden relative">
                <div className="absolute bg-[#1C3D5B] h-[600px] w-[600px] rounded-full -top-[400px] -right-[200px]"></div>
                <div className="mx-auto w-8/12">
                    <div className="text-center mb-12">
                        <p className="text-4xl">An enterprise template to ramp <br /> up your company website</p>
                    </div>

                    <div className="mx-auto w-8/12">
                        <div className="flex justify-start gap-6">
                            <div className="w-8/12">
                                <input type="email" className="py-2 px-8 rounded-3xl bg-white w-full" />
                            </div>
                            <div>
                                <button className="py-2 px-8 rounded-3xl border-[1px] text-[#0A2640] bg-[#65E4A3] text-center hover:bg-[#0A2640] hover:text-[#65E4A3]">
                                    Start now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default JoinUsComp;