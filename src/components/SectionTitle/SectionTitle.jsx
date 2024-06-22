
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="text-center md:w-4/12 my-5  ">
            <h1 className="text-[#FE135C] font-montserrat font-semibold  mb-2 lg:mb-4">{subHeading}</h1>
            <h1 className="text-3xl lg:text-6xl text-[#25282C] font-montserrat font-bold  uppercase">{heading}</h1>
        </div>
    );
};

export default SectionTitle;