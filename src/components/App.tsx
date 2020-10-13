import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import Header from './Header';

import { CreatePolicyTypePage } from '../pages/PolicyType/CreatePolicyTypePage';
import { ListPolicyTypePage } from '../pages/PolicyType/ListPolicyTypePage';
import { UpdatePolicyTypePage } from '../pages/PolicyType/UpdatePolicyTypePage';

import { CreatePolicyPage } from '../pages/Policy/CreatePolicyPage';
import { ListPolicyPage } from '../pages/Policy/ListPolicyPage';
import { UpdatePolicyPage } from '../pages/Policy/UpdatePolicyPage';

import CreateInsurerPage from '../pages/Insurer/CreateInsurerPage';
import UpdateInsurerPage from '../pages/Insurer/UpdateInsurerPage';
import ListInsurerPage from '../pages/Insurer/ListInsurerPage';

import '../assets/styles/index.scss';
import { Container, Row } from 'react-bootstrap';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Container>
                <Row>
                    <main className="p-3 col">
                        <Switch>
                            <Route exact path="/" component={Home} />

                            <Route
                                exact
                                path="/policy/create"
                                component={CreatePolicyPage}
                            />
                            <Route
                                exact
                                path="/policy/update/:policyId"
                                component={UpdatePolicyPage}
                            />
                            <Route path="/policy/" component={ListPolicyPage} />

                            <Route
                                exact
                                path="/policy-type/create"
                                component={CreatePolicyTypePage}
                            />
                            <Route
                                exact
                                path="/policy-type/update/:policyTypeId"
                                component={UpdatePolicyTypePage}
                            />
                            <Route
                                path="/policy-type/"
                                component={ListPolicyTypePage}
                            />

                            <Route
                                exact
                                path="/insurer/create"
                                component={CreateInsurerPage}
                            />
                            <Route
                                exact
                                path="/insurer/update/:insurerId"
                                component={UpdateInsurerPage}
                            />
                            <Route
                                path="/insurer/"
                                component={ListInsurerPage}
                            />
                        </Switch>
                    </main>
                </Row>
            </Container>
        </div>
    );
};

export default App;
