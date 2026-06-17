'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
} from '@mui/material';

import WorkIcon from '@mui/icons-material/Work';
const experiences = [
  {
    title: 'Technical Architect',
    company: 'Programmers.io',
    period: 'Jun 2024 – Present',
    location: 'Delhi (Remote)',
    client: 'Virtutem / USA',
    project: 'Planning System & Customer Complaints',
    description:
      'End-to-end architecture and delivery of a Planning System and Customer Complaints platform for a US-based client, built on a modern polyglot stack with full observability.',
    responsibilities:
      'Drive client-facing technical discussions and solution design with end-to-end ownership. Lead and mentor an engineering team of 6, making key architecture decisions across frontend, backend, and infrastructure layers. Oversee CI/CD pipelines, Docker-based deployments, and troubleshoot production issues with OpenTelemetry-based observability.',
    solutionEnvironment: 'VS Code, Visual Studio 2022, SQL Server 2022, MongoDB, Docker, Azure DevOps, Microsoft Teams',
    tech: ['Blazor', 'ReactJS', 'Ant Design', 'Zustand', '.NET 9', 'Dapper', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'Docker', 'OpenTelemetry'],
    highlights: [
      'Drive client-facing technical discussions and solution design with end-to-end ownership',
      'Lead and mentor engineering team of 6, making key architecture decisions',
      'Oversee CI/CD deployments and troubleshoot production issues',
    ],
    teamSize: '6',
    current: true,
  },
  {
    title: 'Technical Architect',
    company: 'EA Technologies',
    period: 'Aug 2023 – Jun 2024',
    location: 'Noida (Contract)',
    client: 'Channel Mechanics / Ireland',
    project: 'Vendor & Partner Platform',
    description:
      'The Channel Mechanics Channel Program Automation Platform easily enables partner differentiation, helps build loyalty and strengthens the vendor-partner relationship.',
    responsibilities:
      'Drive people leadership by mentoring and guiding engineering teams, while making strategic architecture decisions to migrate monolithic systems to microservices architecture. Ensure engineering excellence through modern technology adoption and best practices, including migration from ASP.NET Forms to Blazor WebAssembly, building .NET Core microservices, and leveraging the Azure platform for scalable, secure, and high-performing solutions.',
    solutionEnvironment: 'Visual Studio 2022, SQL Server 2019, Azure, Microsoft Teams',
    tech: ['Blazor', 'ReactJS', 'Redux', 'Ant Design', '.NET 7 Web API', 'Entity Framework', 'Azure', 'MSTest', 'Jest'],
    highlights: [
      'Led migration from ASP.NET Forms to Blazor WebAssembly',
      'Built .NET Core microservices on Azure for scalable delivery',
      'Guided team of 7 through strategic architecture decisions',
    ],
    teamSize: '7',
    current: false,
  },
  {
    title: 'Project Lead',
    company: 'TechUnido Software',
    period: 'Jun 2021 – Jul 2023',
    location: 'Pune (Full-time)',
    client: 'Medline / France',
    project: 'NetQuote — Manufacturing Application',
    description:
      'NetQuote is a manufacturing application which generates quotes as per client (hospital) needs and sends them to the client\'s address.',
    responsibilities:
      'Collaborate with clients to analyze complex business and technical challenges and translate them into robust solutions with clear ownership. Provide people leadership by guiding and supporting engineering teams, while driving critical architecture decisions to migrate legacy monolithic systems to modern microservices architecture. Uphold engineering excellence through best practices, performance optimization, and scalable design, including migrations from IBM AS/400 to PIM & QAD, ASP.NET MVC to React applications, and development of .NET Core microservices with SSIS for reliable, enterprise-grade delivery.',
    solutionEnvironment: 'Visual Studio 2019, SQL Server 2019, Azure DevOps, Microsoft Teams',
    tech: ['.NET Core MVC', 'ReactJS', 'Redux', '.NET 7 Web API', 'Entity Framework', 'SSIS', 'xUnit', 'Mocha'],
    highlights: [
      'Migrated IBM AS/400 to PIM & QAD systems',
      'Led ASP.NET MVC to React migration with microservices architecture',
      'Managed team of 13, translating complex business requirements',
    ],
    teamSize: '13',
    current: false,
  },
  {
    title: 'Technical Lead',
    company: 'EA Technologies',
    period: 'May 2017 – Jun 2021',
    location: 'Noida (Full-time)',
    client: 'OptiMarché / France',
    project: 'FrontOffice & BackOffice',
    description:
      'FrontOffice: OptiMarché web application assists clients in the control of public markets for their choice of products and suppliers. BackOffice: A Windows application giving administrators privilege to map markets, products, and suppliers on the database.',
    responsibilities:
      'Technical Lead / Team Management and Sr. Programmer. Understanding BRD, client interaction, requirement gathering and analysis, maintaining user stories, task allocation, maintaining code repository, production deployment, fixing production bugs, module delivery, sharing weekly status with client, maintaining account status, and migration of projects to Azure Cloud.',
    solutionEnvironment: 'Visual Studio 2017, Expression Blend, SQL Server 2014, Trello, Bitbucket, GitLab, Azure, Microsoft Teams, CloudBerry, DFD & MSBI, Kudu Services',
    tech: ['.NET Core MVC', 'Blazor', 'ReactJS', 'WPF', 'Web API', 'WCF', 'SSIS', 'Azure'],
    highlights: [
      'Managed Azure cloud migrations and production deployments',
      'Led team of 6, handling client interactions and weekly status reporting',
      'Full-stack delivery across web (MVC/Blazor) and desktop (WPF/MVVM)',
    ],
    teamSize: '6',
    current: false,
  },
  {
    title: 'Associate Consultant Engineer',
    company: 'HCL Technologies',
    period: 'Mar 2017 – May 2017',
    location: 'Noida',
    client: 'HCL',
    project: 'IAutomation — Server Automation',
    description:
      'IAutomation is an in-house project which allows automation on servers based on a defined set of rules.',
    responsibilities:
      'Associate Consultant Engineer — understanding BRD, coordinating with architects and business analysts to determine functionalities, design, develop and implement solutions based on user needs and requirements.',
    solutionEnvironment: 'Visual Studio 2017, SQL Server 2014',
    tech: ['ADO.NET', 'jQuery', 'ASP.NET', 'SignalR', 'SQL Dependency'],
    highlights: [
      'Coordinated with architects and business analysts on automation platform',
      'Designed and implemented rule-based server automation workflows',
    ],
    teamSize: '12',
    current: false,
  },
  {
    title: 'Associate Consultant Engineer',
    company: 'GlobalLogic India',
    period: 'Jun 2015 – Mar 2017',
    location: 'Noida',
    client: 'KVAT, WEIS, BIGY, Foxfire, Price Chopper, Family Dollar / US',
    project: 'Business Rule Extraction, Ticket Management, Image Conversion',
    description:
      'Business Rule Extraction: Extracting business rules from existing COBOL-based applications and migrating them to C# web-based systems. Ahold – Ticket Management System: Window-based application for printing labels against ticket numbers. Family Dollar – Image Conversion: Utility for converting TARGA (.TGA) images to Encapsulated PostScript (.EPS) using ImageMagick.',
    responsibilities:
      'Analyze business requirements, define implementation processes according to business design, prepare design documentation for new features, and customize applications as per requirements.',
    solutionEnvironment: 'Visual Studio 2015, SQL Server 2012, TFS, Bitbucket',
    tech: ['C#', 'MVC', 'Web API', 'Entity Framework', 'LINQ', 'SonarQube', 'DevExpress', 'Unit Testing (Moq)', 'Simple Injector'],
    highlights: [
      'Extracted business rules from legacy COBOL apps and migrated to C# web systems',
      'Built ticket management and image conversion utilities for US retail clients',
    ],
    teamSize: '7',
    current: false,
  },
  {
    title: 'Senior Software Engineer',
    company: 'Q3 Technology',
    period: 'Sep 2014 – Jun 2015',
    location: 'Delhi',
    client: 'Samsung / India',
    project: 'SmartDost HHP (Hand Held Product)',
    description:
      'Web and Android-based project containing information about Samsung products, including details of product sales and distribution across Samsung authorized dealers and promotional activities.',
    responsibilities:
      'Senior Software Engineer — understanding BRD, preparing technical and design documents, creating unit test cases, and contributing to development.',
    solutionEnvironment: 'Visual Studio 2013, SQL Server 2012, TFS',
    tech: ['ASP.NET MVC', 'Entity Framework', 'WCF RESTful', 'jQuery', 'XML'],
    highlights: [
      'Built Samsung product sales & distribution tracking web and Android-backed platform',
      'Prepared technical documentation and unit test cases',
    ],
    teamSize: '8',
    current: false,
  },
  {
    title: 'Senior Software Engineer',
    company: 'Accortis Technologies',
    period: 'Dec 2013 – Sep 2014',
    location: 'Delhi',
    client: 'Global Family of Companies / Canada',
    project: 'Konnexion — Project Management Platform',
    description:
      'Konnexion is a web-based project management tool with modules for Task Management, Discussions, Purchase Orders, Change Requests, Leave Management, Project Scheduling, Risk Management, Project Expenses, Communications, and Timesheet Management.',
    responsibilities:
      'Senior Software Engineer — understanding project requirements and involved in coding activities.',
    solutionEnvironment: 'Visual Studio 2010, SQL Server 2008, SVN',
    tech: ['MVC4', 'Entity Framework', 'WCF', 'WPF', 'jQuery', 'StyleCop'],
    highlights: [
      'Developed modules for task management, purchase orders, risk management, and timesheets',
    ],
    teamSize: '4',
    current: false,
  },
  {
    title: 'Executive Software Engineer',
    company: 'Educomp Solutions',
    period: 'Feb 2012 – Dec 2013',
    location: 'Noida',
    client: 'Educomp Schools / India',
    project: 'Facility Management System & School Management System',
    description:
      'Facility Management System is a company web platform used for Leave Management, Timesheet Management, Revenue Per Month, MIS, Vendor In-House Leaves, and Attendance Reports. Used by all Educomp employees for leaves, holiday checks, and monthly timesheet filing.',
    responsibilities:
      'Developed web forms using C# and ASP.NET, created stored procedures and triggers, worked with CSS, HTML, JavaScript and AJAX, implemented report export/import to Excel, and ensured SQL injection prevention for application security.',
    solutionEnvironment: 'Visual Studio 2008, SQL Server 2005, SVN',
    tech: [
      'ASP.NET',
      'Web Services',
      'LINQ to SQL',
      'C#',
      'HTML',
      'jQuery',
      'WPF',
      'MVVM',
    ],
    highlights: [
      'Developed web forms using C# and ASP.NET',
      'Created stored procedures and triggers',
      'Implemented Excel export/import reporting',
      'Applied SQL injection prevention techniques',
    ],
    teamSize: '1',
    current: false,
  },
  {
    title: 'Trainee Developer',
    company: 'Ezee Tips',
    period: 'Sep 2011 – Feb 2012',
    location: 'Delhi',
    client: 'Ezee Holidays / India',
    project: 'Travel Booking & Holiday Package Platform',
    description:
      'Company website developed for booking holiday trips and travel packages.',
    responsibilities:
      'Worked on overall software design and documentation, created database tables, stored procedures, constraints, triggers, views and indexes using SQL Server, and documented application requirements.',
    solutionEnvironment: 'Visual Studio 2008, SQL Server 2005, SVN',
    tech: [
      '.NET Framework 3.5',
      'ASP.NET',
      'ADO.NET',
      'C#',
      'HTML',
      'jQuery',
      'SQL Server',
    ],
    highlights: [
      'Created database objects and documentation',
      'Developed ASP.NET modules',
      'Worked on holiday booking workflows',
      'Supported database optimization activities',
    ],
    teamSize: '2',
    current: false,
  },
];


export default function Experience() {
 return (
  <Box
    id="experience"
    sx={{
      py: 12,
      backgroundColor: 'rgba(17,24,39,0.4)',
    }}
  >
    <Container maxWidth="lg">

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 8,
        }}
      >
        <Typography
          sx={{
            color: '#3B82F6',
            fontFamily: 'monospace',
            mr: 2,
          }}
        >
          03.
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: '#F0F4FF',
            fontWeight: 700,
          }}
        >
          Experience
        </Typography>

        <Box
          sx={{
            flex: 1,
            height: 1,
            ml: 3,
            backgroundColor: 'rgba(59,130,246,0.2)',
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'relative',
          pl: { xs: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 15,
            top: 0,
            bottom: 0,
            width: 2,
            bgcolor: 'rgba(59,130,246,0.2)',
          }}
        />

        {experiences.map((exp, idx) => (
          <Box
            key={idx}
            sx={{
              position: 'relative',
              mb: 4,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: -35,
                top: 25,
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: '#3B82F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <WorkIcon
                sx={{
                  fontSize: 16,
                  color: '#fff',
                }}
              />
            </Box>

          <Paper
  elevation={0}
  sx={{
    p: 4,
    background: 'rgba(15,23,42,0.95)',
    border: exp.current
      ? '1px solid rgba(59,130,246,0.45)'
      : '1px solid rgba(59,130,246,0.15)',
    borderRadius: 3,
    transition: 'all .3s ease',

    '&:hover': {
      transform: 'translateY(-3px)',
      borderColor: '#3B82F6',
      boxShadow: '0 10px 30px rgba(59,130,246,0.15)',
    },
  }}
>
              {exp.current && (
                <Chip
                  label="Current"
                  color="success"
                  size="small"
                  sx={{ mb: 2 }}
                />
              )}

              <Typography
                variant="h6"
                sx={{
                  color: '#F0F4FF',
                  fontWeight: 700,
                }}
              >
                {exp.title}
              </Typography>

              <Typography
                sx={{
                  color: '#3B82F6',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {exp.company}
              </Typography>

              <Typography
                sx={{
                  color: '#8B9CC4',
                  mb: 2,
                  fontSize: '0.9rem',
                }}
              >
                {exp.period} • {exp.location}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 3,
                  flexWrap: 'wrap',
                  mb: 2,
                }}
              >
                <Typography sx={{ color: '#CBD5E1' }}>
                  <strong>Client:</strong> {exp.client}
                </Typography>

                <Typography
                  sx={{
                    color: '#FBBF24',
                    fontWeight: 600,
                  }}
                >
                  Team Size: {exp.teamSize}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: '#94A3B8',
                  mb: 3,
                  fontStyle: 'italic',
                }}
              >
                {exp.project}
              </Typography>

              <Box
                component="ul"
                sx={{
                  pl: 2,
                  mb: 3,
                }}
              >
                {exp.highlights.map((h, i) => (
                  <Typography
                    key={i}
                    component="li"
                    sx={{
                      color: '#CBD5E1',
                      mb: 1,
                    }}
                  >
                    {h}
                  </Typography>
                ))}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                {exp.tech.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(37,99,235,0.12)',
                      color: '#DBEAFE',
                      border: '1px solid rgba(96,165,250,0.35)',
                      fontWeight: 600,
                      borderRadius: 2,
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);
}
