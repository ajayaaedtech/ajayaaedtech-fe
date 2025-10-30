
export const HadoopTraining = [
  {
    name: "Hadoop Training",
    slug: "hadoop-training",
    logo: "",
    duration: "50 Hours (Daily 1.5 Hours)",
    featured: true,
    overview: "The Hadoop Development course provides comprehensive training on setting up Hadoop clusters, storing and processing Big Data using HDFS, and performing data analysis with MapReduce and related Hadoop ecosystems. Learners gain hands-on experience in handling large-scale data using industry-standard tools and frameworks. The course is designed by real-time experts and focuses on practical implementation. It prepares participants for real-world Big Data challenges and enterprise applications.",

    importantItems: [
      "Learn Hadoop Cluster setup and configuration",
      "Master HDFS, MapReduce, and YARN frameworks",
      "Hands-on practice with Hive, Pig, Sqoop, HBase, and Spark",
      "Understand Big Data architecture and ecosystem integration",
      "Gain experience through real-world Hadoop use cases"
    ],

    whoCanAttend: [
      "Software Developers and Engineers",
      "Data Analysts and BI Professionals",
      "System Administrators and Architects",
      "ETL and Database Developers",
      "Anyone aspiring for a Big Data career"
    ],

    prerequisites: "Basic Unix commands, Core Java (OOP, Collections, Exceptions), and SQL knowledge.",

    content: [
      {
        title: "Introduction to Hadoop and Big Data",
        topics: [
          "Overview of Big Data concepts and challenges",
          "Introduction to Hadoop and its advantages",
          "Hadoop Distributed File System (HDFS)",
          "Comparing Hadoop and SQL",
          "Industries using Hadoop and Data Locality"
        ]
      },
      {
        title: "HDFS (Hadoop Distributed File System)",
        topics: [
          "HDFS design, blocks, and architecture",
          "NameNode, DataNode, and Secondary NameNode",
          "File system operations and configuration",
          "Block placement policy and replication",
          "High availability, federation, and FSCK utility"
        ]
      },
      {
        title: "MapReduce Framework",
        topics: [
          "Functional programming basics of Map and Reduce",
          "Job submission and execution workflow",
          "Shuffling, sorting, and optimization techniques",
          "Counters, speculative execution, and schedulers",
          "Hadoop streaming and distributed cache"
        ]
      },
      {
        title: "YARN (Yet Another Resource Negotiator)",
        topics: [
          "Architecture and functionality of YARN",
          "Job scheduling and resource allocation",
          "Sequential and Map files",
          "Compression codecs and Map-side joins",
          "Handling small files and input formats"
        ]
      },
      {
        title: "MapReduce Programming in Java",
        topics: [
          "Developing MapReduce programs",
          "WordCount and file sorting examples",
          "Custom data types and input formats",
          "Job dependency and API discussions",
          "Integrating RDBMS data with HDFS"
        ]
      },
      {
        title: "NoSQL and HBase",
        topics: [
          "ACID vs BASE, CAP Theorem",
          "Types of NoSQL databases",
          "HBase architecture and installation",
          "Data modeling and replication",
          "Bulk loading, filters, and coprocessors"
        ]
      },
      {
        title: "Hive",
        topics: [
          "Hive architecture and installation",
          "HiveQL and data types",
          "Working with partitions and bucketing",
          "User-defined functions and joins",
          "Accessing HBase tables using Hive"
        ]
      },
      {
        title: "Pig",
        topics: [
          "Pig installation and execution types",
          "Grunt shell and Pig Latin language",
          "Schema, data processing, and joins",
          "UDFs, macros, and parameter substitution",
          "Accessing HBase and handling JSON data"
        ]
      },
      {
        title: "Sqoop",
        topics: [
          "Sqoop installation and configuration",
          "Importing and exporting data",
          "Incremental imports and free-form queries",
          "Integrating Sqoop with Hive and HBase",
          "Hands-on exercises and case studies"
        ]
      },
      {
        title: "HCatalog",
        topics: [
          "Introduction to HCatalog",
          "Integration with Pig, Hive, and MapReduce",
          "Metadata management and schema handling",
          "Installation and setup",
          "Hands-on exercises"
        ]
      },
      {
        title: "Flume",
        topics: [
          "Introduction to Flume and architecture",
          "Sources, channels, and sinks",
          "Logging data to HDFS and HBase",
          "Flume commands and configurations",
          "Twitter data ingestion use case"
        ]
      },
      {
        title: "More Hadoop Ecosystem Tools",
        topics: [
          "HUE for visualization and management",
          "Oozie workflow and job scheduling",
          "ZooKeeper and coordination services",
          "Integration with Hive, Pig, and HBase",
          "Phoenix and proof-of-concept project"
        ]
      },
      {
        title: "Apache Spark",
        topics: [
          "Introduction and Spark architecture",
          "RDD concepts and operations",
          "Transformations and actions",
          "Persistence, broadcast variables, and accumulators",
          "Deploying Spark to clusters and unit testing"
        ]
      }
    ]
  }
];
