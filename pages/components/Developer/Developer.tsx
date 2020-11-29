import classes from "./Developer.module.css";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { MobileWidget } from "./MobileWidget";
import { Volunteer } from "./Volunteer";

export function Developer() {
  const [ref, inView, entry] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  return (
    <div className={clsx(classes.root, inView && classes.in)} ref={ref}>
      <h1 className={classes.title}>Projects</h1>
      <MobileWidget />
      <Volunteer />
    </div>
  );
}
