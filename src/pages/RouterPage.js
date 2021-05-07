import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Layout, Menu } from "antd";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Recientes from "./libreria/recientes/Recientes";
import Artistas from "./libreria/artistas/Artistas";

const { Content, Footer } = Layout;

export const RouterPage = () => {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Content
            style={{
              paddingLeft: "2.1rem",
              paddingTop: "2rem",
              paddingRight: "2.1rem",
              minHeight: 280,
              backgroundColor: "white",
            }}
          >
            <Switch>
              <Route path="/recientes" component={Recientes} />
              <Route path="/artistas" component={Artistas} />
              <Route path="/crear" />

              <Route path="/escritorio" />

              <Redirect to="/ingresar" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
      <Footer>footer</Footer>
    </Router>
  );
};
