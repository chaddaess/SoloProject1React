import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return(
        <footer className="flex-box-footer">
            <FontAwesomeIcon  className="MyIcon" id="FirstIcon" icon={faLinkedinIn}></FontAwesomeIcon>
            <FontAwesomeIcon className="MyIcon" icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon className="MyIcon" icon={faFacebookF}></FontAwesomeIcon>

        </footer>
    )
}