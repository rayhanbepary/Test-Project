import { experimentalStyled as styled, alpha } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles/style.module.css';
import Sidebar from './Sidebar';

const drawerWidth = 120;
const Drawer = styled(MuiDrawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      boxSizing: 'border-box',
      overflowX: 'hidden',
      borderRight: 'none',
      color: '#ffffff',
      backgroundColor: '#193D88',
  
    }
  }));

  function DrawerContent({pathname}) {
    return (
        <Drawer variant="permanent">

            <Typography
                component="h1"
                variant="h4"
                className={styles.logo}
            >
                Gull
            </Typography>
            <List sx={{p: '20px 10px',}}><Sidebar pathname={pathname} /></List>
        </Drawer>
    );
};

export default DrawerContent;

