import React from "react";
import "../../styles/LandingPage.css";
import { Link } from "react-router-dom";

function LandingPageBody() {
  return (
    <div className="LandingPageBody pb-5 ">
      <div className="land-page-bodyInside  d-flex ">
        <div className="landPageContent1 ps-5 pe-2 pb-5">
          <h1 className="mb-4">
            TestGorilla works. <br />
            CVs don’t.
          </h1>
          <p className="mb-5 font-light">
            Our screening tests identify the best candidates and make your
            hiring decisions faster, easier, and bias-free.
          </p>
          <div className="tryFreeVdo d-flex mb-5">
            <div className="try-free ">Try for free</div>
            <div className="watch-video">watch video</div>
          </div>
          <div className="rate d-flex">
            <img
              src="https://www.testgorilla.com/wp-content/uploads/2022/12/Home-Page_G2-Logos.svg"
              alt=""
            />
            <p>
              Rated #1 in talent assessments <br />
              Top 5 in fastest growing software
            </p>
          </div>
        </div>
        <div className="landPageContent2">
          <img
            src="https://www.testgorilla.com/wp-content/uploads/2020/05/il1@2x-min-e1631817056302.png.webp"
            alt=""
          />
        </div>
      </div>

      <div className="join-companies mt-5 mb-5">
        <h1>Join the 8400+ companies replacing CVs with TestGorilla</h1>
        <div className="company-logo d-flex">
          <li>
            <img
              src="https://www.testgorilla.com/wp-content/uploads/2022/09/HM-Logo-2048x1349.jpg.webp"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.testgorilla.com/wp-content/uploads/2022/09/Revolut_Black.jpg.webp"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.testgorilla.com/wp-content/uploads/2022/09/UNHCR-logo-1.jpg.webp"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.testgorilla.com/wp-content/uploads/2022/09/Sony_logo.jpg.webp"
              alt=""
            />
          </li>
          <li>
            <img
              src="	https://www.testgorilla.com/wp-content/uploads/2022/09/20170526-EY-Digital-Brand-1-1.jpg.webp"
              alt=""
            />
          </li>
        </div>
      </div>

      <div className="job-success d-flex">
        <div className="job-success-img p-3">
          <img
            src="https://www.testgorilla.com/wp-content/uploads/2020/03/ill2_new@4x-e1631817152428.png.webp"
            alt=""
          />
        </div>
        <div className="job-success-content p-3">
          <h1>A barometer for job success.</h1>
          <p>
            Predict real-world job performance using our library of 284
            scientifically validated tests.
          </p>
          <p>
            Test candidates for job-specific skills like coding or digital
            marketing, as well as more general skills like critical thinking.
          </p>
          <p>
            Our unique personality and value tests allow you to get to know your
            applicants as real people – not just pieces of paper.
          </p>
          <div className="see-tests">See tests</div>
        </div>
      </div>

      <div className="qualityCandidates d-flex pt-5 pb-5">
        <div className="qualityCandidates-content d-flex">
          <h1>
            Quality time for <br />
            quality candidates.
          </h1>
          <p>
            Boom. No more time wasted on screening CVs and pre-qualifying
            interviews.
          </p>
          <p>
            We automatically grade and rank your candidates. In the time it
            takes to savor a cup of coffee, you can watch video responses to
            custom questions.
          </p>
          <p>
            Our screening process automation lets you focus on the best people
            for the job.
          </p>
        </div>

        <div className="qualityCandidates-img d-flex">
          <img
            src="	https://www.testgorilla.com/wp-content/themes/testgorilla/assets/animations/quality/images/img_3.png"
            alt=""
          />
          <img
            src="	https://www.testgorilla.com/wp-content/themes/testgorilla/assets/animations/quality/images/img_1.png"
            alt=""
          />
        </div>
      </div>

      <div className="team-perform-better d-flex  mt-5 mb-5">
        <div className="team-perform-better-img p-3">
          <img
            src="	https://www.testgorilla.com/wp-content/uploads/2020/03/man-percent.png"
            alt=""
          />
        </div>
        <div className="team-perform-better-content">
          <h1 className="bold-text">
            Say goodbye to <br />
            unconscious bias.
          </h1>
          <p className="sub-text">Diverse teams perform better.</p>
          <p className="sub-text">
            With TestGorilla, you give all applicants an equal, unbiased
            opportunity to showcase themselves.
          </p>
          <p className="sub-text">
            This ensures you get the best talent from all walks of life.
          </p>
        </div>
      </div>

      <div className="candidate-experience d-flex">
        <div className="candidate-experience-content ">
          <div className="cont">
            <h1 className="bold-text">
              Offer a positive <br />
              candidate experience.
            </h1>
            <p className="sub-text">
              Good candidates appreciate good screening tests.
            </p>
            <p className="sub-text">
              Our professional, well-designed tests serve as an extension of
              your brand and personality.
            </p>
            <p className="sub-text">
              Your applicants get the motivation and engagement they need to
              truly shine.
            </p>
          </div>
        </div>
        <div className="candidate-experience-img p-3">
          <img
            src="https://www.testgorilla.com/wp-content/themes/testgorilla/assets/animations/candidate-experience/images/img_2.png"
            alt=""
          />
          <img
            src="https://www.testgorilla.com/wp-content/themes/testgorilla/assets/animations/candidate-experience/images/img_11.png"
            alt=""
          />
        </div>
      </div>

      <div className="hr-culture d-flex pt-5 pb-5">
        <div className="hr-culture-img">
          <img
            src="https://www.testgorilla.com/wp-content/uploads/2021/06/people-conection-1.png"
            alt=""
          />
        </div>
        <div className="hr-culture-content">
          <div className="bold-text">
            Champion a <br />
            data-driven HR culture.
          </div>
          <div className="sub-text">
            We rank your applicants according to test scores certified by our
            experts. This means your HR team can rely on good data to make
            important decisions – and not just their gut feeling.
          </div>
          <div className="sub-text">
            With TestGorilla, you’ll lead the shift to a more professional and
            data-focused HR culture in your company.
          </div>
          <div className="learn-more-btn">Learn more</div>
        </div>
      </div>

      <div className="talent-hire-content  pt-5 pb-5">
        <div className="bold-text text-center">
          Top talent is priceless. We make finding it affordable.
        </div>
        <div className="sub-text text-center">
          A time-consuming screening process costs you a lot. Painful mis-hires
          cost you much, much more.
          <br /> With TestGorilla, you avoid all of this and see a huge return
          on investment every single year.
        </div>
        <div className="sub-text text-center">
          Start screening with us today on our free plan.
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="talk-to-us">Talk to us</div>
          <Link to={"/create-account"}>
            <div className="sign-up-here">
              Sign up free &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPageBody;
