import { Formik } from 'formik';
import Buttonss from '../button';

export default function BillingForms({checkValue}) {
    if (checkValue==="check1"){
        return (
            <div className=' billForm bg-[#fc7042] w-[87%] pt-[20px] pb-[20px] rounded-lg max-[663px]:w-[90%]'>
                <h1 className='text-[20px] text-center mb-[10px] font-serif'>Step 1: Your details</h1>
                <Formik>
                    {
                        () => (
                            <form onSubmit={()=> console.log("as")}>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] pl-[20px] mb-1 pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col '>
                                    <p className=' relative top-2 max-[411px]:left-5'>Name</p>
                                    <input type='text' required placeholder='First and last name' className='w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg border-none outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%]'/>
                                </div>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                <p className=' relative top-2 max-[411px]:left-5'>Email</p>
                                    <input type='email' required placeholder='example@domain.com' className='w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg border-none outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%]' />
                                </div>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                <p className=' relative top-2 max-[411px]:left-5'>Phone</p>
                                    <input type='number' required placeholder='Eg. +92345 0000000' className=' number w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg border-none outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%]'/>
                                </div>
                                <div className=' flex justify-center mt-[20px]'>
                                <button className=' bg-red-600 pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-white font-extrabold rounded-3xl hover:bg-red-500'>Continue Booking</button>
                                </div>
                            </form>
                        )
                    }
                </Formik>
            </div>
        )
    }
    else if (checkValue==="check2"){
        return (
            <div className=' billForm bg-[#fc7042] w-[87%] pt-[20px] pb-[20px] rounded-lg max-[663px]:w-[90%]'>
                <h1 className='text-[20px] text-center mb-[10px] font-serif'>Step 2: Your Address</h1>
                <Formik>
                    {
                        () => (
                            <form onSubmit={()=> console.log("as")}>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] pl-[20px] mb-1 pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col '>
                                    <p className=' relative top-2 max-[411px]:left-5'>Address</p>
                                    <textarea required className='w-[1050px] h-[60px] ml-[20px] pl-[20px] pr-[20px] pt-[10px] rounded-lg border-none outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%]'/>
                                </div>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                <p className=' relative top-2 max-[411px]:left-5'>Post code</p>
                                    <input type='number' required className=' number w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg border-none outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%]'/>
                                </div>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                <p className=' relative top-2 max-[411px]:left-5'>Country</p>
                                    <input type='text' required className='w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg border-none outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%]' />
                                </div>
                                <div className=' flex justify-center mt-[20px]'>
                                <button className=' bg-red-600 pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-white font-extrabold rounded-3xl hover:bg-red-500'>Continue Booking</button>
                                </div>
                            </form>
                        )
                    }
                </Formik>
            </div>
        )
    }else{
        return (
            <div className=' billForm bg-[#fc7042] w-[87%] pt-[20px] pb-[20px] rounded-lg max-[663px]:w-[90%]'>
                <h1 className='text-[20px] text-center mb-[10px] font-serif'>Step 3: Card details</h1>
                <Formik>
                    {
                        () => (
                            <form onSubmit={()=> console.log("as")}>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                <p className=' relative top-2 max-[411px]:left-5'>Card number</p>
                                    <input type='number' required className=' number w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg border-none outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%]'/>
                                </div>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                <p className=' relative top-2 max-[411px]:left-5'>Security code</p>
                                    <input type='text' required className='w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg border-none outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%]' />
                                </div>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                <p className=' relative top-2 max-[411px]:left-5'>Phone</p>
                                    <input type='number' required placeholder='Exact name as on the card' className=' number w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg border-none outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%]'/>
                                </div>
                                <div className=' flex justify-center mt-[20px]'>
                                <button className=' bg-red-600 pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-white font-extrabold rounded-3xl hover:bg-red-500'>Book Now!</button>
                                </div>
                            </form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}