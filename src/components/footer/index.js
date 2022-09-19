import React from "react";
import { Wrapper } from "./styles/footer";

const Footer = () => {
    return (
        <div id="contact">
            <Wrapper>
                <a href="#home">
                    <img
                        src="images/my_logos/my_logo_blue.png"
                        alt=""
                        style={{ height: "80px" }}
                    />
                </a>
                <div
                    style={{
                        marginTop: "20px",
                    }}
                >
                    <a
                        style={{
                            marginRight: "20px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#101b3b",
                            textDecoration: "none",
                        }}
                        href="https://github.com/AshishBansal-Official"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </div>
                <br />
                <span
                    style={{
                        color: "#101b3bcc",
                    }}
                >
                    © 2022 Ashish Bansal. All rights reserved.
                </span>
            </Wrapper>
        </div>
    );
};

export default Footer;
