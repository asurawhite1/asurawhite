export default {
  async fetch(request) {
    const url = new URL(request.url);
    const folders = ['/', '/aboutme/', '/my-secret-love/'];
    if (folders.includes(url.pathname)) {
      return fetch(request);
    }
    if (url.pathname !== "/" && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.slice(0, -1);
      return Response.redirect(url.toString(), 301);
    }

    return fetch(request);
  },
};
