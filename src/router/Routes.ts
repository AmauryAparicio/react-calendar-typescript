import Calendar from "../components/pages/Calendar";
import Login from "../components/pages/Login";
import NotFound from "../components/pages/NotFound";
import { iRoute } from "../interfaces";

const Routes: Array<iRoute> = [
  {
    path: "/",
    component: Calendar,
    exact: true
  },
  {
    path: "/auth",
    component: Login,
    exact: true,
  },
  {
    path: '*',
    component: NotFound
  }
];

export default Routes;