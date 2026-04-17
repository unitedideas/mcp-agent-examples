"""
find_mcp_servers.py — Discover agent-ready sites via Not Human Search MCP.

Usage:
    pip install mcp
    python find_mcp_servers.py "payment API"

Expected output (truncated):
    Top 5 agent-ready services matching 'payment API':
    1. Razorpay [45/100] - razorpay.com (finance)
       Signals: llms.txt, api
    2. Coin Railz [50/100] - coinrailz.com (developer)
       Signals: llms.txt, openapi
    ...
"""
import asyncio
import sys

from mcp import ClientSession
from mcp.client.streamable_http import streamablehttp_client


async def main(query: str) -> None:
    url = "https://nothumansearch.ai/mcp"
    async with streamablehttp_client(url) as (read, write, _):
        async with ClientSession(read, write) as session:
            await session.initialize()
            result = await session.call_tool(
                "search_agents", {"query": query, "limit": 5}
            )
            print(f"Top 5 agent-ready services matching {query!r}:\n")
            for block in result.content:
                if hasattr(block, "text"):
                    print(block.text)


if __name__ == "__main__":
    q = sys.argv[1] if len(sys.argv) > 1 else "payment API"
    asyncio.run(main(q))
