import classes from "./MobileWidget.module.css";
import clsx from "clsx";
import { useState } from "react";

const IMAGE_MAP = [
  "/widget/design-sprint.png",
  "/widget/prototyping.png",
  "/widget/user-tests.png",
  "/widget/production.png",
  "/widget/results.png",
];

export function MobileWidget() {
  const [active, setActive] = useState(0);

  return (
    <div className={classes.root}>
      <div>
        <h5 className={classes.label}>Project</h5>
        <h1 className={classes.title}>Prototype Mobile Widget</h1>
        <p className={classes.description}>
          Designed a new interactive mobile website widget that increased
          engagement over 400%.
        </p>
        <ul className={classes.menu}>
          <li
            className={clsx(active === 0 && classes.active)}
            onClick={() => setActive(0)}
          >
            <div className={classes.sectionNumber}>1</div>
            <p className={classes.sectionTitle}>Design Sprint</p>
            <p className={classes.sectionDescription}>
              Running a design sprint at the outset enabled me to capture
              existing in-house knowledge, quickly generate a range of options,
              and make sure all stakeholders were aligned on a common goal for
              the project.
            </p>
          </li>
          <li
            className={clsx(active === 1 && classes.active)}
            onClick={() => setActive(1)}
          >
            <div className={classes.sectionNumber}>2</div>
            <p className={classes.sectionTitle}>Prototyping</p>
            <p className={classes.sectionDescription}>
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
          </li>
          <li
            className={clsx(active === 2 && classes.active)}
            onClick={() => setActive(2)}
          >
            <div className={classes.sectionNumber}>3</div>
            <p className={classes.sectionTitle}>User Testing</p>
            <p className={classes.sectionDescription}>
              Seven different iterations were tested over 30 different user
              tests spanning a variety of demographics. I used combination of
              task-based questions and after-task surveys to determine whether
              the prototype was achieving the goals.
            </p>
          </li>
          <li
            className={clsx(active === 3 && classes.active)}
            onClick={() => setActive(3)}
          >
            <div className={classes.sectionNumber}>4</div>
            <p className={classes.sectionTitle}>Production Build</p>
            <p className={classes.sectionDescription}>
              Detailed comments in the codebase as well as walkthroughs of the
              interaction and key user results enabled the development team to
              integrate the changes into their production codebase in minimal
              time.
            </p>
          </li>
          <li
            className={clsx(active === 4 && classes.active)}
            onClick={() => setActive(4)}
          >
            <div className={classes.sectionNumber}>5</div>
            <p className={classes.sectionTitle}>Launch Results</p>
            <p className={classes.sectionDescription}>
              After launching the new design, distribution of the widget
              increased dramatically as brands felt it complemented their site
              well. But most importantly, website visitors engaged with the
              widget over 400% more compared to the previous design.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <div className={classes.graphic}>
          <img src={IMAGE_MAP[active]} />
        </div>
      </div>
    </div>
  );
}
