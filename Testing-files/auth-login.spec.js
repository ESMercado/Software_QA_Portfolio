const {test, expect} = require('@playwright/test');

test("Login using existing user", async ({page}) => {
    // Access the main page 
    await page.goto('https://magento.softwaretestingboard.com/');
    // check if home page has the expected title
    await expect(page).toHaveTitle('Home Page');
    
    // Locate and click the sign in button
    await page.getByRole('link', { name: 'Sign In' }).click();
    // Check if Sign in and Registration is displaying properly
    await expect(page.getByText('Registered Customers If you')).toContainText('Email');
    
    // Enter existing user email and password then click sign in
    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Test2Test');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // check if page loads properly after logging in
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/');
    
});

test("Login using non-existing user", async ({page}) => {
    // Access the main page 
    await page.goto('https://magento.softwaretestingboard.com/');
    // check if home page has the expected title
    await expect(page).toHaveTitle('Home Page');
    
    // Locate and click the sign in button
    await page.getByRole('link', { name: 'Sign In' }).click();
    // Check if Sign in and Registration is displaying properly
    await expect(page.getByText('Registered Customers If you')).toContainText('Email');
    
    // Enter non-existing user email and password then click sign in
    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('*****');

    await page.getByRole('button', { name: 'Sign In' }).click();

    // Check if error message is visible
    await expect(page.getByRole('alert').locator('div').first()).toBeVisible();
    
});

