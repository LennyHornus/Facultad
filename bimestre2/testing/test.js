const { Builder, Capabilities, By } = require('selenium-webdriver');
const chromeCapabilities = Capabilities.chrome();

async function TC_01(){
    chromeCapabilities.set('chromeOptions', {args: ['---headless', '--unhandled-rejections-strict']});
    let driver = await new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();

    await driver.get('https://google.com.ar');
    await driver.manage.window().maximize();
    await driver.sleep(10000);

    await driver.findElement(By.name('q'),sendKeys('Digital House'));
    await driver.findElement(By.className('iblpc')).click();
    
    let publicidadDigitalHouse = await driver.findElement(By.className('iUh30 tjvcx')).getAttribute('value');
    assertStrictEqual(publicidadDigitalHouse, '//www.digitalhouse.com');

    await driver.findElement(By.className('LC20lb MBeuO DKV0Md')).click();
    let numeroSubscripciones = await driver.findElement(By.id('subscriber-count')).getAttribute('value');
    assertStrictEqual(numeroSubscripciones, '4070');

    await driver.sleep(10000);
    await driver.quit();
}