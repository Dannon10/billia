/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <div className='footer-description'>
                    <Image 
                        src='/images/billia-logo-white.png' 
                        alt='Billia Logo' 
                        width={150} 
                        height={50} 
                        className='logo' 
                    />
                    <p>Our all-in-one app for bills, airtime, data, and smart payments - powered by Billia Ai.</p>
                    <div className='foot-icons'>
                        <FaFacebookF /> <FaXTwitter /> <FaInstagram />
                    </div>
                </div>

                <div className='footer-lists'>
                    <ul className='footer-list'>
                        <h5>Company</h5>
                        <li><Link href="/about">About us</Link></li>
                        <li>Features</li>
                        <li>Testimonials</li>
                        <li>Services</li>
                        <li>FAQ</li>
                    </ul>

                    <ul className='footer-list'>
                        <h5>Legal</h5>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                    <ul className='footer-list'>
                        <h5>Contact Us</h5>
                        <li>Billiainfo@gmail.com</li>
                        <li>08023437727</li>
                    </ul>
                </div>
            </div>
            <div className='copy'>&copy; 2025 Billia Technologies. All rights reserved.</div>
        </footer>
    )
}
