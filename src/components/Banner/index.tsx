import React from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { CodeSnippet } from "../CodeSnippet";
import Instance from "!!raw-loader!/static/usage/src/usage.dart";
import AddMessageHandler from "!!raw-loader!/static/usage/src/message.dart";

export const Banner = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="banner">
      <div className="banner__content">
        <h1 className="banner__logo">{siteConfig.title}</h1>

        <h1 className="banner__headline">
          <Translate id="home.tagline">
            An XMPP Client Library for Dart and Flutter
          </Translate>
        </h1>
        <div>
          <Link className="banner__cta" to={useBaseUrl("docs/essentials/jid")}>
            <Translate id="home.dive_into">Dive right in</Translate>
          </Link>
        </div>
      </div>
      <div className="banner__content">
        <CodeSnippet
          title={translate({
            id: "home.create_instance",
            message: "Create a Whixp instance",
          })}
          snippet={Instance}
        ></CodeSnippet>
        <CodeSnippet
          title={translate({
            id: "home.message_handler",
            message: "Listen to messages from the server",
          })}
          snippet={AddMessageHandler}
        ></CodeSnippet>
      </div>
    </header>
  );
};
