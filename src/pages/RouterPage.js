import React from "react";
import Sidebar from "../layout/Sidebar";
import { Layout } from "antd";
import { DEEZER_TEST_URL } from "../config/website/Url";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Recientes from "./libreria/recientes/Recientes";
import Artistas from "./libreria/artistas/Artistas";

const { Content, Footer } = Layout;

export const RouterPage = () => {
  return (
    <Router>
      <Layout>
        <Sidebar />
        <Layout className="site-layout">
          <Content
            style={{
              paddingLeft: "2.1rem",
              paddingRight: "2.1rem",
              backgroundColor: "white",
            }}
          >
            <Switch>
              <Route path="/recientes" component={Recientes} />
              <Route path="/artistas" component={Artistas} />
              <Route
                path="/autenticacion"
                component={() => {
                  window.location.href = DEEZER_TEST_URL;
                  return null;
                }}
              />
              <Redirect to="/recientes" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
      <Footer>footer</Footer>
    </Router>
  );
};
