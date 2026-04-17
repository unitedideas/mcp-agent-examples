/**
 * find-ai-jobs.ts — Search AI Dev Jobs (https://aidevboard.com) via MCP.
 *
 * Usage:
 *   npm install @modelcontextprotocol/sdk
 *   npx tsx find-ai-jobs.ts pytorch
 *
 * Expected output (truncated):
 *   Top 5 jobs matching 'pytorch':
 *   1. Research Engineer, Performance RL — Anthropic (San Francisco, CA)
 *      $350000-$850000 · https://aidevboard.com/job/anthropic/...
 *   2. Director, Enterprise Machine Learning & Research — Scale AI
 *      ...
 */
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

async function main(query: string): Promise<void> {
  const url = new URL("https://aidevboard.com/mcp");
  const transport = new StreamableHTTPClientTransport(url);
  const client = new Client({ name: "find-ai-jobs", version: "0.1.0" }, { capabilities: {} });
  await client.connect(transport);

  const result = await client.callTool({
    name: "search_jobs",
    arguments: { q: query, limit: 5 },
  });

  console.log(`Top 5 jobs matching '${query}':\n`);
  for (const block of result.content as Array<{ type: string; text?: string }>) {
    if (block.type === "text" && block.text) console.log(block.text);
  }
  await client.close();
}

const query = process.argv[2] ?? "pytorch";
main(query).catch((err) => {
  console.error(err);
  process.exit(1);
});
