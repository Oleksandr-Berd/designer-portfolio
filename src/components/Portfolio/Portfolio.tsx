
import * as SC from "./PortfolioStyled"

import portfolio1 from "../../assets/images/portfolio1.svg"
import portfolio2 from "../../assets/images/portfolio2.svg";
import portfolio3 from "../../assets/images/portfolio3.svg";
import portfolio4 from "../../assets/images/portfolio4.svg";
import portfolio5 from "../../assets/images/portfolio5.svg";

const Portfolio = () => {
  return (
    <SC.CommonCon>
      <SC.Title>My Work</SC.Title>
      <SC.CarouselStyled data-bs-theme="dark">
        <SC.Item>
          <img className="d-block w-100" src={portfolio1} alt="First slide" />
        </SC.Item>
        <SC.Item>
          <img className="d-block w-100" src={portfolio2} alt="Second slide" />
        </SC.Item>
        <SC.Item>
          <img className="d-block w-100" src={portfolio3} alt="Third slide" />
        </SC.Item>
        <SC.Item>
          <img className="d-block w-100" src={portfolio4} alt="forth slide" />
        </SC.Item>
        <SC.Item>
          <img className="d-block w-100" src={portfolio5} alt="fifth slide" />
        </SC.Item>
      </SC.CarouselStyled>
    </SC.CommonCon>
  );
};

export default Portfolio;
