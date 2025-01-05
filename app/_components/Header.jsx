import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header id="header">
      {/** 
      <div id="top">
        <img
          src="/indianhealthguru.com-images/phone-whatsapp.png"
          alt="whatsapp"
          width={25}
          height={25}
          style={{ verticalAlign: "top-middle" }}
        />
        <Link href="tel:+91-9371136499"> +91-9371136499</Link> &nbsp;
        <Link
          href="//www.indianhealthguru.com/online-video-consultants.html"
          className="online-consult-button"
        >
          <i className="fa fa-user-md" style={{ fontSize: "20px" }}></i> Online
          Video Consultation
        </Link>{" "}
        &nbsp;
        <Image
          src="/indianhealthguru.com-images/email-icon.gif"
          alt="call us"
          width={25}
          height={25}
          style={{ verticalAlign: "middle" }}
        />
        <Link href="mailto:contact@indianhealthguru.com">
          contact@indianhealthguru.com
        </Link>
      </div>
      */}

      <div id="logo">
        <a href="//www.indianhealthguru.com">
          <Image
            src="/indianhealthguru.com-images/logo.png"
            alt="Indian Healthguru"
            width={327}
            height={71}
          />
        </a>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-indian-health-guru">
              About - Indian Health Guru
            </Link>
          </li>
          <li>
            <Link href="/medical-services-india">Services</Link>
          </li>
          <li>
            <Link href="contact-health-guru-india">Contact Us</Link>
          </li>
        </ul>

        <div style={{ clear: "both" }} />

        <ul>
          <li>
            <Link href="/medical-tourism-india">Medical Tourism to India</Link>
          </li>
          <li>
            <Link href="/hospital-clinic-india">Hospitals and Clinics</Link>
          </li>
          <li>
            <Link href="/surgeons-doctors-india">Surgeons and Physicians</Link>
          </li>
          <li>
            <Link href="/surgery-medical-treatment-india">
              Medical Treatments
            </Link>
          </li>
        </ul>

        <div style={{ clear: "both" }} />

        <ul>
          <li>
            <Link href="/price-cost-surgery-india">Price Comparisons</Link>
          </li>
          <li>
            <Link href="/medical-tourism-india-questions">FAQs</Link>
          </li>
          <li>
            <Link href="/medical-tourism-india-articles">Articles</Link>
          </li>
          <li>
            <Link href="/press-medical-tourism-india">Press</Link>
          </li>
        </ul>

        <div style={{ clear: "both" }} />
      </div>
    </header>
  );
};

export default Header;
