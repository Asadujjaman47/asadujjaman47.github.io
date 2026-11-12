export const projects = [
  {
    name: 'Investar OMS: Stock Trading Platform',
    label: 'Professional project',
    description:
      'Stock trading platform for Dhaka Stock Exchange brokers, built as Spring Cloud microservices. Built real-time market data on the DSE ITCH feed (WebSocket price charts, Redis time-and-sales API, index sync), hardened order execution with RabbitMQ publisher confirms and dead-letter queues, and set up Spring Cloud Config with live refresh across all services.',
    tags: ['Spring Boot', 'Spring Cloud', 'RabbitMQ', 'Redis', 'PostgreSQL'],
    github: null,
    live: null,
  },
  {
    name: 'Investar Remittance Wallet',
    label: 'Professional project',
    description:
      'Stellar-based cross-border remittance wallet with MoneyGram cash pickup and deposits. Automated MoneyGram withdrawal settlement, built external wallet linking with signed-challenge verification, enforced Spring Modulith module boundaries, and raised integration-test coverage to 80% with Testcontainers and WireMock.',
    tags: ['Spring Boot', 'Spring Modulith', 'Stellar', 'PostgreSQL'],
    github: null,
    live: null,
  },
  {
    name: 'Modulith E-Commerce Platform',
    label: 'Personal project',
    description:
      'A 13-module e-commerce modular monolith built with Spring Modulith, with event-driven communication and module boundaries enforced by tests. Features JWT refresh-token rotation, idempotent orders with stock reservation, Redis caching, rate limiting, and full observability via Prometheus, Grafana, and Zipkin — with CI/CD on GitHub Actions (CodeQL, Trivy) publishing to GHCR.',
    tags: ['Spring Boot', 'Spring Modulith', 'PostgreSQL', 'Redis', 'Spring Security', 'Docker'],
    github: 'https://github.com/Asadujjaman47/modulith-e-commerce-platform',
    live: null,
  },
  {
    name: 'Spring Microservices Lab',
    label: 'Personal project',
    description:
      'An e-commerce backend built on Spring Cloud microservices with centralized configuration, service discovery, and an API Gateway. Combines synchronous REST communication with asynchronous RabbitMQ messaging, Redis caching, and distributed tracing via Zipkin and Micrometer.',
    tags: ['Spring Boot', 'Spring Cloud', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    github: 'https://github.com/Asadujjaman47/spring-microservices-lab',
    live: null,
  },
  {
    name: 'Restaurant Review Platform',
    label: 'Personal project',
    description:
      'Full REST API backend for a restaurant review system. Implements CRUD operations, user authentication, and structured data handling with Spring Boot.',
    tags: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL'],
    github: 'https://github.com/Asadujjaman47/Restaurant-Review-Platform-backend',
    live: null,
  },
  {
    name: 'Journal App',
    label: 'Personal project',
    description:
      'A personal journaling application demonstrating seamless NoSQL integration with Spring Boot and MongoDB, featuring user-scoped entries and clean REST endpoints.',
    tags: ['Java', 'Spring Boot', 'MongoDB'],
    github: 'https://github.com/Asadujjaman47/Journel-app-Spring-Boot-MongoDB',
    live: null,
  },
  {
    name: 'YouTube Channel Backend',
    label: 'Personal project',
    description:
      'Backend API for a YouTube-like channel platform built with TypeScript. Handles channel management, video metadata, and user interactions — showcasing versatility beyond Java.',
    tags: ['TypeScript', 'Node.js', 'REST API'],
    github: 'https://github.com/Asadujjaman47/yt-channel-backend',
    live: null,
  },
  {
    name: 'Flavoro — Food Ordering App',
    label: 'Personal project',
    description:
      'A modern food ordering web application with a clean UI built using React, Vite, and Tailwind CSS. Live and deployed on Vercel.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Asadujjaman47/Flavoro-Food-ordering-app',
    live: 'https://flavoro-app.vercel.app',
  },
]
