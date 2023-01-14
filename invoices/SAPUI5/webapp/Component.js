sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel",
    "logaligroup/SAPUI5/model/Models",
  ],
  /**
   * @param {typeof sap.ui.core.UIComponent} UIComponent
   * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
   */

  function (UIComponent, ResourceModel, Models) {
    return UIComponent.extend("logaligroup.SAPUI5.Component", {
      metadata: {
        manifest: "json",

      },

      init: function () {
        //call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        //set data model in the view
        this.setModel(Models.createRecipient());

        //set i18n model
        this.setModel(
          new ResourceModel({
            bundleName: "logaligroup.SAPUI5.i18n.i18n",
          }),
          "i18n"
        );
      },
    });
  }
);
