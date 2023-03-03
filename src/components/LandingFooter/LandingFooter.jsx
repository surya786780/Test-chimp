import React from "react";

function LandingFooter() {
  return (
    <div className="LandingFooter">
      <div className=" m-center d-flex justify-content-between">
        <div>
          <img
            style={{ width: 200, height: 68 }}
            alt="Image"
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1675841051/Test%20Goriila/download_ju5nto.png"
          />
          <div className="text-sm font-light">
            © TestGorilla 2023. All rights reserved.
          </div>
        </div>
        <div>
          {[
            "Help Center",
            "Information for canditates",
            "For subject-matter experts",
          ].map((d, index) => (
            <div
              key={index}
              className="d-flex mt-2 flex-cols align-items-center gap-3"
            >
              <div className="text-md font-medium subpixel-antialiased	">
                {d}
              </div>
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1675876471/Test%20Goriila/angle-green_uzrde6.png"
                alt=""
                style={{ width: 7, height: 10 }}
              />
            </div>
          ))}
        </div>
        <div>
          {["Careers", "Blog", "Contact"].map((d, index) => (
            <div
              key={index}
              className="d-flex mt-2 flex-cols align-items-center gap-3"
            >
              <div className="text-md font-medium subpixel-antialiased	">
                {d}
              </div>
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1675876471/Test%20Goriila/angle-green_uzrde6.png"
                alt=""
                style={{ width: 7, height: 10 }}
              />
            </div>
          ))}
        </div>
        <div>
          {["Legal Stuff", "Privacy Policy", "Sitemap"].map((d, index) => (
            <div
              key={index}
              className="d-flex mt-2 flex-cols align-items-center gap-3"
            >
              <div className="text-md font-medium subpixel-antialiased	">
                {d}
              </div>
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1675876471/Test%20Goriila/angle-green_uzrde6.png"
                alt=""
                style={{ width: 7, height: 10 }}
              />
            </div>
          ))}
        </div>
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1675876818/Test%20Goriila/Footer_G2-Logos-1_zpcboj.svg"
          style={{ width: 220, height: 120 }}
          alt="Footer Image"
        />
        <div className="d-flex">
          {[
            "https://res.cloudinary.com/dibccigcp/image/upload/v1675876882/Test%20Goriila/MENU-Y-PIE-ICON_FACEBOOK_ulb0xz.svg",
            "https://res.cloudinary.com/dibccigcp/image/upload/v1675876884/Test%20Goriila/MENU-Y-PIE-ICON_INSTAGRAM_mxagen.svg",
            "https://res.cloudinary.com/dibccigcp/image/upload/v1675876886/Test%20Goriila/MENU-Y-PIE-ICON_LINKEDIN_fdzo4p.svg",
          ].map((d, index) => (
            <img
              key={index}
              src={d}
              style={{ width: 40, height: 100 }}
              alt="Social_Icons"
              className="m-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingFooter;
