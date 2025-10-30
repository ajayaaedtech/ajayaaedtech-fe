export const unixLinuxTraining = [
  {
    name: "UNIX LINUX Training",
    slug: "unix-linux-training",
    logo: "",
    duration: "25 Working days, daily one and half hours",
    featured: true,
    overview:
      "This comprehensive UNIX and Linux Training program equips learners with essential skills to manage data, execute commands, and customize their UNIX/Linux environment. The course provides in-depth knowledge of the UNIX architecture, file system, shell scripting, process management, and networking. It’s ideal for developers, testers, and system administrators seeking a strong foundation in UNIX/Linux operations.",

    importantItems: [
      "Master core UNIX/Linux commands and utilities",
      "Understand the file system architecture and process management",
      "Develop and execute shell scripts for automation",
      "Learn file permissions, filters, and redirection techniques",
      "Gain hands-on experience in networking and job scheduling"
    ],

    whoCanAttend: [
      "Software Developers (C, C++, Java, Oracle)",
      "Test Engineers",
      "SAS Developers",
      "System Administrators",
      "Anyone interested in UNIX/Linux systems"
    ],

    prerequisites:
      "Basic understanding of operating systems and general computer concepts.",

    content: [
      {
        title: "Introduction to UNIX/LINUX",
        topics: [
          "History, features, and benefits of UNIX/Linux",
          "Different flavors of UNIX/Linux",
          "Difference between UNIX, DOS, Windows, and Linux",
          "Architecture and File System Structure of UNIX"
        ]
      },
      {
        title: "UNIX File System Architecture",
        topics: [
          "Boot Block, Super Block, Inode Block, Data Block",
          "Ordinary, Directory, and Device Files",
          "Structure and management of UNIX file systems"
        ]
      },
      {
        title: "UNIX Commands and Utilities",
        topics: [
          "Basic commands: pwd, who, date, cal, banner, exit",
          "Links: Hard and Soft (Symbolic) Links, Unlink",
          "Working with files: cat, touch, rm, cp, mv, ln, wc",
          "Working with directories: mkdir, cd, rmdir, rm"
        ]
      },
      {
        title: "File Display and Filters",
        topics: [
          "Display commands: ls, pg, more, less, head, tail",
          "Simple filters: paste, cut, sort",
          "Complex filters: tr, comm, tee, sed, nl",
          "Zip utilities: gzip, gunzip, compress, uncompress"
        ]
      },
      {
        title: "Printing and File Searching",
        topics: ["lp, cancel", "find, locate"]
      },
      {
        title: "Input/Output Redirection and Shell Meta Characters",
        topics: [
          "Redirecting input, output, and standard error",
          "File substitution and I/O redirection",
          "Quoting meta characters and process execution"
        ]
      },
      {
        title: "Filters and Regular Expressions",
        topics: [
          "grep, fgrep, egrep with options",
          "Usage of regular expressions and patterns",
          "How C programs integrate with UNIX utilities"
        ]
      },
      {
        title: "Backup and File Comparison",
        topics: [
          "uniq, diff, cmp",
          "Backup utilities: tar, cpio",
          "Piping and use with filters"
        ]
      },
      {
        title: "File Permissions and Security",
        topics: ["chmod, chown, chgrp, umask"]
      },
      {
        title: "Communication and Networking Commands",
        topics: [
          "write, wall, mail",
          "telnet, ftp, rlogin, finger",
          "Disk utilities: df, du, mount, unmount"
        ]
      },
      {
        title: "Job Control and Scheduling",
        topics: [
          "Foreground and background jobs, nohup",
          "Process management: ps, kill, pkill",
          "Scheduling with at, crontab, and batch commands"
        ]
      },
      {
        title: "Editors",
        topics: ["ed, ex, and vi editors", "Command, Insert, and Ex modes"]
      },
      {
        title: "Shell Scripting",
        topics: [
          "What is shell scripting and its importance",
          "Different types of shells",
          "Creating and executing shell scripts",
          "Shell input/output: echo, print, read",
          "Variables: system, user-defined, environment, and constants",
          "Operators: arithmetic, relational, logical, assignment"
        ]
      },
      {
        title: "Control Structures and Looping",
        topics: [
          "if, if-else, if-elif, case",
          "while, until, for, break, continue"
        ]
      },
      {
        title: "Advanced UNIX Topics",
        topics: [
          "Formatted I/O and namespaces",
          "Introduction to Message Queues and System Calls",
          "Programming with Berkeley Sockets and Reserved Ports",
          "UNIX Domain Protocol and Socket Addresses"
        ]
      }
    ]
  }
];
