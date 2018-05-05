declare global {
  interface Window { google: any; }
}

export const sync = (router: any) => {
  if (!window.google) {
    return;
  }
  window.google.script.url.getLocation((location: any) => {
    const path = location.hash;
    const query = location.parameter;
    router.replace({ path, query });
  });

  router.afterEach((route: any) => {
    window.google.script.history.replace(null, route.query, route.path);
  });
};
