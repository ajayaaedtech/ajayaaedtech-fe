import datascienceimg from "../images/robots.jpg"

export const dataCourses = [
    // Data Science Training
    {
        name: "Data Science Training",
        slug: "data-science-training",
        logo: datascienceimg,
        instructor: "NIT Manager",
        duration: "120 Hours (Approx.)",
        overview: `
Data Science Training by experts helps you master distributed data processing and analysis using Python, Hadoop, Apache Spark, R, and more. 
This course covers everything from Data Science fundamentals to advanced tools, equipping you to excel in the rapidly evolving data-driven industry.
  `,


        importantItems: [
            "Understand core concepts of Data Science and Big Data",
            "Learn data collection, processing, and visualization using R and Python.",
            "Perform real-time analytics and machine learning using Spark and Scikit-Learn.",
            "Develop and deploy Data Science projects in healthcare, banking, and social media."
        ],

        whoCanAttend: [
            "Students or professionals interested in Data Science and Analytics.",
            "Software engineers aspiring to transition into data roles.",
            "Data analysts looking to upgrade to advanced data technologies.",
            "Fresh graduates seeking to build a career in Big Data and AI.",
        ],

        content: [
            {
                title: "Introduction to Data Science",
                topics: [
                    "Need for Data Scientists",
                    "Foundation of Data Science",
                    "Business Intelligence and Data Analysis",
                    "Data Mining and Machine Learning",
                    "Analytics vs Data Science",
                    "Analytics Project Lifecycle",
                ],
            },
            {
                title: "Data Concepts and Architecture",
                topics: [
                    "Data Categorization and Types",
                    "Data Collection and Sources",
                    "Data Quality and Architecture",
                    "OLTP vs OLAP",
                    "Big Data Overview and the 5 Vs",
                    "Big Data Architecture and Technologies",
                ],
            },
            {
                title: "Hadoop Framework",
                topics: [
                    "MapReduce Framework and Ecosystem",
                    "HDFS, Data Storage, and Distributed Computing",
                    "Hadoop Cluster Architecture",
                    "YARN and Resource Management",
                    "HDFS Hands-on Exercises",
                ],
            },
            {
                title: "R Programming for Data Science",
                topics: [
                    "Introduction to R and RStudio",
                    "Data Types, Functions, and Subsetting",
                    "Data Import and Cleaning",
                    "Exploratory Data Analysis (EDA)",
                    "Data Visualization and Storytelling with R",
                ],
            },
            {
                title: "Big Data Tools: Pig, Hive, and HBase",
                topics: [
                    "Pig Latin Syntax and ETL Operations",
                    "Hive Architecture and HiveQL Queries",
                    "Hive Joins, Views, and Partitions",
                    "HBase Fundamentals and CAP Theorem",
                ],
            },
            {
                title: "Data Integration Tools: Sqoop, Flume, and Oozie",
                topics: [
                    "Importing and Exporting Data with Sqoop",
                    "Flume Configuration and Twitter Data Ingestion",
                    "Oozie Workflow and Job Scheduling",
                ],
            },
            {
                title: "Apache Spark with Scala",
                topics: [
                    "Spark Core Architecture and RDDs",
                    "Spark SQL, DataFrames, and Streaming",
                    "Scala Basics and Functional Programming",
                    "Batch vs Real-Time Analytics",
                ],
            },
            {
                title: "Statistics and Machine Learning",
                topics: [
                    "Descriptive and Inferential Statistics",
                    "Hypothesis Testing and ANOVA",
                    "Regression and Correlation Analysis",
                    "Supervised and Unsupervised Learning",
                    "Decision Trees, Random Forest, Naive Bayes, and K-Means",
                ],
            },
            {
                title: "Machine Learning with Python",
                topics: [
                    "Python Programming Essentials",
                    "NumPy, Pandas, and Matplotlib",
                    "Supervised & Unsupervised ML Techniques",
                    "Scikit-Learn and Model Building",
                    "Hadoop and Python Integration (Pydoop, MRJob)",
                ],
            },
            {
                title: "Projects and Case Studies",
                topics: [
                    "Social Media Sentiment Analysis Project",
                    "Hadoop Healthcare Domain Project",
                    "Banking & Finance Data Science Project",
                    "Machine Learning Capstone Project",
                ],
            },
        ],
    },
]