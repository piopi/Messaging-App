import React, { useEffect } from "react";
import axios from "axios";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { theme } from "./themes/theme";
import Routes from "./routes";

function App() {
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get("/csrf-token");
      axios.defaults.headers.post["X-CSRF-Token"] = data.csrfToken;
      axios.defaults.headers.patch["X-CSRF-Token"] = data.csrfToken;
    };
    getCsrfToken();
  }, []);
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
