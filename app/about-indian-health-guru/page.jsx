import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <>
      <div id="main-content-right">
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "MedicalWebPage",
              name: "About Us",
              url: "https://www.indianhealthguru.com/about-indian-health-guru.html",
              description:
                "Info on About Indian Health Guru India, Medical Tour Consultants India, Health Tourism India, Dental Surgery India, Dental Surgeons Mumbai India, Dental Surgeons New Delhi India provided by indianhealthguru.com.",
              keywords:
                "About Indian Health Guru India, Medical Tour Consultants India, Health Tourism India, Dental Surgery India, Dental Surgeons Mumbai India, Dental Surgeons New Delhi India, Dental Surgery Chennai India, Dentistry India, Dentistry Association Kolkatta India",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@id": "https://www.indianhealthguru.com/",
                      name: "Home",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      "@id":
                        "https://www.indianhealthguru.com/about-indian-health-guru.html",
                      name: "About Us",
                    },
                  },
                ],
              },
              author: "Allyson James",
              aspect: ["Diagnosis", "Treatment"],
              audience: "http://schema.org/Patient",
              specialty: "http://schema.org/Surgical",
            }),
          }}
        />
        <p
          className="breadcrumb"
          itemscope="itemscope"
          itemType="http://schema.org/WebPage"
        >
          <span itemProp="breadcrumb">
            <a href="//www.indianhealthguru.com/">Home</a> &gt;&gt; About Us
          </span>
        </p>

        <h1 className="font-18 h1">About Us</h1>
        <section id="content">
          <p>
            <strong>Indian Health Guru Consultants</strong> are an expert in the
            field of "Health Tourism" providing consultancy to foreign patients
            who look for treatment options in India. We have successfully been
            in this field for more than half a decade and provided services to
            over 500 patients from 15 countries till date including, USA, UK,
            Spain, Tanzania, Zambia, Kenya, Mongolia, Saudi Arabia & Bahrain,
            Pakistan & Bangladesh, Nigeria.
          </p>
          <p>
            Having realized the advantage India holds as compared to any other
            healthcare destination of the world we have been the pioneers to
            start with a consultancy to patients from other countries.
          </p>
          <p>
            With marked progress in the medical field and the field of tourism,
            travel and entertainment combined with the boom in economy, India is
            poised to be the hub of Medical Tourism for many years to come. A
            lot of factors have contributed to this effect.
          </p>
          <p>
            All the Best and the most Skilled Surgeons in the country
            specializing in fields of Cosmetic Surgery, Obesity Surgery, Spine
            Surgery, Urology Surgery, Dental Treatments, Cancer Managements and
            Infertility Treatments are empanelled with us.
          </p>
          <p>
            Our Team possesses an in-depth knowledge about the services and
            branches of medicine provided by Corporate Hospitals and Specialized
            Centers of Ophthalmology, Cardiology, Infertility Treatment Centers,
            Dermatology, Cosmetic Surgery, Orthopedic Surgery and Holistic
            centers of Ayurveda and Exotic Spas.
          </p>
          <p>
            For Indians, Hospitality means serving the guest to provide them a
            "feel-good-effect". "Aathithi devo bhava" (Guest is God) has been
            one of the central tenets of our culture since times immemorial.
            Indians are known for their warmth and respect around the world.
          </p>
          <p>
            Services provided by us are well known amongst the Medical
            Fraternity and Specialized Centers. As a part of the health tourism
            endeavor we have been organizing health check-up camps for NRI’s
            (non-resident Indians) since many years.
          </p>
          <p>
            We take great pride in guiding our patients to the best hospitals
            and provide assistance to them for their appointments from the
            doctors etc.
          </p>
          <p>
            The patients and his family’s stay, accommodation, travel is all
            taken care of, so that their stay is pleasant, smooth and
            hassle-free. The patients who intend to see their initial
            reports-pathology, X-Rays etc. before coming to actual treatment can
            also do so. These reports are handled confidentially and advice is
            being taken from the best physicians, surgeons for further line of
            treatment.
          </p>
          <p>
            Our primary concern has always been Quality of Care. We have
            carefully screened hospitals based on the quality of care,
            procedural availability, pricing and overall patient experience.
          </p>
          <p>
            We only empanel hospitals that maintain best practice standards of
            care, so you can be sure that you will receive world-class
            treatment. We continually monitor our partner hospital network
            through continuous patient feedback and research for constant
            introspection as that aids in living up to the expected standards.
          </p>
          <p>
            It is our constant endeavor to ensure that the overall patient
            experience right from the airport pick up, the quality of the
            nursing staff, the standard of hygiene till post-operative recovery
            and discharge should be exceptional complimented with immaculate
            facilities to cater to the needs of each individual.
          </p>
          <p>
            With us, you can expect outstanding surgical expertise at low
            affordable prices as compared to the other Medical Tour destinations
            on the globe.
          </p>
          <p>
            Even with the travel expenses taken into account, our comprehensive
            packages still cater to a large amount of saving coupled with no
            wait list periods for going ahead with the treatment.
          </p>
        </section>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default page;
