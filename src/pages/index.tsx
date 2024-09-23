import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Banner } from "../components/Banner";
import { Feature } from "../components/Feature";
import { Highlight } from "../components/Highlight";
import Translate from "@docusaurus/Translate";
import { features } from "../data/features";
import { highlights } from "../data/highlights";

const checkBoxes = [
  { key: "message_sending", value: "Message sending" },
  { key: "handles_iq_stanzas", value: "Handles IQ stanzas" },
  { key: "handles_message_stanzas", value: "Handles message stanzas" },
  { key: "handles_presence_stanzas", value: "Handles presence stanzas" },
  { key: "compliant", value: "Protocol compliant" },
  { key: "extension_support", value: "Extension support" },
  { key: "efficient_socket_management", value: "Efficient socket management" },
  { key: "start_tls_support", value: "StartTLS support" },
  { key: "direct_tls_support", value: "DirectTLS support" },
  { key: "supports_logging", value: "Logging support" },
  { key: "customizable", value: "Customizable" },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      // Description for search engines
      description={siteConfig.tagline}
    >
      <Banner />

      <main>
        <section>
          <div className="highlight__container">
            {highlights.map((props, index) => (
              <Highlight key={`highlight-${index}`} {...props} />
            ))}
          </div>
        </section>

        <section className="features">
          <h2>
            <Translate id="homepage.features_title">{`Features`}</Translate>
          </h2>
          <ul>
            {checkBoxes.map((check) => (
              <li key={check.key}>
                ✅{" "}
                <Translate id={`homepage.features_${check.key}`}>
                  {check.value}
                </Translate>
              </li>
            ))}
          </ul>
        </section>

        {/* <section>
          {features.map((props, index) => (
            <Feature
              key={`feature-${index}`}
              {...props}
              direction={index % 2 == 0 ? "normal" : "reverse"}
            />
          ))}
        </section> */}
      </main>
    </Layout>
  );
}
