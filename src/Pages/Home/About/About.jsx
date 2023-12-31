import React from 'react';
import './About.css'
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div className='aboutBg lg:flex p-10 text-black'>
            <Helmet>
                <title>ToysLand | About</title>
            </Helmet>
            <div className='about md:w-full lg:w-1/2' data-aos="fade-up"
                data-aos-duration="2000">

            </div>
            <div className='aboutText  md:w-full lg:w-1/2 relative'>
                <div className='absolute flex justify-center items-center h-full'>
                    <div className='p-5  overflow-y-hidden' data-aos="fade-up"
                        data-aos-duration="2000">
                        <h2 className='text-2xl font-semibold'>About us</h2>
                        <p className='overflow-y-hidden'>
                            Welcome to ToysLand, the ultimate online destination for all toy enthusiasts! Our virtual toy emporium is a wonderland where children and adults alike can explore a vast collection of toys that ignite the imagination and bring joy to every playtime. From classic toys that have stood the test of time to the latest innovative creations, ToysLand is your gateway to a world of endless fun and adventure.
                        </p>
                        <br />
                        <p className='overflow-hidden'>Learning Through Play. Toys are not just for fun; they are powerful learning tools. At ToysLand, we offer also a wide array of educational toys that make learning engaging and exciting.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;