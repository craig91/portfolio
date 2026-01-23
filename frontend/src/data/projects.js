const projects = [
  {
    title: "Virtual SOC Lab",
    description:
      "Built a home SOC-style environment to practice log ingestion, detection, and alerting workflows.",
    tools: ["Wazuh", "Suricata", "Ubuntu", "Sysmon"],
    type: "Security Lab",
    status: "Live",
    outcomes: [
      "Forwarded IDS + host logs into Wazuh",
      "Validated alerting on suspicious inbound traffic",
      "Documented setup + troubleshooting steps",
    ],
    links: {
      caseStudy: "/blog/building-a-virtual-soc-lab", // internal link
      repo: "https://github.com/your-repo", // optional
    },
  },
  {
    title: "Split Horizon DNS",
    description:
      "Built a split horizon dns server for my home network",
      tools: ["bind9", "Linux"],
      type: "DNS server",
      status: "Live",
      outcomes: [
        "Internal network resources hidden from users connected to a specific network in my home",
        "DNS logs (internal and external) are forwarded to wazuh",
        "Documented the setup process",
      ],
      links: {
        caseStudy: "/blog/how-to-setup-a-split-horizon-dns-server-at-home",
      },
  },
];

export default projects;
