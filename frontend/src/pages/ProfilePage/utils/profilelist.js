import {
  Cv,
  UserPost,
  JobHistory,
  PendingApplication,
  SavedJobs,
} from "../pages/ProfilePage/components/tabs/index";
const profilelist = [
  {
    id: 1,
    tab: <UserPost />,
  },

  {
    id: 2,
    tab: <JobHistory />,
  },

  {
    id: 3,
    tab: <PendingApplication />,
  },
  {
    id: 4,
    tab: <Cv />,
  },
  {
    id:5,
    tab:<SavedJobs/>
  }
];

export default profilelist;
