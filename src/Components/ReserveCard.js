import React, { createContext, useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../pages/listingPage.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


    
export default function ReserveCard(props) {
 

    return(
      <div className="reserve-card">
        {/* <LocalizationProvider className="date-pickers" dateAdapter={AdapterDayjs} >
                  <DemoContainer components={['DatePicker']} >
                      <DatePicker label="Check in"  />
                  </DemoContainer>
                  <DemoContainer components={['DatePicker']}>
                      <DatePicker label="Check out"
                      />
                  </DemoContainer>
              </LocalizationProvider> */}
          <Button className="reserve-btn" size="large" variant="contained">
            Reserve
          </Button>      
        </div>

    )
}



