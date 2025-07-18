export default {
  async fetch(request, env, ctx) {
    return new Response("chatgpt randomly gave me ts", {
      headers: { "content-type": "text/plain" },
    });
  },
};
