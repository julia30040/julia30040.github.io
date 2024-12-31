import React, { Component } from "react";
import debug from "debug";
import radium, { StyleRoot } from "radium";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./container/Header.jsx";
import MainBoard from "./container/MainBoard.jsx";
import MovingBackground from "./component/Element/MovingBackground.jsx";
import seaImage from "./media/img/fuji.JPG";
import seaImageSm from "./media/img/sea_2_sm.JPG";
import WeddingPage from "./container/Wedding/Page.jsx";

if (process.env.NODE_ENV !== "production") {
  debug.enable("Portfolio:*");
}

const styles = {
  fullHeight: {
    height: "100%",
  },
  wrapper: {
    overflow: "hidden",
  },
};

class App extends Component {
  render() {
    const params = new URLSearchParams(window.location.search);
    const isWeddingPage = params.get("wedding") === "true";

    return (
      <StyleRoot style={styles.fullHeight}>
        <Router>
          <div style={[styles.wrapper, styles.fullHeight]}>
            {isWeddingPage ? (
              <WeddingPage />
            ) : (
              <>
                <MovingBackground url={seaImage} smSizeURL={seaImageSm} />
                <Header />
                <MainBoard />
              </>
            )}
          </div>
        </Router>
      </StyleRoot>
    );
  }
}

export default radium(App);
