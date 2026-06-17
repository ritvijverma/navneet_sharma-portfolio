'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const highlights = [
  {
    icon: <PersonIcon />,
    title: 'Leadership',
    desc: 'Led engineering teams of 6–13 across multiple geographies. Managed task allocation, mentoring and client engagement.',
  },
  {
    icon: <ArchitectureIcon />,
    title: 'Architecture',
    desc: 'Designed and migrated monolithic systems to microservices on Azure. Established CI/CD pipelines and cloud-native practices.',
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Domain Expertise',
    desc: 'Delivered enterprise solutions across Finance, Retail, Manufacturing, E-Commerce and Channel Partner ecosystems.',
  },
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        backgroundColor: 'rgba(17,24,39,0.4)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
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
            01.
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: '#F0F4FF',
              fontWeight: 700,
            }}
          >
            About Me
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

        {/* Main Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 6,
          }}
        >
          {/* Left */}
          <Box>
            <Typography
              sx={{
                color: '#8B9CC4',
                mb: 3,
                lineHeight: 1.9,
              }}
            >
              I’m a{' '}
              <Box
                component="span"
                sx={{ color: '#F0F4FF', fontWeight: 600 }}
              >
                Technical Architect
              </Box>{' '}
              with 15 years of hands-on experience in .NET development,
              delivering enterprise applications across Finance,
              Retail, Sales, Marketing and E-Commerce domains.
            </Typography>

            <Typography
              sx={{
                color: '#8B9CC4',
                mb: 3,
                lineHeight: 1.9,
              }}
            >
              My career has focused on leading complex modernization
              initiatives including monolith-to-microservices migration,
              COBOL-to-C# transformation and on-premise to Azure cloud
              adoption.
            </Typography>

            <Typography
              sx={{
                color: '#8B9CC4',
                lineHeight: 1.9,
              }}
            >
              Beyond development, I work closely with clients,
              stakeholders and engineering teams to drive technical
              strategy, architecture decisions and successful product
              delivery.
            </Typography>

            {/* Award Card */}
            <Paper
              elevation={0}
              sx={{
                mt: 4,
                p: 3,
                background: 'rgba(59,130,246,0.05)',
                border:
                  '1px solid rgba(59,130,246,0.1)',
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <EmojiEventsIcon
                  sx={{ color: '#3B82F6' }}
                />

                <Typography
                  sx={{
                    color: '#8B9CC4',
                  }}
                >
                  Recognized with
                  <Box
                    component="span"
                    sx={{
                      color: '#F0F4FF',
                      mx: 1,
                      fontWeight: 600,
                    }}
                  >
                    Best Team
                  </Box>
                  and
                  <Box
                    component="span"
                    sx={{
                      color: '#F0F4FF',
                      mx: 1,
                      fontWeight: 600,
                    }}
                  >
                    Excellence Awards
                  </Box>
                  throughout career.
                </Typography>
              </Box>
            </Paper>
          </Box>

          {/* Right */}
          <Box>
            {highlights.map((item) => (
              <Paper
                key={item.title}
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  background: 'rgba(17,24,39,0.7)',
                  border:
                    '1px solid rgba(59,130,246,0.1)',
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                      background:
                        'rgba(59,130,246,0.1)',
                      color: '#3B82F6',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#F0F4FF',
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#8B9CC4',
                        lineHeight: 1.7,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}