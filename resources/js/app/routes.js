import auth from "./auth/routes";
import home from "./home/routes";
import timeline from "./timeline/routes";

export default [...auth, ...home, ...timeline];
