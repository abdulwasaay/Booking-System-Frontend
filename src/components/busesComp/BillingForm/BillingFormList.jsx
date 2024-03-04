import "./Billing.css"
import { useState } from 'react';
import BillingForms from "./BillingForm";

export default function BillingFormsLists() {
    const [check,setCheck] = useState("check1");
    console.log(check)
    return (
        <section className=' mt-[70px]'>
            <div className=' flex justify-between ml-[100px] mr-[100px] max-[966px]:ml-[30px] max-[966px]:mr-[30px]'>
                <p>Step1</p>
                <p>Step2</p>
                <p>Step3</p>
            </div>
            <div className=' flex ml-[100px] mr-[100px] max-[966px]:ml-[30px] max-[966px]:mr-[30px]'>
                <div>
                    <label className="radio-container relative">
                        <input type="radio" name="radio-group" defaultChecked onChange={()=>setCheck("check1")}/>
                        <span className="radio-checkbox absolute left-0 top-[1px] w-[20px] h-[20px] rounded-full"></span>
                    </label>
                </div>
                <div className=' w-[100%] h-[15px] bg-[#0000ffa6] rounded-2xl mt-1 ml-[10px] mr-[3px]'></div>
                <div>
                    <label className="radio-container relative">
                        <input type="radio" name="radio-group" onChange={()=>setCheck("check2")}/>
                        <span className="radio-checkbox absolute  left-0 top-[1px] w-[20px] h-[20px] rounded-full"></span>
                    </label>
                </div>
                <div className=' w-[100%] h-[15px] bg-[#0000ffa6] rounded-2xl mt-1 ml-[10px] mr-[3px]'></div>
                <div>
                    <label className="radio-container relative">
                        <input type="radio" name="radio-group" onChange={()=>setCheck("check3")}/>
                        <span className="radio-checkbox absolute left-0 top-[1px] w-[20px] h-[20px] rounded-full"></span>
                    </label>
                </div>
            </div>
            <BillingForms checkValue={check}/>
        </section>
    )
}