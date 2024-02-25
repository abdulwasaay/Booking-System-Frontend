
export default function Buttonss({widths ,text ,icon }) {
    return(
        <div className=" relative">
        <button className={`buttons text-[15px] rounded-2xl ${widths} h-[40px]`}>
            {icon} {text}
        </button>
        </div>
    )
}