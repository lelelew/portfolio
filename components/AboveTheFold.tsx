import classes from "./AboveTheFold.module.css";

export function AboveTheFold() {
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img src="/profile/profile.png" />
      </div>
      <div className={classes.right}>
        <h1 className={classes.name}>Lele Lew</h1>
        <h2 className={classes.title}>Web Developer</h2>
        <p className={classes.description}>
          I'm a self-taught web developer with a background in startups and
          financial auditing. I like to research, understand, and build. My
          passion for development comes from seeing things <strong>work</strong>
          .
        </p>
        <div className={classes.buttons}>
          <a href="mailto:lele@lelelew.com">Contact</a>
          <a href="https://github.com/lelelew">Github</a>
          <a href="/Lele%20Lew%20-%20Resume.pdf">Resume</a>
        </div>
        <small className={classes.label}>
          Works with (and am looking to learn more)
        </small>
        <div className={classes.technologies}>
          <img src="/logos/react.svg" />
          <img src="/logos/typescript.svg" />
          <img src="/logos/jss.svg" />
          <img src="/logos/nodejs.svg" />
          <img src="/logos/git.png" />
        </div>
      </div>
    </div>
  );
}
