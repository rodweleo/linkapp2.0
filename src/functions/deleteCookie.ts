import { setCookie } from "./setCookie";

export const deleteCookie = () => {
  setCookie("link_access_token", "", -1);
};
