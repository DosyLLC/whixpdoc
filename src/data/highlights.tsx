import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { IHighlightProps } from "../components/Highlight";

export const highlights: IHighlightProps[] = [
  {
    title: translate({
      id: "homepage.message_handling_title",
      message: "Message Handling",
    }),
    description: (
      <Translate id="homepage.message_handling_body" values={{ br: <br /> }}>
        {`Efficiently processes real-time messaging between client and server, supporting multiple message types and custom extensions.
`}
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.presence_updates_title",
      message: "Presence Updates",
    }),
    description: (
      <Translate id="homepage.presence_updates_body">
        Provides real-time updates on user availability, enabling seamless
        tracking of online, offline, and away statuses for dynamic
        communication.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.stanza_support_title",
      message: "Stanza Support",
    }),
    description: (
      <Translate id="homepage.stanza_support_body">
        Facilitates complete stanza processing (message, presence, IQ) for XMPP
        protocol compliance and server communication.
      </Translate>
    ),
  },
];
