import * as SC from "./HeroStyled"

import {ReactComponent as HeroMobSvg} from "../../assets/images/hero_mob.svg"

const Hero = () => {
    return (
      <SC.CommonCon>
        <SC.ImageCon>
          <HeroMobSvg />
        </SC.ImageCon>
        <div>
          <SC.Title>I’m Amy, and I’d love to work on your next project</SC.Title>
          <SC.Paragraph>
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </SC.Paragraph>
        </div>
        <SC.LinkCon>
          <a
            href="https://portfolio-aleks-berd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Free Consultation
          </a>
        </SC.LinkCon>
      </SC.CommonCon>
    );
}
 
export default Hero;