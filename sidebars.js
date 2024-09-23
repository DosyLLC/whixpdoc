module.exports = {
  Sidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      items: ["introduction/what-is-xmpp", "introduction/motivation"],
    },

    {
      type: "category",
      label: "Server",
      collapsible: true,
      items: [
        "server/server",
        "server/configuration",
        "server/tls",
        "server/host",
      ],
    },
    {
      type: "category",
      label: "Essentials",
      collapsible: false,
      items: [
        "essentials/jid",
        "essentials/database",
        "essentials/authentication",
        "essentials/log",
        "essentials/connection",
      ],
    },
    {
      type: "category",
      label: "More and more",
      collapsible: true,
      items: [
        "advanced/handlers",
        "advanced/presence",
        "advanced/message",
        "advanced/sm",
      ],
    },
  ],
};
