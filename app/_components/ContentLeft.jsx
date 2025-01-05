import Image from "next/image";
import Link from "next/link";

const ContentLeft = () => {
  return (
    <aside id="content-left">
      <div id="google_translate_element"></div>
      <div className="quick-link margin-top-10">
        <h2 className="left-heading font-18">Search</h2>
        <div className="social">
          <form
            action="//www.indianhealthguru.com/search-result.htm"
            id="cse-search-box"
          >
            <input
              type="hidden"
              name="cx"
              value="012015249591328587163:khefo1bihso"
            />
            <input name="cof" value="FORID:9" type="hidden" />
            <input name="ie" value="UTF-8" type="hidden" />
            <p className="aligncenter">
              <input
                name="q"
                type="text"
                placeholder="Search"
                className="last_link"
                size="12"
              />
            </p>
            <p className="aligncenter">
              <input
                name="sa"
                type="image"
                src="/indianhealthguru.com-images/search-button.png"
                alt="Search"
                className="searchbtn"
              />
            </p>
          </form>
        </div>
      </div>
      <div className="aligncenter img-opcity margin-top-10">
        <Link href="//www.indianhealthguru.com/surgery-india-testimonials.html">
          <Image
            src="/indianhealthguru.com-images/leftbar/International-Patient-video.jpg"
            width={148}
            height={101}
            alt="International Patient video"
          />
        </Link>
      </div>
      <div className="aligncenter img-opcity margin-top-10">
        <Link href="//www.indianhealthguru.com/dental-ads-2014.html">
          <Image
            src="/indianhealthguru.com-images/leftbar/Dental-Implant-India.jpg"
            width={148}
            height={101}
            alt="Testimonials & Patient Experiences"
          />
        </Link>
      </div>
      <div className="aligncenter img-opcity margin-top-10">
        <Link href="//www.indianhealthguru.com/experience-surgery-india.html">
          <Image
            src="/indianhealthguru.com-images/leftbar/Patient-Testimonials.jpg"
            width={148}
            height={101}
            alt="Testimonials & Patient Experiences"
          />
        </Link>
      </div>
      <div className="quick-link margin-top-10">
        <h2 className="left-heading font-18">Keep in Touch</h2>
        <div className="social">
          <a
            href="//www.facebook.com/IndianhealthguruConsultant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="indianhealthguru.com-images/facebook.png"
              height="35"
              width="35"
              alt="facebook"
              title="facebook"
            />
          </a>
          <a
            href="https://twitter.com/IndianHealthGur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="indianhealthguru.com-images/twitter.png"
              height="35"
              width="35"
              alt="Twitter"
              title="Twitter"
            />
          </a>
          <a
            href="http://www.youtube.com/user/theIndianhealthguru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="socialimg"
              src="indianhealthguru.com-images/youtube.png"
              height="35"
              width="35"
              alt="youtube"
              title="youtube"
            />
          </a>
          <a
            href="http://www.indianhealthguru.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/indianhealthguru.com-images/blog.png"
              height={35}
              width={35}
              alt="blog"
              title="blog"
            />
          </a>
          <a
            href="http://www.linkedin.com/company/indianhealthguru-consultants-pvt-ltd-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/indianhealthguru.com-images/linkedin.png"
              height={35}
              width={35}
              alt="linkedin"
              title="linkedin"
            />
          </a>
          <a
            href="https://in.pinterest.com/indianhealthguru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/indianhealthguru.com-images/pinterest.png"
              height={35}
              width={35}
              alt="pinterest"
              title="pinterest"
            />
          </a>
          <a
            href="http://indianhealthguru.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/indianhealthguru.com-images/tumblr.png"
              height={35}
              width={35}
              alt="stumbleupon"
              title="Tumblr"
            />
          </a>
        </div>
      </div>
      <div className="quick-link2 margin-top-10">
        <ul className="side-menu2">
          <li className="dental-bg">
            <Link href="//www.indianhealthguru.com/dental-surgery-India-low-cost-benefits.html">
              Dental surgery India
            </Link>
          </li>
          <li className="eye-bg">
            <Link href="//www.indianhealthguru.com/eye-surgery-India-low-cost-benefits.html">
              Eye surgery India
            </Link>
          </li>
          <li className="heart-bg">
            <Link href="//www.indianhealthguru.com/heart-failure-surgery-treatment-India-low-cost-advantages.html">
              Heart Treatment India
            </Link>
          </li>
          <li className="cardiac-bg">
            <Link href="//www.indianhealthguru.com/cardiac-best-surgeons-top-hospitals-surgery-India.html">
              Cardiac Hospitals India
            </Link>
          </li>
          <li className="eyeh-bg">
            <Link href="//www.indianhealthguru.com/eye-surgery-best-surgeons-top-hospitals-India.html">
              Eye Hospitals India
            </Link>
          </li>
          <li className="dentalh-bg">
            <Link href="//www.indianhealthguru.com/dental-India-best-surgeons-top-surgery-hospitals-clinics.html">
              Dental Clinics and India
            </Link>
          </li>
          <li className="kidney-bg">
            <Link href="//www.indianhealthguru.com/kidney-stone-surgery-India-low-cost-benefits.html">
              Kidney Stone Surgery India
            </Link>
          </li>
        </ul>
      </div>
      <div className="quick-link margin-top-10">
        <ul className="side-menu">
          <li>
            <Link href="//www.indianhealthguru.com/medical-procedures-indianhealthguru.html">
              Medical Procedures
            </Link>
          </li>
          <li>
            <Link href="//www.indianhealthguru.com/articles-indianhealthguru.html">
              Articles
            </Link>
          </li>
          <li>
            <Link href="//www.indianhealthguru.com/literature-indianhealthguru.html">
              Literature
            </Link>
          </li>
          <li>
            <Link href="//www.indianhealthguru.com/dental-surgeons-doctors-india.htm">
              Dental Surgeons
            </Link>
          </li>
          <li>
            <Link href="//www.indianhealthguru.com/dental-procedures-india.html">
              Dental Procedures
            </Link>
          </li>
          <li>
            <Link href="//www.indianhealthguru.com/advertisements-indianhealthguru.html">
              Advertisements
            </Link>
          </li>
          <li>
            <Link href="//www.indianhealthguru.com/dental-cases-videos-indianhealthguru.html">
              Dental Cases (Videos)
            </Link>
          </li>
          <li>
            <Link href="//www.indianhealthguru.com/hospital-and-clinic-indianhealthguru.html">
              Hospital and clinic
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ContentLeft;
