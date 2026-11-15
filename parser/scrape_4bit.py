import asyncio
from playwright.async_api import async_playwright


async def fetch_plays():
    """
    Открывает главную страницу 4bit.online в Chromium,
    делает скриншот и сохраняет его в parser/debug_home.png.
    """
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        context = await browser.new_context(viewport={"width": 1280, "height": 900})
        page = await context.new_page()

        print("[*] Opening https://4bit.online ...")
        await page.goto("https://4bit.online", wait_until="domcontentloaded")

        print("[*] Waiting 5 seconds for full page load ...")
        await asyncio.sleep(5)

        print("[*] Saving screenshot to parser/debug_home.png ...")
        await page.screenshot(path="parser/debug_home.png", full_page=True)
        print("[✓] Done. Check parser/debug_home.png")

        await browser.close()


if __name__ == "__main__":
    asyncio.run(fetch_plays())
