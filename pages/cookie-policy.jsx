import React from "react";
import Head from "next/head";

const CookiePolicy = () => {
  const sectionTitleClass =
    "text-2xl font-semibold text-[#333333] mt-10 mb-4 poppins-text";
  const subHeadingClass =
    "text-xl font-bold text-[#444444] mt-6 mb-2 poppins-text";
  const paragraphClass =
    "text-[#555555] leading-relaxed mb-4 text-[18px] poppins-text";
  const listClass =
    "list-disc ml-6 mb-4 text-[#555555] space-y-2 text-[18px] poppins-text";

  return (
    <div className="bg-white min-h-screen bg-[#fbf5ff]">
      <Head>
        <title>Cookie Policy | MingleWise</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-[#333333] text-center mt-20 mb-24 poppins-text">
          Cookie Policy
        </h1>

        {/* Introduction */}
        <section>
          <h2 className={sectionTitleClass}>Introduction</h2>
          <p className={paragraphClass}>
            At Minglewise, we value your privacy and aim to provide a safe and
            transparent experience when you use our website and mobile
            application. This Cookie Policy explains how cookies and similar
            technologies are used to improve your browsing experience,
            understand how the platform is used, and ensure that our services
            function properly.
          </p>
          <p className={paragraphClass}>
            By continuing to use the Minglewise website or services, you agree
            to the use of cookies in accordance with this policy.
          </p>
          <p className={paragraphClass}>
            For more information about how we handle personal information,
            please refer to our Privacy Policy.
          </p>
        </section>

        {/* What Are Cookies */}
        <section>
          <h2 className={sectionTitleClass}>What Are Cookies?</h2>
          <p className={paragraphClass}>
            Cookies are small text files that are stored on your device when you
            visit a website. These files help websites remember certain
            information about your visit, such as your preferences, login
            details, or browsing behavior.
          </p>
          <p className={paragraphClass}>
            A cookie usually contains information such as:
          </p>
          <ul className={listClass}>
            <li>The website domain that created the cookie</li>
            <li>The duration of the cookie (when it expires)</li>
            <li>A unique identifier</li>
            <li>
              User preferences or browsing activity related to the website
            </li>
          </ul>
          <p className={paragraphClass}>
            Cookies allow websites to function more efficiently and help improve
            user experience.
          </p>
        </section>

        {/* Types of Cookies */}
        <section>
          <h2 className={sectionTitleClass}>Types of Cookies We Use</h2>

          <h3 className={subHeadingClass}>First-Party Cookies</h3>
          <p className={paragraphClass}>
            First-party cookies are created directly by Minglewise. These
            cookies help the platform remember your preferences, maintain login
            sessions, and improve how the website works.
          </p>
          <p className={paragraphClass}>
            For example, they may store your language preference or remember
            your login status.
          </p>

          <h3 className={subHeadingClass}>Third-Party Cookies</h3>
          <p className={paragraphClass}>
            Some cookies may be placed by trusted third-party service providers
            that help us operate the platform. These may include analytics tools
            that help us understand how users interact with the website so we
            can improve the service. These providers only collect information
            necessary to perform their services and are required to protect user
            privacy.
          </p>

          <h3 className={subHeadingClass}>Session and Persistent Cookies</h3>
          <p className="font-bold text-[#444444] mt-4 mb-1">Session Cookies</p>
          <p className={paragraphClass}>
            Session cookies are temporary cookies that exist only while your
            browser is open. They help the website function properly during your
            visit, such as keeping you logged in while navigating between pages.
          </p>
          <p className="font-bold text-[#444444] mt-4 mb-1">
            Persistent Cookies
          </p>
          <p className={paragraphClass}>
            Persistent cookies remain on your device for a longer period or
            until you delete them. These cookies help remember your preferences
            and improve your experience when you return to the website.
          </p>
        </section>

        {/* Other Tracking Technologies */}
        <section>
          <h2 className={sectionTitleClass}>Other Tracking Technologies</h2>
          <p className={paragraphClass}>
            In addition to cookies, <strong>Minglewise</strong> may use similar
            technologies such as:
          </p>

          <p className="font-bold text-[#444444] mt-4 mb-1">
            Web Beacons (Pixel Tags)
          </p>
          <p className={paragraphClass}>
            Small graphic files that help us understand whether users have
            opened certain pages or emails.
          </p>

          <p className="font-bold text-[#444444] mt-4 mb-1">Tracking URLs</p>
          <p className={paragraphClass}>
            Special links used to understand how visitors reach our website and
            interact with content.
          </p>

          <p className="font-bold text-[#444444] mt-4 mb-1">
            Software Development Kits (SDKs)
          </p>
          <p className={paragraphClass}>
            Small pieces of code used within mobile applications to enable
            certain features, analytics, or performance monitoring.
          </p>
          <p className={paragraphClass}>
            For simplicity, all of these technologies are referred to as{" "}
            <strong>&quot;cookies&quot;</strong> in this policy.
          </p>
        </section>

        {/* How We Use Cookies */}
        <section>
          <h2 className={sectionTitleClass}>How We Use Cookies</h2>
          <p className={paragraphClass}>
            Minglewise uses cookies to support and improve the platform
            experience. Cookies help us:
          </p>
          <ul className={listClass}>
            <li>Keep the website functioning smoothly</li>
            <li>Remember your preferences and settings</li>
            <li>Maintain secure login sessions</li>
            <li>Understand how users interact with the website</li>
            <li>Improve features and user experience</li>
            <li>Ensure platform security and performance</li>
          </ul>
          <p className={paragraphClass}>
            These cookies help us provide a better experience when you browse
            clubs, discover events, or interact with the community.
          </p>
        </section>

        {/* Managing Cookies */}
        <section>
          <h2 className={sectionTitleClass}>Managing Cookies</h2>
          <p className={paragraphClass}>
            Most web browsers allow you to control or disable cookies through
            browser settings. You can choose to block or delete cookies at any
            time.
          </p>
          <p className={paragraphClass}>
            However, please note that disabling certain cookies may affect how
            some features of the Minglewise website function.
          </p>
          <p className={paragraphClass}>
            To manage cookies, you can adjust the privacy settings in your
            browser.
          </p>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className={sectionTitleClass}>Changes to This Cookie Policy</h2>
          <p className={paragraphClass}>
            Minglewise may update this Cookie Policy from time to time to
            reflect changes in technology, legal requirements, or platform
            functionality.
          </p>
          <p className={paragraphClass}>
            Any updates will be posted on this page, and continued use of the
            website after updates means you accept the revised policy.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-[#333333] mb-4 poppins-text">
            Contact Us
          </h2>
          <p className={paragraphClass}>
            If you have any questions about this Cookie Policy or how cookies
            are used on Minglewise, you can contact us at:
          </p>
          <p className="text-[#333333] font-medium poppins-text">
            <strong>Email:</strong> support@minglewise.com
          </p>
          <p className="text-[#333333] font-medium poppins-text">
            <strong>Company:</strong> AppSynergies Pvt. Ltd.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
