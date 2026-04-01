export const pageview = () => {
  window.fbq("track", "pageview");
};
export const event = (name, option = {}) => {
  window.fbq("track", name, option);
};
