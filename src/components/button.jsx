const AppButton = ({ color, labelText }) => {
    return (
        <>
            <button className={`
                py-2 px-8 rounded-3xl border-[1px]
                ${color === 'light' && 'border-[#0A2640] text-center hover:bg-[#0A2640] hover:text-white'}
                ${color === 'dark' && 'bg-[#0A2640] text-white text-center hover:text-[#0A2640] hover:border-[#0A2640] hover:bg-white'}
            `}>
                { labelText }
            </button>
        </>
    )
}

export default AppButton;