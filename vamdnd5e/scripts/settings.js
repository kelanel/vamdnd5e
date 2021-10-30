Hooks.on("init", () => {

// Register a client setting
game.settings.register("VAM_DND5E", "ShowIntro", { // game.setting.register("NameOfTheModule", "VariableName",
  name: "VAM Free Pack Settings",                  // Register a module setting with checkbox
  hint: "Show startup window popup",               // Description of the settings
  scope: "client",                                    // This specifies a client-stored setting
  config: true,                                       // This specifies that the setting appears in the configuration view
  type: Boolean, 
  default: true,                                     // The default value for the setting
});

});





