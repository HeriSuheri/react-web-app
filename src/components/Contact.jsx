import "../styles/Contact.css";
import parse from "html-react-parser";
const Contact = ({contactSection}) => {
  return (
    <div id="contact">
      <div className="wrapperContact">
        <div className="footer">
          {contactSection.map((item, index) => {
            return <div className="footer-section">{parse(item.content)}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
