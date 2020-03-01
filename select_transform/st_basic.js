var ST = require('stjs');

var template = {
    "menu": {
      "flavor": "{{flavor}}",
      "richness": "{{richness}}",
      "garlic amount": "{{garlic_amount}}",
      "green onion?": "{{green_onion}}",
      "sliced pork?": "{{pork_amount}}",
      "secret sauce": "{{sauce_amount}}",
      "noodle's texture": "{{texture}}"
    }
  }
  
  var data = {
    "flavor": "strong",
    "richness": "ultra rich",
    "garlic_amount": "1 clove",
    "green_onion": "thin green onion",
    "pork_amount": "with",
    "sauce_amount": "double",
    "texture": "extra firm"
  }

  var sel = ST.select(template)
    .transform(data)
    .root();

    console.log(sel);