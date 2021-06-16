import { useDispatch, useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { toggleCurrentTab } from '../../redux/actions';

export default function NavBar() {
    const dispatch = useDispatch()
    const currentTab = useSelector(state => state.currentTabIndex)

    const handleChange = (event, newValue) => {
        dispatch(toggleCurrentTab(newValue))
    };

    return (
        <Paper square>
            <Tabs
                value={currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />
                <Tab label="Mobile" />
                <Tab label="Laptops" />
                <Tab label="Appliance" />
            </Tabs>
        </Paper>
    );
}