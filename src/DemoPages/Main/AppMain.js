
import { Redirect, Route } from 'react-router-dom';
import Loading from '../../HOC/Loading';
import { Fragment, Suspense, lazy } from 'react';


const WL = lazy(() => import('../../WL'));
const NH = lazy(() => import('../../NH'));


const AppMain = () => {
    return <Fragment>
        <Suspense fallback={
            <div className="loader-container">
                <div className="loader-container-inner">
                    <h6 className="mt-3">
                        {/* Please wait while we load all the Components */}
                        <h6><Loading /></h6>
                    </h6>
                </div>
            </div>
        }>
            <Route path="/WL/Cases" component={WL} />
        </Suspense>
        <Suspense fallback={
            <div className="loader-container">
                <div className="loader-container-inner">
                    <h6 className="mt-3">
                        {/* Please wait while we load all the Components */}
                        <h6><Loading /></h6>
                    </h6>
                </div>
            </div>
        }>
            <Route path="/NH/Cases" component={NH} />
        </Suspense>
        <Route exact path="/" render={() => (
            <Redirect to="/WL/Cases/CaseList" />
        )} />
    </Fragment>
}
export default AppMain;