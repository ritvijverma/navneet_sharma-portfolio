'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
} from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    degree: 'B.Tech — Information Technology',
    institution: 'Maharishi Dayanand University, Rohtak',
    year: '2007 – 2011',
    score: '70%',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'K.K Sr. Sec. School, Faridabad (HBSE)',
    year: '2006 – 2007',
    score: '74%',
  },
  {
    degree: 'Higher Secondary (X)',
    institution: 'K.K Sr. Sec. School, Faridabad (HBSE)',
    year: '2004 – 2005',
    score: '76%',
  },
];

export default function Education() {
  return (
    <Box
      id="education"
      sx={{
        py: 12,
        background:
          'linear-gradient(180deg, #0B1120 0%, #111827 100%)',
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
            04.
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: '#F0F4FF',
              fontWeight: 700,
            }}
          >
            Education
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

        {/* Education Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: 'repeat(3,1fr)',
            },
            gap: 3,
          }}
        >
          {education.map((item) => (
            <Paper
              key={item.degree}
              elevation={0}
              sx={{
                p: 4,
                background: 'rgba(17,24,39,0.7)',
                border: '1px solid rgba(59,130,246,0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'rgba(59,130,246,0.35)',
                },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background:
                    'rgba(59,130,246,0.1)',
                  color: '#3B82F6',
                  mb: 3,
                }}
              >
                <SchoolIcon />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  color: '#F0F4FF',
                  fontWeight: 600,
                  mb: 2,
                  minHeight: 60,
                }}
              >
                {item.degree}
              </Typography>

              <Typography
                sx={{
                  color: '#8B9CC4',
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                {item.institution}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: '#6B7CA4',
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                  }}
                >
                  {item.year}
                </Typography>

                <Box
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    background:
                      'rgba(59,130,246,0.1)',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#3B82F6',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                    }}
                  >
                    {item.score}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}