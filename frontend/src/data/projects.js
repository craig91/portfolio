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
];

export default projects;
