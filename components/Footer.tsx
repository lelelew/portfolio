import classes from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={classes.root}>
      {/* <p>A quote I really like. &mdash; Person</p> */}
      <small>
        Lele Lew &copy; {currentYear} &middot;{" "}
        <a href="mailto:lele@lelelew.com">lele@lelelew.com</a>
      </small>
    </div>
  );
}
