export default {
  async fetch(request) {
    return new Response("chatgpt randomly gave me ts", {
      headers: { "content-type": "text/plain" },
    });
  },
};
