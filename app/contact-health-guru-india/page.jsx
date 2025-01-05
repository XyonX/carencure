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
            <a href="//www.indianhealthguru.com/">Home</a> &gt;&gt; Contact Us
          </span>
        </p>

        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "MedicalWebPage",
              name: "Contact Us",
              url: "https://www.indianhealthguru.com/contact-health-guru-india.htm",
              image: "",
              description:
                "Contact Indian Health Guru, Contact Indian Health Guru for Medical Tourism India, Contact Indian Health Guru For Health Tourism India, Services Provided By Indian Health Guru.com",
              keywords:
                "Contact Indian Health Guru, Contact Indian Health Guru for Medical Tourism India, Contact Indian Health Guru For Health Tourism India, Contact Indian Health Guru India, For Medical Assistance Contact Indian Health Guru",
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
                        "https://www.indianhealthguru.com/contact-health-guru-india.htm",
                      name: "Get a Free Quote",
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

        <section id="content">
          <div className="address">
            <h2>Indian Healthguru Medical Services</h2>
            <p>
              100 A, 4th Street Abhirampuram
              <br />
              Tenyampeth, Chennai
              <br />
              TamilNadu - 600018
              <br />
              India <br />
              <strong>Phone No.</strong>: +91-9371136499
              <br />
              <strong>Email</strong>:{" "}
              <a href="mailto:contact@indianhealthguru.com">
                contact@indianhealthguru.com
              </a>
            </p>
          </div>
          <h1 className="greentxt-gradientbg">Contact Us</h1>

          <div
            id="contactSuccessMessage"
            style={{ display: "none", padding: "20px" }}
          >
            <p>
              <strong>WE ALWAYS REPLY WITHIN 1 WORKING DAY / 24 HOURS.</strong>{" "}
              But unfortunately sometimes the Emails sent by us are recognized
              as <strong>SPAM / JUNK / BULK</strong> Emails and the mails might
              not get delivered into the INBOX of your Email Account and instead
              might get delivered into the <strong>SPAM / JUNK / BULK</strong>{" "}
              Folder of your Email Account.
            </p>
            <p>
              So, make sure that you approve our Email ID to avoid this problem.
            </p>
            <p>
              You can do this by adding our Email ID -{" "}
              <a href="mailto:contact@indianhealthguru.com">
                contact@indianhealthguru.com
              </a>
            </p>
            <p>
              under approved senders list or by retrieving the Email just sent
              by us into your <strong>INBOX</strong>.
            </p>
          </div>

          {/* Contact Form */}
          <div id="contactForm">
            <form
              action="#"
              method="post"
              name="myform"
              id="myform"
              onSubmit="return validateContactForm();"
            >
              <table
                width="100%"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                className="input-btn1"
              >
                <tbody>
                  <tr>
                    <td align="middle" colSpan="4" vAlign="center">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td align="middle" colSpan="4" vAlign="center">
                      <strong>
                        <font color="font-16">
                          For your enquiry , please FILL THIS FORM{" "}
                        </font>
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="middle" colSpan="4" vAlign="center">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td align="middle" colSpan="4" vAlign="center">
                      <div align="left">
                        <span className="note">
                          <font color="#94130E">All fields marked with an</font>
                        </span>
                        (<span className="style1">*</span>)
                        <span className="note">
                          <font color="#94130E">are mandatory.</font>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="middle" colSpan="4" vAlign="center">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      &nbsp;
                    </td>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      <strong>Full Name</strong>
                      <font color="#FF0000">*</font>
                    </td>
                    <td bgcolor="#F1F4F9" className="textBold">
                      :
                    </td>
                    <td bgcolor="#F1F4F9">
                      <input
                        name="name"
                        className="input-btn1"
                        maxLength="50"
                        size="40"
                        style={{ border: "1px solid black" }} // Black border
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td className="textBold">&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      &nbsp;
                    </td>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      <strong>Age</strong>
                      <font color="#FF3300">*</font>
                    </td>
                    <td bgcolor="#F1F4F9" className="textBold">
                      :
                    </td>
                    <td bgcolor="#F1F4F9">
                      <input
                        name="age"
                        className="input-btn1"
                        maxLength="3"
                        size="10"
                        style={{ border: "1px solid black" }} // Black border
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td className="textBold">&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      &nbsp;
                    </td>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      <strong>Email</strong>
                      <font color="#FF0000">*</font>
                    </td>
                    <td bgcolor="#F1F4F9" className="textBold">
                      :
                    </td>
                    <td bgcolor="#F1F4F9">
                      <input
                        name="email"
                        className="input-btn1"
                        size="40"
                        style={{ border: "1px solid black" }} // Black border
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4">&nbsp;</td>
                  </tr>
                  <tr>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      &nbsp;
                    </td>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      <strong>Country</strong>
                      <font color="#FF0000">*</font>
                    </td>
                    <td bgcolor="#F1F4F9" className="textBold">
                      :
                    </td>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      <select name="country" className="input-btn1">
                        <option value="" selected="selected">
                          Select a Country..
                        </option>
                        {/* Add country options here */}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td className="textBold">&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      &nbsp;
                    </td>
                    <td bgcolor="#F1F4F9" className="citycontent">
                      <strong>
                        Mobile Number<font color="#FF0000">*</font>
                      </strong>
                    </td>
                    <td bgcolor="#F1F4F9" className="textBold">
                      :
                    </td>
                    <td bgcolor="#F1F4F9">
                      <input
                        name="mobile"
                        className="input-btn1"
                        id="mobile"
                        maxLength="50"
                        style={{ border: "1px solid black" }} // Black border
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <span className="citycontent">
                        (Please include your Country and local code)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4">&nbsp;</td>
                  </tr>
                  <tr>
                    <td vAlign="top" bgcolor="#F1F4F9" className="citycontent">
                      &nbsp;
                    </td>
                    <td vAlign="top" bgcolor="#F1F4F9" className="citycontent">
                      <strong>Your Enquiry</strong>
                      <font color="#FF0000">*</font>
                    </td>
                    <td vAlign="top" bgcolor="#F1F4F9" className="textBold">
                      :
                    </td>
                    <td bgcolor="#F1F4F9">
                      <textarea
                        name="enquiry"
                        cols="30"
                        rows="5"
                        className="textarea-btn1"
                        style={{ border: "1px solid black" }} // Black border
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4"></td>
                  </tr>
                  <tr>
                    <td colSpan="4"></td>
                  </tr>
                  <tr>
                    <td vAlign="top">&nbsp;</td>
                    <td vAlign="top">&nbsp;</td>
                    <td vAlign="top" className="textBold">
                      &nbsp;
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <input
                      name="page"
                      type="hidden"
                      value="https://www.indianhealthguru.com/contact-health-guru-india.htm"
                    />
                  </tr>
                  <tr>
                    <td colSpan="4" align="center">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6Lc-qoghAAAAACyNXvZMvaze0izopGbsso_vl5Cz"
                        data-callback="onReturnCallback"
                        data-theme="light"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td vAlign="top">&nbsp;</td>
                    <td vAlign="top">&nbsp;</td>
                    <td vAlign="top" className="textBold">
                      &nbsp;
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td vAlign="top" bgcolor="#F1F4F9">
                      &nbsp;
                    </td>
                    <td vAlign="top" bgcolor="#F1F4F9">
                      &nbsp;
                    </td>
                    <td vAlign="top" bgcolor="#F1F4F9" className="textBold">
                      &nbsp;
                    </td>
                    <td bgcolor="#F1F4F9">
                      <input
                        name="submit"
                        type="submit"
                        className="infomsg"
                        value="Submit"
                        style={{ border: "1px solid black" }} // Black border
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="4"
                      style={{
                        color: "#FF0000",
                        textAlign: "center !important",
                        paddingTop: "20px",
                        fontWeight: "bold",
                      }}
                      id="contactResponse"
                      align="center"
                    ></td>
                  </tr>
                  <tr>
                    <td colSpan="4" className="textBold">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4"></td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>

          <div className="clear">
            <br />
          </div>
        </section>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default page;
