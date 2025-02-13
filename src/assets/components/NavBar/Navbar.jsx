import { useState } from "react";
import Link from "../Link/Link";
import { RxCross1 } from "react-icons/rx";

import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
    const [open,setOpen] = useState(false);


    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
      ]
      

    return (
        
        <nav className="p-6">
            <div className="md:hidden text-xl " onClick={() => setOpen(!open)}>
                {
                    open===true ?   <RxCross1 /> : <CiMenuBurger /> 
 
                }

            </div>

            <ul className={`md:flex absolute md:static duration-1000
            ${ open ? '' : 'hidden'}
             bg-yellow-300`} >
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;