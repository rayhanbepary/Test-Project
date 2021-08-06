import { experimentalStyled as styled, alpha } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Image from 'next/image'
import UserImg from '../images/adult-facial-expression-fashion-1036627.png';
import Menu from '../images/menu.svg';
import Bell from '../images/Bell.svg';
import Plus from '../images/Arrow-Cross.svg';
import styles from '../../styles/style.module.css';



const drawerWidth = 120;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    backgroundColor: '#F1F3F4',
    color: '#663399',
    width: `calc(100% - ${drawerWidth}px)`,
    boxShadow: 'none',
    padding: '15px 0',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#949494',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.5, 1, 1.5, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        borderRadius: '20%',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
}));


function AppBarContent() {
    return (
        <AppBar position="absolute">
            <Toolbar>

                {/* menu icon */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        marginRight: '36px',
                    }}
                >
                    <Image src={Menu} alt="" />
                </IconButton>

                {/* search */}
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon style={{ color: '#B1B1B1' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '35px' }}>
                    <Image src={Plus} alt="Arrow Cross" />

                    <span className={styles.badge}>3</span>
                    <Image src={Bell} alt="Notifications Icon" />

                    <Image src={UserImg} alt="user image" className={styles.imageStyle} />
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default AppBarContent;