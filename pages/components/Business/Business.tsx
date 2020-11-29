import classes from "./Business.module.css";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export function Business() {
  const [ref, inView, entry] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  return (
    <div className={clsx(classes.root, inView && classes.in)} ref={ref}>
      <h1 className={classes.title}>Entrepreneurship.</h1>
    </div>
  );
}
