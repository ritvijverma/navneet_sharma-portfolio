'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(10,15,30,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.08)'
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="a"
              href="#hero"
              sx={{
                textDecoration: 'none',
                fontWeight: 700,
                color: '#fff',
                flexGrow: 1,
                letterSpacing: 1,
              }}
            >
              NV
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 4,
                alignItems: 'center',
              }}
            >
              {navLinks.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  sx={{
                    color: '#cbd5e1',
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      color: '#3B82F6',
                      background: 'transparent',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                href="#contact"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 3,
                  background: '#2563eb',
                  '&:hover': {
                    background: '#1d4ed8',
                  },
                }}
              >
                Contact
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: '#fff',
              }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 260,
              backgroundColor: '#0f172a',
              color: '#fff',
            },
          },
        }}
      >
        <Box
          sx={{
            mt: 8,
          }}
        >
          <List>
            {navLinks.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box
            sx={{
              px: 2,
              mt: 2,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              href="#contact"
              onClick={() => setMobileOpen(false)}
              sx={{
                textTransform: 'none',
                borderRadius: 2,
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}