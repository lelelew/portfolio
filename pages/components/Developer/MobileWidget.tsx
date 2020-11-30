import classes from "./MobileWidget.module.css";
import clsx from "clsx";

export function MobileWidget() {

  return (
    <div className={classes.root}>
      <h5 className={classes.title}>Prototype Mobile Widget</h5>
      <p className={classes.subtitle}>
        Designed and user tested a new interactive mobile website widget that increased
        engagement over 400%.
      </p>
      <div className={classes.panel}>
        <div className={classes.media}><img src="/widget/design-sprint.png" /></div>
        <div className={classes.text}>
          <h6>Step 1: Design Sprint</h6>
          <p>
            Running a design sprint at the outset enabled me to capture
            existing in-house knowledge, quickly generate a range of options,
            and make sure all stakeholders were aligned on a common goal for
            the project.
            </p>
        </div>
      </div>
      <div className={classes.panel}>
        <div className={classes.text}>
          <h6>Step 2: Prototyping</h6>
          <p>
            Utilizing industry standard tools like{" "}
            <a
              href="https://reactjs.org/docs/create-a-new-react-app.html"
              target="_blank"
            >
              create-react-app
              </a>
              ,{" "}
            <a href="https://nextjs.org/" target="_blank">
              NextJS
              </a>{" "}
              and{" "}
            <a href="https://material-ui.com/" target="_blank">
              Material UI
              </a>{" "}
              allowed me to build a functional version and iterate quickly while
              staying close to the actual production tool-chain.
            </p>
        </div>
        <div className={classes.media}><img src="/widget/prototyping.png" /></div>
      </div>
      <div className={classes.panel}>
        <div className={classes.media}><img src="/widget/user-tests.png" /></div>
        <div className={classes.text}>
          <h6>Step 3: User Testing</h6>
          <p>
            Seven different iterations were tested over 30 different user
            tests spanning a variety of demographics. I used a combination of
            task-based questions and after-task surveys to determine whether
            the prototype was achieving the goals.
            </p>
        </div>
      </div>
      <div className={classes.panel}>
        <div className={classes.text}>
          <h6>Step 4: Production Build</h6>
          <p>
            Detailed comments in the codebase as well as walkthroughs of the
            interaction and key user results enabled the development team to
            integrate the changes into their production codebase in minimal
            time.
            </p>
        </div>
        <div className={classes.media}><img src="/widget/production.png" /></div>
      </div>
      <div className={classes.panel}>
        <div className={classes.media}>
          <video controls muted playsInline className={classes.animation}>
            <source src="/animation/mobile-widget.mp4" type="video/mp4" />
          </video>
          <small className={classes.label}>Video Demo of Prototype</small>
        </div>
        <div className={classes.text}>
          <h6>Launch Results</h6>
          <p>
            After launching the new design, distribution of the widget
            increased dramatically as brands felt it complemented their site
            well. But most importantly, website visitors engaged with the
            widget over 400% more compared to the previous design.
            </p>
        </div>
      </div>
    </div>
  );
}
