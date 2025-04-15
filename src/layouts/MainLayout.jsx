// src/layouts/MainLayout.tsx
import { AppBar, Box, CssBaseline, Drawer, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';
import {Outlet, Link, useLocation } from 'react-router';
import {Header} from "../components/Header";
import Container from "@mui/material/Container";
import {Footer} from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <>
      <Header></Header>

      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <Outlet/>
      </Container>
      
      <Footer/>
    </>
  );
}

export default MainLayout