import classes from "./AboveTheFold.module.css";

export function AboveTheFold() {
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img src="/lele_profile.png" />
      </div>
      <div className={classes.right}>
        <div className={classes.intro}>
          <h1 className={classes.name}>Lele Lew</h1>
          <h2 className={classes.title}>Front-End Developer</h2>
          <div className={classes.technologies}>
            <img src="/logos/react.svg" />
            <img src="/logos/typescript.svg" />
            <img src="/logos/jss.svg" />
            <img src="/logos/nodejs.svg" />
            <img src="/logos/git.png" />
          </div>
          <div className={classes.buttons}>
            <a href="mailto:dev@lelelew.com">Contact</a>
            <a href="https://github.com/lelelew">Github</a>
            <a href="#">Resume</a>
          </div>
        </div>
      </div>
      <div className={classes.note}>
        <p>
          Self-taught dev
          <br />
          bundled w/ business sense.
        </p>
      </div>
    </div>
  );
}
