import React from "react";

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
            &gt;&gt; Medical Institutions
          </span>
        </p>

        <h1 className="font-18 h1">Medical Institutions</h1>
        <section id="content">
          <br />
          <table className="table-border-color">
            <tbody>
              <tr>
                <td>
                  <strong>
                    <font color="#990000" face="Arial, Helvetica, sans-serif">
                      Medical Institutions<a name="top" id="top"></a>
                    </font>
                  </strong>
                </td>
                <td style={{ lineHeight: "0px" }}>
                  <a
                    href="Hospitals-and-Clinics-Facilities-India.html"
                    target="_blank"
                  >
                    <img
                      src="https://www.indianhealthguru.com/images/facil1.gif"
                      name="Image1"
                      width="205"
                      height="21"
                      border="0"
                      id="Image1"
                      alt="Medical Institutions"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <br />
          <table className="table-border-color">
            <tbody>
              <tr>
                <th className="aligncenter">&nbsp;</th>
                <th className="aligncenter">Clinics</th>
                <th className="aligncenter">&nbsp;</th>
              </tr>
              <tr>
                <th className="aligncenter">&nbsp;</th>
                <th className="aligncenter">&nbsp;</th>
                <th className="aligncenter">&nbsp;</th>
              </tr>
              <tr>
                <th className="aligncenter">&nbsp;</th>
                <th style={{ fontWeight: "normal" }} className="aligncenter">
                  <ul style={{ listStyle: "none" }}>
                    <li className="menuMain">
                      <a
                        href="new-look-laser-clinic-new-delhi.html"
                        target="_blank"
                      >
                        New Look Laser Clinic, New Delhi
                      </a>
                    </li>
                    <li className="menuMain">
                      <a
                        href="cosmetic-surgery-institute-india.html"
                        target="_blank"
                      >
                        Cosmetic Surgery Institute
                      </a>
                    </li>
                    <li className="menuMain">
                      <a
                        href="nm-excellence-healthcare-center-mumbai.html"
                        target="_blank"
                      >
                        NM Excellence, Mumbai
                      </a>
                    </li>
                    <li className="menuMain">
                      <a
                        href="lv-prasad-eye-clinic-hyderabad.html"
                        target="_blank"
                      >
                        LV Prasad Eye Institute, Hyderabad
                      </a>
                    </li>
                    <li className="menuMain">
                      <a
                        href="perfect-vision-zyoptix-center-faridabad.html"
                        target="_blank"
                      >
                        Perfect Vision Eye, Faridabad
                      </a>
                    </li>
                    <li className="menuMain">
                      <a href="med-spa-institute-india.html" target="_blank">
                        Med Spa Institute, India
                      </a>
                    </li>
                  </ul>
                </th>
                <th className="aligncenter">&nbsp;</th>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default page;
