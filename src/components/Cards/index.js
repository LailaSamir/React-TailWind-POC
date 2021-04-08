import React from 'react';
import Argu from './../../assets/Arguments.jpg';
import Feed from './../../assets/Feeding.png';
import HappyFamily from './../../assets/HappyFamily.jpg';
import naughy from './../../assets/naughtyBoy.jpg' ;
import Sleepng from './../../assets/Sleeping.jpg' ;
import Space from './../../assets/Space.jpg' ;



const Cards = ({
    ...otherProps
}) => {
        return ( 
            <div className='flex flex-row flex-wrap py-14 y-20 justify-center '>
                {/*For Card*/}
                 <div className='w-full lg:w-2/6 xl:w-4/12 px-2.5 mb-5  '>
                    <div>
                        <img src={Argu} className='w-full'/>
                    </div>
                    <div className="p-2.5">
                        <ul>
                            <li className='list-none'>
                                <span className='font-bold text-base'>Title</span>
                            </li>
                            <li className='list-none'>
                                <span  className='text-base'>Description</span>
                            </li>
                        </ul>
                    </div>
                </div> 
               

                {/*For Card*/}
                <div className='w-full lg:w-3/6 xl:w-3/12 px-2.5 mb-5'>
                    <div>
                        <img src={Feed} className='w-full '/>
                    </div>
                    <div className="p-2.5">
                        <ul>
                            <li className='list-none'>
                                <span className='font-bold text-base'>Title</span>
                            </li>
                            <li className='list-none'>
                                <span className='text-base'>Description</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*For Card*/}
                <div className="w-full lg:w-3/6 xl:w-3/12 px-2.5 mb-5">
                    <div>
                        <img src={Sleepng} className='w-full '/>
                    </div>
                    <div className="p-2.5">
                        <ul>
                            <li className='list-none'>
                                <span  className='font-bold text-base'>Title</span>
                            </li>
                            <li className='list-none'>
                                <span className='text-base'>Description</span>
                            </li>
                        </ul>
                    </div>
                </div>


                {/*For Card*/}
                <div className="w-full lg:w-3/6 xl:w-3/12 px-2.5 mb-5">
                    <div>
                        <img src={naughy} className='w-full '/>
                    </div>
                    <div className="p-2.5">
                        <ul>
                            <li className='list-none'>
                                <span  className='font-bold text-base'>Title</span>
                            </li>
                            <li className='list-none'>
                                <span className='text-base'>Description</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*For Card*/}
                <div className="w-full lg:w-3/6 xl:w-3/12 px-2.5 mb-5">
                    <div>
                        <img src={HappyFamily} className='w-full '/>
                    </div>
                    <div className="p-2.5">
                        <ul>
                            <li className='list-none'>
                                <span  className='font-bold text-base'>Title</span>
                            </li>
                            <li className='list-none'>
                                <span className='text-base'>Description</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*For Card*/}
                <div className="w-full lg:w-3/6 xl:w-3/12 px-2.5 mb-5">
                    <div>
                        <img src={Space} className='w-full ' />
                    </div>
                    <div className="p-2.5">
                        <ul>
                            <li className='list-none'>
                                <span  className='font-bold text-base'>Title</span>
                            </li>
                            <li className='list-none'>
                                <span className='text-base'>Description</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
         );
    }

 
export default Cards;