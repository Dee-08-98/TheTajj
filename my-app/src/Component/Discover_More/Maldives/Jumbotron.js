import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../../Component/Discover_More/Maldives/Jumbotron.css'

function Jumbotron(props) {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 1200,
            offset: 20,
            easing: 'ease-in-sine',
            delay: 20,
            
        });
    }, []);

    return (
        <>
            <div className="container-fluid pb-5" id="jumbodesmoreMaldives">
                <div className="container" id='innerContent'>
                    <div className='inner '>
                        <h2 data-aos="zoom-in"> Wonderfull Maldives </h2>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Jumbotron;