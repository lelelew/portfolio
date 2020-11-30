import classes from "./Airtable.module.css";
import clsx from "clsx";

export function Airtable() {

  return (
    <div className={classes.root}>
      <h5 className={classes.title}>Airtable Project Management App</h5>
      <p className={classes.subtitle}>
        Working on bringing Agile/Scrum Tools to Airtable.
      </p>
      <div className={classes.panel}>
        <div className={classes.media}><img src="/airtable/overview.png" /></div>
        <div className={classes.text}>
          <h6>Background</h6>
          <p>
            Airtable is a data management app used by teams to manage all sorts of workflows in one place. With the release of their blocks SDK, you can now build and publish your own extensions.
            I was asked to add missing functionality for planning and managing Agile sprints.
          </p>
        </div>
      </div>
      <div className={classes.panel}>
        <div className={classes.text}>
          <h6>Sprint Roll-Ups</h6>
          <p>
            While Airtable has good grouping and summarization already, it was difficult to see an overview of allocated tasks and points across upcoming sprints. So the first place to start was adding a roll-up by person.
          </p>
        </div>
        <div className={classes.media}><img src="/airtable/sprint-rollups.png" /></div>
      </div>
      <div className={classes.panel}>
        <div className={classes.media}><img src="/airtable/rebalancing.png" /></div>
        <div className={classes.text}>
          <h6>Predicting Completion Dates</h6>
          <p>
            One of the hardest things about planning sprints is allocating the right amount of stories per sprint for the team. The "rebalancing" feature allows you to set a max complexity per-sprint and it will redistribute tasks across upcoming sprints for you.
          </p>
        </div>
      </div>
      <div className={classes.panel}>
        <div className={classes.text}>
          <h6>Configuration</h6>
          <p>
            Because different teams customize their views, the app allows you to select the fields that represent concepts like "owner" and "complexity" instead of enforcing a particular naming scheme.
          </p>
        </div>
        <div className={classes.media}><img src="/airtable/configuration.png" /></div>
      </div>
      <div className={classes.future}>
        <h6>Next Steps</h6>
        <p>
          Future iterations of this Airtable app will take into account team velocity when rebalancing and offer burn-down charts for sprints.
      </p>
      </div>
    </div>
  );
}
