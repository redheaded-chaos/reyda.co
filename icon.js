export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/favicon.ico') {
      const svg = `<svg xmlns="http://w3.org" viewBox="0 0 100 100"><text y=".9em" font-size="90">🚀</text></svg>`;
      
      return new Response(svg, {
        headers: { 'Content-Type': 'image/svg+xml' }
      });
    }

    return new Response("Hello World!");
  },
};
