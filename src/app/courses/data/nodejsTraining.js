import nodejs from "../images/js.png";

export const nodejsTraining = [
  {
    name: "NodeJS Training",
    slug: "nodejs-training",
    logo: nodejs,
    duration: "6 Weeks",
    featured: true,
    overview: "This NodeJS Training program introduces learners to the open-source, event-driven JavaScript runtime built on Chrome’s V8 engine. The course focuses on server-side development using NodeJS, emphasizing non-blocking I/O, event-driven architecture, and modular programming. Participants will gain hands-on experience in building HTTP servers, managing buffers and streams, and developing web applications using Express.js and Socket.io.",
    
    importantItems: [
      "Master event-driven, non-blocking architecture in NodeJS.",
      "Learn to create and manage HTTP servers using NodeJS.",
      "Understand Buffers, Streams, and Event Emitters in depth.",
      "Develop scalable web applications with Express.js and Socket.io.",
      "Integrate databases and perform CRUD operations efficiently."
    ],

    whoCanAttend: [
      "Full Stack Developers aiming to master backend development.",
      "Project Managers overseeing web application projects.",
      "Web developers interested in server-side JavaScript.",
      "Students and professionals aspiring to enter backend development.",
      "Anyone looking to build scalable network applications."
    ],

    prerequisites: "Basic knowledge of JavaScript and HTML.",

    content: [
      {
        title: "Introduction to Node.js",
        topics: [
          "Overview of Node.js",
          "RAM vs I/O Latency",
          "Blocking vs Non-Blocking Operations",
          "Event-Driven Programming Concepts",
          "Event Loop and Blocking the Event Loop",
          "Node.js Philosophy"
        ]
      },
      {
        title: "Node.js Platform Setup",
        topics: [
          "Downloading and Installing Node.js",
          "Using Node REPL",
          "Creating the First Hello World Program",
          "Understanding Modules and npm",
          "Anatomy of a Module",
          "Using and Accessing Modules"
        ]
      },
      {
        title: "npm and Package Management",
        topics: [
          "npm Commands and Usage",
          "Working with package.json",
          "Managing Dependencies",
          "Creating and Publishing Modules",
          "Private and Public Code in npm"
        ]
      },
      {
        title: "The Callback Pattern",
        topics: [
          "Understanding Callbacks",
          "Callback-last and Error-first Patterns",
          "Handling Asynchronous Operations",
          "Avoiding Callback Hell",
          "Best Practices in Error Handling"
        ]
      },
      {
        title: "Events and Event Emitters",
        topics: [
          "When to Use Event Emitters",
          "Binding Functions to Events",
          "Event Requests and Listening",
          "Handling Errors in Event Emitters",
          "Uncaught Exceptions and Domains"
        ]
      },
      {
        title: "Buffers and Data Manipulation",
        topics: [
          "Purpose of Buffers in NodeJS",
          "Creating and Using Buffers",
          "Reading and Writing Data",
          "Manipulating Binary Data",
          "Optimizing Buffer Usage"
        ]
      },
      {
        title: "Streams in NodeJS",
        topics: [
          "Understanding Streams",
          "Read and Write Stream API",
          "Flow Control and Piping",
          "Duplex and Transform Streams",
          "Practical Use Cases of Streams"
        ]
      },
      {
        title: "Building Web Applications with Express.js",
        topics: [
          "Introduction to Express.js Framework",
          "Installing and Setting Up Express",
          "Building a Hello Express Application",
          "Creating Routes and Handling Requests",
          "Rendering Layouts, Templates, and Partials",
          "Using Locals and Conditional Templates",
          "Modularizing Routes"
        ]
      },
      {
        title: "Real-Time Communication with Socket.io",
        topics: [
          "Introduction to Socket.io",
          "Listening for and Broadcasting Events",
          "Real-Time Data Communication",
          "Answering Client Requests",
          "Building Chat and Real-Time Apps"
        ]
      },
      {
        title: "Database Connectivity in NodeJS",
        topics: [
          "Connecting to Databases",
          "Understanding NoSQL and Document Stores",
          "Working with Relational Databases",
          "Platform Configuration for Database Integration",
          "Performing CRUD Operations"
        ]
      }
    ]
  }
];
