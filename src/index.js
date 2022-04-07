import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import JSON from "./db.json";

// COMPONENTS
import Header from "./components/header";
import NewsList from "./components/news_list";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class App extends Component {
  state = {
    news: JSON,
  };
  render() {
    return (
      <div>
        <Header />
        <NewsList news={this.state.news}> The news are:</NewsList>
      </div>
    );
  }
}
root.render(<App />);
