import { useUser } from "../context/UserContext.js";

export const useLoggedInUser = () => {
  const { loggedInUser, logOutUser } = useUser(null);
  return { loggedInUser, logOutUser };
};
