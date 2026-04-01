import Head from "next/head";

const IntellectualProperty = () => {
  // Styling constants to match the image
  const sectionHeading =
    "text-2xl font-bold text-[#333333] mt-10 mb-4 poppins-text";
  const paragraphClass =
    "text-[#4d4d4d] leading-[1.8] mb-6 text-[18px] poppins-text text-justify md:text-left";
  const boldLabel = "font-bold text-[#333333]";

  return (
    <div className="bg-[#fbf5ff] min-h-screen">
      <Head>
        <title>Intellectual Property | MingleWise</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#444444] text-center mt-20 mb-24 poppins-text">
          Intellectual Property
        </h1>

        <div className="bg-transparent">
          {/* Main Content */}
          <p className={paragraphClass}>
            All Content included on the Website, unless uploaded by Users, is
            the property of AppSynergies Ltd, our affiliates or other relevant
            third parties. In these terms and conditions, Content means any
            text, graphics, images, audio, video, software, data compilations,
            page layout, underlying code and software and any other form of
            information capable of being stored in a computer that appears on or
            forms part of this Website, including any such content uploaded by
            Users. By continuing to use the Website you acknowledge that such
            Content is protected by copyright, trademarks, database rights and
            other intellectual property rights. Nothing on this site shall be
            construed as granting, by implication, estoppel, or otherwise, any
            license or right to use any trademark, logo or service mark
            displayed on the site without the owner&apos;s prior written
            permission.
          </p>

          <p className={paragraphClass}>
            You may, for your own personal, non-commercial use only, do the
            following: Retrieve, display and view the Content on a computer
            screen.
          </p>

          <p className={paragraphClass}>
            You must not otherwise reproduce, modify, copy, distribute or use
            for commercial purposes any Content without the written permission
            of AppSynergies Ltd.
          </p>

          <p className={paragraphClass}>
            Below is a non-exhaustive list of trademarks owned by AppSynergies
            Ltd related to the MingleWise brand.
          </p>

          <p className={paragraphClass}>
            You may not use the below marks without authorization from
            AppSynergies Ltd. If granted authorization and you use the below
            marks in publications distributed only in the United States, United
            Kingdom & India include the appropriate ™ or ® symbol on at least
            the first use and on those subsequent uses where the marks appear
            prominently. For publications distributed outside the United Kingdom
            & India use of the ™ notice symbol is acceptable. It is also
            appropriate to use, instead of the trademark symbols, in the forms
            listed below:
          </p>

          {/* Sample Trademark Legends Section */}
          <h2 className={sectionHeading}>Sample trademark legends:</h2>

          <div className="space-y-4 mb-8">
            <p className={paragraphClass}>
              <span className={boldLabel}>For registered trademarks</span> :
              MingleWise is the exclusive registered trademark of AppSynergies
              Ltd, and is used with permission.
            </p>
            <p className={paragraphClass}>
              <span className={boldLabel}>For unregistered trademarks</span> :
              MingleWise is the exclusive trademark of AppSynergies Ltd, and is
              used with permission.
            </p>
          </div>

          {/* MingleWise Logo Section */}
          <h2 className={sectionHeading}>MingleWise logo:</h2>

          <p className={paragraphClass}>
            MingleWise logo also indicate that the logo is copyright-protected.
            This can be done through either the combination symbol &quot;™&amp;®
            MingleWise&quot;, with Copyright [year of first publication]
            AppSynergies Ltd. All rights reserved. Used with permission.
          </p>

          <p className={paragraphClass}>
            If you see a website or app that uses a AppSynergies Ltd trademark
            inappropriately, we would like to hear about it. Report
            inappropriate use of a AppSynergies Ltd trademark to{" "}
            <a
              href="mailto:trademark@minglewise.com"
              className="text-blue-600 hover:underline"
            >
              trademark@minglewise.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntellectualProperty;
