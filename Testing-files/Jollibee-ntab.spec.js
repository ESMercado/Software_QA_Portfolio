// Test to see if all social media buttons are working in Jollibee site 
// Expected result, go to new tab with the correct SocMedia site of the corresponding button

const {test, expect} = require('@playwright/test');

const baseUrl = 'https://www.jollibeedelivery.com/';

// Test if Intagram is working
test("click instagram social media button", async ({page}) => {
    // Access the main page 
    await page.goto(baseUrl);

    // Start waiting for new page before clicking. Note no await.
    const pagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'instagram' }).click();
    const newPage = await pagePromise;
    // Interact with the new page normally.

    await expect(newPage).toHaveURL(/.*instagram.com/);
    await expect(newPage).toHaveURL(/.*jollibee/);
});

// Test if Facebook is working
test("click facebook social media button", async ({page}) => {
    // Access the main page 
    await page.goto(baseUrl);

    // Start waiting for new page before clicking. Note no await.
    const pagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'facebook' }).click();
    const newPage = await pagePromise;
    // Interact with the new page normally.

    await expect(newPage).toHaveURL(/.*facebook.com/);
    await expect(newPage).toHaveURL(/.*JollibeePhilippines/);

});

// Test if Twitter is working
test("click twitter social media button", async ({page}) => {
    // Access the main page 
    await page.goto(baseUrl);

    // Start waiting for new page before clicking. Note no await.
    const pagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'twitter' }).click();
    const newPage = await pagePromise;
    // Interact with the new page normally.
    await expect(newPage).toHaveURL(/.*x.com/);
    await expect(newPage).toHaveURL(/.*jollibee/);

});
