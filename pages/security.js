import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import DrawerContent from '../src/components/Drawer';
import AppBarContent from '../src/components/AppBar';

function SecurityContent() {
  const router = useRouter();
  const {pathname} = router

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarContent></AppBarContent>
      <DrawerContent pathname={pathname}></DrawerContent>

      <Box
        component="main"
        sx={{
          backgroundColor: '#F1F3F4',
          flexGrow: 1,
          overflow: 'auto',
          pt: 12, 
          pl: 2.5,
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, }}>
          <Grid container spacing={3}>
            <Typography
              component="p"
            >
              This is security page dummy content.
            </Typography>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default SecurityContent;