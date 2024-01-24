import { useRef } from "react";
import './Header.styles.css';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../Assets/2.png';

export default function Header() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const smoothScrollTo = (elementId) => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
            showNavbar(); // Hide the navbar after clicking on a link
        }
    };

	return (
		<header>
			<img src={Logo} alt='logo' className="logoImage" />
			<nav ref={navRef}>
				<a onClick={() => smoothScrollTo("homeSection")}>Home</a>
				<a onClick={() => smoothScrollTo("aboutSection")}>About</a>
				<a onClick={() => smoothScrollTo("serviceSection")}>Services</a>
				<a onClick={() => smoothScrollTo("profileSection")}>Portfolio</a>
				<a onClick={() => smoothScrollTo("blogSection")}>Blog</a>
				<a onClick={() => smoothScrollTo("contactSection")}>Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
		<FaBars />
			</button>
		</header>
    )
}
