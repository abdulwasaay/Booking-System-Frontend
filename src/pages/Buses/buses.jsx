import { useEffect } from "react";
import PopDestinations from "../../components/busesComp/PopularDest";
import BestServices from "../../components/busesComp/bestServiceCom";
import BookingsForm from "../../components/busesComp/bookingForm";
import BusHeader from "../../components/busesComp/busHeader";
import ServiceSlide from "../../components/busesComp/busServicesSlides/Slides";
import BussTrip from "../../components/busesComp/busesTrip/busTrips";
import TripProvidr from "../../context/busesTripContext/tripProvider";
import { useNavigate } from "react-router-dom";

export default function Buses() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const data = JSON.parse(token);
    useEffect(()=>{
        if (!data){
            navigate("/login")
        }
    },[])
    return (
        <TripProvidr>
            <BusHeader />
            <BookingsForm />
            <BussTrip />
            <PopDestinations />
            <BestServices />
            <ServiceSlide />
        </TripProvidr>
    )
}