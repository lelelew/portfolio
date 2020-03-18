import "../styles.css";
import NextApp from "next/app";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import blue from "@material-ui/core/colors/blue";
// import deepOrange from "@material-ui/core/colors/deepOrange";

const theme = createMuiTheme({
  // palette: {
  //   primary: blue,
  //   secondary: {
  //     main: deepOrange[500]
  //   }
  // }
});

// // This default export is required in a new `pages/_app.js` file.
// export default function Layout({ Component, pageProps }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
