import React, { useEffect } from "react";
import './Flights.css';
import { useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import  data from './../flights.json';
import cityData1 from './city1';
import cityData2 from './city2';
export const Flights = ()=>{
    
    const [isTravelersVisible, setIsTravelersVisible] = useState(false);
    const showTravelers = () => {
        setIsTravelersVisible(!isTravelersVisible); 
    }

    // useEffect(() => {
    //     console.log(data)
    // },[])



    
    const [adault,setCountAdault] = useState(1);

    const increamentAdualt = () =>{
        setCountAdault(adault+1);  
    }
    
    const decreamentAdault = () =>{
        setCountAdault(adault-1);
    }
    const [child,setCountChild] = useState(0);

    const increamentChild = () =>{
        setCountChild(child+1);  
    }
    
    const decreamentChild = () =>{
        setCountChild(child-1);
    }
    const [infant,setCountInfant]=useState(0);

    const increamentInfant = () =>{
        setCountInfant(child+1);  
    }
    
    const decreamentInfant = () =>{
        setCountInfant(child-1);
    }
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Filter city data based on searchQuery
        const results = cityData1.filter(city =>
          city.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
    };
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
      };

    
    return(
        <>
            {/* <h1 className="text-center">Flights</h1> */}
           
            <div className="relative">
                <div className="background"></div>
                <div className="container position-absolute top-60 start-50 translate-middle">
                    <Row xs={12} md={4} lg={4} className="mb-3 other_parameters">
                        <Col>
                            <select>
                                <option value=""><span style={{ "fontSize": "16px","fontWeight":"500"}}>one-way</span></option>
                                <option value=""><span style={{ "fontSize": "16px","fontWeight":"500"}}>Round Trip</span></option>
                            </select>
                        </Col>
                        <Col>
                            <div className="travlers">
                                <button className="traveler_btn" onClick={showTravelers}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="_1MZrIK28AE8HVj289UBgZw st-svg-icon "><path d="M3.48042 18.1237C2.81329 17.4643 2.89511 16.8589 3.39441 16.235C4.04896 15.4092 4.69302 14.5685 5.35386 13.7446C6.07974 12.8367 6.56226 12.7619 7.58814 13.371C8.66227 14.0062 9.16367 13.9483 9.51402 12.7825C9.87906 11.5719 10.7728 10.7069 11.4441 9.68871C11.8406 9.0778 12.2833 8.49678 12.7364 7.91016C13.3973 7.03583 14.3329 6.80043 15.4322 7.21705C16.37 7.57388 16.8127 8.35293 16.6197 9.33561C16.5427 9.91451 16.4157 10.4873 16.2399 11.0488C15.7029 12.4499 16.0071 13.7147 16.7413 15.0019C17.4336 16.1976 17.9518 17.4717 18.5707 18.7029C18.8099 19.1812 18.8728 19.6202 18.2854 19.8911C17.698 20.162 17.3371 19.8163 17.056 19.3773C15.8476 17.4829 14.6266 15.5979 13.4224 13.7017C13.2014 13.371 13.0565 13.0045 12.996 12.6234C12.9355 12.2424 12.9606 11.8545 13.07 11.4822C13.2168 10.9666 13.2798 10.4323 13.3994 9.77651C13.2723 9.85572 13.1542 9.94582 13.0469 10.0455C11.2972 12.4275 9.02731 14.4695 7.38254 16.9225C7.07834 17.3764 6.8245 17.453 6.25806 17.212C5.24477 16.7824 4.53567 17.0551 3.48042 18.1237Z" fill="#060606"></path><path d="M18.3315 4.87055C18.3274 5.11245 18.2698 5.35126 18.162 5.57334C18.0543 5.79543 17.8984 5.99643 17.7034 6.16488C17.5084 6.33333 17.2781 6.46593 17.0255 6.5551C16.773 6.64427 16.5032 6.68827 16.2315 6.68459C15.9599 6.68091 15.6917 6.62962 15.4423 6.53365C15.1929 6.43768 14.9672 6.2989 14.7781 6.12525C14.5889 5.95159 14.44 5.74646 14.3399 5.52156C14.2397 5.29667 14.1903 5.05641 14.1945 4.8145C14.1986 4.5726 14.2562 4.33379 14.364 4.11171C14.4717 3.88962 14.6276 3.68862 14.8226 3.52017C15.0176 3.35172 15.2479 3.21912 15.5005 3.12995C15.753 3.04078 16.0228 2.99678 16.2945 3.00046C16.5661 3.00414 16.8343 3.05543 17.0837 3.1514C17.3331 3.24737 17.5588 3.38615 17.7479 3.5598C17.9371 3.73346 18.086 3.93859 18.1861 4.16349C18.2863 4.38838 18.3357 4.62864 18.3315 4.87055Z" fill="#060606"></path><path d="M12.7761 13.7316C14.2656 15.8128 14.2656 15.8595 12.6985 17.709C12.1614 18.3442 11.6265 18.9831 11.081 19.6146C10.8062 19.9359 10.4516 20.1284 10.0153 19.8762C9.57891 19.6239 9.52646 19.2428 9.82227 18.843C9.95234 18.6562 10.0803 18.4825 10.2125 18.3031C10.737 17.5857 11.2614 16.8646 11.7922 16.1509C12.323 15.4373 12.323 14.5853 12.7761 13.7316Z" fill="#0A0A0A"></path><path d="M17.0351 9.8064C17.4546 10.8339 18.577 11.301 19.4036 12.0016C19.7707 12.3154 20.3078 12.6031 19.7854 13.1225C19.3218 13.5858 18.9232 13.2196 18.5435 12.9581C18.3901 12.8352 18.2283 12.721 18.0588 12.6162C16.8001 11.9698 16.1917 11.116 17.0351 9.8064Z" fill="#0A0A0A"></path><path d="M5.51741 20.0032C4.73489 19.9079 4.24607 19.566 4.25866 18.8822C4.27125 18.1985 4.72859 17.7931 5.49013 17.7949C6.25168 17.7968 6.71112 18.2115 6.71322 18.8897C6.71532 19.5679 6.20552 19.9004 5.51741 20.0032Z" fill="#0A0A0A"></path></svg>
                                    <span style={{ "fontSize": "16px","fontWeight":"500"}}>Travelers</span>
                                </button>
                                <div className="block" style={{ display: isTravelersVisible ? "block" : "none" }}>
                                    <Row className="d-flex flex-row pt-2">
                                        <span style={{"paddingLeft":"20px"}}>Travelers
                                            <span style={{"marginLeft":"195px"}} role="img" aria-label="close" tabindex="-1" class="anticon anticon-close"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span>    
                                        </span>
                                        
                                    </Row>
                                    <div className="row">
                                        <div className="col-lg-6 ps-4">
                                            <p>
                                                <svg width="16" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="_1MZrIK28AE8HVj289UBgZw st-svg-icon "><g clip-path="url(#clip0)"><path d="M11.9999 11.7378C14.6682 11.7378 16.8316 9.1103 16.8316 5.86907C16.8316 2.62776 16.1213 0.000244141 11.9999 0.000244141C7.87837 0.000244141 7.16797 2.62776 7.16797 5.86907C7.16797 9.1103 9.33133 11.7378 11.9999 11.7378Z" fill="black"></path><path d="M2.87375 20.6987C2.87293 20.5011 2.87211 20.6431 2.87375 20.6987V20.6987Z" fill="black"></path><path d="M21.1257 20.8531C21.1283 20.799 21.1266 20.4777 21.1257 20.8531V20.8531Z" fill="black"></path><path d="M21.1154 20.4617C21.0259 14.8154 20.2885 13.2065 14.6455 12.1881C14.6455 12.1881 13.8512 13.2003 11.9998 13.2003C10.1483 13.2003 9.35388 12.1881 9.35388 12.1881C3.77251 13.1954 2.99024 14.7805 2.88739 20.2783C2.87895 20.7273 2.87504 20.7508 2.87354 20.6987C2.87388 20.7964 2.87429 20.977 2.87429 21.2919C2.87429 21.2919 4.21774 24.0002 11.9998 24.0002C19.7817 24.0002 21.1253 21.2919 21.1253 21.2919C21.1253 21.0896 21.1254 20.9489 21.1256 20.8531C21.1241 20.8854 21.1211 20.8229 21.1154 20.4617Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="16" height="20" fill="black" transform="translate(0 0.000244141)"></rect></clipPath></defs></svg>
                                                Adualts
                                            </p>
                                        </div>
                                        <div className="col-lg-6 d-flex justify-content-evenly align-items-center">  
                                            <button className="minus" onClick={decreamentAdault}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                                            <p>{adault}</p>
                                            <button className="plus" onClick={increamentAdualt}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 ps-4">
                                            <p>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="_1MZrIK28AE8HVj289UBgZw st-svg-icon "><g clip-path="url(#clip0)"><path d="M10.2823 13.3081C10.2823 12.0306 9.24298 10.9912 7.96541 10.9912C6.68785 10.9912 5.64844 12.0306 5.64844 13.3081H7.05468C7.05468 12.806 7.46326 12.3975 7.96541 12.3975C8.46757 12.3975 8.8761 12.806 8.8761 13.3081H10.2823Z" fill="black"></path><path d="M16.0346 10.9912C14.757 10.9912 13.7177 12.0306 13.7177 13.3081H15.1239C15.1239 12.806 15.5324 12.3975 16.0346 12.3975C16.5367 12.3975 16.9453 12.806 16.9453 13.3081H18.3516C18.3516 12.0306 17.3122 10.9912 16.0346 10.9912Z" fill="black"></path><path d="M11.9999 17.4228C11.1109 17.4228 10.2772 16.946 9.82428 16.1785L8.61316 16.8931C9.3178 18.0872 10.6155 18.829 11.9999 18.829C13.3842 18.829 14.6819 18.0872 15.3866 16.8931L14.1755 16.1785C13.7226 16.946 12.8889 17.4228 11.9999 17.4228Z" fill="black"></path><path d="M23.085 10.8175C22.6372 10.3702 22.0748 10.0744 21.4644 9.95861C20.1461 5.88483 16.3219 3.07997 12 3.07997H11.5286C10.3965 3.07997 9.47546 2.1589 9.47546 1.02686H8.06922C8.06922 1.79505 8.32122 2.50529 8.74644 3.07997H8.30092C7.16883 3.07997 6.24781 2.1589 6.24781 1.02686H4.84156C4.84156 2.55476 5.83757 3.85358 7.21408 4.31034C5.03702 5.50723 3.33063 7.502 2.53568 9.95861C1.92524 10.0744 1.3627 10.3703 0.914477 10.8181C0.324763 11.4084 0 12.1928 0 13.0269C0 13.8506 0.31779 14.6279 0.894888 15.2154C1.34591 15.6746 1.91552 15.9776 2.53568 16.0951C3.8539 20.1689 7.6781 22.9737 12 22.9737C16.3219 22.9737 20.1461 20.1689 21.4643 16.0951C22.0845 15.9776 22.6541 15.6746 23.1051 15.2154C23.6822 14.6279 24 13.8506 24 13.0269C24 12.1928 23.6752 11.4084 23.085 10.8175ZM20.9103 14.7435L20.3826 14.7535L20.2449 15.263C19.241 18.9749 15.8506 21.5674 12 21.5674C8.14928 21.5674 4.75893 18.975 3.75514 15.263L3.61735 14.7535L3.08968 14.7435C2.1614 14.7259 1.4062 13.9559 1.4062 13.0269C1.4062 12.5681 1.58487 12.1367 1.90873 11.8124C2.22458 11.4969 2.64397 11.3185 3.08954 11.3102L3.61731 11.3003L3.7551 10.7907C4.75893 7.07877 8.14933 4.48626 12 4.48626C13.2709 4.48626 14.3049 5.52022 14.3049 6.79114C14.3049 8.06207 13.2709 9.09607 12 9.09607C10.7291 9.09607 9.69512 8.06212 9.69512 6.79119H8.28887C8.28887 8.83753 9.95367 10.5023 12 10.5023C14.0463 10.5023 15.7111 8.83753 15.7111 6.79119C15.7111 6.20883 15.5759 5.65763 15.3358 5.16662C17.6944 6.16984 19.5468 8.20944 20.2449 10.7907L20.3826 11.3003L20.9104 11.3102C21.356 11.3186 21.7754 11.497 22.0907 11.8119C22.4151 12.1367 22.5938 12.5682 22.5938 13.0269C22.5938 13.9559 21.8386 14.726 20.9103 14.7435Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(0 0.000244141)"></rect></clipPath></defs></svg>
                                                children
                                            </p>
                                        </div>
                                        <div className="col-lg-6 d-flex justify-content-evenly align-items-center">
                                            <button className="minus" onClick={decreamentChild}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                                            <p>{child}</p>
                                            <button className="plus" onClick={increamentChild}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 ps-4">
                                            <p>Infant</p>
                                        </div>
                                        <div className="col-lg-6 d-flex justify-content-evenly align-items-center">
                                            <button className="minus" onClick={decreamentInfant}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                                            <p>{infant}</p>    
                                            <button className="plus" onClick={increamentInfant}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                                        </div>
                                         
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <select >
                                <option value="">Economy</option>
                                <option value="">Business</option>
                                <option value="">Executive</option>
                                <option value="">Commercial</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className="main_paramters">
                        <Col className="mb-3"> 
                            <div class="search-container from">
                                <input type="search" id="search-input" oninput="" onChange={handleChange} value={searchQuery} placeholder="From?"/>
                                <i class="fa fa-map-marker-alt" id="search-icon"></i>  
                            </div>
                        </Col>
                        <Col className="mb-3">
                            <div className="search-container to"> 
                                <input type="search" id="search-input" oninput="" placeholder="To?"/> 
                                <i class="fa fa-map-marker-alt" id="search-icon"></i>   
                            </div>
                        </Col>
                        <Col className="mb-3"> 
                            <div className="date">
                                <input type="date" oninput="" 
                                    id="dateInput"   
                                /> 
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="d-flex justify-content-center align-items-center pt-3">
                            <button className="search_flight" onClick={handleSearch}>Search Flights</button>
                        </div>
                    </Row>
                </div>   
                {/* the search flights result will be shown here o */}
                {searchResults.map(city => (
                    <div key={city.shortForm}>
                        <p>Name: {city.name}</p>
                        <p>Short Form: {city.shortForm}</p>
                        <p>Flight Number: {city.flightNumber}</p>
                        <p>Flight Price: {city.flightPrice}</p>
                    </div>
                ))}
            </div>
        </>
    )
}