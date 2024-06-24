export default {
  async fetch(request, env): Promise<Response> {
    return new Response("Hello, world!")
  }
} satisfies ExportedHandler<Env>
