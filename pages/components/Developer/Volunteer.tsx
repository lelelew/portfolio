import classes from "./Volunteer.module.css";
import clsx from "clsx";

export function Volunteer() {
  return (
    <div className={classes.root}>
      <h5>Engineering Volunteer Work</h5>
      <div className={classes.examples}>
        <div className={classes.example}>
          <p className={classes.title}>Museums Without Borders</p>
          <p className={classes.description}>
            Assisted with maitenance and upgrading their website.
          </p>
        </div>
        <div className={classes.example}>
          <p className={classes.title}>Museums Without Borders</p>
          <p className={classes.description}>
            Assisted with maitenance and upgrading their website.
          </p>
        </div>
        <div className={classes.example}>
          <p className={classes.title}>Museums Without Borders</p>
          <p className={classes.description}>
            Assisted with maitenance and upgrading their website.
          </p>
        </div>
      </div>
    </div>
  );
}
