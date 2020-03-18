import React from "react";
import Head from "next/head";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const useStyles = makeStyles({
  hero: {
    backgroundColor: "black",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    height: "100vh",
    width: "100vw"
  },
  heroText: {
    color: "white"
  },
  navBar: {
    position: "sticky",
    top: "0px"
  },
  codeExampleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  codeExampleOne: {
    width: "60vw"
  },
  codeExampleOneDetails: {}
});

const Home = props => {
  const classes = useStyles(props);
  const codeString = `const setHeight = _throttle(
    height => {
      _setHeight(Math.min(height, MAX_DRAWER_HEIGHT));
    },
    10,
    { leading: true, trailing: true }
  );

  /**
   * Triggers a fake "friction point" X seconds after page load
   * if the user hasn't interacted at all yet.
   * Remove for production code.
   */
  useEffect(() => {
    if (peekTimeoutId) {
      clearTimeout(peekTimeoutId);
    }
    if (!hasPeeked && height === INITIAL_HEIGHT) {
      peekTimeoutId = setTimeout(() => {
        setHeight(MID_DRAWER_HEIGHT);
        setHasPeeked(true);
      }, 1000 * 30 /* 10 seconds */);
    }
  }, [hasPeeked]);
`;

  return (
    <React.Fragment>
      <Head>
        <title>Lele Lew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.hero}>
        <div className={classes.heroText}>
          <h1>Hi, I'm Lele Lew.</h1>
        </div>
      </div>

      <div className={classes.navBar}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" className={classes.title}>
              News
            </Typography> */}
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.codeExampleContainer}>
        <SyntaxHighlighter
          className={classes.codeExampleOne}
          language="javascript"
          showLineNumbers={true}
          style={atomDark}
        >
          {codeString}
        </SyntaxHighlighter>
        <div className={classes.codeExampleOneDetails}>
          Details about code here
        </div>
      </div>

      <footer></footer>
    </React.Fragment>
  );
};

export default Home;
