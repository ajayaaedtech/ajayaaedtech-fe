export const strutstraining = [
  {
    name: "Struts 1.x and 2.x Training",
    slug: "struts-training",
    logo: "",
    duration: "60 Working Days, Daily 1.5 Hours",
    featured: true,
    overview:
      "The Struts 1.x and 2.x Training course provides in-depth knowledge of the Apache Struts framework for developing Java-based MVC web applications. This program covers both Struts 1.x and 2.x architectures, focusing on action mappings, form beans, validation, Tiles, and internationalization. Learners gain practical experience building robust, reusable, and scalable Java web applications using real-time scenarios and tools like Eclipse and NetBeans.",

    importantItems: [
      "Understand the MVC architecture and its application in Java web development.",
      "Develop applications using Struts 1.x and Struts 2.x frameworks.",
      "Implement input validation using both programmatic and declarative approaches.",
      "Utilize JSTL, custom tags, and Tiles framework for effective presentation management.",
      "Handle exceptions, file uploads, and internationalization in Struts applications.",
      "Work with Struts 2 interceptors, OGNL, and annotation-based configurations."
    ],

    whoCanAttend: [
      "Java developers looking to enhance their web development skills.",
      "Software engineers with prior knowledge of Servlets and JSP.",
      "Students aiming to build enterprise-level Java web applications.",
      "Developers transitioning from basic web frameworks to MVC-based solutions."
    ],

    prerequisites:
      "Proficiency in Java, Servlets, and JSP programming, along with basic knowledge of HTML and XML.",

    content: [
      {
        title: "Introduction to Struts Framework",
        topics: [
          "Overview of Struts and its MVC-based design pattern",
          "Differences between Model1 and Model2 Architectures",
          "Understanding Struts Architecture and Core Components",
          "Designing web applications using MVC"
        ]
      },
      {
        title: "Struts 1.x Module",
        topics: [
          "Struts Resources: JSP, ActionServlet, web.xml, ActionForm, ActionClass",
          "Understanding Struts Configuration File (struts-config.xml)",
          "Detailed explanation of Struts request processing flow",
          "Customizing RequestProcessor"
        ]
      },
      {
        title: "Validation and Forms in Struts 1.x",
        topics: [
          "Client-side and Server-side Validation Techniques",
          "Programmatic Validation using validate() Method",
          "Validator Framework for Declarative Validation",
          "Dynamic and Validator Action Forms: DynaActionForm, ValidatorForm, DynavalidatorForm, etc.",
          "Combination of Declarative and Programmatic Validation"
        ]
      },
      {
        title: "Exception Handling and Navigation",
        topics: [
          "Programmatic and Declarative Exception Handling",
          "Local Forwards and Global Forwards",
          "Local and Global Exception Management"
        ]
      },
      {
        title: "Struts Tag Libraries and Predefined Action Classes",
        topics: [
          "HTML, Bean, Logic, Nested, and Tiles Tag Libraries",
          "Predefined Action Classes: ForwardAction, IncludeAction, DispatchAction, LookupDispatchAction, etc.",
          "LocaleAction and DownloadAction Usage"
        ]
      },
      {
        title: "Internationalization and Tiles Framework",
        topics: [
          "Implementing I18N (Internationalization) in Struts 1.x",
          "Preventing Double Submits",
          "File Uploading and Downloading",
          "Working with Data Sources",
          "Using Tiles Framework for Modular UI Design",
          "Integration of Struts with AJAX"
        ]
      },
      {
        title: "Struts 2.x Module",
        topics: [
          "Introduction to Struts 2 and Its Features",
          "Differences between Struts 1.x and 2.x",
          "Steps to Create a Struts 2 Application",
          "Core Components: FilterDispatcher, Interceptors, Value Stack, Action Context, Action Invocation, OGNL",
          "Struts 2 Workflow and Configuration"
        ]
      },
      {
        title: "Struts 2 Interceptors and Validation",
        topics: [
          "Built-in and Custom Interceptors",
          "Common Interceptors: Params, ModelDriven, Custom Interceptors",
          "Input Validation and Custom Validation Techniques",
          "Exception Handling and Error Management"
        ]
      },
      {
        title: "Advanced Struts 2 Concepts",
        topics: [
          "Aware Interfaces (ApplicationAware, SessionAware, RequestAware, ResponseAware)",
          "Internationalization (I18N) in Struts 2",
          "Zero Configuration using Convention and Annotations",
          "File Uploading and Downloading",
          "Securing Struts Applications"
        ]
      },
      {
        title: "Struts 2 Enhancements and Tools",
        topics: [
          "Debugging and Profiling Struts 2 Applications",
          "Progress Meters and Data Storage Handling",
          "Custom Interceptors Development",
          "Integration with JFreeChart Plugins",
          "Working with Struts2 and Tiles2 Frameworks",
          "Developing Projects using Eclipse and NetBeans IDEs"
        ]
      }
    ]
  }
];
