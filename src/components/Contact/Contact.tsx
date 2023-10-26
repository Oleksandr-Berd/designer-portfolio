import * as SC from "./ContactStyled"

const Contact:React.FC = () => {
    return (
      <SC.CommonCon>
        <SC.InnerCon>
          <h2>Book a call with me</h2>
          <p>
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
          <div>
            <a
              href="https://portfolio-aleks-berd.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Free Consultation
            </a>
          </div>
        </SC.InnerCon>
      </SC.CommonCon>
    );
}
 
export default Contact;