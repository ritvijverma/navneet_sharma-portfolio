'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stack,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'Navneet11kumar11@hotmail.com',
    href: 'mailto:Navneet11kumar11@hotmail.com',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+91-9654850068',
    href: 'tel:+919654850068',
  },
  {
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Jaipur, India (Open to Remote)',
  },
];

export default function Contact() {
  return (
    <Box
      id="contact"
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
            05.
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: '#F0F4FF',
              fontWeight: 700,
            }}
          >
            Contact
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
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 6,
          }}
        >
          {/* Left Side */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: '#F0F4FF',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Let's Build Something Great
            </Typography>

            <Typography
              sx={{
                color: '#8B9CC4',
                mb: 5,
                lineHeight: 1.8,
              }}
            >
              Open to Technical Architect, Solution Architect
              and Engineering Leadership opportunities.
              Bringing 15+ years of experience in .NET,
              Cloud Architecture, Microservices and Team Leadership.
            </Typography>

            <Stack spacing={3}>
              {contactInfo.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background:
                        'rgba(59,130,246,0.1)',
                      color: '#3B82F6',
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#6B7CA4',
                      }}
                    >
                      {item.label}
                    </Typography>

                    {item.href ? (
                      <Typography
                        component="a"
                        href={item.href}
                        sx={{
                          display: 'block',
                          color: '#F0F4FF',
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#3B82F6',
                          },
                        }}
                      >
                        {item.value}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: '#F0F4FF',
                        }}
                      >
                        {item.value}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* Social Links */}
            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 5 }}
            >
              <Button
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/navneet-sharma-92172b44"
                target="_blank"
                variant="outlined"
              >
                LinkedIn
              </Button>

              <Button
                startIcon={<GitHubIcon />}
                href="https://github.com/Navneet11Sharma11"
                target="_blank"
                variant="outlined"
              >
                GitHub
              </Button>
            </Stack>
          </Box>

          {/* Right Side */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              background:
                'rgba(59,130,246,0.05)',
              border:
                '1px solid rgba(59,130,246,0.15)',
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#F0F4FF',
                mb: 3,
                fontWeight: 700,
              }}
            >
              Quick Summary
            </Typography>

            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                background: 'rgba(0,0,0,0.3)',
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  color: '#8B9CC4',
                  lineHeight: 2,
                  fontFamily: 'monospace',
                }}
              >
                Experience: 15+ Years
                <br />
                Expertise: .NET, Azure, Microservices
                <br />
                Role: Technical Architect
                <br />
                Availability: Open to Opportunities
              </Typography>
            </Box>

            <Button
              fullWidth
              size="large"
              variant="contained"
              startIcon={<SendIcon />}
              href="mailto:Navneet11kumar11@hotmail.com"
            >
              Send Message
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}