export function getCookie() {
  const accessToken = "linkapp_access_token";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${accessToken}=`)) {
      return decodeURIComponent(cookie.substring(accessToken.length + 1));
    }
  }
  return null;
}
