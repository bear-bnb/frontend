import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './listingPage.css'

import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Rating from '@mui/material/Rating';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

import { SpaceBar } from '@mui/icons-material';
import ReserveCard from '../Components/ReserveCard';


export default function Listing() {
    const { listingId } = useParams();
    const [listing, setListing] = useState(null); // State to store listing details
    const [error, setError] = useState(null); // State to store errors

    const fetchListing = async () => {
        try {
            const res = await axios.get(`http://localhost:5004/api/listing/${listingId}`);
            if (res.data.success) {
                console.log("Fetched listing data:", res.data.data);
                setListing(res.data.data); // Save data to state
            } else {
                console.warn("Listing not found or invalid response:", res.data.message);
                setError("Listing not found");
            }
        } catch (error) {
            console.error("Error fetching listing:", error);
            setError("Failed to fetch listing. Please try again later.");
        }
    };

    useEffect(() => {
        fetchListing();
    }, [listingId]);

// Date variables for cancellation date 14 days from current date
    // variable for current date
    let date = new Date();
    //setDate sets the day of the month for the current date. In this instance instead of a number we are using getDate (returns the current day of the month and using here to make it dynamic) plus 14. This is to add two weeks to the current date to make the cancellation date correct.
    let datePlus = date.setDate(date.getDate()+14);
    // this gives us the date form of the date we created above so we can use the variable below
    let cancelDay = new Date(datePlus);
    // now we use the cancel date and turn it into month and day only.
    let cancelDayText = cancelDay.toLocaleDateString ('en-us', {month:"long", day:"numeric"})


    // Render the listing details or error message
    return (
        <div className="listing-container">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {listing ? (
                <div>
                    <h1>{(listing.listing_title).charAt(0).toUpperCase() + (listing.listing_title).slice(1)}</h1>
                    <div className="img-gallery-container">
                    <img className="main-img" src={listing.main_image_url}/>
                        <div className="child-image-grid">
                            <img src={listing.list_image_url[1]}/>
                            <img  src={listing.list_image_url[2]}/>
                            <img  src={listing.list_image_url[3]}/>
                            <img  src={listing.list_image_url[4]}/>
                        </div>
                        {/* src={listing.list_image_url[1]} */}
                    </div>
                    <h2>{listing.guest_access} in {listing.listing_city}</h2>
                    <p>{listing.listing_max_guest} guests · {listing.listing_bedrooms} bedrooms · {listing.num_beds} beds · {listing.listing_baths} baths</p>

                    {(listing.full_rating >= 4 && listing.number_reviews > 200) ? (
                    <div className="guest-favorite-panel">
                        <div className="block1">
                            <div className="trophy-block">
                                <EmojiEventsOutlinedIcon />
                                <h3>Guest Favorite</h3>
                                <EmojiEventsOutlinedIcon />
                            </div>
                        </div>
                        <div className="text-block">
                            <h4>One of the most loved homes on BearBnB, according to guests.</h4>
                        </div>
                        <div className="rating-block">
                            <h3>{listing.full_rating}</h3>
                            <Rating readOnly size="small" name="half-rating" color='#000000' defaultValue={listing.full_rating} precision={0.5}/>
                        </div>
                        <div className="review-block">
                            <h3>{listing.number_reviews} Reviews</h3>
                        </div>
                    </div>
                    ) : (
                        <Stack alignItems="center" direction="row" gap={0.5}>
                            <StarIcon sx={{ fontSize: 25}}/>
                            <h4><strong>{listing.full_rating}</strong> · {listing.number_reviews} Reviews</h4>
                        </Stack>
                    )}
                    
                    <div className="host-section">
                        <img className="host-img" src={listing.user_image_url}/>
                        <h3 className="hosted-by">Hosted by {listing.user_first_name}</h3>
                        <p className="superhost-years">{listing.is_superhost ? 
                            `Superhost • ${Number(new Date().getFullYear()) - Number((listing.date_hosted).slice(0, 4))} year(s) hosting` 
                            : `${Number(new Date().getFullYear()) - Number((listing.date_hosted).slice(0, 4))} year(s) hosting`}</p>
                    </div>
                    <hr></hr>
                    <div className="space-extras">
                        {(listing.is_self_checkin === true) ? (
                            <div className="self-check-in">
                                <DoorFrontOutlinedIcon /> 
                                <div className="extras-block">
                                <h3>Self check-in</h3>
                                <p>Check yourself in with the smartlock.</p>
                                </div>
                            </div>
                        ) : (null)}
                        {(listing.is_peaceful === true) ? (
                            <div className="peaceful">
                                <LocationOnOutlinedIcon /> 
                                <div className="extras-block">
                                <h3>Peace and quiet</h3>
                                <p>Guests say this home is in a quiet area.</p>
                                </div>
                            </div>
                        ) : (null)}
                        <div className="cancel-date">
                            <DateRangeOutlinedIcon />
                            <div className="extras-block">
                            <h3>Free cancellation before {cancelDayText}</h3>
                            <p>Get a full refund if you change your mind.</p>
                            </div>

                        </div>
                        <hr></hr>
                    </div>
                    <p>{listing.space_description}</p>
                    {/* <p><strong>Address:</strong> {listing.listing_address}</p>
                    <p><strong>City:</strong> {listing.listing_city}, {listing.listing_state}</p>
                    <p><strong>Price per Night:</strong> {listing.price_per_night}</p>
                    <p><strong>Description:</strong> {listing.space_description}</p>
                    <p><strong>Rating:</strong> {listing.full_rating}/5</p> */}
                </div>

            ) : (
                !error && <p>Loading listing details...</p>
            )}
            <ReserveCard 
            />
        </div>
    );
}
