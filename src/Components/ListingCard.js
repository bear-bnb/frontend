import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./ListingCard.css";
import { useNavigate } from 'react-router-dom';

export default function ListingCard({
  title,
  listingId,
  city,
  state,
  price,
  mainImageURL,
  rating,
}) {
  const roundPrice = price.split(".")[0];

  let navigate = useNavigate(); 
    const routeChange = () => { 
      if (listingId) {
          let path = `/listing/${listingId}`;
          navigate(path);
      } else {
          console.error("Invalid listing ID");
      }}

  return (
    <div className="listing-card" onClick={routeChange}>
      <div className="listing-card__image-container">
        <img 
          className="listing-card__image" 
          src={mainImageURL} 
          alt={title} 
        />
      </div>
      
      <div className="listing-card__content">
        <div className="listing-card__header">
          <div className="listing-card__location">
            {city}, {state}
          </div>
          <div className="listing-card__rating">
            <StarIcon className="listing-card__rating-icon" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="listing-card__info">
          {Math.floor(Math.random() * 101)} miles away
        </div>
        <div className="listing-card__info">
          Jan 26 – 31
        </div>

        <div className="listing-card__price">
          <span className="listing-card__price-amount">{roundPrice}</span>
          <span className="listing-card__price-text"> night</span>
        </div>
      </div>
    </div>
  )};