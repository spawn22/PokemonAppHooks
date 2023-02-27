import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Pokemon from "./components/Pokemon";
import Details from "./components/Details";
import "./App.css";
const { Header, Content } = Layout;


function App() {
  return (
    <Layout className="main-layout">
      <Header style={{ backgroundColor: "transparent" }}></Header>
      <Content style={{ padding: "0 50px" }}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Pokemon/>}/>
              <Route path="/pokemon/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
      </Content>
    </Layout>
  );
}

export default App;
