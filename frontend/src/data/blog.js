const blogPosts = [
  {
    slug: "building-a-virtual-soc-lab",
    title: "Building a Virtual SOC Lab",
    date: "2025-12-01",
    blocks: [
      {
        type: "p",
        text: "This post documents how I built a virtual SOC lab using Wazuh and Suricata.",
      },
      {
        type: "img",
        src: "",
        alt: "Wazuh dashboard showing agent status",
        caption: "Wazuh manager dashboard after onboarding agents.",
      },
      {
        type: "p",
        text: "Once the agents were connected, I configured Suricata to generate alerts and forward logs.",
      },
      {
        type: "code",
        lang: "bash",
        code: "sudo tail -f /var/log/suricata/fast.log",
      },
    ],
  },
];

export default blogPosts;
