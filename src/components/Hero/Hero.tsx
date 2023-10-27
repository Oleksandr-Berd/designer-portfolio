import { useMediaQuery } from "usehooks-ts";

import * as SC from "./HeroStyled";

import { ReactComponent as HeroMobSvg } from "../../assets/images/hero_mob.svg";
import { ReactComponent as HeroTabletSvg } from "../../assets/images/hero_image_tablet.svg";
import { ReactComponent as HeroDeskSvg } from "../../assets/images/hero_desk.svg";


const Hero = () => {
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1440px)");

  return (
    <>
      {isTablet ? (
        <SC.CommonCon>
          <SC.ImageCon>
            {isDesktop ? <HeroDeskSvg /> : <HeroTabletSvg />}
          </SC.ImageCon>
          <SC.ContentCon>
            <SC.Title>
              I’m Amy, and I’d love to work on your next project
            </SC.Title>
            <SC.Paragraph>
              I love working with others to create beautiful design solutions.
              I’ve designed everything from brand illustrations to complete
              mobile apps. I’m also handy with a camera!
            </SC.Paragraph>
            <SC.LinkCon>
              <a
                href="https://portfolio-aleks-berd.netlify.app/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                Free Consultation
              </a>
            </SC.LinkCon>
          </SC.ContentCon>
        </SC.CommonCon>
      ) : (
        <SC.CommonCon>
          <SC.ImageCon>
            <HeroMobSvg />
          </SC.ImageCon>
          <div>
            <SC.Title>
              I’m Amy, and I’d love to work on your next project
            </SC.Title>
            <SC.Paragraph>
              I love working with others to create beautiful design solutions.
              I’ve designed everything from brand illustrations to complete
              mobile apps. I’m also handy with a camera!
            </SC.Paragraph>
          </div>
          <SC.LinkCon>
            <a
              href="https://portfolio-aleks-berd.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Free Consultation
            </a>
          </SC.LinkCon>
        </SC.CommonCon>
      )}
    </>
  );
};

export default Hero;
