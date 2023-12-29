// eslint-disable-next-line react/prop-types
const PaginationButton = (props) => {
    // eslint-disable-next-line react/prop-types
    const {className,text} = props
    return (
        <button className={`${className} flex justify-center items-center text-base w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer`}>{text}</button>
    )
}

export default PaginationButton