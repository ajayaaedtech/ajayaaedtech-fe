import blockchain from "../images/blockchain.jpg";

export const blockchainCourses = [
    {
    name: "Blockchain Training",
    slug: "blockchain-training",
    instructor: "Webmaster",
    duration: "60 Hours (Approx.)",
    featured: false,
    logo: blockchain,
    overview: `
Blockchain Training is delivered by industry experts with real-world examples. 
It covers how blockchain serves as a secure, distributed digital ledger that records transactions transparently and immutably. 
This course equips learners with skills to design, develop, and deploy blockchain applications using Ethereum, Solidity, and smart contracts.
  `,

    importantItems: [
      "Understand the fundamentals of blockchain technology and distributed ledgers.",
      "Learn how Bitcoin, Ethereum, and smart contracts operate in real-world systems.",
      "Build decentralized applications (DApps) using Solidity, Truffle, and Metamask.",
      "Explore advanced blockchain frameworks such as Hyperledger and Hashgraph."
    ],

    content: [
      {
        title: "Introduction to Blockchain",
        topics: [
          "What is Blockchain?",
          "History of Blockchain",
          "Explaining Distributed Ledger",
          "Blockchain ecosystem",
          "Types of Blockchain: Private, Consortium, Permissioned, and Permission-less",
          "Industry applications and companies using Blockchain"
        ]
      },
      {
        title: "Key Concepts of Blockchain",
        topics: [
          "Mining and mining algorithms",
          "Nodes, peers, and blocks",
          "Merkle tree and Blockchain data structure",
          "Consensus mechanisms: Proof of Work, Proof of Stake",
          "How Bitcoin Blockchain works",
          "What is a Transaction?"
        ]
      },
      {
        title: "Ethereum and Smart Contracts",
        topics: [
          "Introduction to Ethereum",
          "Ethereum as a blockchain with smart contracts",
          "What is Ether?",
          "Bitcoin vs Ethereum Blockchain",
          "Ethereum wallet and clients",
          "Introduction to Geth and setting up a private blockchain"
        ]
      },
      {
        title: "Learning Solidity and Smart Contract Development",
        topics: [
          "Introduction to Solidity",
          "Hands-on Solidity programming",
          "Implementing and deploying smart contracts",
          "Understanding different use cases of smart contracts"
        ]
      },
      {
        title: "Building DApps (Decentralized Applications)",
        topics: [
          "Setting up the environment for DApp development",
          "Installing tools: Truffle, Metamask, Testrpc",
          "Developing and deploying your first DApp",
          "Practical use cases of DApps"
        ]
      },
      {
        title: "Future Scope and Emerging Technologies",
        topics: [
          "Future of Blockchain and upcoming trends",
          "Introduction to Hyperledger and Hashgraph",
          "Current research and industry challenges",
          "Blockchain adoption across sectors"
        ]
      }
    ]
  }
]