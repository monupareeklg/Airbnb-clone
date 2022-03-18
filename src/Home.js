import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-42105190/original/e98ed7db-1126-4597-b356-32ee0e17c00c.jpeg?im_w=720"
          title="Entire house"
          description="Comfortable private places, with room for friends or family."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/7e5510e1-dff9-4190-bfb5-ded7d9064905.jpg?im_w=720"
          title="New house"
          description="Comfortable private places, with room for friends or family."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-32853159/original/27c0bc1e-ea41-47ff-8d6b-65b5bb6f888c.jpeg?im_w=720"
          title="Green ways house"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-42105190/original/e98ed7db-1126-4597-b356-32ee0e17c00c.jpeg?im_w=720"
          title="Entire house"
          description="Comfortable private places, with room for friends or family."
          price="$80/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/7e5510e1-dff9-4190-bfb5-ded7d9064905.jpg?im_w=720"
          title="New house"
          description="Comfortable private places, with room for friends or family."
          price="$100/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-32853159/original/27c0bc1e-ea41-47ff-8d6b-65b5bb6f888c.jpeg?im_w=720"
          title="Green ways house"
          description="Comfortable private places, with room for friends or family."
          price="$180/night"
        />
      </div>
    </div>
  );
};

export default Home;
