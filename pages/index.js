import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import DrawerContent from '../src/components/Drawer';
import AppBarContent from '../src/components/AppBar';
import Cards from '../src/components/Cards';

function DashboardContent() {
  const router = useRouter();
  const { pathname } = router

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBarContent></AppBarContent>
      <DrawerContent pathname={pathname}></DrawerContent>

      <Box
        component="main"
        sx={{
          backgroundColor: '#F1F3F4',
          flexGrow: 1,
          overflow: 'auto',
          pt: 12,
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Cards></Cards>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
export default DashboardContent;