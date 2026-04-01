import React from "react";
import Head from "next/head";

const TermsOfUse = () => {
  // Style constants for exact visual match
  const sectionTitle =
    "text-2xl font-bold text-[#333333] mt-8 mb-3 poppins-text";
  const paragraphClass =
    "text-[#4d4d4d] leading-relaxed mb-4 text-[18px] poppins-text";
  const listClass =
    "list-disc ml-6 mb-4 text-[#4d4d4d] space-y-1 text-[14px] poppins-text";
  const boldText = "font-bold text-[#333333]";

  return (
    <div className="bg-[#fbf5ff] min-h-screen">
      <Head>
        <title>Terms and Condition | MingleWise</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#333333] text-center mb-24 mt-20 poppins-text">
          Terms and Condition
        </h1>

        <div className="bg-transparent">
          <section>
            <h2 className={sectionTitle}>Introduction</h2>
            <p className={paragraphClass}>
              These Terms and Conditions govern the use of the Minglewise
              platform, including its website and mobile application operated by
              AppSynergies Pvt. Ltd. By accessing or using the Platform, you
              agree to comply with and be bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Acceptance of Terms</h2>
            <p className={paragraphClass}>
              By creating an account or accessing the Platform, you acknowledge
              that you have read, understood, and agreed to these Terms and
              Conditions. If you do not agree with any part of these terms, you
              should discontinue the use of the Platform immediately.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Eligibility</h2>
            <p className={paragraphClass}>
              The services provided by Minglewise are intended for individuals
              18 years of age or older. By using the Platform, you confirm that
              you meet this age requirement and are legally permitted to
              participate in the services offered.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>User Accounts</h2>
            <p className={paragraphClass}>
              Users must register using accurate and complete information,
              including a valid phone number. You are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account. Minglewise
              reserves the right to suspend or terminate accounts that violate
              these Terms or engage in suspicious, harmful, or fraudulent
              activities.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Clubs and Events</h2>
            <p className={paragraphClass}>
              Minglewise provides a digital platform where users can discover
              hobby-based clubs, participate in events, and connect with other
              community members.
            </p>
            <p className={paragraphClass}>
              Users may also apply to become{" "}
              <span className={boldText}>Club Hosts</span> and create their own
              clubs and events upon approval. Club Hosts are responsible for:
            </p>
            <ul className={listClass}>
              <li>Providing accurate event details</li>
              <li>Managing event schedules and updates</li>
              <li>Communicating with participants</li>
              <li>Conducting and managing the event experience</li>
            </ul>
            <p className={paragraphClass}>
              Minglewise only provides the platform for discovery and
              participation and does not directly organize or manage events.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Event Bookings and Payments</h2>
            <p className={paragraphClass}>
              Some events hosted on the Platform may require participants to pay
              a booking fee to confirm their participation.
            </p>
            <ul className={listClass}>
              <li>
                The booking fee secures a participant&apos;s spot in the event.
              </li>
              <li>
                Unless stated otherwise, booking fees are non-refundable once
                the booking is confirmed.
              </li>
              <li>
                If an event is cancelled by the host or the platform, the
                booking fee will be refunded to participants according to the
                applicable refund policy.
              </li>
            </ul>
            <p className={paragraphClass}>
              Payments are processed through secure third-party payment
              providers.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>User Conduct</h2>
            <p className={paragraphClass}>
              Users agree to interact respectfully with other members of the
              community. The following activities are strictly prohibited:
            </p>
            <ul className={listClass}>
              <li>Harassment or abusive behavior</li>
              <li>Hate speech or discrimination</li>
              <li>Illegal activities</li>
              <li>Sharing harmful, offensive, or misleading content</li>
            </ul>
            <p className={paragraphClass}>
              Minglewise reserves the right to remove content, restrict access,
              or suspend accounts that violate community standards.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>User Content</h2>
            <p className={paragraphClass}>
              Users may upload content such as photos, comments, and posts
              related to clubs and events.
            </p>
            <p className={paragraphClass}>
              By posting content on the Platform, users grant Minglewise the
              right to display and share such content within the Platform for
              community engagement purposes.
            </p>
            <p className={paragraphClass}>
              Users remain responsible for ensuring that they have the legal
              rights to share any content they upload and that the content does
              not violate the rights of others.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Safety and Reporting</h2>
            <p className={paragraphClass}>
              To maintain a safe environment, users may report inappropriate
              behavior or block other members within the Platform.
            </p>
            <p className={paragraphClass}>
              Minglewise may review reported activities and take appropriate
              actions, including issuing warnings, suspending accounts, or
              permanently terminating access to the Platform.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Intellectual Property</h2>
            <p className={paragraphClass}>
              All intellectual property associated with the Platform, including
              its design, features, branding, logos, and content, is owned by
              AppSynergies Pvt. Ltd.
            </p>
            <p className={paragraphClass}>
              These materials may not be copied, reproduced, distributed, or
              used without prior written permission from the company.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Limitation of Liability</h2>
            <p className={paragraphClass}>
              Minglewise acts as a digital platform connecting individuals
              through clubs and events. We do not organize or manage events
              directly and are not responsible for personal interactions,
              disputes, or incidents that may occur during events.
            </p>
            <p className={paragraphClass}>
              Users participate in events voluntarily and at their own
              discretion. Minglewise shall not be liable for any personal
              injury, loss, damages, or disputes arising from event
              participation.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Changes to Terms</h2>
            <p className={paragraphClass}>
              Minglewise may revise these Terms and Conditions at any time.
              Updated terms will be published on the Platform, and continued use
              of the service indicates acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Governing Law</h2>
            <p className={paragraphClass}>
              These Terms and Conditions are governed by the applicable laws of
              the jurisdiction in which AppSynergies Pvt. Ltd. operates.
            </p>
          </section>

          {/* Contact Information Section */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#333333] mb-4 poppins-text">
              Contact Information
            </h2>
            <p className={paragraphClass}>
              For any questions regarding these Terms and Conditions, please
              contact:
            </p>
            <div className="space-y-1">
              <p className="text-[14px] text-[#333333] poppins-text">
                <span className={boldText}>Email:</span> support@minglewise.com
              </p>
              <p className="text-[14px] text-[#333333] poppins-text">
                <span className={boldText}>Company:</span> AppSynergies Pvt.
                Ltd.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
