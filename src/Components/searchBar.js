import React from "react";
import { Button, ButtonGroup, Box, TextField, Autocomplete, Typography, filledInputClasses } from '@mui/material';
import GoogleMaps from "./searchBar-google";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css'

export default function SearchBar() {
    return(
        <div className="search-bar"> 
        {/* this grouped everything together */}
            <ButtonGroup className="check">
                {/* google maps, get your own API key */}
            <GoogleMaps />
            {/* date pickers */}
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DatePicker']} >
                    <DatePicker label="Check in"  />
                </DemoContainer>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Check out"
                     />
                </DemoContainer>
            </LocalizationProvider>
            {/* who button for modal */}
            <Button variant="outlined" className="who" sx={{borderColor: "white"}}>Who</Button>
            {/* search icon */}
            <Button variant="contained" className="search" endIcon={<SearchIcon className="search-icon" />} sx={{ width:80, height:56, borderRadius:50, backgroundColor:"#FF3131"}}>
            </Button>
            </ButtonGroup>
            {/* <div className="who-modal">
                <p>Children</p>
                <p>Adults</p>
            </div> */}
        </div>
    );
}
