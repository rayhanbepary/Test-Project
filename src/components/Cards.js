import Grid from '@material-ui/core/Grid';
import LeadsCard from './cards/Leads';
import SalesCard from './cards/Sales';
import OrdersCard from './cards/Orders';
import ExpenseCard from './cards/Expense';

const Cards = () => {
    return (
        <>
            <Grid item xs={12} md={4} lg={3}>
                <LeadsCard></LeadsCard>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
                <SalesCard></SalesCard>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
                <OrdersCard></OrdersCard>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
                <ExpenseCard></ExpenseCard>
            </Grid>
        </>
    );
};

export default Cards;