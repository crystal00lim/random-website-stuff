import './NavBar.css'
import logo from '../../assets/logo.svg'; // Consider importing a component version of the svg so that the color(fill) can be changed easier. 
import { useState, useEffect } from 'react';

/* This is probably gonna change in payload... */
const pages = {
    science: '/#/science',
    community: '/#/community',
    about: '/#/about',
    resources: '/#/resource',
} as const;

export default function NavBar() {

  //KEEP THIS SECTION OF CODE ////////////////////////////////////////////////////////////////////////////////////////
   
    // Use state to track whether the user has scrolled down
    const [isScrolled, setIsScrolled] = useState(false);

    // useEffect hook to add and remove the scroll event listener
    useEffect(() => {
        // Function to detect the scroll event
        const detectScroll = () => {
            // Check if the page has been scrolled more than 50 pixels
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', detectScroll);

        return () => {
            window.removeEventListener('scroll', detectScroll);
        };
    }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <nav className='navbar navbar-expand-lg' id='navbar' style={{ padding: isScrolled ? '5px 10px' : '30px 10px', }}>
            <a className="navbar-brand" href='/' style={{ fontSize: isScrolled ? '25px' : '35px', }}>
                <img src={logo} alt="Logo" className="nav-logo" />  // Consider using a <Svg /> instead for more flexibility
                ASPARTIC
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">
                    {Object.keys(pages).map((page) => (
                        <li className="nav-item" key={page}>
                            <a className="nav-link" href={pages[page as keyof typeof pages]}>
                                {page.charAt(0).toUpperCase() + page.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    )
}
