import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Leads from '../../images/leads.svg';
import styles from '../../../styles/style.module.css';

const LeadsCard = () => {
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                pt: 4,
                pb: 4,
                boxShadow: 'none',
            }}
        >
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
                <Box
                    sx={{
                        p: '23px 10px 20px 10px',
                        background: '#F2F1FE',
                        borderRadius: '20px',
                    }}
                >
                    <Image src={Leads} alt="Arrow Cross" />
                </Box>
                <Box>
                    <Typography component="p" className={styles.titleStyle}>New Leads</Typography>
                    <Typography component="h4" variant="h4" sx={{ fontWeight: 'bold', color: '#663399', }}>
                        205
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default LeadsCard;