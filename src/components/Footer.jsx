import logo from "../image/logo.png"
import "./footer.css"


const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-logo">
      <img src={logo} alt="" />
    </div>
    <div className="footer-text">
      <p>Made with ❤️ and React.js</p>
    </div>
   </div>
  )
}

export default Footer