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
  {
    slug: "how-to-setup-a-split-horizon-dns-server-at-home",
    title: "How to setup a split horizon dns server in your home",
    date: "2024-07-13",
    blocks: [
      {
        type: "p",
        text: "What is split horizon DNS?"
      },
      {
        type: "p",
        text: "This is a network configuration technique where you would get a different DNS response based on the client's source location, usually serving private IP addresses to internal netowrk users and public IP addresses to external users."
      },
      {
        type: "p",
        text: "Before getting into that, let me tell you my thinking behind this and I will get into the basics of what DNS is and how it works."

      },
      {
        type: "p",
        text: "During my time working in various IT roles, DNS has been the cause of many issues I had to fix. During this time, I've always thought I really 'knew' things that I thought was basic IT knowledge. I could imagine others in the field can relate when I say that many of us are spoiled by asbstractions, tool after tool that iteratively takes us away from getting a decent understanding of what most of us consider 'basic' IT concepts. As I approached the 10+ year mark working in the IT industry, I started questioning what I thought I actually knew and developed a hunger to dig deeper beyond abstractions and learn the fundamental tech that powers these tools that we use all the time. This is the impetus for not only this project but other projects that I've deployed."
      },
      {
        type: "p",
        text: "DNS Basics"
      },
      {
        type: "p",
        text: "The most common analogy used to describe DNS (Domain Name System) is that its like the 'phonebook' of the internet. People access information on the internet through using domain names like google.com or any other website. Computers though need IP addresses to find these websites. When you type a domain (like facebook.com or nfl.com), your computer does not search the internet itself, it instead asks a DNS resolver (AKA recursive resolver). The client will ask the resolver 'What's the IP address of facebook.com?'. The resolver is usually your home router, your ISP (Internet Service Provider (like verizon, comcast, spectrum etc..)), or a public resolver like Google 8.8.8.8 or Cloudflare (1.1.1.1)."
      },
      {
        type: "p",
        text: "On Linux, you can see what resolver your system uses here:"

      },
      {
        type: "img",
        src: "../public/blog/Split-Horizon/resolv_conf.png",
        alt: "resolv.conf file on fresh linux server install",
        caption: "unconfigured resolv.conf file",
      },
      {
        type: "p",
        text: "Run this in your terminal to see what resolver your Linux setup uses."
      },
      {
        type: "code",
        lang: "bash",
        code: "cat /etc/resolv.conf",
      },
      {
        type: "p",
        text: "This file basically states 'When I need DNS answers, ask this server'"
      },
      {
        type: "p",
        text: "Once the resolver receives the question (the search), it then acts like a client and checks the DNS hierarchy to find the answer:"
      },
      {
        type: "ol",
        items: [
          "Root DNS servers - 'Where do I find the .com,.net,.org etc.. servers?'",
          "TLD DNS servers - 'Who is authoritative for facebook.com?'",
          "Authoritative DNS Servers - 'Here is the actual answer'"
        ],
      },
      {
        type: "p",
        text: "Only the authoritative DNS server holds the real DNS records (like A / AAAA / CNAME, etc.) and returns to you the final IP address."
      },
      {
        type: "h1",
        text: "DNS record types you need to know"
      },
      {
        type: "p",
        text: "DNS records live inside a zone which is a collection of DNS entries for a domain. Each record answers a specific question like:"
      },
      {
        type: "ul",
        items: [
          "What IP address is this name?",
          "What name should this alias point to",
          "Which server is authoritative for this domain?"
        ]
      },
      {
        type: "h1",
        text: "A Record (IPv4 Address Record)"
      },
      {
        type: "h3",
        text: "Example:"
      },
      {
        type: "code",
        lang: "bash",
        code: "app.mywebsite.com.           IN      A     10.0.0.75"
      },
      {
        type: "p",
        text: "app.mywebsite.com resolves to the IPv4 address 10.0.0.75"
      }
    ],
  },
];

export default blogPosts;
