import classes from "./Developer.module.css";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { MobileWidget } from "./MobileWidget";
import { Volunteer } from "./Volunteer";
import { Airtable } from "./Airtable";

export function Developer() {
  const [ref, inView, entry] = useInView({
    threshold: 0.05,
    triggerOnce: true
  });

  return (
    <div className={clsx(classes.root, inView && classes.in)} ref={ref}>
      <div className={classes.line} />
      <h6 className={classes.title}>Projects</h6>
      <MobileWidget />
      <Airtable />
      <Volunteer />
    </div>
  );
}
