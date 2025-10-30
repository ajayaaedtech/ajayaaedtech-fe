export const sqlservertraining = [
  {
    name: "SQL Server Training",
    slug: "sql-server-training",
    logo: "",
    duration: "30 Working Days",
    featured: true,
    overview: "This SQL Server Training program equips learners with the skills needed to design, query, and manage databases using Microsoft SQL Server. It covers Transact-SQL (T-SQL) fundamentals, database creation, constraints, indexing, stored procedures, triggers, and security. Participants also learn data manipulation, performance optimization, transaction handling, and database backup and restoration.",

    importantItems: [
      "Master SQL and Transact-SQL (T-SQL) commands",
      "Design, manage, and maintain relational databases",
      "Work with stored procedures, functions, and triggers",
      "Implement database transactions and indexing for optimization",
      "Perform database backup, restore, and security management"
    ],

    whoCanAttend: [
      "Beginners and aspiring database developers",
      "Software Developers and Engineers",
      "Data Analysts and Administrators",
      "Students in Computer Science or IT",
      "Anyone seeking to learn SQL Server for application development"
    ],

    prerequisites: "None — basic computer literacy recommended",

    content: [
      {
        title: "Introduction to Database Systems",
        topics: [
          "File management systems and drawbacks",
          "Overview of DBMS and Data Models",
          "Hierarchical, Network, and Relational Models",
          "Object and Object-Relational Data Models",
          "Entity–Relationship (E-R) Model concepts"
        ]
      },
      {
        title: "Introduction to SQL Server",
        topics: [
          "SQL Server overview and comparison with Oracle and DB2",
          "Connecting to the SQL Server",
          "Authentication modes and configurations",
          "SQL Server Management Studio tools",
          "Using Object Explorer and Query Editor"
        ]
      },
      {
        title: "Transact-SQL (T-SQL) Fundamentals",
        topics: [
          "History and features of T-SQL",
          "Categories of SQL commands (DDL, DML, DQL, DCL, TCL)",
          "Creating, altering, and deleting databases",
          "Understanding procedural and declarative constraints",
          "Primary, foreign key, and check constraints"
        ]
      },
      {
        title: "Tables and Data Manipulation",
        topics: [
          "Creating and managing tables",
          "Inserting, updating, and deleting records",
          "Truncate vs Delete operations",
          "Using computed columns and identities",
          "Copying and modifying data between tables"
        ]
      },
      {
        title: "Data Query Language (DQL)",
        topics: [
          "Using SELECT statements effectively",
          "Filtering and sorting data",
          "Using WHERE, ORDER BY, and DISTINCT",
          "Column aliases and ISNULL() function",
          "Applying predicates: BETWEEN, IN, LIKE, IS NULL"
        ]
      },
      {
        title: "Built-in and Aggregate Functions",
        topics: [
          "Numeric, character, and conversion functions",
          "Date and statistical functions",
          "Aggregate functions: SUM, AVG, COUNT, MIN, MAX",
          "GROUP BY, HAVING, and Super Aggregates",
          "Ranking functions and CTE (Common Table Expressions)"
        ]
      },
      {
        title: "Set Operators and Joins",
        topics: [
          "Understanding UNION, INTERSECT, and EXCEPT",
          "Inner, Outer, and Cross Joins",
          "Equi Join, Natural Join, and Non-Equi Join",
          "Self Joins and advanced join scenarios",
          "Combining data from multiple tables"
        ]
      },
      {
        title: "Subqueries and Nested Queries",
        topics: [
          "Single-row and multi-row subqueries",
          "Using ANY, SOME, and ALL operators",
          "Correlated subqueries and EXISTS/NOT EXISTS",
          "Nested query examples and performance considerations",
          "Common use cases of subqueries in business logic"
        ]
      },
      {
        title: "Indexes and Performance Optimization",
        topics: [
          "Creating and managing Clustered and Non-Clustered indexes",
          "Using indexes for query optimization",
          "Altering and dropping indexes",
          "Index maintenance best practices",
          "Performance tuning basics"
        ]
      },
      {
        title: "Security and Access Control",
        topics: [
          "Login and user creation",
          "SQL Server and Windows authentication",
          "Granting and revoking permissions",
          "Understanding roles and privileges",
          "Database-level and object-level security"
        ]
      },
      {
        title: "Views and Database Abstraction",
        topics: [
          "Purpose and advantages of views",
          "Creating, altering, and dropping views",
          "Simple vs complex views",
          "Using encryption and schema binding",
          "Indexed views for performance"
        ]
      },
      {
        title: "Transaction Management",
        topics: [
          "Understanding transactions and ACID properties",
          "BEGIN, COMMIT, and ROLLBACK operations",
          "Save points and transaction logs",
          "Implicit transactions and error handling",
          "Ensuring data consistency with transactions"
        ]
      },
      {
        title: "T-SQL Programming",
        topics: [
          "Introduction to procedural T-SQL programming",
          "Conditional statements (IF, CASE)",
          "Looping constructs (WHILE)",
          "Working with cursors and their types",
          "Static, dynamic, and keyset-driven cursors"
        ]
      },
      {
        title: "Stored Procedures and Functions",
        topics: [
          "Creating, altering, and executing stored procedures",
          "Input and output parameters",
          "Creating and using User Defined Functions (UDFs)",
          "Scalar, Inline Table, and Multi-Statement functions",
          "Best practices and permissions"
        ]
      },
      {
        title: "Triggers and Exception Handling",
        topics: [
          "Purpose and structure of triggers",
          "Creating, altering, and deleting triggers",
          "Instead Of triggers and Magic tables",
          "Exception handling using TRY...CATCH",
          "Raising and managing custom error messages"
        ]
      },
      {
        title: "Advanced Topics and Database Maintenance",
        topics: [
          "CLR Integration and its implementation steps",
          "Working with XML data types",
          "Database normalization principles",
          "Backup and restore procedures",
          "Attaching and detaching databases"
        ]
      }
    ]
  }
];
