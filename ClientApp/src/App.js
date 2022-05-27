import React, { Component } from "react";
import { Route } from "react-router";

import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";

import UITest from "./components/UITest";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Movements from "./pages/Movements";
import Reporte1 from "./pages/Reporte1";
import Reporte2 from "./pages/Reporte2";
import Reporte3 from "./pages/Reporte3";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/uitest" component={UITest} />
                <Route path="/login" component={Login} />
                <Route path="/movements" component={Movements} />
                <Route path="/top5" component={Reporte1} />
                <Route path="/productosPorMes" component={Reporte2} />
                <Route path="/Reporte3" component={Reporte3}/>
                <Route path="/notFound" component={NotFound} />
            </Layout>
        );
    }
}
