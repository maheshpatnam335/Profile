import { Fragment } from "react";
import { Route } from "react-router-dom";
import CaseList from "./Cases/CaseList";
import Header from "../Layout/Header";
import CreateWorkOrder from "./Cases/CreateWorkOrder";
import NHCaseList from "../NH/NhCaseList";

const Menu = ({ match }) => {
    return (
        <Fragment>
            <Header/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/CaseList`} component={CaseList} exact />
                    <Route path={`${match.url}/CreateWorkOrder`} component={CreateWorkOrder} exact />
                </div>
            </div>
        </Fragment>
    );
};
export default Menu;
