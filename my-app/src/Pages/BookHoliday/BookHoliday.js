import React from 'react';
import Footer from '../../Component/Home_Pg/Footer/Footer';
import Booking from '../../Component/BookHoliday/Booking';
import Content from '../../Component/BookHoliday/Content';
import { useAuth0 } from '@auth0/auth0-react';

function BookHoliday(props) {
    const {isAuthenticated } = useAuth0();
    return (
        <div>

            {
              isAuthenticated ? <><Booking></Booking>  <Footer></Footer> </>:  <Content></Content>
            }
           
            
           
        </div>
    );
}

export default BookHoliday;