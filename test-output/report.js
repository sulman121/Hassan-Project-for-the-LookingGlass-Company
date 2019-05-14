$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Homepage.feature");
formatter.feature({
  "name": "Dresses feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify user homepage Displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user at homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Homepage displayed and verify the Dresses menu option available",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dresses link is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_dresses_link_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user at the homepage and verify the Dresses menu option is clickable navigate to",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dresses menu option clicked and navigated to dresses homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dresses_menu_option_clicked_and_navigate_to_dresses_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "All five dresses are listed on the summary page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Requested"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dresses menu option clicked and navigated to dresses page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.dresses_menu_option_clicked_and_navigated_to_dresses_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the five dresses",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.select_the_five_dresses()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d74.0.3729.108)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dLinux 4.18.0-18-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027hassan-VirtualBox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.18.0-18-generic\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: /tmp/.com.google.Chrome.lSoyTH}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:46789}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.108, webStorageEnabled: true}\nSession ID: 53317981757012e8f042a0be034efc1f\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.GeneratedMethodAccessor2.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:417)\n\tat sun.reflect.GeneratedMethodAccessor2.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat PagePackage.DressesPage.selectTheFiveDress(DressesPage.java:122)\n\tat Steps.StepDefinition.select_the_five_dresses(StepDefinition.java:73)\n\tat ✽.select the five dresses(file:src/test/resources/Features/Homepage.feature:23)\n",
  "status": "failed"
});
formatter.step({
  "name": "click on Shopping cart and navigate to summary page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_on_Shopping_cart_and_navigate_to_summary_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "five dresses listed on summary page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.five_dresses_listed_on_summary_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The Total price of each dress is correct",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Requested"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dresses menu option clicked and navigated to dresses page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.dresses_menu_option_clicked_and_navigated_to_dresses_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the five dresses",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.select_the_five_dresses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Shopping cart and navigate to summary page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_on_Shopping_cart_and_navigate_to_summary_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Total each item Price matched",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.total_Price_matched()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The Total product price is the sum of the total price of each dress",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Requested"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dresses menu option clicked and navigated to dresses page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.dresses_menu_option_clicked_and_navigated_to_dresses_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the five dresses",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.select_the_five_dresses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Shopping cart and navigate to summary page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_on_Shopping_cart_and_navigate_to_summary_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "total product price is the sum of the total price of each address",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.total_product_price_is_the_sum_of_the_total_price_of_each_address()"
});
formatter.result({
  "status": "passed"
});
});