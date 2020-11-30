import classes from "./Education.module.css";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export function Education() {
  const [ref, inView, entry] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  return (
    <div className={clsx(classes.root, inView && classes.in)} ref={ref}>
      <div className={classes.line} />
      <h6 className={classes.title}>Education.</h6>
      <div className={classes.container}>
        <h6>2019 - Present</h6>
        <h5>Software Engineering</h5>
        <p>
          I wanted to get my hands dirty and build the skillset needed to make the ideas come to life. I've been studying, learning, trying, testing and eventually started helping build web apps and sites. Ultimately, I want to use this skillset to help everyday people.
          </p>
        <p>
          <strong>Courses &amp; organizations I'm particularly grateful to have learned from:</strong>
          <ul>
            <li>
              <a href="https://www.freecodecamp.org/" target="_blank">FreeCodeCamp</a>, Quincy is an inspiration
              </li>
            <li>
              <a href="https://www.womenwhocode.com/sf" target="_blank">Women Who Code</a>, the community is amazing
              </li>
          </ul>
        </p>
        <h6>2014 - 2018</h6>
        <h5>Startups &amp; Consulting</h5>
        <p>
          Leaving my trained profession was scary, but ultimately extremely educational. During this time I cofounded a startup that grossed $300k in its first year, and learned how to help manage a small development consultancy spread across four continents.
          </p>
        <h6>2010 - 2014</h6>
        <h5>Financial Auditing</h5>
        <p>
          Having trained in business economics, I started my career performing financial audits in Silicon Valley for startups, VCs and large private companies as part of a local accounting firm. The exposure to these businesses and how they work sparked my interest in startups and entreneurship.
          </p>
      </div>
    </div>
  );
}
