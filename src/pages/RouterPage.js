import React from "react";
import Sidebar from "../layout/Sidebar";
import { Layout } from "antd";
import { DEEZER_LOCAL_URL } from "../config/website/Url";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Recientes from "./libreria/recientes/Recientes";
import Artistas from "./libreria/artistas/Artistas";
import Footer from "../layout/Footer";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const { Content } = Layout;

export const RouterPage = () => {
  return (
    <Router>
      <Layout>
        <Sidebar />
        <Layout className="site-layout">
          <PerfectScrollbar style={{ backgroundColor: "white" }}>
            <Content
              style={{
                paddingLeft: "2.1rem",
                paddingRight: "2.1rem",
                height: "calc(100vh - 80px)",
              }}
            >
              <Switch>
                <Route path="/recientes" component={Recientes} />
                <Route path="/artistas" component={Artistas} />
                <Route
                  path="/autenticacion"
                  component={() => {
                    window.location.href = DEEZER_LOCAL_URL;
                    return null;
                  }}
                />
                <Redirect to="/recientes" />
              </Switch>
            </Content>
          </PerfectScrollbar>
        </Layout>
      </Layout>
      <Footer />
    </Router>
  );
};
