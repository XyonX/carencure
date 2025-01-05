import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <>
      {" "}
      <div id="main-content-right">
        <p
          className="breadcrumb"
          itemscope="itemscope"
          itemType="http://schema.org/WebPage"
        >
          <span itemProp="breadcrumb">
            <a href="//www.indianhealthguru.com/">Home</a> &gt;&gt; Medical
            Procedures in India
          </span>
        </p>

        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "MedicalWebPage",
              name: "Medical Procedures in India",
              url: "https://www.indianhealthguru.com/surgery-medical-treatment-india.htm",
              description:
                "Info on Surgery And Medical Treatment India, General Surgery India, Dentistry India, Oncology Surgery India, Orthopedic Surgery India, ENT Treatment India, Female Reproductive Treatment And Pregnancy Treatment India provided by indianhealthguru.com.",
              keywords:
                "Surgery And Medical Treatment India, General Surgery India, Dentistry India, Oncology Surgery India, Orthopedic Surgery India, ENT Treatment India, Female Reproductive Treatment And Pregnancy Treatment India, Neurology Management India, Laparoscopy Surgery India, Endoscopy Surgery India",
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
                        "https://www.indianhealthguru.com/surgery-medical-treatment-india.htm",
                      name: "Medical Procedures in India",
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

        <h1 className="font-18 h1">Medical Procedures in India</h1>
        <section id="content">
          <h2 className="font-16 colorpink">Cardiology</h2>
          <ul className="bullet-2">
            <li>
              <a href="abdominal-thoracic-aortic-aneurysm-surgery-india.html">
                Abdominal or Thoracic Aortic Aneurysm
              </a>
            </li>
            <li>
              <a href="atrial-septal-defect-closure-surgery-india.html">
                ASD (Atrial Septal Defect) Closure
              </a>
            </li>
            <li>
              <a href="coronary-artery-bypass-graft-open-heart-surgery-india.html">
                Coronary Artery Bypass Graft (CABG) Open Heart
              </a>
            </li>
            <li>
              <a href="heart-transplant-surgery-india.html">Heart Transplant</a>
            </li>
            {/* <li><a href="heart-lung-transplant-surgery-india.html">Heart/Lung Transplant</a></li> */}
            <li>
              <a href="patent-ductus-arteriosus-ligation-surgery-india.html">
                PDA (Patent Ductus Arteriosus) Ligation
              </a>
            </li>
            <li>
              <a href="total-correction-four-abnormality-correction-surgery-india.html">
                TOF (Total Correction; four abnormality)
              </a>
            </li>
            <li>
              <a href="valve-replacement-surgery-india.html">
                Valve Replacement
              </a>
            </li>
            <li>
              <a href="ventricular-septal-defect-closure-surgery-india.html">
                VSD (Ventricular Septal Defect) Closure
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default page;
