import React from "react";

const page = () => {
  return (
    <>
      <div id="main-content-right">
        <p
          class="breadcrumb"
          itemscope="itemscope"
          itemtype="http://schema.org/WebPage"
        >
          <span itemprop="breadcrumb">
            <a href="//www.indianhealthguru.com/">Home</a> &gt;&gt; Doctors
            Surgeons and Physicians
          </span>
        </p>

        <h1 class="font-18 h1">Doctors Surgeons and Physicians</h1>
        <section id="content">
          <h2 class="font-16 colorpink">Bariatric or Obesity Surgery</h2>
          <ul class="bullet-2">
            <li>
              <a href="dr-K-Ramen-Goel.html">Dr. K. Ramen Goel</a>
            </li>
            <li>
              <a href="dr-muffazal-lakdawalla.html">Dr. Muffazal Lakdawalla</a>
            </li>
          </ul>

          <h2 class="font-16 colorpink">Spine and Neuro Surgery</h2>
          <ul class="bullet-2">
            <li>
              <a href="dr-sajan-k-hegde.html">Dr. Sajan Hegde</a>
            </li>
          </ul>
        </section>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default page;
