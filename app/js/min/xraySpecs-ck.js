function xraySpecs(){$(".unitToggle").click(function(){var n=$(this).parent().children(".xrayhtml").children(".source-panel");$(n).toggle(200)})}function markupID(){$("code").addClass("language-markup")}function XRAY(){initXRAY(),xraySpecs(),markupID(),Prism.highlightAll()}