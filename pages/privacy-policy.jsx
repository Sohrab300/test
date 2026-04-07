import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  // Style constants to match the visual hierarchy of the image
  const sectionTitle =
    "text-2xl font-semibold text-[#333333] mt-8 mb-3 poppins-text";
  const paragraphClass =
    "text-[#4d4d4d] leading-relaxed mb-4 text-[18px] poppins-text";
  const listClass =
    "list-disc ml-6 mb-4 text-[#4d4d4d] space-y-1 text-[18px] poppins-text";
  const boldText = "font-bold text-[#333333]";

  return (
    <div className="bg-[#fbf5ff] min-h-screen">
      <Head>
        <title>Privacy Policy | MingleWise</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl text-center md:text-4xl font-bold text-[#333333] poppins-text my-16">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 font-medium poppins-text ml-3">
            Effective Date: 14.03.2026
          </p>
        </div>

        {/* Content Starts Here */}
        <div className="bg-transparent">
          <section>
            <h2 className={sectionTitle}>Introduction</h2>
            <p className={paragraphClass}>
              At Minglewise, we are committed to protecting the privacy of our
              users. This Privacy Policy explains how we collect, use, store,
              and protect your personal information when you use the Minglewise
              website and mobile application (collectively referred to as the
              &quot;Platform&quot;). By accessing or using the Platform, you
              agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Information We Collect</h2>
            <p className={paragraphClass}>
              To provide a smooth and personalized experience, Minglewise may
              collect certain information when users register or interact with
              the Platform.
            </p>
            <p className={paragraphClass}>This may include:</p>
            <ul className={listClass}>
              <li>
                <span className={boldText}>Personal Information:</span> such as
                your name, phone number, location, profile details, and profile
                photo.
              </li>
              <li>
                <span className={boldText}>Activity Information:</span>{" "}
                including clubs you join, events you attend or host,
                interactions with other users, and messages sent through the
                chat feature.
              </li>
              <li>
                <span className={boldText}>Content Information:</span> such as
                photos, event highlights, comments, or other content shared
                within the community.
              </li>
              <li>
                <span className={boldText}>Technical Information:</span>{" "}
                including device type, IP address, browser type, and app usage
                data collected automatically to improve performance and
                security.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={sectionTitle}>Event Booking & Payment Policy</h2>
            <p className={paragraphClass}>
              Users may book events through the Minglewise platform by paying a
              booking fee displayed for the event.
            </p>
            <ul className={listClass}>
              <li>
                The booking fee confirms a user&apos;s participation in the
                event.
              </li>
              <li>
                Booking fees are{" "}
                <span className={boldText}>non-refundable</span> once the
                booking is confirmed.
              </li>
              <li>
                Refunds will only be issued if the event host cancels the event
                or if the event is officially cancelled by Minglewise.
              </li>
              <li>
                If a user is unable to attend the event after booking, the
                booking amount will not be refunded or transferred.
              </li>
            </ul>
            <p className={paragraphClass}>
              Minglewise reserves the right to cancel or suspend any event that
              violates platform policies or community guidelines.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Club Hosts / Community Leaders</h2>
            <p className={paragraphClass}>
              Minglewise allows selected users to become Club Hosts and organize
              events.
            </p>
            <p className={paragraphClass}>Club Hosts are responsible for:</p>
            <ul className={listClass}>
              <li>Creating accurate event details</li>
              <li>Ensuring events are conducted safely</li>
              <li>Communicating clearly with participants</li>
              <li>Following all platform community guidelines</li>
            </ul>
            <p className={paragraphClass}>
              Minglewise only provides the{" "}
              <span className={boldText}>
                digital platform for hosting events
              </span>{" "}
              and is not responsible for the physical organization, safety
              arrangements, or execution of events by hosts.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>
              User Content (Photos, Posts, Event Moments)
            </h2>
            <p className={paragraphClass}>
              Users may upload or share content on the Platform, including:
            </p>
            <ul className={listClass}>
              <li>Event photos</li>
              <li>Event highlights</li>
              <li>Comments or posts within clubs</li>
              <li>Messages within chats or discussions</li>
            </ul>
            <p className={paragraphClass}>
              By uploading content to Minglewise, users grant the platform
              permission to:
            </p>
            <ul className={listClass}>
              <li>Display the content within the app and website</li>
              <li>
                Use content for community engagement or promotional purposes
              </li>
            </ul>
            <p className={paragraphClass}>
              Users must ensure that their content:
            </p>
            <ul className={listClass}>
              <li>
                Does not violate copyright or intellectual property rights
              </li>
              <li>Does not contain abusive, offensive, or illegal material</li>
              <li>Does not violate the privacy of other individuals</li>
            </ul>
            <p className={paragraphClass}>
              Minglewise reserves the right to remove any content that violates
              platform policies.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Community Conduct & Safety</h2>
            <p className={paragraphClass}>
              To maintain a positive community experience, users must:
            </p>
            <ul className={listClass}>
              <li>Treat other members respectfully</li>
              <li>Avoid harassment, discrimination, or abusive behavior</li>
              <li>Follow event rules set by hosts</li>
              <li>Respect personal boundaries of other participants</li>
            </ul>
            <p className={paragraphClass}>
              Minglewise may suspend or terminate accounts that violate
              community standards.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Event Participation Responsibility</h2>
            <p className={paragraphClass}>
              Users understand that events hosted through Minglewise may involve
              outdoor activities, social gatherings, sports, or other community
              interactions.
            </p>
            <p className={paragraphClass}>
              By participating in events, users acknowledge that:
            </p>
            <ul className={listClass}>
              <li>
                They attend events at their own discretion and responsibility
              </li>
              <li>
                Minglewise is not liable for personal injury, loss, or damages
                during events
              </li>
              <li>
                Users should follow safety instructions provided by event hosts
              </li>
            </ul>
          </section>

          <section>
            <h2 className={sectionTitle}>Sharing of Information</h2>
            <p className={paragraphClass}>
              Minglewise does not sell or rent personal information to third
              parties.
            </p>
            <p className={paragraphClass}>
              However, information may be shared in limited circumstances:
            </p>
            <ul className={listClass}>
              <li>
                With trusted service providers that support platform operations
                (such as payment processors or hosting services)
              </li>
              <li>
                With club hosts when you register for an event so they can
                manage attendance and communicate event details
              </li>
              <li>When required by law or legal authorities</li>
            </ul>
            <p className={paragraphClass}>
              All such sharing is done only as necessary for platform
              functionality.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Communication & Notifications</h2>
            <p className={paragraphClass}>
              Minglewise may send notifications regarding:
            </p>
            <ul className={listClass}>
              <li>Event bookings</li>
              <li>Event reminders</li>
              <li>Community updates</li>
              <li>Platform announcements</li>
            </ul>
            <p className={paragraphClass}>
              Users may manage notification preferences through their account
              settings.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Account Suspension / Termination</h2>
            <p className={paragraphClass}>
              Minglewise reserves the right to suspend or terminate accounts
              that:
            </p>
            <ul className={listClass}>
              <li>Violate community guidelines</li>
              <li>Engage in fraudulent activity</li>
              <li>Misuse the platform or disrupt events</li>
              <li>Provide false information</li>
            </ul>
          </section>

          <section>
            <h2 className={sectionTitle}>How We Use Your Information</h2>
            <p className={paragraphClass}>
              The information collected is used to provide and improve the
              services offered through Minglewise. This includes creating and
              managing user accounts, helping users discover clubs and events,
              enabling communication between members and club hosts, processing
              event bookings, and enhancing overall user experience.
            </p>
            <p className={paragraphClass}>
              We may also use the information to monitor platform safety,
              prevent fraudulent activities, analyze user behavior to improve
              features, and provide customer support when necessary.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>
              User Content and Community Interaction
            </h2>
            <p className={paragraphClass}>
              Users may share content on the Platform such as event photos,
              comments, and messages within clubs or chats. By posting such
              content, you acknowledge that it may be visible to other users of
              the Platform depending on the club or event settings.
            </p>
            <p className={paragraphClass}>
              Users are responsible for ensuring that the content they share is
              respectful, lawful, and does not violate the rights of others.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Data Security</h2>
            <p className={paragraphClass}>
              We take reasonable technical and organizational measures to
              protect user data from unauthorized access, misuse, or disclosure.
            </p>
            <p className={paragraphClass}>
              While we strive to maintain strong security standards, no digital
              platform can guarantee complete protection, and users should also
              take steps to protect their account credentials.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>User Controls and Privacy Settings</h2>
            <p className={paragraphClass}>
              Users have control over their information and may:
            </p>
            <ul className={listClass}>
              <li>Update profile details</li>
              <li>Manage privacy and notification settings</li>
              <li>Block or report other users</li>
              <li>Control interactions within clubs and communities</li>
            </ul>
          </section>

          <section>
            <h2 className={sectionTitle}>Account Deletion</h2>
            <p className={paragraphClass}>
              Users may request the deletion of their account at any time
              through the app settings or by contacting the support team.
            </p>
            <p className={paragraphClass}>
              Once the request is processed, personal data associated with the
              account will be removed except where retention is required by law
              or for security purposes.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Changes to This Privacy Policy</h2>
            <p className={paragraphClass}>
              Minglewise may update this Privacy Policy periodically to reflect
              changes in services or legal requirements. Updates will be
              published on the Platform, and continued use of the service after
              changes are made indicates acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Intellectual Property</h2>
            <p className={paragraphClass}>
              All platform design, branding, content, and technology associated
              with <span className={boldText}>Minglewise</span> are owned by{" "}
              <span className={boldText}>AppSynergies Ltd.</span>
            </p>
          </section>

          {/* Footer Section */}
          <section className="pt-4">
            <h2 className="text-xl font-bold text-[#333333] mb-4 poppins-text">
              Contact Us
            </h2>
            <p className={paragraphClass}>
              If you have questions about this Privacy Policy or how your
              information is handled, you may contact us at:
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

export default PrivacyPolicy;
