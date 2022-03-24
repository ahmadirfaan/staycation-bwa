import React from "react";
import Button from "../elements/Button";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-auto"} style={{width: 350}}>
            <IconText/>
            <p className={"brand-tagline"}>
              We kaboom your beauty holiday instantly and remarkable
            </p>
          </div>
          <div className={"col-2 mr-5"}>
            <h6 className={"mt-2"}>For Beginners</h6>
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>
                <Button type={"link"} href={"/register"}>New Account</Button>
              </li>
              <li className={"list-group-item"}>
                <Button type={"link"} href={"/properties"}>Start Booking a Room</Button>
              </li>
              <li className={"list-group-item"}>
                <Button type={"link"} href={"/use-payment"}>Use Payments</Button>
              </li>
            </ul>
          </div>
          <div className={"col-2 mr-5"}>
            <h6 className={"mt-2"}>Explore Us</h6>
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>
                <Button type={"link"} href={"/career"}>Our Careers</Button>
              </li>
              <li className={"list-group-item"}>
                <Button type={"link"} href={"/privacy"}>Privacy</Button>
              </li>
              <li className={"list-group-item"}>
                <Button type={"link"} href={"/terms"}>Terms & Conditions</Button>
              </li>
            </ul>
          </div>
          <div className={"col-3"}>
            <h6 className={"mt-2"}>Connect Us</h6>
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>
                <Button isExternal type={"link"} href={"mailto:irfaan.hibatullah@gmail.com"}>irfaan.hibatullah@gmail.com</Button>
              </li>
              <li className={"list-group-item"}>
                <Button isExternal type={"link"} href={"tel:+62857-0712-1623"}>+6285707121623</Button>
              </li>
              <li className={"list-group-item"}>
                <span>Staycation, Mampang, Jakarta Selatan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={"row"}>
            <div className={"col text-center copyrights"}>
              Copyright 2022 - All right -  reserver Staycation
            </div>
          </div>
      </div>
    </footer>
  )
}