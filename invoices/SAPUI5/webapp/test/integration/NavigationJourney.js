//@ts-nocheck
sap.ui.define(
  [
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel",
    "logaligroup/SAPUI5/localService/mockserver",
  ],
  /**
   *
   * @param {sap.ui.test.opaQunit} opaQunit
   */
  function (opaQunit, mockserver) {
    "use strict";

    QUnit.module("Navigation");

    opaQunit("Should open the hello dialog", function (Given, When, Then) {
      //initialize mock server
      mockserver.init();

      //Arrangements
      Given.iStartMyUIComponent({
        componentConfig: {
          name: "logaligroup.SAPUI5",
        },
      });

      //Actions
      When.onTheAppPage.iSayHelloDialogButton();

      //Assertions
      Then.onTheAppPage.iSeeTheHelloDialog();

      //Cleanup
      Then.iTeardownMyApp();
    });
  }
);
