// React specific modules
import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// My own components
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Gallery from "./pages/Gallery";
import AppContext from "./context/appContext";
import GalleryItem from "./pages/GalleryItem";
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      iconClass: "fa-film",
      logoText: "Wanderlust Stories",
      images: {},
    };
  }

  setImages = (item) => {
    this.setState({
      images: item,
    });
  };

  handleTheme = () => {
    this.setState((state, props) => {
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    });
  };
  render() {
    const currentTheme =
      this.state.theme === "light"
        ? "header_wrapper appRoot"
        : "header_wrapper appRoot dark";

    return (
      <div className={currentTheme}>
        <div className="container">
          <BrowserRouter>
            <Logo data={this.state}> Wanderlust Stories</Logo>
            <Navbar />
            <AppContext.Provider
              value={{
                theme: this.state.theme,
                toggleTheme: this.handleTheme,
                images: this.state.images,
                setImages: this.setImages,
              }}
            >
              <Switch>
                <Route path="/" exact component={Home} />
                <Route
                  path="/gallery/:id"
                  render={() => (
                    <Suspense fallback={<h3> Loading..</h3>}>
                      <GalleryItem />
                    </Suspense>
                  )}
                />
                <Route
                  path="/gallery"
                  render={() => (
                    <Suspense fallback={<h3> Loading Gallery..</h3>}>
                      <Gallery />
                    </Suspense>
                  )}
                />
                <Route
                  path="/contacts"
                  render={() => (
                    <Suspense fallback={<h3> Loading Contacts..</h3>}>
                      <Contact />
                    </Suspense>
                  )}
                />
                {/* should come last */}
                <Route render={() => <h1> Not found</h1>} />
              </Switch>
            </AppContext.Provider>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}
