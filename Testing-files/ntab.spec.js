const {test, expect} = require('@playwright/test');

const baseUrl = 'https://www.jollibeedelivery.com/';

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