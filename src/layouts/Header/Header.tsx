import * as SC from "./HeaderStyled"

import {ReactComponent as LogoMobSvg} from "../../assets/images/logo_mob.svg"

const Header:React.FC = () => {
    return (
      <SC.HeaderStyled>
        <LogoMobSvg />
        <SC.LinkCon>
          <a href="https://portfolio-aleks-berd.netlify.app/" target="_blank" rel="noreferrer">
            free consultation
          </a>
        </SC.LinkCon>
      </SC.HeaderStyled>
    );
}
 
export default Header;