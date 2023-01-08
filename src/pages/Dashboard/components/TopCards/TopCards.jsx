import React from "react";
import MiniCard from "./components/MiniCard/MiniCard";
import "./TopCards.css";

import sales from "../../../../assets/images/sales.jpg";
import comInf from "../../../../assets/images/com-inf.jpg";

import influencers from "../../../../assets/images/influencers.jpg";
import money from "../../../../assets/images/money.jpg";

import sold from "../../../../assets/images/sold-products.jpg";
import commission from "../../../../assets/images/commission.jpg";

const TopCards = () => {
  return (
    <div className="TopCards">
      <MiniCard img={money} title={"Sales"} value={"12035"} />
      <MiniCard img={sales} title={"Sales Number"} value={"12035"} />
      <MiniCard img={influencers} title={"Influencers"} value={"12035"} />
      <MiniCard img={commission} title={"Commission"} value={"12035"} />
      <MiniCard img={comInf} title={"Influencers Commission"} value={"12035"} />
      <MiniCard img={sold} title={"Sold Products Number"} value={"12035"} />
    </div>
  );
};

export default TopCards;
