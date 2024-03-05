import { useEffect } from "react";
import BusOrdersComp from "../../components/busesComp/BusesOrderComp/BusesOrder";
import PaymentProvider from "../../context/paymentOrderContext/paymentProvider";
import { useNavigate } from "react-router-dom";

export default function BusOrderPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const data = JSON.parse(token);
    useEffect(()=>{
        if (!data){
            navigate("/login")
        }
    },[])
    return (
        <PaymentProvider>
                <BusOrdersComp />
        </PaymentProvider>

    )
}