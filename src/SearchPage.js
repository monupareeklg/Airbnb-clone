import { Button } from "@mui/material";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-45885893/original/e9c45383-c6cb-45b7-874d-c782671dbd36.jpeg?im_w=720"
        location={"Private room in center of London"}
        title="StayVista at Hamptons Charm - 5BR w/ Pool"
        description={"12 . guests . 5 bedrooms . 5 beds . 5 bathrooms"}
        star={4.73}
        price="₹60,629/ night"
        total="₹4,24,402 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-32857107/original/b1032855-6c64-4fc6-a899-e44e128dbe0a.jpeg?im_w=720"
        location={"Navi Mumbai, Maharashtra, India"}
        title="Farm-Stay with Private Pool & Lawn near Panvel"
        description={"16 . guests . 4 bedrooms . 4 beds . 5.5 bathrooms"}
        star={4.83}
        price="₹8,379/ night"
        total="₹68,071 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b56d2511-efdd-4966-bfb6-463073b104ea.jpg?im_w=720"
        location={"Alibag, Maharashtra, India"}
        title="Kapadia Bunglow"
        description={"10 guests . 4 bedrooms . 4 beds . 5 bathrooms"}
        star={4.73}
        price="₹36,000/ night"
        total="₹2,87,577 total"
      />
    </div>
  );
};

export default SearchPage;
