var filename = "EJY_polgrice_goals_v4" 
var condCounts = "1,5;2,5;" //Example: "1,20;2,20;3,20"

// ---------------- HELPER ------------------
var NUM_SLIDERS = 2;
var NUM_SLIDERS1 = 2;
var NUM_SLIDERS2 = 2;

function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

function clearForm(oForm) {
  var sliderVar = "";
  for(var i=0; i<NUM_SLIDERS; i++)
  {
    sliderVar = "#slider" + i;
    $(sliderVar).slider("value", 20);
    $(sliderVar).css({"background":"#FFFFFF"});
    $(sliderVar + " .ui-slider-handle").css({
        "background":"#FAFAFA",
        "border-color": "#CCCCCC" });
    sliderVar = "slider" + i;
    document.getElementById(sliderVar).style.background = "";
  }
  
  var elements = oForm.elements; 
  
  oForm.reset();

  for(var i=0; i<elements.length; i++) {
    field_type = elements[i].type.toLowerCase();
    switch(field_type) {
    
      case "text": 
      case "password": 
      case "textarea":
            case "hidden":	
        
        elements[i].value = ""; 
        break;
          
      case "radio":
      case "checkbox":
          if (elements[i].checked) {
            elements[i].checked = false; 
        }
        break;
  
      case "select-one":
      case "select-multi":
                  elements[i].selectedIndex = -1;
        break;
  
      default: 
        break;
    }
  }
}

Array.prototype.random = function() {
  return this[random(this.length)];
}

// shuffle function
function shuffle (a) 
{ 
    var o = [];    
    for (var i=0; i < a.length; i++) {
	o[i] = a[i];
    }    
    for (var j, x, i = o.length;
	 i;
	 j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);	
    return o;
}

function shuffledArray(arrLength)
{
  var j, tmp;
  var arr = new Array(arrLength);
  for (i = 0; i < arrLength; i++)
  {
    arr[i] = i;
  }
  for (i = 0; i < arrLength-1; i++)
  {
    j = Math.floor((Math.random() * (arrLength - 1 - i)) + 0.99) + i;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function shuffledSampleArray(arrLength, sampleLength)
{
  var arr = shuffledArray(arrLength);
  var beginIndex = Math.floor(Math.random() * (arrLength-sampleLength+1));
  return arr.slice(beginIndex, beginIndex+sampleLength);
}

function getRadioCheckedValue(formNum, radio_name)
{
   var oRadio = document.forms[formNum].elements[radio_name];
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
   return '';
}


// ---------------- PARAMETERS ------------------

// CONDITION ASSIGNMENT
//var cond = random(3)+1;
var cond = 1;
var expt = "L2_S_noG";

if (cond == 1) {
    var threat = "threat";
} else if (cond == 2) {
    var threat = "no_threat";   
} else {
    var threat = "no_identity"
}

// call the maker getter to get the cond variable 
//var xmlHttp = null;
//xmlHttp = new XMLHttpRequest();
//xmlHttp.open( "GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + condCounts +"&filename=" + filename, false );
//xmlHttp.send( null );
//var cond = xmlHttp.responseText;
var formOrder = shuffle([['form0','next0'],['form1','next1']])

var score = shuffle(["polite", "informative"]);
var prediction = shuffle(["ask", "like"])

//if (cond == 1) {
//    state_knowledge = "known";
//} else if (cond == 2) {
    var state_knowledge = "unknown";
//}

var domains1 = 
    shuffle(["poem", "cake", "cookie", "presentation", "song", "film", "solo", "monologue", "dance", "painting", "app", "review", "recital"]);
var domains = domains1.concat(domains1, domains1, domains1)

var statecond = random(5) + 1;
//if (statecond == 5) {
//    var statecond = 5;
//} else {
//    var statecond = random(5) + 1;
//}

var states1 = 
    ["terrible", "bad", "okay", "good", "amazing"];
var states2 = 
    ["bad", "okay", "good", "amazing", "terrible"];
var states3 = 
    ["okay", "good", "amazing", "terrible", "bad"];
var states4 = 
    ["good", "amazing", "terrible", "bad", "okay"];
var states5 = 
    ["amazing", "terrible", "bad", "okay", "good"];
var states = states1.concat(states2, states3, states4, states5)
var utterances1 = 
    ["terrible", "bad", "okay", "good", "amazing"];
var utterances2 = 
    ["terrible", "bad", "okay", "good", "amazing"];
var utterances3 = 
    ["terrible", "bad", "okay", "good", "amazing"];
var utterances = utterances1.concat(utterances2, utterances3)

//var drawnum1 = shuffle([0, 1, 2, 3, 4]);
//var drawnum2 = shuffle([5, 6, 7, 8, 9]);
//var drawnum3 = shuffle([10, 11, 12, 13, 14]);
//var drawnumdraw = shuffle([drawnum1, drawnum2, drawnum3]);
//var drawnum = drawnumdraw[0].concat(drawnumdraw[1], drawnumdraw[2]);

    var allConditions = 
shuffle(
    [
    
shuffle(
    [
{"domain": domains[0],
 "state": states[0],
 "utterance": utterances[0],
 "people": "people1",
// "goal": goals[0],
},
{"domain": domains[1],
 "state": states[1],
 "utterance": utterances[1],
 "people": "people2",
// "goal": goals[1],
},
{"domain": domains[2],
 "state": states[2],
 "utterance": utterances[2],
 "people": "people3",
// "goal": goals[2],
},
{"domain": domains[3],
 "state": states[3],
 "utterance": utterances[3],
 "people": "people4",
// "goal": goals[3],
},
{"domain": domains[4],
 "state": states[4],
 "utterance": utterances[4],
 "people": "people5",
// "goal": goals[4],
},
{"domain": domains[5],
 "state": states[5],
 "utterance": utterances[5],
 "people": "people6",
// "goal": goals[5],
},
{"domain": domains[6],
 "state": states[6],
 "utterance": utterances[6],
 "people": "people7",
// "goal": goals[6],
},
{"domain": domains[7],
 "state": states[7],
 "utterance": utterances[7],
 "people": "people8",
// "goal": goals[7],
},
{"domain": domains[8],
 "state": states[8],
 "utterance": utterances[8],
 "people": "people9",
// "goal": goals[8],
},
{"domain": domains[9],
 "state": states[9],
 "utterance": utterances[9],
 "people": "people10",
// "goal": goals[9],
},
{"domain": domains[10],
 "state": states[10],
 "utterance": utterances[10],
 "people": "people11",
// "goal": goals[10],
},
{"domain": domains[11],
 "state": states[11],
 "utterance": utterances[11],
 "people": "people12",
// "goal": goals[11],
},
{"domain": domains[12],
 "state": states[12],
 "utterance": utterances[12],
 "people": "people13",
// "goal": goals[12],
},
{"domain": domains[13],
 "state": states[13],
 "utterance": utterances[13],
 "people": "people14",
// "goal": goals[13],
},
{"domain": domains[14],
 "state": states[14],
 "utterance": utterances[14],
 "people": "people15",
// "goal": goals[14],
},
    ]
        )
]
    ); 
//}

var speakers = shuffle([["John","Bob","Ken"], ["Hailey", "Mika","Sherry"], ["Karen", "Jenny","Pam"], ["Kyle", "James","Derek"], ["Sean", "Chris","Harry"],
                    ["Lucy", "Sarah","Joanne"], ["Bill", "Tom","Larry"], ["Heather", "Grace","Christine"], ["Jake", "Kevin","Mike"], ["Ann", "Diana","Gina"],
                    ["George", "Henry","Scott"], ["Nathan", "Patrick","Tyson"], ["Wendy", "Emma","Shirley"], ["Stephanie", "Barbara","Caroline"], ["Oliver", "Robert","Chris"],
                    ["Matt", "Landon","Bobby"], ["Steven", "Zack","Wayne"], ["Fiona", "Yvonne","Helen"], ["Rebecca", "Cheryl","Tracy"], ["Victoria", "Jasmine","Naomi"],
                    ["Albert", "Frank","Xavier"], ["Greg", "Colin","Benoit"], ["Ed", "Peter","Lawrence"], ["Molly", "Kara","Sophia"], ["Justine", "Kelly","Irene"]]);

speakers1 = shuffle(speakers[0]);
speakers2 = shuffle(speakers[1]);
speakers3 = shuffle(speakers[2]);
speakers4 = shuffle(speakers[3]);
speakers5 = shuffle(speakers[4]);
speakers6 = shuffle(speakers[5]);
speakers7 = shuffle(speakers[6]);
speakers8 = shuffle(speakers[7]);
speakers9 = shuffle(speakers[8]);
speakers10 = shuffle(speakers[9]);
speakers11 = shuffle(speakers[10]);
speakers12 = shuffle(speakers[11]);
speakers13 = shuffle(speakers[12]);
speakers14 = shuffle(speakers[13]);
speakers15 = shuffle(speakers[14]);
speakers16 = shuffle(speakers[15]);
speakers17 = shuffle(speakers[16]);
speakers18 = shuffle(speakers[17]);
speakers19 = shuffle(speakers[18]);
speakers20 = shuffle(speakers[19]);
speakers21 = shuffle(speakers[20]);
speakers22 = shuffle(speakers[21]);
speakers23 = shuffle(speakers[22]);
speakers24 = shuffle(speakers[23]);
speakers25 = shuffle(speakers[24]);


var sents = {
    utterances: {
        terrible: {
            sent_utterance: " <b>\"Your BB was terrible,\"</b> SP said to LS."
        },        
        bad: {
            sent_utterance: " <b>\"Your BB was bad,\"</b> SP said to LS."
        },        
        okay: {
            sent_utterance: " <b>\"Your BB was okay,\"</b> SP said to LS."
        },
        good: {
            sent_utterance: " <b>\"Your BB was good,\"</b> SP said to LS."
        },
        amazing: {
            sent_utterance: " <b>\"Your BB was amazing,\"</b> SP said to LS."
        },
    },
    domains: {
       presentation: {
            sent_precontext: "Imagine that LS just gave a presentation, ", 
            sent_context: " LS approached SP, who had just seen LS's presentation, and asked \"How was my presentation?\"",
            sent_precontext_TP: "Imagine that TP just gave a presentation. LS didn't see it, so", 
            sent_context_TP: " LS approached SP, who had just seen TP's presentation, and asked \"How was TP's presentation?\"",
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just seen a presentation, and asked \"How was the presentation?\"",
            BB: "presentation",
	},
	   cookie: {
            sent_precontext: "Imagine that LS baked some cookies, ", 
            sent_context: " LS approached SP, who had just tasted LS's cookie, and asked \"How did my cookie taste?\"", 
            sent_precontext_TP: "Imagine that TP baked some cookies. LS didn't taste it, so", 
            sent_context_TP: " LS approached SP, who had just tasted TP's cookie, and asked \"How did TP's cookie taste?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just tasted a cookie, and asked \"How did the cookie taste?\"", 
            BB: "cookie",
	},
	   poem: {
            sent_precontext: "Imagine that LS wrote a poem, ", 
            sent_context: " LS approached SP, who had just read LS's poem, and asked \"How was my poem?\"", 
            sent_precontext_TP: "Imagine that TP wrote a poem. LS didn't read it, so", 
            sent_context_TP: " LS approached SP, who had just read TP's poem, and asked \"How was TP's poem?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just read a poem, and asked \"How was the poem?\"", 
            BB: "poem",
	},        
	   cake: {
            sent_precontext: "Imagine that LS baked a cake, ", 
            sent_context: " LS approached SP, who had just tasted LS's cake, and asked \"How did my cake taste?\"", 
            sent_precontext_TP: "Imagine that TP baked a cake. LS didn't taste it, so", 
            sent_context_TP: " LS approached SP, who had just tasted TP's cake, and asked \"How did TP's cake taste?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just tasted a cake, and asked \"How did the cake taste?\"", 
            BB: "cake",
	},
	   song: {
            sent_precontext: "Imagine that LS composed a song, ", 
            sent_context: " LS approached SP, who had just heard LS's song, and asked \"How was my song?\"", 
            sent_precontext_TP: "Imagine that TP composed a song. LS didn't hear it, so", 
            sent_context_TP: " LS approached SP, who had just heard TP's song, and asked \"How was TP's song?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just heard a song, and asked \"How was the song?\"", 
            BB: "song",
	},
	   film: {
            sent_precontext: "Imagine that LS filmed a movie, ", 
            sent_context: " LS approached SP, who had just seen LS's movie, and asked \"How was my movie?\"", 
            sent_precontext_TP: "Imagine that TP filmed a movie. LS didn't see it, so", 
            sent_context_TP: " LS approached SP, who had just seen TP's movie, and asked \"How was TP's movie?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just seen a movie, and asked \"How was the movie?\"", 
            BB: "movie",
	},
	   solo: {
            sent_precontext: "Imagine that LS played a cello solo part at a concert, ", 
            sent_context: " LS approached SP, who had just heard LS's solo, and asked \"How was my solo?\"", 
            sent_precontext_TP: "Imagine that TP played a cello solo part at a concert. LS didn't hear it, so", 
            sent_context_TP: " LS approached SP, who had just heard TP's solo, and asked \"How was TP's solo?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just heard a cello solo, and asked \"How was the solo?\"", 
            BB: "solo",
	},        
	   dance: {
            sent_precontext: "Imagine that LS gave a tap dance performance, ", 
            sent_context: " LS approached SP, who had just seen LS's dance, and asked \"How was my dance?\"", 
            sent_precontext_TP: "Imagine that TP gave a tap dance performance. LS didn't see it, so", 
            sent_context_TP: " LS approached SP, who had just seen TP's dance, and asked \"How was TP's dance?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just seen a tap dance performance, and asked \"How was the dance?\"", 
            BB: "dance",
	},   
	   painting: {
            sent_precontext: "Imagine that LS drew a painting, ", 
            sent_context: " LS approached SP, who had just seen LS's painting, and asked \"How was my painting?\"", 
            sent_precontext_TP: "Imagine that TP drew a painting. LS didn't see it, so", 
            sent_context_TP: " LS approached SP, who had just seen TP's painting, and asked \"How was TP's painting?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just seen a painting, and asked \"How was the painting?\"", 
            BB: "painting",
	}, 
	   monologue: {
            sent_precontext: "Imagine that LS gave a monologue during a school play, ", 
            sent_context: " LS approached SP, who had just heard LS's monologue and asked \"How was my monologue?\"", 
            sent_precontext_TP: "Imagine that TP gave a monologue during a school play. LS didn't hear it, so", 
            sent_context_TP: " LS approached SP, who had just heard TP's monologue, and asked \"How was TP's monologue?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just heard a monologue during a school play, and asked \"How was the monologue?\"", 
            BB: "monologue",
	},
	   app: {
            sent_precontext: "Imagine that LS designed a mobile app, ", 
            sent_context: " LS approached SP, who looked at LS's mobile app, and asked \"How was my app?\"", 
            sent_precontext_TP: "Imagine that TP designed a mobile app. LS didn't see it, so", 
            sent_context_TP: " LS approached SP, who looked at TP's mobile app, and asked \"How was TP's app?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who looked at a mobile app, and asked \"How was the app?\"", 
            BB: "app",
	},
	   review: {
            sent_precontext: "Imagine that LS wrote a review for a book, ", 
            sent_context: " LS approached SP, who had just read LS's review, and asked \"How was my review?\"", 
            sent_precontext_TP: "Imagine that TP wrote a review for a book. LS didn't read it, so", 
            sent_context_TP: " LS approached SP, who had just read TP's review, and asked \"How was TP's review?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just read a review for a book, and asked \"How was the review?\"", 
            BB: "review",
	},
	   recital: {
            sent_precontext: "Imagine that LS had a piano recital, ", 
            sent_context: " LS approached SP, who had just attended LS's recital, and asked \"How was my recital performance?\"", 
            sent_precontext_TP: "Imagine that TP had a piano recital, ", 
            sent_context_TP: " LS approached SP, who had just attended TP's recital, and asked \"How was TP's recital performance?\"", 
            sent_precontext_NI: "Imagine that", 
            sent_context_NI: " LS approached SP, who had just attended a piano recital, and asked \"How was the recital performance?\"", 
            BB: "recital performance",
	},
    },
    states: {
        terrible: {
            state: " <b>everyone thought LS's BB was terrible</b>,"        
        },
        bad: {
            state: " <b>everyone thought LS's BB was bad</b>,"        
        },
        okay: {
            state: " <b>everyone thought LS's BB was just okay</b>,"        
        },
        good: {
            state: " <b>everyone thought LS's BB was good</b>,"        
        },
        amazing: {
            state: " <b>everyone thought LS's BB was amazing</b>,"        
        },
    },
    people: {
        people1: {
            SP: speakers1[0],
            LS: speakers1[1],
        },
        people2: {
            SP: speakers2[0],
            LS: speakers2[1],
        },
        people3: {
            SP: speakers3[0],
            LS: speakers3[1],
        },
        people4: {
            SP: speakers4[0],
            LS: speakers4[1],
        },
        people5: {
            SP: speakers5[0],
            LS: speakers5[1],
        },
        people6: {
            SP: speakers6[0],
            LS: speakers6[1],
        },
        people7: {
            SP: speakers7[0],
            LS: speakers7[1],
        },
        people8: {
            SP: speakers8[0],
            LS: speakers8[1],
        },
        people9: {
            SP: speakers9[0],
            LS: speakers9[1],
        },
        people10: {
            SP: speakers10[0],
            LS: speakers10[1],
        },
        people11: {
            SP: speakers11[0],
            LS: speakers11[1],
        },
        people12: {
            SP: speakers12[0],
            LS: speakers12[1],
        },
        people13: {
            SP: speakers13[0],
            LS: speakers13[1],
        },
        people14: {
            SP: speakers14[0],
            LS: speakers14[1],
        },
        people15: {
            SP: speakers15[0],
            LS: speakers15[1],
        },
        people16: {
            SP: speakers16[0],
            LS: speakers16[1],
        },
        people17: {
            SP: speakers17[0],
            LS: speakers17[1],
        },
        people18: {
            SP: speakers18[0],
            LS: speakers18[1],
        },
        people19: {
            SP: speakers19[0],
            LS: speakers19[1],
        },
        people20: {
            SP: speakers20[0],
            LS: speakers20[1],
        },
        people21: {
            SP: speakers21[0],
            LS: speakers21[1],
        },
        people22: {
            SP: speakers22[0],
            LS: speakers22[1],
        },
        people23: {
            SP: speakers23[0],
            LS: speakers23[1],
        },
        people24: {
            SP: speakers24[0],
            LS: speakers24[1],
        },
        people25: {
            SP: speakers25[0],
            LS: speakers25[1],
        },

    }
};

function doSentSubs (sents, polite, domain, utterance, people)
{
    utterance = sents["utterances"][utterance]["sent_utterance"];
//    precontext = sents["domains"][domain]["sent_precontext"];
    if (threat == "threat") {
        precontext = sents["domains"][domain]["sent_precontext"];
        context = sents["domains"][domain]["sent_context"];
            if (state_knowledge == "known") {
        knowledge = " <b>and LS knew it</b>."
    } else if (state_knowledge == "unknown") {
        knowledge = " but had no idea what people thought about it."
    }

    } else if (threat == "no_threat") {
        precontext = sents["domains"][domain]["sent_precontext_TP"];
        context = sents["domains"][domain]["sent_context_TP"];
        if (state_knowledge == "known") {
        knowledge = " <b>and LS knew it</b>."
    } else if (state_knowledge == "unknown") {
        knowledge = ""
    }

    } else if (threat == "no_identity") {
        precontext = sents["domains"][domain]["sent_precontext_NI"];
        context = sents["domains"][domain]["sent_context_NI"];
        if (state_knowledge == "known") {
        knowledge = " <b>and LS knew it</b>."
    } else if (state_knowledge == "unknown") {
        knowledge = ""
    }

    }
//    context = sents["domains"][domain]["sent_context"];
    state = sents["states"][state]["state"]
    
    question = "Based on what SP said, how likely do you think that <b>SP's goal</b> was to be:";
    
//    if (prediction[0] == "ask") {
    if (threat == "threat") {
    question2 = "How do you think SP actually felt about LS's BB?";
    summary = "Here's what you thought SP felt about LS's BB:";
    prequestion3 = "Here's how SP <b>actually</b> felt about LS's BB:";
    } else if (threat == "no_threat") {
    question2 = "How do you think SP actually felt about TP's BB?";
    summary = "Here's what you thought SP felt about TP's BB:";
    prequestion3 = "Here's how SP <b>actually</b> felt about TP's BB:";        
    } else {
    question2 = "How do you think SP actually felt about the BB?";
    summary = "Here's what you thought SP felt about the BB:";
    prequestion3 = "Here's how SP <b>actually</b> felt about the BB:";        
    }
//    question3 = "Based on what SP said, how likely is it for you to <b>like SP</b>?";
//    } else if (prediction[0] == "like") {
//    question3 = "Based on what SP said, how likely is it for you to <b>ask for SP's opinion on your own BB</b>?";
//    question2 = "Based on what SP said, how likely is it for you to <b>like SP</b>?";
//    }    
    BB = sents["domains"][domain]["BB"]; //Item 2
    SP = sents["people"][people]["SP"]; //speaker
    LS = sents["people"][people]["LS"]; //addressee
    TP = sents["people"][people]["TP"]; //third party (target)
 
    utterance = utterance.replace("BB",BB).replace("SP",SP).replace("LS",LS);
    context = context.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS).replace("TP",TP).replace("TP",TP).replace("TP",TP);
    precontext = precontext.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS).replace("TP",TP).replace("TP",TP).replace("TP",TP);
    state = state.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    question = question.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    question2 = question2.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS).replace("TP",TP);   
    prequestion3 = prequestion3.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS).replace("TP",TP);  
    knowledge = knowledge.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    summary = summary.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS).replace("TP",TP);   

    
    return [utterance, context, state, precontext, question, question2, prequestion3, knowledge, summary];
}

var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
var allTrialOrders = allConditions[chooseCondition];
var numTrials = allTrialOrders.length;
var shuffledOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
var currentTrialNum = 0;
var trial;
var numComplete = 0;
var buyer;

//FIXME
//console.log(allConditions);
//console.log(numConditions);
//console.log(chooseCondition);
//console.log(allTrialOrders);
//console.log(numTrials);
//console.log(shuffledOrder);

showSlide("instructions");
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experiment = {
    
    data: {
    expt: expt,
    cond: cond,
    order: [],
//    formOrder: formOrder,
//    buttonOrder: buttonOrder,
    threat: threat,
    knowledge: state_knowledge,
    domain: [],
//    state: [],
    utterance: [],
    people: [],
//    context: [],
//    goal0: score[0],
//    goal1: score[1],
//    goal2: score[2],
//    goal3: score[3],
//    prediction0: prediction[0],
//    prediction1: prediction[1],
//    goalProb0: [],
//    goalProb1: [],
//    goalProb2: [],
//    stateProb: [],
    judgment: [],
//    predictedProb0: [],
//    predictedProb1: [],
    language: [],
	expt_aim: [],
	goal_thoughts: [],
	expt_gen: [],
    numTrials: numTrials
    },
    
  end: function() {	
    experiment.data.language.push(document.getElementById("homelang").value);
	experiment.data.expt_aim.push(document.getElementById("expthoughts").value);
	experiment.data.goal_thoughts.push(document.getElementById("goal_thoughts").value);
	experiment.data.expt_gen.push(document.getElementById("expcomments").value);
    showSlide("finished");
      
//    			//Decrement			
//			var xmlHttp = null;
//			xmlHttp = new XMLHttpRequest()
//			xmlHttp.open("GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
//			xmlHttp.send(null)
      
    setTimeout(function() {turk.submit(experiment.data) }, 1500);
  },
    
//  next0: function() {
//
//      var judgment = $(".rating-stars").attr("style");
//      judgment = parseInt(judgment.replace(/[^\d.]/g, ''));
//   
//      experiment.data.judgment.push(judgment);
//    
//  },
    
  next: function() {
    // Allow experiment to start if it's a turk worker OR if it's a test run
	if (window.self == window.top | turk.workerId.length > 0) {

    if (numComplete > 0) {

//      var prob0 = parseInt(document.getElementById("hiddenSliderValue0").value) / 40.00;
//      var prob1 = parseInt(document.getElementById("hiddenSliderValue1").value) / 40.00;
//      var prob2 = parseInt(document.getElementById("hiddenSliderValue2").value) / 40.00;
        
//      experiment.stateRatings[currentTrialNum] = getRadioCheckedValue(1, "state");

      experiment.data.order.push(numComplete);
      experiment.data.utterance.push(trial.utterance);
      experiment.data.domain.push(trial.domain);
//      experiment.data.state.push(trial.state);
//      experiment.data.goalProb0.push(prob0);
//      experiment.data.goalProb1.push(prob1);
      var judgment = $(".rating-stars").attr("style");
      judgment = parseInt(judgment.replace(/[^\d.]/g, ''));
   
      experiment.data.judgment.push(judgment);
   
//      clearForm(document.forms[0]);
//      clearForm(document.forms[1]);
    }
        
        
      //Clear stars
      $(".rating-stars").attr({"style":"width: 0%"});
        

    if (numComplete >= numTrials) {
    	$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    	$("#trial-num").html(numComplete);
    	$("#total-num").html(numTrials);
    	showSlide("askInfo");
    } else {
    	$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    	$("#trial-num").html(numComplete);
    	$("#total-num").html(numTrials);

    	currentTrialNum = numComplete;
    	trial = allTrialOrders[shuffledOrder[numComplete]];
        utterance = trial.utterance;
        state = trial.state;
        domain = trial.domain;
        context = trial.context;
        people = trial.people;
        sent_materials = doSentSubs(sents, state, domain, utterance, people);
      showSlide("stage");
      $("#context").html(sent_materials[3] + sent_materials[7] + sent_materials[1] + sent_materials[0]);  
      $("#question").html(sent_materials[4]);    
      
//      for (var i = 0; i <= 4; i++)
//      {         
//        $("#score" + 10*i).html(score[i]);
//      }
      $("#question2").html(sent_materials[5]);    
      $("#prequestion").html(sent_materials[6]);    
      $("#summary").html(sent_materials[8]);    
      $("#rating-stars").on("click", 
			    	function(event) {
						var selection = $("#rating-stars").val();
			});
       $(".rating-stars").attr("style","width: " +
							    state + "%");
      $("#testing").attr({"style":"width: 0%"});

      numComplete++;      
    }}
  }
}

// scripts for sliders
$("#slider0").slider({
               animate: true,
               orientation: "vertical",
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider0 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue0').attr('value', ui.value);
                   $("#slider0").css({"background":"#99D6EB"});
                   $("#slider0 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider1").slider({
               animate: true,
               orientation: "vertical",
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider1 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue1').attr('value', ui.value);
                   $("#slider1").css({"background":"#99D6EB"});
                   $("#slider1 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
