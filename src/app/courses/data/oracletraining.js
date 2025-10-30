export const oracletraining = [
  {
    name: "Oracle Training",
    slug: "oracle-training",
    logo: "",
    duration: "Normal Track: 60 Working Days (1.5 Hours/Day), Fast Track: 45 Working Days (2 Hours/Day)",
    featured: true,
    overview: "This Oracle Training provides an in-depth understanding of Oracle Database concepts, SQL, PL/SQL programming, database architecture, and advanced data management techniques. Participants will learn to design, implement, and maintain databases using Oracle’s powerful RDBMS, mastering both SQL and procedural extensions for real-world applications.",

    importantItems: [
      "Understand Oracle RDBMS fundamentals and architecture",
      "Learn SQL and PL/SQL programming for data management",
      "Create, manage, and query relational databases",
      "Implement database constraints, triggers, and procedures",
      "Work with advanced Oracle concepts like LOBs, Collections, and Object Tables"
    ],

    whoCanAttend: [
      "Students and beginners in database technologies",
      "Software Developers and Data Engineers",
      "Database Administrators (DBAs)",
      "IT Professionals seeking Oracle Certification",
      "Anyone interested in mastering Oracle Database"
    ],

    prerequisites: "Basic computer knowledge and familiarity with database concepts are recommended.",

    content: [
      {
        title: "Introduction to DBMS and RDBMS",
        topics: [
          "Approach to Data Management and file systems",
          "Disadvantages of file-based systems",
          "Database Management System concepts and data models",
          "Hierarchical, Network, and Relational Models",
          "Introduction to RDBMS and E.F. Codd’s 12 Rules"
        ]
      },
      {
        title: "Introduction to Oracle and SQL*Plus",
        topics: [
          "Oracle architecture and product overview",
          "Client-Server technology and Oracle versions",
          "SQL*Plus environment and sub-language commands",
          "Understanding DDL, DML, DCL, DRL, and TCL"
        ]
      },
      {
        title: "Working with SQL Commands",
        topics: [
          "Creating, altering, and dropping tables",
          "Using WHERE, ORDER BY, and comparison operators",
          "Set operators (UNION, INTERSECT, MINUS)",
          "Special operators (IN, BETWEEN, LIKE, IS NULL)"
        ]
      },
      {
        title: "Functions and Querying Techniques",
        topics: [
          "Arithmetic, Character, and Date Functions",
          "Conversion and Aggregate Functions",
          "OLAP and General Functions",
          "GROUP BY, HAVING, and ORDER BY clauses"
        ]
      },
      {
        title: "Integrity Constraints and Keys",
        topics: [
          "Data Integrity and Referential Integrity concepts",
          "NOT NULL, UNIQUE, PRIMARY, FOREIGN, and CHECK constraints",
          "Composite constraints and ON DELETE clause",
          "Managing constraints (add, drop, enable, disable)"
        ]
      },
      {
        title: "Joins and Subqueries",
        topics: [
          "Inner, Outer, Self, and Cartesian Joins",
          "Understanding Subqueries and their types",
          "Single-row, Multi-row, and Multi-column Subqueries",
          "Correlated Subqueries, EXISTS/NOT EXISTS",
          "Using GROUP functions in Subqueries"
        ]
      },
      {
        title: "DCL and TCL Commands",
        topics: [
          "GRANT and REVOKE privileges",
          "COMMIT, ROLLBACK, and SAVEPOINT",
          "Transaction control and SQL environment settings"
        ]
      },
      {
        title: "Database Objects and Views",
        topics: [
          "Creating and managing Views (Simple, Complex, Inline, Materialized)",
          "Using Views for DML operations",
          "View Triggers and Read-only Views",
          "Working with Sequences, Synonyms, Indexes, and Clusters"
        ]
      },
      {
        title: "Advanced Oracle Concepts",
        topics: [
          "Pseudo Columns (ROWID, ROWNUM, CURRVAL, NEXTVAL)",
          "Data Partitions (Range, Hash, List, Composite)",
          "Parallel Query Processing and Lock Mechanisms",
          "Deadlocks and concurrency control"
        ]
      },
      {
        title: "SQL*Loader and Data Import",
        topics: [
          "SQL*Loader architecture and file types (Data, Control, Bad, Discard, Log)",
          "Loading data from text and CSV files",
          "Importing data from multiple sources into single tables"
        ]
      },
      {
        title: "PL/SQL Programming",
        topics: [
          "PL/SQL architecture and features",
          "Variables, constants, and control structures",
          "Loops (FOR, WHILE, NESTED) and Conditional statements",
          "Composite data types and cursor management"
        ]
      },
      {
        title: "Advanced PL/SQL Concepts",
        topics: [
          "Procedures and Functions with parameters",
          "Packages (Specification and Body)",
          "Error handling with Exceptions",
          "Triggers (Row, Statement, DDL Level)",
          "File I/O using UTL_FILE package"
        ]
      },
      {
        title: "Object-Oriented Features in Oracle",
        topics: [
          "User-defined data types and object tables",
          "Object instances and methods",
          "LOBs (BLOB, CLOB, BFILE) handling and storage",
          "Collections (Nested Tables, VARRAYs)"
        ]
      },
      {
        title: "Oracle Database Architecture",
        topics: [
          "Physical and Logical structures of Oracle Database",
          "Memory structures and background processes",
          "Two-tier, Three-tier, and N-tier architectures"
        ]
      },
      {
        title: "Oracle Advanced Features and DBA Concepts",
        topics: [
          "Advanced joins and date functions",
          "Merge statement, Bulk Collect, Flashback Queries",
          "Temporary and Global Tables, Data Pump",
          "DBA concepts: Tablespace, Datafiles, and Storage Management"
        ]
      }
    ]
  }
];
