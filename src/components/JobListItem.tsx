import BookmarkIcon from "./BookmarkIcon";

type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  date: string;
  relevanceScore: number;
  daysAgo: number;
};

type JobListItemProps = {
  jobItem: JobItem;
};

export default function JobListItem({ jobItem }: JobListItemProps) {
  return (
    <li className="job-item">
      <a className="job-item__link">
        <div className="job-item__badge">9T</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">9th Tech</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">2d</time>
        </div>
      </a>
    </li>
  );
}
