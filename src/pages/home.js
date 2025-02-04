import React, { useState, useContext } from 'react';
import './home.css';
import SearchBar from '../Components/searchBar';
import ListingCard from '../Components/ListingCard';
import { ListingContext } from '../context/ListingContext'


export default function Home() {
    const { listingArray }  = useContext(ListingContext);
    // console.log(listingArray)

    return(
        <>
            <SearchBar />
            <div class="listing-card-section">
                {listingArray.map((listing, index) => (
                    <ListingCard 
                        key = {index}
                        listingId = {listing.listing_id}
                        title = {listing.listing_title}
                        address = {listing.listing_address}
                        city = {listing.listing_city}
                        state = {listing.listing_state}
                        price = {listing.price_per_night}
                        rating = {listing.full_rating}
                        mainImageURL = {listing.main_image_url}
                        listImageURL = {listing.list_image_url}
                        access = {listing.listing_access}
                        maxGuest = {listing.listing_max_guest}
                        bedrooms = {listing.listing_bedrooms}
                        baths = {listing.listing_baths}
                        selfCheckin = {listing.is_self_checkin}
                        peaceful = {listing.is_peaceful}
                        funTip = {listing.fun_tip}
                        spaceDesc = {listing.space_description}
                        // guestAccess = {guest_access}
                        notes = {listing.notes}
                        cleaningFee = {listing.cleaning_fee}
                        serviceFee = {listing.service_fee}
                        numberReviews = {listing.number_reviews}
                        onWishList = {listing.on_wishlist}
                        numBeds = {listing.num_beds}
                        // pets_allowed,
                        // instant_book,
                        // property_type,
                        // views,
                        // listing_tag,
                        // accessibility,
                        // checkin_time,
                        // checkout_time,
                        // allows_parties,
                        // smoking_allowed,
                        // wifi,
                        // kitchen,
                        // laundry,
                        // air_conditioning,
                        // heating,
                        // pool,
                        // free_parking,
                        // gym,
                        // coffee_maker,
                        // free_breakfast,
                        // created_at,
                        // updated_at
                    /> 
                ))}
            </div>
        </>
    );
}

