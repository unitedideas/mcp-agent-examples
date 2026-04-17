# Contributing to mcp-agent-examples

Thanks for wanting to improve this collection. All contributions should make MCP agent patterns easier to discover, understand, and copy-paste into real projects.

## Filing an issue

- Search existing issues first; dedupes save everyone time.
- For bugs: open a **Bug report** issue with the form provided.
- For new example ideas: open an **Example request** issue describing the agent pattern, the MCP server(s) involved, and what problem it solves.

## Suggesting an example

A good example is small, runs end-to-end, and demonstrates one clear pattern (tool chaining, resource caching, auth flow, etc.). Prefer real MCP servers over mocks.

## Submitting a pull request

1. Fork and branch from `main`.
2. Add your example under `examples/<short-name>/` with a `README.md` that explains what it does in 3-5 sentences.
3. Every new example should score **85 or higher** on the [NHS agent-readiness rubric](https://nothumansearch.ai/score) — we check this before merging because the goal is that each example is itself a well-behaved agent surface.
4. Keep dependencies minimal; prefer standard library where possible.
5. Open the PR using the pull request template; fill in "what", "why", and "test plan".

## Code of conduct

Be kind, be specific, be useful. That's it.
