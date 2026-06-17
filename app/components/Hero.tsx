'use client';

import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
  Avatar,
  Paper,
} from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Hero() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '8+', label: 'Organizations' },
    { value: '10', label: 'Enterprise Projects' },
    { value: '6+', label: 'Domains' },
  ];

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background:
          'linear-gradient(180deg, #0B1120 0%, #111827 100%)',
        pt: 12,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1.5fr 1fr',
            },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <Box>
            <Chip
              label="Available for Remote Opportunities"
              color="primary"
              sx={{
                mb: 3,
                fontWeight: 600,
              }}
            />

            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                fontWeight: 800,
                mb: 2,
              }}
            >
              Navneet Sharma
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: '#60A5FA',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Technical Architect | .NET | Azure | Microservices
            </Typography>

            <Typography
              sx={{
                color: '#CBD5E1',
                lineHeight: 1.9,
                fontSize: '1.05rem',
                mb: 4,
                maxWidth: '700px',
              }}
            >
              Technical Architect with 15+ years of experience
              designing enterprise-grade applications,
              leading cloud transformations,
              modernizing legacy systems,
              and building scalable microservices across Finance,
              Retail, Manufacturing and Enterprise platforms.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                href="mailto:Navneet11kumar11@hotmail.com"
              >
                Contact Me
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="#contact"
              >
                View Contact
              </Button>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
            >
              <Stack direction="row" spacing={1}>
                <LocationOnIcon color="primary" />
                <Typography sx={{ color: '#CBD5E1' }}>
                  Jaipur, India
                </Typography>
              </Stack>

              <Button
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/navneet-sharma-92172b44"
                target="_blank"
              >
                LinkedIn
              </Button>

              <Button
                startIcon={<GitHubIcon />}
                href="https://github.com/Navneet11Sharma11"
                target="_blank"
              >
                GitHub
              </Button>
            </Stack>
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar
              sx={{
                width: 320,
                height: 320,
                bgcolor: '#2563EB',
                color: '#fff',
                fontSize: '5rem',
                fontWeight: 800,
                border: '5px solid #3B82F6',
                boxShadow:
                  '0 0 40px rgba(59,130,246,0.35)',
              }}
            >
              NS
            </Avatar>
          </Box>
        </Box>

        {/* Stats */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2,1fr)',
              md: 'repeat(4,1fr)',
            },
            gap: 3,
            mt: 8,
          }}
        >
          {stats.map((item) => (
            <Paper
              key={item.label}
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#3B82F6',
                  fontWeight: 800,
                }}
              >
                {item.value}
              </Typography>

              <Typography
                sx={{
                  color: '#CBD5E1',
                  mt: 1,
                }}
              >
                {item.label}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}