/**
 * find-mcp-servers.ts — Discover agent-ready sites via Not Human Search MCP.
 *
 * Usage:
 *   npm install @modelcontextprotocol/sdk
 *   npx tsx find-mcp-servers.ts "payment API"
 *
 * Expected output (truncated):
 *   Top 5 agent-ready services matching 'payment API':
 *   1. Razorpay [45/100] - razorpay.com (finance)
 *      Signals: llms.txt, api
 *   2. Coin Railz [50/100] - coinrailz.com (developer)
 *      Signals: llms.txt, openapi
 *   ...
 */
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

async function main(query: string): Promise<void> {
  const url = new URL("https://nothumansearch.ai/mcp");
  const transport = new StreamableHTTPClientTransport(url);
  const client = new Client({ name: "find-mcp-servers", version: "0.1.0" }, { capabilities: {} });
  await client.connect(transport);

  const result = await client.callTool({
    name: "search_agents",
    arguments: { query: query, limit: 5 },
  });

  console.log(`Top 5 agent-ready services matching '${query}':\n`);
  for (const block of result.content as Array<{ type: string; text?: string }>) {
    if (block.type === "text" && block.text) console.log(block.text);
  }
  await client.close();
}

const query = process.argv[2] ?? "payment API";
main(query).catch((err) => {
  console.error(err);
  process.exit(1);
});
