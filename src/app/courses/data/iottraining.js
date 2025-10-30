export const iottraining = [
  {
    name: "Internet of Things (IoT) Training",
    slug: "iot-training",
    logo: "",
    duration: "30 Hours",
    featured: true,
    overview: "The Internet of Things (IoT) Training program offers practical, hands-on exposure to IoT technologies, including sensors, actuators, hardware platforms, and cloud connectivity. Designed by real-time experts, this course covers IoT architecture, communication protocols, Raspberry Pi, Arduino, and cloud integration. Learners will gain experience building IoT systems with real-world use cases like smart cities and industrial automation.",

    importantItems: [
      "Understand IoT architecture and ecosystem components",
      "Work with Raspberry Pi, Arduino, and sensor integration",
      "Implement IoT communication protocols such as MQTT, CoAP, and HTTP",
      "Connect IoT devices to cloud platforms like AWS and Ubidots",
      "Develop real-time IoT applications using Python and Big Data analytics"
    ],

    whoCanAttend: [
      "Students and professionals interested in IoT technologies",
      "Embedded system developers and electronics engineers",
      "Software developers looking to enter IoT application development",
      "Data analysts and cloud engineers exploring IoT data pipelines"
    ],

    prerequisites: "None",

    content: [
      {
        title: "Introduction to IoT",
        topics: [
          "What is IoT and its applications across domains",
          "Use cases: Smart Cities, IIoT, and consumer electronics",
          "IoT architecture and technology stack overview",
          "Role of cloud, data streaming, and visualization in IoT"
        ]
      },
      {
        title: "Sensors and Actuators",
        topics: [
          "Definition and classification of sensors and actuators",
          "Properties, categories, and selection criteria",
          "Working principles and applications",
          "Industrial, medical, and food-grade sensors"
        ]
      },
      {
        title: "IoT Hardware Platforms",
        topics: [
          "Overview of Raspberry Pi and Arduino",
          "Hardware selection criteria and architecture",
          "PCB design tools and prototyping steps",
          "Programming Arduino using Arduino IDE"
        ]
      },
      {
        title: "Sensor and Actuator Interfacing",
        topics: [
          "Connecting sensors to Arduino (temperature, humidity, light, motion)",
          "Controlling actuators (LEDs, relays, buzzers, motors)",
          "Combining sensors to create intelligent responses",
          "Real-world examples: moisture-based sprinkler control, motion detection"
        ]
      },
      {
        title: "Raspberry Pi Programming",
        topics: [
          "Installing OS and configuring Raspberry Pi",
          "Linux basics and VNC setup",
          "Python fundamentals and file handling",
          "Interfacing sensors and actuators using Python"
        ]
      },
      {
        title: "IoT Communication Protocols",
        topics: [
          "Wireless protocols: RFID, NFC, Bluetooth, ZigBee, Z-Wave",
          "Communication channels: Wi-Fi, GSM, GPRS, LTE",
          "Network protocols: MQTT, CoAP, TCP, UDP, HTTP/S",
          "IPv4 vs IPv6 and their impact on IoT"
        ]
      },
      {
        title: "MQTT and CoAP Protocols",
        topics: [
          "MQTT publish/subscribe model and broker setup",
          "Installing and testing Mosquitto MQTT broker",
          "Using Paho MQTT and Eclipse IoT platform",
          "Implementing CoAP using Python CoAPthon library"
        ]
      },
      {
        title: "IoT Cloud Platform Integration (Ubidots)",
        topics: [
          "Sending sensor data to Ubidots via HTTPS",
          "Creating JSON objects and API integration",
          "Configuring alerts, graphs, and visualization",
          "Controlling actuators using Ubidots"
        ]
      },
      {
        title: "Cloud Computing and Big Data in IoT",
        topics: [
          "Cloud computing concepts, deployment models, and providers",
          "AWS services: EC2, RDS, DynamoDB, Elastic Beanstalk, SNS",
          "Introduction to Big Data and analytics for IoT",
          "Data storage using MongoDB, CouchDB, and Neo4j"
        ]
      },
      {
        title: "AWS IoT Integration",
        topics: [
          "Creating IoT Things in AWS IoT Core",
          "Connecting Raspberry Pi with AWS IoT using certificates",
          "Publishing sensor data and controlling actuators",
          "Integrating AWS IoT with DynamoDB and SNS"
        ]
      },
      {
        title: "IoT Project: Smart Garbage Monitoring",
        topics: [
          "Using sensors to detect garbage bin status",
          "Visualizing bin locations on Google Maps",
          "Generating optimized routes for garbage collection trucks",
          "End-to-end real-world IoT system implementation"
        ]
      }
    ]
  }
];
