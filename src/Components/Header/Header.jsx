import { useEffect, useRef, useState } from "react";
import './Header.styles.css';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../Assets/2.png';

export default function Header() {
    const navRef = useRef();
	const [activeSection, setActiveSection] = useState(null);
	const observer = useRef(null);

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


	window.addEventListener("scroll", function() {
		if(!menuOpen){
		const header = document.querySelector(".header");
		const offset = header.offsetHeight;
	  
		if (window.scrollY >= offset) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}
	  })
	  
	  const [size, setSize] = useState({
		width: 0,
		height: 0,
	  });
	  const [menuOpen, setMenuOpen] = useState(false);

	  useEffect(() => {
		const handleResize = () => {
		  setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		  });
		};
		window.addEventListener("resize", handleResize);
	
		return () => window.removeEventListener("resize", handleResize);
	  }, []);
	
	  useEffect(() => {
		if (size.width > 1023 && menuOpen) {
		  setMenuOpen(false);
		}
	  }, [size.width, menuOpen]);





	//   useEffect(() => {
	// 	//create new instance and pass a callback function
	// 		observer.current = new IntersectionObserver((entries) => {
	// 		  const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
	// 	//Update state with the visible section ID
	// 		  if (visibleSection) {
	// 			setActiveSection(visibleSection.id);
	// 		  }
	// 		});
		
	// 	//Get custom attribute data-section from all sections
	// 		const sections = document.querySelectorAll('[data-section]');
		
	// 		sections.forEach((section) => {
	// 		  observer.current.observe(section);
	// 		});
	// 	//Cleanup function to remove observer
	// 		return () => {
	// 		  sections.forEach((section) => {
	// 			observer.current.unobserve(section);
	// 		  });
	// 		};
	// 	  }, []);
	// 	  const activeStyle = {
	// 		fontWeight: 'bold',
	// 		color: 'red',
	// 		textDecoration: 'underline',
	// 	  };
	  


	return (
		<header className="header">
			<img src={Logo} alt='logo' className="logoImage" />
			<nav ref={navRef}>
				<a onClick={() => smoothScrollTo("homeSection")}>Home</a>
				<a onClick={() => smoothScrollTo("aboutSection")}>About</a>
				<a onClick={() => smoothScrollTo("serviceSection")}>Services</a>
				<a onClick={() => smoothScrollTo("profileSection")}>Portfolio</a>
				<a onClick={() => smoothScrollTo("blogSection")}>Blog</a>
				<a onClick={() => smoothScrollTo("QuoteSection")}>Contact</a>
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
