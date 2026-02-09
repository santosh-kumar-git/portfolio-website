export const projects = [
  {
    id: 1,
    title: 'Distributed Event-Driven Architecture',
    summary: 'Scalable backend system processing high-volume events using AWS & Node.js',
    description: 'Designed and implemented a distributed, event-driven backend architecture for Hornblower Group. Utilized AWS SQS for asynchronous message processing and ECS Spot Instances (Fargate) for cost-optimized, scalable container orchestration. This system improved fault tolerance and handling of high-traffic workloads.',
    image: '/api/placeholder/600/400',
    technologies: ['Node.js', 'AWS ECS', 'AWS SQS', 'Docker', 'PostgreSQL', 'Fargate'],
    liveUrl: '#',
    githubUrl: '#',
    role: 'Software Development Engineer II',
    category: 'Backend',
    status: 'Live',
    keyFeatures: [
      'Asynchronous job processing with AWS SQS',
      'Scalable container orchestration using ECS Fargate',
      'Fault-tolerant event-driven design',
      'Real-time processing of high-volume data',
      'Automated backend workflows and cron jobs'
    ],
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    metrics: {
      performance: '23s → <1s (Frontend)',
      uptime: '99.9%',
      costSavings: 'ECS Spot Fargate'
    }
  },
  {
    id: 2,
    title: 'Secure Payment Gateway Integration',
    summary: 'PCI-compliant integration of FreedomPay with Apple/Google Pay support',
    description: 'Lead the integration of FreedomPay payment gateway, enabling secure, PCI-compliant credit card transactions. Implemented support for digital wallets like Apple Pay and Google Pay, ensuring a seamless checkout experience for users.',
    image: '/api/placeholder/600/400',
    technologies: ['Node.js', 'FreedomPay API', 'Webhooks', 'Security', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    role: 'Backend Engineer',
    category: 'FinTech',
    status: 'Live',
    keyFeatures: [
      'Secure session-based transaction processing',
      'PCI-DSS compliant data handling',
      'Apple Pay and Google Pay integration',
      'Real-time transaction synchronization',
      'Robust error handling and logging'
    ],
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    metrics: {
      security: 'PCI Compliant',
      successRate: '99.9%'
    }
  },
  {
    id: 3,
    title: 'Identity Verification System',
    summary: 'AI-powered face recognition and liveness detection using AWS Rekognition',
    description: 'Developed a robust identity verification system leveraging AWS Rekognition for facial analysis and liveness detection. Securely stored data in AWS S3 and implemented backend validation to prevent fraud.',
    image: '/api/placeholder/600/400',
    technologies: ['AWS Rekognition', 'AWS S3', 'Node.js', 'React', 'AI/ML'],
    liveUrl: '#',
    githubUrl: '#',
    role: 'Full Stack Developer',
    category: 'AI/Security',
    status: 'Live',
    keyFeatures: [
      'Face matching and verification',
      'Liveness detection to prevent spoofing',
      'Secure document storage in S3',
      'Real-time verification results',
      'Scalable serverless implementation'
    ],
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    metrics: {
      accuracy: 'High',
      latency: '< 2s'
    }
  },
  {
    id: 4,
    title: 'SysCloud SaaS Platform',
    summary: 'Cloud backup and restore solutions for enterprise SaaS applications',
    description: 'Contributed to the development of SysCloud\'s backup and security platform. Built scalable REST APIs for backup workflows, implemented restore functionality, and optimized database performance for large datasets.',
    image: '/api/placeholder/600/400',
    technologies: ['Node.js', 'React', 'TypeScript', 'GraphQL', 'MongoDB', 'PostgreSQL'],
    liveUrl: 'https://syscloud.com',
    githubUrl: '#',
    role: 'Software Engineer',
    category: 'SaaS',
    status: 'Live',
    keyFeatures: [
      'Automated cloud-to-cloud backup',
      'Granular restore capabilities',
      'GraphQL API implementation',
      'Role-based access control',
      'Microservices architecture'
    ],
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    metrics: {
      dataProcessed: 'PB+',
      reliability: '99.9%'
    }
  }
]