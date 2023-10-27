import { useMediaQuery } from "usehooks-ts";

import * as SC from "./ServicesStyled";

import { ReactComponent as ServMob1 } from "../../assets/images/serv_mob1.svg";
import { ReactComponent as ServMob2 } from "../../assets/images/serv_mob2.svg";
import { ReactComponent as ServMob3 } from "../../assets/images/serv_mob3.svg";
import { ReactComponent as ServMob4 } from "../../assets/images/serv_mob4.svg";
import { ReactComponent as ServMob5 } from "../../assets/images/serv_mob5.svg";
import { ReactComponent as ServDesk5 } from "../../assets/images/serv_desk5.svg";
import { ReactComponent as ServMob6 } from "../../assets/images/serv_mob6.svg";
import { ReactComponent as ServDesk6 } from "../../assets/images/serv_desktop6.svg";


const Services: React.FC = () => {
 const isTablet = useMediaQuery("(min-width:768px) and (max-width:1439px)");
  const isDesktop = useMediaQuery("(min-width:1440px)");


  return (
    <>
      {isTablet ? (
        <SC.ServiceList>
          <li>
            <ServMob1 />
          </li>
          <li>
            <SC.ItemDoubleTablet>
              <ServMob2 />
              <ServMob3 />
            </SC.ItemDoubleTablet>
            <ServMob4 />
          </li>
          <li>
            <ServMob5 />
          </li>
          <li>
            <ServMob6 />
          </li>
        </SC.ServiceList>
      ) : isDesktop ? (
        <SC.ServiceList>
          <li>
            <ServMob1 />
          </li>
          <li>
            <SC.ItemDoubleTablet>
              <ServMob2 />
              <ServMob3 />
            </SC.ItemDoubleTablet>
            <ServMob4 />
          </li>
          <SC.CombineItemDesktop>
            <ServDesk5 />
            <ServDesk6 />
          </SC.CombineItemDesktop>
        </SC.ServiceList>
      ) : (
        <SC.ServiceList>
          <li>
            <ServMob1 />
          </li>
          <SC.ServicesItemDouble>
            <ServMob2 />
            <ServMob3 />
          </SC.ServicesItemDouble>
          <li>
            <ServMob4 />
          </li>
          <li>
            <ServMob5 />
          </li>
          <li>
            <ServMob6 />
          </li>
        </SC.ServiceList>
      )}
    </>
  );
};

export default Services;
