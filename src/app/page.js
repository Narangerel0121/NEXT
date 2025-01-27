import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="body">
      <div id="cardContainer">
        <div id="blackSide">
<div id="briefInfo">
<img src="Logo000 1.svg" id="companyLogo"/>
<p>Company Name</p>
<p>Tag Line Goes Here</p>
</div>
<img src="QR Code.svg" id="QR"/>
        </div>
        {/* <div id="vectors">
          <img src="Vector 8.svg"  id="blueVector"></img>
          <img src="Vector 9.svg"  id="orangeVector"></img>
          <img src="Vector 10.svg" id="purpleVector"></img>
        </div> */}
        <img src="Shape.svg" id="shape" />
        <div id="whiteSide">
          <div id="owner">
            <div id="ownerName">
              <p id="firstName">John</p>
              <p id="lastName">Doe</p>
            </div>
            <p id="occupation">Designer</p>
          </div>
          <div id="informations">
            <div className="iconWithText">
              <img src="akar-icons_phone.svg" className="icons" />
              <p className="infoText">000-123-456-7890</p>
            </div>
            <div className="iconWithText">
              <img src="line-md_email.svg" className="icons" />
              <p className="infoText">Email@yourdomain.com</p>
            </div>
            <div className="iconWithText">
              <img src="system-uicons_location.svg" className="icons" />
              <p className="infoText">Your address goes here<br />
                125 Street, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
