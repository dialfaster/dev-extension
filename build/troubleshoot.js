/*
//  === SELECT ACTION === //

// try searching by button className WORKS
let x0 = document.getElementsByClassName("diq-button diq-left diq-btn-gray diq-menu-button diq-dropdown diq-select-action")[0].click()

// try searching by div className WORKS
let x1 = document.getElementsByClassName("diq-truncate")[0].click()

// try searching with a button WORKS
let x2 = document.evaluate(
    `//button[normalize-space()='Select Action']`,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()

// try searching with a div WORKS
let x3 = document.evaluate(
    `//div[normalize-space()='Select Action']`,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()


function getElementByText(text) {
    var matchingElement = document.evaluate(
        `//span[normalize-space()='${text}'] | //a[normalize-space()='${text}'] | //button[normalize-space()='${text}']`,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (!matchingElement) {
        matchingElement = document.evaluate(
            `//*[normalize-space()='${text}']`,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    }

    if (matchingElement) {
        console.log(`Successfully found element "${text}"`);
        return matchingElement
    }
    else {
        throw new Error(`DialFaster: No element found with text: ${text}`);
    }

}

getElementByText("Select Action")






// try searching with text()?
let x5 = document.evaluate(
        `//button[text()='Select Action']`,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()


// try searching with object property? not tried
let x6 = document.evaluate(
            '//button[@data-menu="diq-actions"]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()



*/
