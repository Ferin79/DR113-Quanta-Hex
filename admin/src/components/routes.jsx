import React, { useContext } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom';
import login from "../pages/login";
import register from "../pages/register";
import dashboard from "../pages/dashboard";
import adminDashboard from "../pages/admin/dashboard";
import adminReports from "../pages/admin/reports";
import report from "../pages/report";
import adminReportDetails from "../pages/admin/reportDetails";
import { AuthContext } from "../data/auth";
import { Context } from "../data/context";


const Routes = () => {

    const { currentUser } = useContext(AuthContext);
    const { role } = useContext(Context);
    
    if (currentUser && role === "admin") {
        return (    
            <Switch>
                <Route path='/admin/dashboard' component={adminDashboard} />
                <Route path='/admin/reports' component={adminReports} />
                <Route path='/admin/report/:reportId' component={adminReportDetails} />
                <Redirect to='/admin/reports' />
            </Switch>
        )
    }
    else if (currentUser) {
        return (    
            <Switch>
                <Route path='/dashboard' component={dashboard} />
                <Route path='/report' component={report} />
                <Redirect to='/report' />
            </Switch>
        )
    } else {     
        return (    
            <Switch>
                <Route path='/login' component={login} />
                <Route path='/register' component={register} />
                <Redirect to='/login' />
            </Switch>
        )
    }

    

}
export default Routes;