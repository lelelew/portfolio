import classes from "./Volunteer.module.css";
import clsx from "clsx";

export function Volunteer() {
  return (
    <div className={classes.root}>
      <h5>Engineering Volunteer Work</h5>
      <div className={classes.examples}>
        <div className={classes.example}>
          <p className={classes.title}><a href="https://www.womenwhocode.com/sf/about" target="_blank">Women Who Code SF &amp; Peninsula</a></p>
          <p className={classes.description}>
            Assist with events and participate in community.
          </p>
          <div>
            <small>2019 - Present</small>
          </div>
        </div>
        <div className={classes.example}>
          <p className={classes.title}><a href="https://www.chemistswithoutborders.org/" target="_blank">Chemists Without Borders</a></p>
          <p className={classes.description}>
            Assisted with maintenance and improvements to website.
          </p>
          <div>
            <small>Summer 2019</small>
          </div>
        </div>
        <div className={classes.example}>
          <p className={classes.title}>
            <a href="http://www.museumwnf.org/" target="_blank">Museum With No Frontiers</a>
          </p>
          <p className={classes.description}>
            Assisted with maintenance and enhancements to website.
          </p>
          <div>
            <small>Summer 2019</small>
          </div>
        </div>
      </div>
    </div>
  );
}
