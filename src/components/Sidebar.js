import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import Image from 'next/image';
import Dashboard from '../images/dashboard.svg';
import Table from '../images/table.svg';
import Security from '../images/security.svg';
import List from '../images/list.svg';
import Document from '../images/document.svg';
import Demo from '../images/demo.svg';
import User from '../images/user.svg';
import Weather from '../images/weather.svg';
import Demo1 from '../images/demo1.svg';
import Instagram from '../images/instagram.svg';
import styles from '../../styles/style.module.css';


const Sidebar = ({ pathname }) => {

  return (
    <div>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={pathname === '/' ? styles.listActive : styles.dashboardIcon}>
        <Link href='/'>
          <a>
            <ListItemIcon>
              <Image src={Dashboard} alt="" />
            </ListItemIcon>
          </a>
        </Link>
        {
          pathname === '/' && <ListItemText className={styles.sidebarText} primary="Dashboard" />
        }
      </ListItem>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={pathname === '/table' ? styles.listActive : styles.dashboardIcon}>
        <Link href='/table'>
          <a>
            <ListItemIcon>
              <Image src={Table} alt="" />
            </ListItemIcon>
          </a>
        </Link>
        {
          pathname === '/table' && <ListItemText sx={{pl: 2.5}} className={styles.sidebarText} primary="Table" />
        }
      </ListItem>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={pathname === '/security' ? styles.listActive : styles.dashboardIcon}>
        <Link href='/security'>
          <a>
            <ListItemIcon>
              <Image src={Security} alt="" />
            </ListItemIcon>
          </a>
        </Link>
        {
          pathname === '/security' && <ListItemText sx={{pl: 1.5}} className={styles.sidebarText} primary="Security" />
        }
      </ListItem>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={pathname === '/list' ? styles.listActive : styles.dashboardIcon}>
        <Link href='/list'>
          <a>
            <ListItemIcon>
              <Image src={List} alt="" />
            </ListItemIcon>
          </a>
        </Link>
        {
          pathname === '/list' && <ListItemText sx={{pl: 2.5}} className={styles.sidebarText} primary="List" />
        }
      </ListItem>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={pathname === '/document' ? styles.listActive : styles.dashboardIcon}>
        <Link href='/document'>
          <a>
            <ListItemIcon>
              <Image src={Document} alt="" />
            </ListItemIcon>
          </a>
        </Link>
        {
          pathname === '/document' && <ListItemText sx={{pl: .5}}  className={styles.sidebarText} primary="Document" />
        }
      </ListItem>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={styles.dashboardIcon}>
        <ListItemIcon>
          <Image src={Demo} alt="" />
        </ListItemIcon>
      </ListItem>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={styles.dashboardIcon}>
        <ListItemIcon>
          <Image src={User} alt="" />
        </ListItemIcon>
      </ListItem>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={styles.dashboardIcon}>
        <ListItemIcon>
          <Image src={Weather} alt="" />
        </ListItemIcon>
      </ListItem>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={styles.dashboardIcon}>
        <ListItemIcon>
          <Image src={Demo1} alt="" />
        </ListItemIcon>
      </ListItem>

      <ListItem sx={{
        p: '15px 35px 10px 35px',
        display: 'block',
        margin: '20px 0',
        borderRadius: '5px',
      }} className={styles.dashboardIcon}>
        <ListItemIcon>
          <Image src={Instagram} alt="" />
        </ListItemIcon>
      </ListItem>

    </div >
  );
};
export default Sidebar;