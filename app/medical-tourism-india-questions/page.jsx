import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <>
      <div id="main-content-right">
        <p
          className="breadcrumb"
          itemscope="itemscope"
          itemType="http://schema.org/WebPage"
        >
          <span itemProp="breadcrumb">
            <a href="//www.indianhealthguru.com/">Home</a> &gt;&gt;
            <a href="//www.indianhealthguru.com/surgery-in-india-articles.htm">
              Surgery India
            </a>{" "}
            &gt;&gt; FAQs
          </span>
        </p>

        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "MedicalWebPage",
              name: "FAQs",
              url: "https://www.indianhealthguru.com/medical-tourism-india-questions.htm",
              image: "",
              description:
                "Frequently asked Questions on Medical Tourism in India, Frequently asked Question about. Healthcare Tourism in India answered by Indianhealthguru.com",
              keywords:
                "Frequently asked Questions on Medical Tourism India, Healthcare Tourism in India, Medical Tourism India, Health Tourism India, Frequently asked Question about Medical Tourism Mumbai, Affordable Medical Tourism Packages in India",
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
                        "https://www.indianhealthguru.com/surgery-in-india-articles.htm",
                      name: "Surgery India",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                      "@id":
                        "https://www.indianhealthguru.com/medical-tourism-india-questions.htm",
                      name: "FAQs",
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

        <h1 className="font-18 h1">FAQs</h1>
        <section id="content">
          <p>
            <strong>
              Why should I consider medical or surgical procedures in India?
            </strong>
          </p>
          <p>
            India offers World Class Medical Facilities, comparable with any of
            the western countries. India has state of the art Hospitals and the
            best medical experts. With the best infrastructure, the best
            possible Medical facilities, accompanied with the most competitive
            prices, you can get the treatment done in India at the lowest
            charges. The rates of all the major surgeries including the
            traveling cost and accommodation cost is just 50% of the rates in
            USA and Europe.
          </p>

          <p>
            <strong>
              Is cost the most important factor that I should consider?
            </strong>
          </p>
          <p>
            To be sure, cost is always an important factor to consider when
            seeking medical care. If you are deciding on an elective cosmetic
            procedure, your insurance policy may not cover the expenses. If you
            work with Dr Dheeraj Bojwani, he will assist you in finding the
            facilities and doctors that will be much less expensive as compared
            to their Western counterparts.
          </p>

          <p>
            <strong>How can I trust the quality of the Indian doctors?</strong>
          </p>
          <p>
            Many of the doctors in India are educated in US and UK. Some have
            even practiced in the US for years and remain Board Certified in the
            US. Also, you must be aware that most of the hospitals in US and UK
            have a major chunk of Indian doctors.
          </p>

          <p>
            <strong>
              How can it be safe to travel so far after a surgical procedure?
            </strong>
          </p>
          <p>
            Your travel plans will be entirely dictated by the surgical
            procedure you select. Many procedures that are non-invasive will
            enable you to fly out the same day as the procedure. Once you select
            a procedure and destination you would be made aware of the
            recommended recuperation time required before return travel.
          </p>

          <p>
            <strong>What about “after-care”?</strong>
          </p>
          <p>
            Depending on your treatment you will be advised on the “after-care”
            program. Dr Dheeraj Bojwani will also be a point of contact for 3
            months after the treatment if you have any questions.
          </p>

          <p>
            <strong>
              What about the confidentiality and privacy of my medical forms?
            </strong>
          </p>
          <p>
            All your medical information and your medical information is never
            disclosed to any unauthorized party.
          </p>

          <p>
            <strong>Do I have to tell my G.P.?</strong>
          </p>
          <p>
            Although going abroad for medical treatment is your choice and
            decision, I advise clients to inform their G.P. of the proposed
            treatment. Your G.P. may also be a point of contact with the
            after-care in which you receive when returning to your home country.
          </p>

          <p>
            <strong>Can I book my own travel arrangements?</strong>
          </p>
          <p>
            As part of our services we are happy to organise your travel and
            accommodation for you. You are however, free to organise your own
            arrangements though you will be responsible for ensuring that your
            travel coincides with any medical treatment.
          </p>

          <p>
            <strong>Can someone come along with me?</strong>
          </p>
          <p>
            Yes, and it would be encouraging for you to get someone with you
            during your treatment. We can offer services such as airport
            pick-ups, nurse/doctor accompanied ambulances, chauffeur driven
            cars, hotel accommodation that will make your trip as smooth and
            stress free as possible.
          </p>

          <p>
            <strong>What about the language?</strong>
          </p>
          <p>All of the Indian hospitals have fluent English speaking staff.</p>

          <br />
        </section>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default page;
