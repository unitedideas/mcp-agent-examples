# MCP Agent Examples

Minimal, runnable examples of connecting an AI agent to two public MCP (Model Context Protocol) servers:

- **[Not Human Search (NHS)](https://nothumansearch.ai)** — the search engine for the agentic web. Discover websites, APIs, and services that AI agents can actually use. MCP endpoint: `https://nothumansearch.ai/mcp`
- **[AI Dev Jobs (ADB)](https://aidevboard.com)** — AI/ML job board with 8,400+ curated roles from 489+ companies. MCP endpoint: `https://aidevboard.com/mcp`

## Who this is for

AI engineers building agents that need to:

1. **Discover other MCP servers and agent-ready APIs** — use the NHS `search_agents` tool to find services ranked by agentic readiness score (0–100) based on llms.txt, OpenAPI, ai-plugin.json, MCP, structured APIs, and Schema.org signals.
2. **Search AI/ML jobs programmatically** — use the ADB `search_jobs` tool to query pytorch, LLM, RLHF, JAX, or any stack keyword against a live index of AI/ML roles with salary bands, locations, and tags.

Both servers speak standard MCP over HTTP (streamable JSON-RPC 2.0). No auth required.

## Live badges

[![NHS Agentic Score](https://nothumansearch.ai/badge/aidevboard.com)](https://nothumansearch.ai/site/aidevboard.com)
[![AI Dev Jobs](https://aidevboard.com/badge.svg)](https://aidevboard.com)

## Quickstart

### Python

```bash
pip install mcp
python examples/python/find_ai_jobs.py pytorch
python examples/python/find_mcp_servers.py "payment API"
```

### TypeScript

```bash
npm install @modelcontextprotocol/sdk
npx tsx examples/typescript/find-ai-jobs.ts pytorch
npx tsx examples/typescript/find-mcp-servers.ts "payment API"
```

## What each example does

| Example | Server | Tool | Purpose |
|---|---|---|---|
| `find_ai_jobs.py` / `find-ai-jobs.ts` | ADB (`aidevboard.com/mcp`) | `search_jobs` | Search AI/ML jobs by keyword/stack |
| `find_mcp_servers.py` / `find-mcp-servers.ts` | NHS (`nothumansearch.ai/mcp`) | `search_agents` | Discover agent-ready services by query |

Each script:

1. Opens a streamable HTTP MCP session
2. Calls a single tool
3. Prints the top 5 results
4. Exits cleanly

Total: ~40 lines per script. Read them, copy them, adapt them.

## More tools on each server

**NHS** also exposes: `get_site_details`, `get_stats`, `submit_site`, `verify_mcp`, `monitor_site`, `list_categories`, `get_top_sites`.

**ADB** also exposes: `get_job`, `list_companies`, `get_stats`.

Run `tools/list` against either `/mcp` endpoint to see the full schema.

## Links

- Not Human Search: <https://nothumansearch.ai>
- AI Dev Jobs: <https://aidevboard.com>
- MCP spec: <https://modelcontextprotocol.io>
- This repo: <https://github.com/unitedideas/mcp-agent-examples>

## License

MIT — see [LICENSE](./LICENSE).
