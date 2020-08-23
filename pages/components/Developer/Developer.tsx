import classes from "./Developer.module.css";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { MobileWidget } from "./MobileWidget";

export function Developer() {
  const [ref, inView, entry] = useInView({
    threshold: 0.25,
  });

  return (
    <div className={clsx(classes.root, inView && classes.in)} ref={ref}>
      <h1 className={classes.title}>Development.</h1>
      <MobileWidget />
    </div>
  );
}
