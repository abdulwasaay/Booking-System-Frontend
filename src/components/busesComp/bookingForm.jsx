import Buttonss from "./button";
import SearchIcon from '@mui/icons-material/Search';
import { FaLocationDot } from "react-icons/fa6";

export default function BookingsForm(){
    return(
        <section className="">
            <div className=" absolute w-[80%] left-[10%] top-[410px] ">
                <div className=" flex w-[175px] pl-[35px] pt-[10px] pb-[4px] bg-[#2e2d2b]">
                <h2 className=" font-semibold text-[15px]">Buses</h2>
                <h2 className="text-[#f5b342] font-semibold ml-1 text-[15px]">Travels</h2>
                </div>
                <form className=" bg-white shadow-lg pt-[20px] pb-[20px] max-[800px]:pl-[20px] max-[800px]:pr-[20px]">
                    <div className="flex justify-center w-full max-[800px]:flex-col">
                        <div className=" border-2 ml-[20px] mr-[20px] w-full relative max-[800px]:ml-[0] max-[800px]:mt-[10px] max-[800px]:mb-[10px]">
                        <FaLocationDot className=" text-[#0ef] text-[20px] absolute left-[7px] top-[10px] "/>
                        <input type="text" placeholder="Start Location" className=" w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[30px]"/><br />
                        <div className=" absolute w-[100%] bg-[black]">
                            <p>sa</p>
                            <p>sa</p>
                            <p>sa</p>
                        </div>
                        </div>
                        <div className=" border-2 ml-[20px] mr-[20px] w-full relative max-[800px]:ml-[0] max-[800px]:mt-[10px] max-[800px]:mb-[10px]">
                        <FaLocationDot className=" text-[#0ef] text-[20px] absolute left-[7px] top-[10px]"/>
                        <input type="text" placeholder="End Location" className="w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[30px]"/><br />
                        </div>
                        <div className=" border-2 ml-[20px] mr-[20px] w-full relative max-[800px]:ml-[0] max-[800px]:mt-[10px] max-[800px]:mb-[10px]">
                        <input type="date" className="w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[10px] pr-[10px] appearance-none"/><br />
                        </div>
                    </div>
                    <div className=" text-center mt-[20px]">
                    <Buttonss text="Search" widths = "w-[30%] max-[800px]:w-[100%] rounded-md" icon= {<SearchIcon />}/>
                    </div>
                </form>
            </div>
        </section>
    )
}