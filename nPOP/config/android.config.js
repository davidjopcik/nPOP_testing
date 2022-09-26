import { config } from './test-confingnPOP';
import { deviceName as _deviceName } from './android.info';



config.capabilities = [{
    "appium:platformName": "Android",
    "appium:automationName": "UiAutomator2", 
    "apiium:deviceName": _deviceName,
    "appium:maxInstance": 1,
    //"appium:platformVersion": "8",
    //"appium:deviceName": "Pixel 4 API Tiramisu",
    //"appium:deviceName": "Android Device",

    //"appium:appPackage": "sk.zssk.mobapp.android.dev",
    //"appium:appActivity": ".MainActivity"

    specs: [

        // ---- TESTS -----
        "nPOP/tests/android/testcases/TC_TEST.js",
        //"nPOP/tests/android/testcases/TC_TEST.js",
        //"nPOP/tests/android/testcases/TC_TEST.js",

    ],

}];

const _config = config;
export { _config as config };