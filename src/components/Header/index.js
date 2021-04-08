//useState is a react hook
import React , { useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from './../../assets/Logo.svg';



const Header = ({
    ...otherProps 
}) => { 

    //the use of useState
    const [active , setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    };

        return ( 


            //--------------------------------------Header--------------------------------------------------//
            <header className="bg-white relative">

                <div className='max-w-7xl mx-auto flex item-center justify-between px-2.5' >

                   {/* logo */}
                    <div className='w-14'>
                        <img src={Logo} alt='logo' className='w-full h-20'/>
                    </div> 

                    {/*Burger Icon*/}
                    <div onClick={onClick}
                      className={`
                        md:hidden
                      `}
                    > 
                    MENU    
                    </div>

                    {/*navBar*/ }
                    <nav
                        className = {`
                                ${!active && 'hidden'}
                                absolute flex flex-col bg-white top-full w-full left-0 z-20
                                md:static md:w-auto  md:flex 
                            `}
                    >
                        <ul className="bg-white md:flex-row md:flex h-full mt-4" >
                            <li className='list-none '>
                                <Link className='li' >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className='li' >Services</Link>
                            </li>
                            <li>
                                <Link className='li' >About Us</Link>
                            </li>
                            <li>
                                <Link className='li' >Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                   
            </header>

            /**--------------------------------------------------------------------------- */



         );
    };

 
export default Header;