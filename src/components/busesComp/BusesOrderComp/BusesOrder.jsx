import Card from 'react-bootstrap/Card';
import Buttonss from '../button';
import BillingFormsLists from '../BillingForm/BillingFormList';

export default function BusOrdersComp() {
    let data = localStorage.getItem("BookingCart");
    let tripData = JSON.parse(data);
    return(
        <section className=' w-full pt-[30px]'>
            <div className=' ml-[100px] mr-[100px] flex justify-center max-[966px]:ml-[30px] max-[966px]:mr-[30px] max-[800px]:flex-col'>
                <Card  className=' w-[100%] mr-[30px] max-[800px]:mr-0'>
                <div className='bg-[#0000ff4f] text-white pl-[22px] pt-2 pb-2 text-[12px]'>{tripData.date}</div>
                    <div className=' w-full flex justify-between pl-[20px] pr-[20px] max-[800px]:flex-col'>
                    <div className=' mt-[35px] mb-[35px] mr-[20px]'>
                        <div>
                        <img src={`/images/${tripData.busService.servName}.png`} className='w-[100px] h-[50px]'/>
                        <p className=' mt-[10px] tracking-widest'>{tripData.busService.servName}</p>
                        </div>
                        <Card.Title>{tripData.busService.time}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted mt-3">{tripData.travelFrom}&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;{tripData.travelTo}</Card.Subtitle>  
                    </div>
                    <div className=' border-l max-[800px]:border-none'>
                        <div className=' mt-[20px] max-[800px]:mt-0'>
                            <p className='text-[14px] ml-[20px]'>Selected Seats</p>
                            <div className='flex justify-center flex-wrap w-[150px]'>
                                {
                                    tripData.seats.map((seat)=>{
                                        return <div className='cursor-default ml-[10px] mr-[10px] border-1 p-1 mt-2 border-[#f5b342] text-[#f5b342] bg-[#2e2d2b]'>{seat}</div>
                                    })
                                }
                            </div>
                        </div>
                        <div>
                        <p className='text-[15px] text-muted text-end mt-[30px] max-[800px]:mt-0 max-[324px]:mt-[30px]'>Seat Price</p>
                        <div className=' flex justify-end'>
                        <Card.Title className='mr-[5px]'>PKR</Card.Title>
                        <p className='text-[19px] mt-[-1px] text-[#f5b342]'>{tripData.totalCost/tripData.seats.length}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </Card>
                <div className=' ml-[30px] max-[800px]:ml-0 max-[800px]:mt-4'>
                <Card className=' w-[330px] max-[800px]:w-full'>
                <div className='bg-[#0000ff4f] text-white pl-[22px] pt-2 pb-2 text-[20px]'>Price Summary</div>
                <div className=' flex justify-between mt-[15px] max-[319px]:flex-col'>
                    <p className=' ml-[20px] font-bold text-[18px] '>Total Price</p>
                    <p className=' mr-[20px] font-bold mt-[3px] text-[#0000ffb0] max-[319px]:mr-0 max-[319px]:ml-[23px]'>PKR {tripData.totalCost}</p>
                </div>
                </Card>
                <Buttonss text="Continue Booking" widths=" rounded-md w-[330px] mt-[10px] mb-[30px] max-[800px]:w-full"/>
                </div>
            </div>
            <BillingFormsLists />
        </section>
    )
}