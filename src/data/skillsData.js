export const skillGroups = [

   {
    main: 'System Design & Architecture',
    related: ['Microservices', 'Monolithic Architecture', 'Event-Driven Architecture', 'System Scalability & Performance'],
  },

  {
    main: 'Java & Backend Development',
    related: ['Spring Boot', 'Spring Data JPA', 'REST API design & security',  'Spring Cloud'],
  },
  
  {
    main: 'Frontend Development',
    related: ['HTML5', 'CSS3','JavaScript', 'Tailwind CSS','React.js','jQuery','Responsive Design'],
  },
  {
    main: 'Databases Administration',
    related: ['PostgreSQL', 'MySQL','Database Design & Optimization'],
  },

  {
    main: 'DevOps & Cloud',
    related: ['Docker', 'GitHub Actions', 'Google Cloud Platform', ''],
  },
  {
    main: 'Tools',
    related: ['Git & GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman'],
  },
]

export const skillCategories = [
  {
    title: 'Frontend',
    icon: 'Monitor',
    groups: [
      {
        heading: 'Core stack',
        items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      },
      {
        heading: 'Styling',
        items: ['Tailwind CSS', 'Bootstrap', 'Responsive Design'],
      },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    groups: [
     
      {
        heading: 'Frameworks',
        items: ['Spring Boot', 'Django', 'Flask', 'FastAPI'],
      },
    ],
  },
  {
    title: 'Data & Storage',
    icon: 'Database',
    groups: [
      {
        heading: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
      },
      
    ],
  },
  {
    title: 'DevOps',
    icon: 'GitBranch',
    groups: [
      {
        heading: 'Delivery',
        items: ['Docker', 'GitHub Actions', 'GCP', ''],
      },
      {
        heading: 'Workflow',
        items: ['Git', 'GitHub', 'VS Code', 'Postman'],
      },
    ],
  },
]