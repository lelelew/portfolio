import classes from "./MobileWidget.module.css";

export function MobileWidget() {
  return (
    <div className={classes.root}>
      <div>
        <h5 className={classes.label}>Project</h5>
        <h1 className={classes.title}>Prototype Mobile Widget</h1>
        <p className={classes.description}>
          Design &amp; test a new mobile website widget to increase engagement
          10x.
        </p>
        <ul className={classes.menu}>
          <li>
            <div className={classes.sectionNumber}>1</div>
            <p className={classes.sectionTitle}>Research</p>
            <p className={classes.sectionDescription}>Some research</p>
          </li>
          <li>
            <div className={classes.sectionNumber}>2</div>
            <p className={classes.sectionTitle}>Design Sprint</p>
            <p className={classes.sectionDescription}>Testing</p>
          </li>
          <li>
            <div className={classes.sectionNumber}>3</div>
            <p className={classes.sectionTitle}>Prototyping</p>
            <p className={classes.sectionDescription}>Testing</p>
          </li>
          <li>
            <div className={classes.sectionNumber}>4</div>
            <p className={classes.sectionTitle}>User Testing</p>
            <p className={classes.sectionDescription}>Some research</p>
          </li>
          <li>
            <div className={classes.sectionNumber}>5</div>
            <p className={classes.sectionTitle}>Launch</p>
            <p className={classes.sectionDescription}>Some research</p>
          </li>
        </ul>
      </div>
      <div>
        <div className={classes.graphic}></div>
      </div>
    </div>
  );
}
