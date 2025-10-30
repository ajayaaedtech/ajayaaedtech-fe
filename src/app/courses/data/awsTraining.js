export const awstraining = [
  {
    name: "AWS Training (AWS Solutions Architect – Associate and SysOps Administrator)",
    slug: "aws-training",
    logo: "",
    duration: "35 Days (1 Hour Daily)",
    featured: true,
    overview: "This comprehensive, instructor-led AWS Training covers both the AWS Solutions Architect – Associate and SysOps Administrator tracks. It provides hands-on experience in setting up, managing, and deploying cloud infrastructure on Amazon Web Services (AWS). Participants will learn to design, implement, and monitor scalable and secure cloud environments, gaining a strong foundation in AWS core services and tools.",

    importantItems: [
      "Learn to design and deploy scalable, reliable AWS cloud solutions.",
      "Gain hands-on experience with EC2, S3, RDS, VPC, and IAM.",
      "Understand AWS management tools and security best practices.",
      "Implement automation with DevOps tools such as CodePipeline and Lambda.",
      "Prepare for AWS Solutions Architect and SysOps certification exams."
    ],

    whoCanAttend: [
      "Beginners with an interest in cloud computing.",
      "System administrators and developers seeking AWS expertise.",
      "IT professionals preparing for AWS certification.",
      "Cloud computing enthusiasts and students.",
      "Organizations migrating to AWS cloud infrastructure."
    ],

    prerequisites: "None. Basic system administration or development experience is an added advantage.",

    content: [
      {
        title: "Introduction to Cloud Computing",
        topics: [
          "Overview and essential characteristics of cloud computing",
          "Service models in cloud computing",
          "Deployment models in cloud computing",
          "Introduction to AWS and account creation",
          "Understanding AWS free tier limitations"
        ]
      },
      {
        title: "Identity and Access Management (IAM)",
        topics: [
          "Root account vs IAM user",
          "Multi-Factor Authentication setup",
          "IAM password policies",
          "Customer managed policies, groups, and roles",
          "Access management and security best practices"
        ]
      },
      {
        title: "Amazon S3 and Glacier Storage",
        topics: [
          "Introduction to S3 and storage classes",
          "Versioning, replication, and lifecycle management",
          "S3 security, encryption, and static website hosting",
          "Events configuration and cross-account access",
          "Data management with third-party tools and pre-signed URLs"
        ]
      },
      {
        title: "AWS Storage Gateway and Linux Basics",
        topics: [
          "Overview of AWS Storage Gateway",
          "Introduction to Linux for AWS users",
          "Basic Linux commands and configurations",
          "Web server setup and service configurations",
          "Integrating Linux with AWS services"
        ]
      },
      {
        title: "Compute Services (EC2 and Elastic Beanstalk)",
        topics: [
          "Launching and configuring EC2 instances",
          "Instance types, key pairs, and security groups",
          "Volumes, snapshots, and custom AMIs",
          "Load balancers, auto-scaling, and health checks",
          "Elastic Beanstalk and AWS Lightsail overview"
        ]
      },
      {
        title: "Monitoring and Management Tools",
        topics: [
          "Using CloudWatch for billing and instance alarms",
          "AWS CLI and EC2 roles configuration",
          "Creating custom metrics and monitoring performance",
          "Understanding CloudTrail and AWS Config",
          "Security audits with AWS Trusted Advisor and Inspector"
        ]
      },
      {
        title: "Networking and Route 53",
        topics: [
          "DNS records and routing policies overview",
          "Hosting websites using Route 53",
          "Simple, latency-based, and failover routing policies",
          "Weighted and geolocation routing configurations",
          "Custom VPCs, subnets, ACLs, and VPC peering setup"
        ]
      },
      {
        title: "Database Services",
        topics: [
          "Creating and managing RDS instances (MySQL, MSSQL, Aurora)",
          "Multi-AZ deployments and read replicas",
          "Introduction to DynamoDB and Redshift",
          "ElastiCache overview and configuration",
          "Database migration and schema conversion tools"
        ]
      },
      {
        title: "Security and Compliance",
        topics: [
          "Understanding AWS Key Management Service (KMS)",
          "AWS Certificate Manager and encryption",
          "Implementing AWS Inspector and Trusted Advisor",
          "CloudTrail logging and AWS Config compliance checks",
          "Security best practices and IAM policies"
        ]
      },
      {
        title: "Content Delivery and Application Services",
        topics: [
          "Configuring CloudFront for content delivery",
          "Using SES, SQS, SWF, and SNS services",
          "Migrating servers using SMS (Server Migration Service)",
          "Setting up Directory Services and domain integration",
          "Cost estimation with AWS TCO and Simple Monthly Calculator"
        ]
      },
      {
        title: "DevOps and Automation Tools",
        topics: [
          "Overview of DevOps in the AWS ecosystem",
          "Using CodePipeline, CodeCommit, CodeBuild, and CodeDeploy",
          "Serverless computing with AWS Lambda",
          "Automating infrastructure with CloudFormation",
          "Continuous delivery and integration practices"
        ]
      },
      {
        title: "Performance and Reliability Optimization",
        topics: [
          "Creating custom monitoring metrics with CloudWatch",
          "Reviewing AWS whitepapers for best practices",
          "Security, reliability, and performance efficiency principles",
          "Cost optimization techniques",
          "Operational excellence strategies"
        ]
      }
    ]
  }
];
