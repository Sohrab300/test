import React from "react";
import Head from "next/head";

const CommunityRules = () => {
  // Styling constants for consistency
  const sectionTitle =
    "text-2xl font-semibold text-[#333333] mt-8 mb-3 poppins-text";
  const paragraphClass =
    "text-[#4d4d4d] leading-relaxed mb-4 text-[18px] poppins-text";
  const listClass =
    "list-disc ml-6 mb-4 text-[#4d4d4d] space-y-1 text-[18px] poppins-text";

  return (
    <div className="bg-[#fbf5ff] min-h-screen">
      <Head>
        <title>Community Rules | MingleWise</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#333333] text-center mt-20 mb-24 poppins-text">
          Community Rules
        </h1>

        <div className="bg-transparent">
          {/* Introductory Text */}
          <section>
            <p className={paragraphClass}>
              At Minglewise, we aim to create a welcoming and positive
              environment where people can connect through shared hobbies,
              interests, and community events. These guidelines help ensure that
              every member enjoys a safe and respectful experience.
            </p>
            <p className={paragraphClass}>
              By using the Minglewise platform, you agree to follow these
              community standards.
            </p>
          </section>

          {/* 1. Be Respectful */}
          <section>
            <h2 className={sectionTitle}>1. Be Respectful</h2>
            <p className={paragraphClass}>
              Treat all members with kindness and respect. Everyone comes from
              different backgrounds and interests, so we encourage open-minded
              and friendly interactions within the community. Harassment,
              discrimination, bullying, or offensive behavior will not be
              tolerated.
            </p>
          </section>

          {/* 2. Participate Responsibly */}
          <section>
            <h2 className={sectionTitle}>2. Participate Responsibly</h2>
            <p className={paragraphClass}>
              When joining events, make sure you follow the event guidelines set
              by the club host. Arrive on time, respect other participants, and
              contribute positively to the experience.
            </p>
            <p className={paragraphClass}>
              If you are unable to attend an event after booking, please inform
              the host in advance whenever possible.
            </p>
          </section>

          {/* 3. Create Authentic Clubs and Events */}
          <section>
            <h2 className={sectionTitle}>
              3. Create Authentic Clubs and Events
            </h2>
            <p className={paragraphClass}>
              Club hosts should provide accurate and clear information when
              creating clubs or events. Misleading descriptions, fake events, or
              activities that violate community standards are strictly
              prohibited.
            </p>
            <p className={paragraphClass}>
              Hosts are responsible for maintaining a welcoming and inclusive
              environment for all participants.
            </p>
          </section>

          {/* 4. Share Appropriate Content */}
          <section>
            <h2 className={sectionTitle}>4. Share Appropriate Content</h2>
            <p className={paragraphClass}>
              Members may share photos, event highlights, and experiences within
              the community. Please ensure that any content you share:
            </p>
            <ul className={listClass}>
              <li>Is respectful and appropriate</li>
              <li>Does not violate anyone&apos;s privacy</li>
              <li>Does not contain offensive, illegal, or harmful material</li>
            </ul>
            <p className={paragraphClass}>
              Minglewise reserves the right to remove any content that violates
              these guidelines.
            </p>
          </section>

          {/* 5. Respect Privacy and Boundaries */}
          <section>
            <h2 className={sectionTitle}>5. Respect Privacy and Boundaries</h2>
            <p className={paragraphClass}>
              Respect the personal space and privacy of other members at all
              times. Do not share another person&apos;s personal information,
              photos, or conversations without their consent.
            </p>
            <p className={paragraphClass}>
              Members should always feel comfortable and safe when interacting
              within the community.
            </p>
          </section>

          {/* 6. Follow Event Safety Practices */}
          <section>
            <h2 className={sectionTitle}>6. Follow Event Safety Practices</h2>
            <p className={paragraphClass}>
              Events on the platform may include outdoor activities, sports,
              workshops, or social gatherings. Participants should act
              responsibly and follow any safety instructions provided by the
              event host.
            </p>
            <p className={paragraphClass}>
              Always prioritize your personal safety and the safety of others
              during events.
            </p>
          </section>

          {/* 7. Report Issues or Misconduct */}
          <section>
            <h2 className={sectionTitle}>7. Report Issues or Misconduct</h2>
            <p className={paragraphClass}>
              If you encounter inappropriate behavior, suspicious activity, or
              violations of these guidelines, please report it through the
              platform or contact the Minglewise support team.
            </p>
            <p className={paragraphClass}>
              Our team will review reports and take appropriate action to
              maintain a safe and positive community environment.
            </p>
          </section>

          {/* 8. Consequences of Violations */}
          <section>
            <h2 className={sectionTitle}>8. Consequences of Violations</h2>
            <p className={paragraphClass}>
              Members who violate the Community Guidelines may face actions such
              as:
            </p>
            <ul className={listClass}>
              <li>Content removal</li>
              <li>Temporary account suspension</li>
              <li>Permanent account termination</li>
              <li>Removal from events or clubs</li>
            </ul>
            <p className={paragraphClass}>
              These measures help maintain a safe and positive environment for
              everyone.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommunityRules;
