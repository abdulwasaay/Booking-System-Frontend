import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/hotels-styles/header.css";

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header style={{background:"black"}}>
			<h3 className="logo">
                <span className='raw'>RAW</span>
                <span className='explorer' style={{color:"white"}}>-TheExplorers</span>
            </h3>

			<nav ref={navRef}>
				<a href="/home">Home</a>
				<a href="/about">About</a>
				<a href="/hotels">Hotels</a>
				<a href="/flights">Flights</a>
                <a href="/buses">Buses</a>
                <button className="btg">
                    Login
                </button>
                <button className="btr" >
                    Register
                </button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes style={{ marginTop: "30", color:"#ffa500"}} />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars style={{color:"#ffa500"}} />
			</button>
		</header>
	);
}

export default Header;

 