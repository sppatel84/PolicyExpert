const { Given, When, Then } = require("@cucumber/cucumber");
const playwright = require('playwright');
const chai = require('chai');
const expect = chai.expect;
const random = require("random-name")
let browser
Given('as a user I naviate to {string}', { timeout: 60 * 1000 }, async (url) => {
    browser = await playwright.chromium.launch({
        headless: false,
    });
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto(url)
    console.log(await page.title())
    expect(await page.title()).equals("Details - Policy Expert")
});

When('I select Title as {string}', { timeout: 60 * 1000 }, async (title) => {
    const titleDropDown = page.locator(".row.question-row-title div div select")
    await titleDropDown.selectOption(title)

});

When('I enter first name', { timeout: 60 * 1000 }, async () => {
    const firstName = random.first()
    const firstNameTextBox = page.locator(".question-row-first-name div div input")
    await firstNameTextBox.fill(firstName)
});

When('I enter last name', { timeout: 60 * 1000 }, async () => {
    const lastName = random.last()
    const lastNameTextBox = page.locator(".question-row-last-name div div input")
    await lastNameTextBox.fill(lastName)
});

When('I select the date for date of birth as {string}', { timeout: 60 * 1000 }, async (date) => {
    const selectDate = page.locator('(//div[@data-testid="date-dropdowns"]//div//select)[1]')
    await selectDate.selectOption(date)
});

When('I select the month for date of birth as {string}', { timeout: 60 * 1000 }, async (month) => {
    const selectMonth = page.locator('(//div[@data-testid="date-dropdowns"]//div//select)[2]')
    await selectMonth.selectOption(month)
});

When('I select the year for date of birht as {string}', { timeout: 60 * 1000 }, async (year) => {
    const selectYear = page.locator('(//div[@data-testid="date-dropdowns"]//div//select)[3]')
    await selectYear.selectOption(year)
});

When('I select the marital status as {string}', { timeout: 60 * 1000 }, async (status) => {
    const selectMaritalStatus = page.locator('//div[@class="row question-row-what-is-your-marital"]//div//div//select')
    await selectMaritalStatus.selectOption(status)

});

When('I enter occupation as {string}', { timeout: 60 * 1000 }, async (occupation) => {
    await page.locator('[placeholder="Please start typing"]').type(occupation, { delay: 50 })
    await page.locator('text=Software Engineer').click()
});

When('I select the option for occupation question as {string}', { timeout: 60 * 1000 }, async (otherOccupation) => {
    const enterOtherOccupationStatus = page.locator('(//div[@class="row question-row-do-you-have-another"]//div//div//div//div//button)[2]')
    await enterOtherOccupationStatus.click()

});

When('I enter the mobile phone number as {string}', { timeout: 60 * 1000 }, async (mobileNum) => {
    const enterMobileNumber = page.locator('//div[@class="row question-row-main-phone-number"]//div//div//input')
    await enterMobileNumber.fill(mobileNum)

});

When('I enter email address as {string}', { timeout: 60 * 1000 }, async (email) => {
    const enterEmail = page.locator('//div[@class="row question-row-what-is-your-e-mail"]//div//div//input')
    await enterEmail.fill(email)
});

When('I select the option for criminal record as {string}', { timeout: 60 * 1000 }, async (record) => {
    const selectOption = page.locator('(//div[@class="row question-row-you-are-answering-th"]//div//div//div//div//button)[2]')
    await selectOption.click()
});

When('I select the property address as {string}', { timeout: 60 * 1000 }, async (address) => {
    await page.locator('[placeholder="Start typing a postcode or address"]').type(address, { delay: 50 })
    await page.locator('text=Policy Expert Ltd, 110 Bishopsgate, London, EC2N 4AY').click()
});

When('I select the option for correspondence address', { timeout: 60 * 1000 }, async () => {
    const correspondenceAddress = page.locator('(//div[@class="row question-row-is-this-the-same-as"]//div//div//div//div//button)[1]')
    await correspondenceAddress.click()
});

When('I select the property type as {string}', { timeout: 60 * 1000 }, async (propertyType) => {
    const selectPropertyType = page.locator('//div[@class="row question-row-what-type-of-propert"]//div//div//select')
    await selectPropertyType.selectOption(propertyType)
});

When('I select the property description as {string}', { timeout: 60 * 1000 }, async (propertyType) => {
    const selectPropertyType = page.locator('//div[@class="row question-row-which-of-these-best"]//div//div//select')
    await selectPropertyType.selectOption(propertyType)
});

When('I enter property built year as {string}', { timeout: 60 * 1000 }, async (builtYear) => {
    const year = page.locator('//div[@class="row question-row-approximately-in-whi"]//div//div//input')
    await year.fill(builtYear)
});

When('I select the number of bedrooms as {string}', { timeout: 60 * 1000 }, async (bedrooms) => {
    const number = page.locator('//div[@class="row question-row-how-many-bedrooms-do"]//div//div//select')
    await number.selectOption(bedrooms)
});

When('I select the number of toilet rooms as {string}', { timeout: 60 * 1000 }, async (rooms) => {
    const number = page.locator('//div[@class="row question-row-how-many-bathrooms"]//div//div//select')
    await number.selectOption(rooms)
});

When('I select the option for main residence', { timeout: 60 * 1000 }, async () => {
    const mainResidenceOpts = page.locator('(//div[@class="row question-row-is-the-property-your"]//div//div//div//div//button)[1]')
    await mainResidenceOpts.click()
});

When('I select the own property option as {string}', { timeout: 60 * 1000 }, async (option) => {
    const propertyOpts = page.locator('//div[@class="row question-row-do-you-own-the-prope"]//div//div//select')
    await propertyOpts.selectOption(option)
});

When('I select for property occupied by as {string}', { timeout: 60 * 1000 }, async (occupied) => {
    const occupiedPropOpts = page.locator('//div[@class="row question-row-who-is-the-property"]//div//div//select')
    await occupiedPropOpts.selectOption(occupied)
});

When('I select for number of adults at property as {string}', { timeout: 60 * 1000 }, async (number) => {
    const numberOfAdult = page.locator('//div[@class="row question-row-how-many-adults-aged"]//div//div//select')
    await numberOfAdult.selectOption(number)
});

When('I select for number of children at property as {string}', { timeout: 60 * 1000 }, async (number) => {
    const numberOfChildren = page.locator('//div[@class="row question-row-how-many-children-ag"]//div//div//select')
    await numberOfChildren.selectOption(number)
});

When('I select the smoking option', { timeout: 60 * 1000 }, async () => {
    const smokingOpts = page.locator('(//div[@class="row question-row-do-you-or-any-of-the"]//div//div//div//div//button)[2]')
    await smokingOpts.click()
});

When('I select the option for when normally property occupied as {string}', { timeout: 60 * 1000 }, async (occupied) => {
    const whenOccupied = page.locator('//div[@class="row question-row-when-is-the-property"]//div//div//select')
    await whenOccupied.selectOption(occupied)
});

When('I select the tree option', { timeout: 60 * 1000 }, async () => {
    const treeOpt = page.locator('(//div[@class="row question-row-are-there-any-trees"]//div//div//div//div//button)[2]')
    await treeOpt.click()
});

When('I select the flat roof option', { timeout: 60 * 1000 }, async () => {
    const flatRoofOpt = page.locator('(//div[@class="row question-row-does-your-property-h"]//div//div//div//div//button)[2]')
    await flatRoofOpt.click()
});

When('I select the wall option', { timeout: 60 * 1000 }, async () => {
    const wallOpt = page.locator('(//div[@class="row question-row-are-the-walls-made-o"]//div//div//div//div//button)[1]')
    await wallOpt.click()
});

When('I select the roof option', { timeout: 60 * 1000 }, async () => {
    const roofOpt = page.locator('(//div[@class="row question-row-is-the-roof-made-of"]//div//div//div//div//button)[1]')
    await roofOpt.click()
});

When('I select the property maintain option', { timeout: 60 * 1000 }, async () => {
    const maintainance = page.locator('(//div[@class="row question-row-is-the-property-well"]//div//div//div//div//button)[1]')
    await maintainance.click()
});

When('I select the property safty option', { timeout: 60 * 1000 }, async () => {
    const safty = page.locator('(//div[@class="row question-row-please-answer-the-fo"]//div//div//div//div//button)[2]')
    await safty.click()
});

When('I select the window secured option', { timeout: 60 * 1000 }, async () => {
    const windowOpts = page.locator('(//div[@class="row question-row-are-all-externally-a"]//div//div//div//div//button)[1]')
    await windowOpts.click()
});

When('I select the property self contained option', { timeout: 60 * 1000 }, async () => {
    const selfContainedOpts = page.locator('(//div[@class="row question-row-is-your-property-sel"]//div//div//div//div//button)[2]')
    await selfContainedOpts.click()
});

When('I select the french door option', { timeout: 60 * 1000 }, async () => {
    await page.locator('text=Does your property have any French or patio doors?YesNo >> [data-testid=""]').nth(1).click()
});

When('I select the external door option', { timeout: 60 * 1000 }, async () => {
    await page.locator('text=Does your property have any other external doors?YesNo >> [data-testid=""]').nth(1).click()
});

When('I select the alaram option', { timeout: 60 * 1000 }, async () => {
    await page.locator('text=Are all externally accessible windows secured with key-operated locks?YesNo?Is y >> [data-testid=""]').nth(5).click()
});

When('I select the joint placeholder option', { timeout: 60 * 1000 }, async () => {
    await page.locator('text=Would you like to add a joint policyholder?YesNo >> [data-testid=""]').nth(1).click()
});

When('I select the years for consecutive insurance as {string}', { timeout: 60 * 1000 }, async (year) => {
    const insuranceYear = page.locator('//div[@class="row question-row-how-many-consecutive"]//div//div//select')
    await insuranceYear.selectOption(year)
});

When('I select the insurance claim for last three years option', { timeout: 60 * 1000 }, async () => {
    const claimOpts = page.locator('(//div[@class="row question-row-within-the-last-thre"]//div//div//div//div//button)[2]')
    await claimOpts.click()
});

When('I select the insurance start date', { timeout: 60 * 1000 }, async () => {
    await page.locator('input[type="button"]').click()
    await page.locator('td:has-text("12")').click()
});

When('I select the home insurance type as {string}', { timeout: 60 * 1000 }, async (type) => {
    const insuranceType = page.locator('//div[@class="row question-row-please-select-what-t"]//div//div//select')
    await insuranceType.selectOption(type)
});

When('I enter current property value as {string}', { timeout: 60 * 1000 }, async (value) => {
    const propertyValue = page.locator('//div[@class="row question-row-please-enter-the-cur"]//div//div//input')
    await propertyValue.fill(value)
});

When('I select the accidental damage cover option', { timeout: 60 * 1000 }, async () => {
    await page.locator('text=Would you like to add upgraded accidental damage cover for your buildings?YesNo >> [data-testid=""]').nth(1).click()
});

When('I select the standard excess as {string}', { timeout: 60 * 1000 }, async (excess) => {
    const standardExcess = page.locator('//div[@class="row question-row-standard-excess-oth"]//div//div//select')
    await standardExcess.selectOption(excess)
});

When('I click on go to compare quotes button', { timeout: 60 * 1000 }, async () => {
    const quoteCompareBtn = page.locator(".btn-success")
    await quoteCompareBtn.click()
});

Then('I can view the quote message as {string}', { timeout: 60 * 1000 }, async (message) => {
    const quote = page.locator(".declined-quote-screen")
    const quoteMessage = await quote.textContent()
    console.log(quoteMessage)
    expect(quoteMessage).to.equals(message)
    browser.close()
});