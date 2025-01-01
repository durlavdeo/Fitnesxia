const StatCard = ({heading,extraText, imgSrc}) => {
  return (
    <div className="bg-white flex justify-between items-center rounded-md px-6 py-2 max-w-fit w-44 gap-4 shadow-md">
        <img src={imgSrc} alt="" width={30} />
        <span className="flex flex-col">
            <p className="text-[18px] text-black font-semibold">{heading}</p>
            <p className="text-sm text-gray-700">{extraText}</p>
        </span>
    </div>
  )
}

export default StatCard