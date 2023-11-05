import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../Layout/Header";
import NHCaseList from "./NhCaseList";
import NHHeader from "../Layout/NHHeader";

const Menu = ({ match }) => {
    return (
        <Fragment>
            <NHHeader/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/CaseList`} component={NHCaseList} exact />
                </div>
            </div>
        </Fragment>
    );
};
export default Menu;
