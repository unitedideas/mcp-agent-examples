"""
find_ai_jobs.py — Search AI Dev Jobs (https://aidevboard.com) via MCP.

Usage:
    pip install mcp
    python find_ai_jobs.py pytorch

Expected output (truncated):
    Top 5 jobs matching 'pytorch':
    1. Research Engineer, Performance RL — Anthropic (San Francisco, CA)
       $350000-$850000 · https://aidevboard.com/job/anthropic/...
    2. Director, Enterprise Machine Learning & Research — Scale AI
       ...
"""
import asyncio
import sys

from mcp import ClientSession
from mcp.client.streamable_http import streamablehttp_client


async def main(query: str) -> None:
    url = "https://aidevboard.com/mcp"
    async with streamablehttp_client(url) as (read, write, _):
        async with ClientSession(read, write) as session:
            await session.initialize()
            result = await session.call_tool(
                "search_jobs", {"q": query, "limit": 5}
            )
            print(f"Top 5 jobs matching {query!r}:\n")
            for block in result.content:
                if hasattr(block, "text"):
                    print(block.text)


if __name__ == "__main__":
    q = sys.argv[1] if len(sys.argv) > 1 else "pytorch"
    asyncio.run(main(q))
