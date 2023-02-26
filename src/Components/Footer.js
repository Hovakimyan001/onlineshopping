import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare,AiFillLinkedin} from 'react-icons/ai'
export default function Footer() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Sell Cart Pvt Ltd</h3>
                <p className="footer-company-name">Sell Cart Pvt Ltd © 2015</p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+1.555.555.5555</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.
                </p>
                <div className="footer-icons">
                    <a href="/"><AiFillFacebook /></a>
                    <a href="/"><AiFillInstagram /></a>
                    <a href="/"><AiFillTwitterSquare /></a>
                    <a href="/"><AiFillLinkedin /></a>

                </div>

            </div>

        </footer>
    )
}
