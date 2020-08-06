import auth from "./auth/routes";
import home from "./home/routes";
import timeline from "./timeline/routes";
import errors from "./errors/routes";

export default [...auth, ...home, ...timeline, ...errors];
