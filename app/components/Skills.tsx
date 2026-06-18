// 
'use client';
import { Box, Container, Typography, Divider } from '@mui/material';

const skillGroups = [
  { category: 'Languages', skills: ['C#', 'TypeScript', 'JavaScript', 'Python', 'VB', 'COBOL'] },
  {
    category: 'Frontend', skills: ['React', 'Next.js', 'Blazor', 'Angular', 'jQuery', 'KnockoutJS', 'AJAX'
    ]
  },
  { category: 'Backend & APIs', skills: ['.NET Core', 'ASP.NET MVC', 'Web API', 'WCF', 'Node.js', 'Express.js', 'Django'] },
  { category: 'Databases', skills: ['SQL Server', 'PostgreSQL', 'Oracle', 'MySQL', 'MongoDB'] },
  { category: 'ORM', skills: ['Entity Framework', 'Dapper', 'ADO.NET', 'NHibernate', 'LINQ'] },
  {
    category: 'Cloud & DevOps', skills: ['Azure', 'AWS', 'Docker', 'Azure Pipelines', 'Azure App Services', 'Azure Data Factory', 'Runbooks',
      'WebJobs']
  },
  { category: 'Observability', skills: ['OpenTelemetry', 'Grafana', 'Prometheus', 'ELK Stack'] },
  {
    category: 'Testing', skills: ['xUnit', 'MSTest', 'NUnit', 'Jest', 'Mocha', 'Playwright', 'Unit Testing'
    ]
  },
  {
    category: 'Patterns & Architecture', skills: ['Microservices', 'CQRS', 'MVVM', 'N-Tier', 'Factory', 'Singleton', 'DI', 'OOP',
      'SDLC',
      'Code Reviews']
  },
  { category: 'Code Quality', skills: ['SonarQube', 'SonarCloud', 'StyleCop', 'FxCop', 'CAT.NET'] },
  {
    category: 'BI & Reporting', skills: ['MSBI', 'Power BI', 'SSIS', 'SSRS', 'SSAS', 'Reports',
      'Charts']
  },
  {
    category: 'Tools', skills: ['Visual Studio', 'VS Code', 'Postman', 'Swagger', 'Git', 'Bitbucket', 'TFS', 'PuTTY',
      'PowerShell', 'Bruno']
  },
  {
    category: 'Enterprise Tools',
    skills: [
      'Infragistics',
      'ClickOnce',
      'SendGrid',
      'Load Balancers',
      'NopCommerce'
    ],
  },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 12, background: 'linear-gradient(180deg, #0B1120 0%, #111827 100%)' }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 8 }}>
          <Typography sx={{ color: '#3B82F6', fontFamily: 'monospace', mr: 2 }}>02.</Typography>
          <Typography variant="h3" sx={{ color: '#F0F4FF', fontWeight: 700 }}>Technologies</Typography>
          <Box sx={{ flex: 1, height: 1, ml: 3, backgroundColor: 'rgba(59,130,246,0.2)' }} />
        </Box>

        {/* Table */}
        <Box
          sx={{
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: 3,
            overflow: 'hidden',
            background: 'rgba(15,23,42,0.9)',
          }}>
          <Box sx={{ width: '100%' }}>
            <Box>
              {skillGroups.map((group, index) => (
                <Box
                  key={group.category}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '220px 1px 1fr' },
                    alignItems: 'center',
                    gap: { xs: 1, md: 2 },
                    px: { xs: 2, md: 3 },
                    py: { xs: 1.5, md: 2.5 },
                    borderBottom: index !== skillGroups.length - 1 ? '1px solid rgba(59,130,246,0.08)' : 'none',
                    '&:hover': { background: 'rgba(59,130,246,0.03)' },
                    transition: 'background 0.15s ease',
                  }}
                >
                  {/* Category */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Typography
                      sx={{
                        color: '#60A5FA',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {group.category}
                    </Typography>
                  </Box>

                  {/* Divider (hidden on small screens) */}
                  <Box sx={{ display: { xs: 'none', md: 'block' }, px: 0 }}>
                    <Divider orientation="vertical" sx={{ borderColor: 'rgba(59,130,246,0.08)', height: '100%' }} />
                  </Box>

                  {/* Skills as pills */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {group.skills.map((skill) => (
                      <Box
                        key={skill}
                        component="span"
                        sx={{
                          px: 1.5,
                          py: 0.4,
                          borderRadius: '999px',
                          fontSize: '0.78rem',
                          fontFamily: 'monospace',
                          color: '#94A3B8',
                          border: '1px solid rgba(59,130,246,0.15)',
                          background: 'rgba(59,130,246,0.05)',
                          whiteSpace: 'nowrap',
                          transition: 'all 0.15s ease',
                          cursor: 'default',
                          '&:hover': {
                            color: '#E2E8F0',
                            background: 'rgba(59,130,246,0.12)',
                            borderColor: 'rgba(59,130,246,0.35)',
                          },
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}