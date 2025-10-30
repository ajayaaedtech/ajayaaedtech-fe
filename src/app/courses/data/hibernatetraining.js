export const hibernatetraining = [
  {
    name: "Hibernate Training",
    slug: "hibernate-training",
    logo: "",
    duration: "Normal Track: 45 Working Days (1.5 Hours Daily) | Fast Track: 30 Working Days (2 Hours Daily)",
    featured: true,
    overview:
      "Hibernate Training provides an in-depth understanding of the most popular Object Relational Mapping (ORM) framework for Java. This course helps developers learn how to efficiently map Java objects to relational database tables, manage transactions, optimize performance, and integrate Hibernate with Java EE frameworks. Through hands-on examples, participants will gain the expertise needed to build scalable, maintainable, and high-performing persistence layers using Hibernate.",

    importantItems: [
      "Understand ORM concepts and Hibernate architecture.",
      "Learn Hibernate configuration, mapping, and persistence lifecycle.",
      "Master HQL, Criteria API, and native SQL queries.",
      "Implement caching, connection pooling, and transaction handling.",
      "Integrate Hibernate with Servlets and Struts frameworks.",
      "Explore inheritance, collection, and association mappings."
    ],

    whoCanAttend: [
      "Java Developers looking to master ORM frameworks.",
      "Students with prior knowledge of Core and Advanced Java.",
      "Software Engineers working on enterprise-level applications.",
      "Professionals preparing for Java EE development roles."
    ],

    prerequisites:
      "Good understanding of Core Java and basic knowledge of relational databases and SQL.",

    content: [
      {
        title: "Introduction to Hibernate",
        topics: [
          "Overview and Advantages of Hibernate compared to JDBC",
          "Understanding ORM (Object Relational Mapping)",
          "Hibernate Resources: Configuration File, Mapping File, Persistent Class, and Client Application",
          "Hibernate Architecture and Workflow"
        ]
      },
      {
        title: "Installation and Setup",
        topics: [
          "Hibernate Installation and Directory Structure",
          "Setting up Hibernate in Eclipse and NetBeans IDE",
          "Creating First Hibernate Application"
        ]
      },
      {
        title: "Hibernate Data Types and API",
        topics: [
          "Hibernate Data Types Overview",
          "Understanding Hibernate Core API Components",
          "Configuration, SessionFactory, Session, and Transaction Interfaces",
          "Object Lifecycle in Hibernate (Transient, Persistent, Detached)",
          "CRUD Operations using Session Methods (save, persist, update, merge, delete, load, get)"
        ]
      },
      {
        title: "Primary Key Generators and Versioning",
        topics: [
          "Primary Key Generator Strategies: Assigned, Increment, Sequence, Hilo, Seqhilo, Identity, Foreign, Native, UUID, Custom",
          "Entity Versioning and Automatic Updates"
        ]
      },
      {
        title: "Hibernate Query Language (HQL)",
        topics: [
          "Introduction to HQL and its Advantages",
          "Query Syntax and Examples",
          "Joins in Hibernate",
          "Batch Processing and Native SQL Queries"
        ]
      },
      {
        title: "Criteria API and Projections",
        topics: [
          "Introduction to Criteria API",
          "Filtering, Sorting, and Paginating Data",
          "Using Projections for Selective Data Retrieval"
        ]
      },
      {
        title: "Mapping Strategies",
        topics: [
          "Inheritance Mapping: Table per Class, Table per Subclass, Table per Concrete Class",
          "Component Mapping and Custom Mappings",
          "Collection Mapping: List, Set, Map, Bag, Array",
          "Sorting and Indexing Collections",
          "Association Mapping: One-to-One, One-to-Many, Many-to-One, Many-to-Many",
          "Understanding Unidirectional and Bidirectional Relationships",
          "Explanation of Inverse and Cascade Attributes"
        ]
      },
      {
        title: "Caching and Performance Optimization",
        topics: [
          "First-Level Cache (Session Cache)",
          "Second-Level Cache (SessionFactory Cache)",
          "Query-Level Cache",
          "Integrating EHCache or Other Third-Party Cache Providers"
        ]
      },
      {
        title: "Connection Pooling and Transactions",
        topics: [
          "Understanding Hibernate Connection Pooling",
          "Default, Server-Supplied, and Third-Party Connection Pools",
          "Transaction Management and Concurrency Control",
          "Programmatic Transactions using JTA",
          "Optimistic and Pessimistic Locking Techniques"
        ]
      },
      {
        title: "Advanced Hibernate Features",
        topics: [
          "Pagination and Query Optimization",
          "Hibernate Filters and Interceptors",
          "Working with Multiple Databases (Oracle, HypersonicSQL)",
          "Using Annotations in Hibernate"
        ]
      },
      {
        title: "Framework Integration",
        topics: [
          "Integrating Hibernate with Servlets",
          "Integrating Hibernate with Struts Framework",
          "Developing Complete Web Applications using Hibernate"
        ]
      }
    ]
  }
];
