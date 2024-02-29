 /* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username vidyar@testleaf.com
 * Enter the password Testleaf@1234
 * Click Login button
 * Verify the title of the page (using page.title() method)
 */

 import { test,chromium } from "@playwright/test";
 test('DAY3 HOMEWORK', async()=>{  
       const browser= await chromium.launch({headless:false,channel:"msedge"});
      const browserContext=await browser.newContext();
      const page=await browserContext.newPage(); 
      await page.goto("https://login.salesforce.com/");
      console.log (page.url());
      await page.locator(`#username`).fill('vidyar@testleaf.com');
      await page.fill ("#password","Testleaf@1234");
      await page.click("#Login");
      console.log (await page.title());
      //await page.waitForTimeout(3000);


 })


 // Implementing Fixtures in the above testcase

 //import { test,chromium } from "@playwright/test";
test('DAY3 HOMEWORK fixture concept', async({page})=>{  // fixture concept
await page.goto("https://login.salesforce.com/");
console.log (page.url());
await page.locator(`#username`).fill("vidyar@testleaf.com");
await page.fill ("#password","Testleaf@1234");
await page.click("#Login");
console.log (await page.title());
await page.waitForTimeout(3000);
}
)