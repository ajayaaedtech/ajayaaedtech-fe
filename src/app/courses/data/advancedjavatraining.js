export const advancedjavatraining = [
  {
    name: "Advanced Java Training",
    slug: "advanced-java-training",
    logo: "",
    duration: "60 Working Days (1.5 Hours Daily)",
    featured: true,
    overview:
      "The Advanced Java Training course provides a deep understanding of JDBC, Servlets, JSP, JSTL, and MVC frameworks. Designed with real-world applications in mind, this course emphasizes practical labs and simulations. Students will learn to build robust, scalable, and maintainable web applications using Java EE technologies, explore state management techniques, and implement dynamic web projects following MVC design principles.",

    importantItems: [
      "Hands-on training in JDBC, Servlets, JSP, JSTL, and MVC frameworks.",
      "Covers connection pooling, transaction management, and JDBC driver architecture.",
      "Includes practical implementation of Servlets and JSP for web application development.",
      "Introduces JSTL, custom tags, and Expression Language to simplify dynamic web pages.",
      "Culminates with building a complete MVC-based project integrating JDBC, Servlets, and JSP."
    ],

    whoCanAttend: [
      "Students and developers with Core Java knowledge.",
      "Java developers aiming to learn enterprise-level web development.",
      "Software engineers interested in Java EE technologies.",
      "Programmers preparing for Java web application interviews."
    ],

    prerequisites:
      "Basic knowledge of Core Java is required. Familiarity with HTML and HTTP is helpful.",

    content: [
      {
        title: "Introduction and Persistence",
        topics: [
          "Java Platforms and Applications",
          "Introduction to Interfaces and Runtime Polymorphism",
          "Persistence Overview: File Management vs Database Systems",
          "Advantages of Database Management Systems over File Systems"
        ]
      },
      {
        title: "JDBC (Java Database Connectivity)",
        topics: [
          "Introduction to JDBC and Comparison with ODBC",
          "JDBC API and Driver Architecture",
          "Types of JDBC Drivers and Their Advantages/Disadvantages",
          "JDBC Packages: java.sql and javax.sql",
          "Developing JDBC Applications Step-by-Step",
          "Using DriverManager and Connection Interfaces",
          "Statement, PreparedStatement, and CallableStatement",
          "ResultSet Interface and Metadata Handling",
          "Batch Updates and Transaction Management (ACID Properties)",
          "Connection Pooling and DataSource Interface",
          "Working with RowSets (JdbcRowSet, CachedRowSet, WebRowSet)",
          "JDBC 4.0 Features and Enhancements"
        ]
      },
      {
        title: "SQL Integration",
        topics: [
          "Introduction to SQL and Types of Queries",
          "Working with BLOB, CLOB, and Array Datatypes",
          "Handling Database Metadata and Parameterized Metadata",
          "Executing Stored Procedures and Functions",
          "SQL Exception Handling and SQL XML Support"
        ]
      },
      {
        title: "Servlets",
        topics: [
          "Introduction to JEE and Web Applications",
          "Servlet Architecture and Advantages over CGI",
          "Servlet API Packages and Versions",
          "Lifecycle of a Servlet and Deployment (web.xml Configuration)",
          "Working with ServletRequest, ServletResponse, ServletConfig, and ServletContext",
          "HttpServlet and Handling doGet() / doPost() Methods",
          "HTML to Servlet Communication and Form Handling",
          "RequestDispatcher (Include and Forward)",
          "Redirection and Servlet Collaboration",
          "State and Session Management using Cookies, URL Rewriting, and HttpSession",
          "Servlet Filters and Listeners (Event Delegation Model)",
          "Security, Authentication, and Authorization in Servlets",
          "Working with Different Application Servers: Tomcat, WebLogic, JBoss, GlassFish",
          "Async Servlet, File Uploading/Downloading, and Servlet 3.x Features",
          "Annotations and Dynamic Servlet Registration"
        ]
      },
      {
        title: "JSP (JavaServer Pages)",
        topics: [
          "Introduction to JSP and Advantages over Servlets",
          "JSP Lifecycle (jspInit, _jspService, jspDestroy)",
          "JSP Tags and Scripting Elements (Declarations, Expressions, Scriptlets)",
          "Implicit Objects: request, response, page, session, application, config, etc.",
          "Directives: Page, Include, and Taglib",
          "Standard Actions: jsp:include, jsp:forward, jsp:param, jsp:useBean, jsp:setProperty, jsp:getProperty"
        ]
      },
      {
        title: "JavaBeans and Expression Language (EL)",
        topics: [
          "Defining and Using JavaBeans in JSP",
          "jsp:useBean, setProperty, and getProperty Tags",
          "Expression Language Syntax and Operators",
          "Implicit Objects in EL (param, header, cookie, pageScope, etc.)",
          "Defining Functions and Using EL for Dynamic Data Binding"
        ]
      },
      {
        title: "JSTL (JavaServer Pages Standard Tag Library)",
        topics: [
          "Overview and Versions of JSTL",
          "Core, Formatting, SQL, and XML Tags",
          "Using JSTL Functions in JSP Applications",
          "Integrating JSTL with EL and Custom Tags"
        ]
      },
      {
        title: "Custom Tags and Tag Libraries",
        topics: [
          "Creating Custom Tags using SimpleTagSupport and TagSupport",
          "Understanding Tag Handler Classes and Tag Library Descriptor (TLD) Files",
          "Lifecycle of Custom Tags and Attribute Handling",
          "Developing Body Tags and Integrating Custom Tags into JSP Pages"
        ]
      },
      {
        title: "MVC Architecture and Integration",
        topics: [
          "Introduction to MVC Design Pattern (MVC-1 and MVC-2)",
          "Advantages and Disadvantages of MVC-1 and MVC-2",
          "Developing Projects using MVC Pattern",
          "Integrating JDBC, Servlets, and JSP for Dynamic Web Applications",
          "High-Level Overview of Struts Framework"
        ]
      }
    ]
  }
];
