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
// var cond = random(3)+1;
var expt = "polgrice_L2_G_2goals";
//var cond = random(2)+1;
//var cond = 1;
var cond = "L2_G_2goals"

// call the maker getter to get the cond variable 
//var xmlHttp = null;
//xmlHttp = new XMLHttpRequest();
//xmlHttp.open( "GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + condCounts +"&filename=" + filename, false );
//xmlHttp.send( null );
//var cond = xmlHttp.responseText;

var score = shuffle(["nice", "honest"]);
var prediction = shuffle(["ask", "like"])

//if (cond == 1) {
//    state_knowledge = "known";
//} else if (cond == 2) {
    var state_knowledge = "unknown";
//}

//var domains = shuffle(["poem", "cake", "cookie", "presentation", "painting", "review"]);

var domains0 = shuffle(["practice1", "practice2", "practice3"])
var domains1 = 
    shuffle(["poem", "cake", "cookie", "presentation", "song", "film", "solo", "monologue", "dance", "painting", "app", "review", "recital"]);
var domains = domains0.concat(domains1, domains1, domains1)

//var states = 
//    ["terrible", "bad", "terrible", "bad", "terrible", "bad"];
//
//var states1 = 
//    ["TERRIBLE", "BAD", "OKAY", "GOOD", "AMAZING"];
//var states2 = 
//    ["BAD", "OKAY", "GOOD", "AMAZING","TERRIBLE"];
//var states3 = 
//    ["OKAY", "GOOD", "AMAZING","TERRIBLE","BAD"];
//var states4 = 
//    ["GOOD", "AMAZING","TERRIBLE","BAD","OKAY"];
//var states5 = 
//    ["AMAZING","TERRIBLE","BAD","OKAY","GOOD"];
var states_pr = ["heart2", "heart1", "heart0"];
var states0 = 
    ["heart0", "heart1", "heart2", "heart3"];
var states1 = 
    ["heart1", "heart2", "heart3", "heart0"];
var states2 = 
    ["heart2", "heart3", "heart0","heart1"];
var states3 = 
    ["heart3","heart0", "heart1", "heart2"];
var states = states_pr.concat(states0, states1, states2, states3, states0, states1, states2, states3)

var utterances0 = ["practice1", "practice2", "practice3"];
var utterances1 = 
    ["yes_terrible", "not_bad", 
     "not_good", "yes_amazing","not_terrible", 
     "yes_bad", "yes_good", 
     "not_amazing"];
var utterances = utterances0.concat(utterances1, utterances1, utterances1, utterances1)

var goals0 = [shuffle(["nice", "honest"])];
var goals = Array(35).fill(goals0[0], goals0[1])

var allConditions = [];

for (var i = 0; i < 35; i++) {
    allConditions.push(
    {"domain": domains[i],
 "state": states[i],
 "utterance": utterances[i],
 "people": "people" + (i+1),
 "goal1": goals[i][0],
 "goal2": goals[i][1],
}
    )
}

//var allConditions = shuffle([shuffle(allConditions)]);
var allConditions = [allConditions];

speakers = shuffle([["John","Bob",], ["Hailey", "Mika"], ["Karen", "Jenny"], ["Kyle", "James"], ["Sean", "Chris"],
                    ["Lucy", "Sarah"], ["Bill", "Tom"], ["Heather", "Grace"], ["Jake", "Kevin"], ["Ann", "Diana"],
                    ["George", "Henry"], ["Nathan", "Patrick"], ["Wendy", "Emma"], ["Stephanie", "Barbara"], ["Oliver", "Robert"],
                    ["Matt", "Larry"], ["Steven", "Zack"], ["Fiona", "Yvonne"], ["Rebecca", "Cheryl"], ["Victoria", "Jasmine"],
                    ["Albert", "Frank"], ["Greg", "Colin"], ["Ed", "Peter"], ["Molly", "Kara"], ["Justine", "Kelly"]]);
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
    states: {
        heart0: {
            state: "0"
        },
        heart1: {
            state: "33.33"
        },
        heart2: {
            state: "66.67"
        },
        heart3: {
            state: "100"
        }

    },
    utterances: {
        practice1: {
            sent_utterance: " Did SP think the BB deserved 2 out of 3 hearts?"
        },        
        practice2: {
            sent_utterance: " Did SP think the BB deserved 3 out of 3 hearts?"
        },        
        practice3: {
            sent_utterance: " Did SP think the BB deserved 0 out of 3 hearts?"
        },        
        yes_terrible: {
            sent_utterance: " <b>\"It was terrible,\"</b> SP said."
        },        
        yes_bad: {
            sent_utterance: " <b>\"It was bad,\"</b> SP said."
        },        
        yes_okay: {
            sent_utterance: " <b>\"It was okay,\"</b> SP said."
        },        
        yes_good: {
            sent_utterance: " <b>\"It was good,\"</b> SP said."
        },        
        yes_amazing: {
            sent_utterance: " <b>\"It was amazing,\"</b> SP said."
        },
        not_terrible: {
            sent_utterance: " <b>\"It wasn't terrible,\"</b> SP said."
        },        
        not_bad: {
            sent_utterance: " <b>\"It wasn't bad,\"</b> SP said."
        },        
        not_okay: {
            sent_utterance: " <b>\"It wasn't okay,\"</b> SP said."
        },        
        not_good: {
            sent_utterance: " <b>\"It wasn't good,\"</b> SP said."
        },        
        not_amazing: {
            sent_utterance: " <b>\"It wasn't amazing,\"</b> SP said."
        },
    },
    
    
    domains: {
        practice1: {
            sent_precontext: "Imagine that SP just saw a presentation.", 
            sent_context: "Here's how SP felt about the presentation, on a scale of 0 to 3 hearts:",
             sent_context2: " SP saw the presentation.",
           BB: "presentation",
	},
 	   practice2: {
            sent_precontext: "Imagine that SP tasted some cookies.", 
            sent_context: "Here's how SP felt about the cookies, on a scale of 0 to 3 hearts:", 
            sent_context2: " SP tasted the cookies.",
          BB: "cookie",
	},
	   practice3: {
            sent_precontext: "Imagine that SP read a poem.", 
            sent_context: "Here's how SP felt about the poem, on a scale of 0 to 3 hearts:", 
            sent_context2: " SP read the poem.",
            BB: "poem"}
        ,
      presentation: {
            sent_precontext: "Imagine that LS just gave a presentation, ", 
            sent_context: " LS approached SP and asked \"How was my presentation?\"",
            sent_context2: " SP saw the presentation.",
            BB: "presentation",
	},
	   cookie: {
            sent_precontext: "Imagine that LS baked some cookies, ", 
            sent_context: " LS approached SP and asked \"How did my cookie taste?\"", 
            sent_context2: " SP tasted the cookie.",
            BB: "cookie",
	},
	   poem: {
            sent_precontext: "Imagine that LS wrote a poem, ", 
            sent_context: " LS approached SP and asked \"How was my poem?\"", 
            sent_context2: " SP read the poem.",
            BB: "poem",
	},        
	   cake: {
            sent_precontext: "Imagine that LS baked a cake, ", 
            sent_context: " LS approached SP and asked \"How did my cake taste?\"", 
            sent_context2: " SP tasted the cake.",
            BB: "cake",
	},
	   song: {
            sent_precontext: "Imagine that LS composed a song, ", 
            sent_context: " LS approached SP, who had just heard LS's song, and asked \"How was my song?\"", 
            sent_context2: " SP heard the song.",
            BB: "song",
	},
	   film: {
            sent_precontext: "Imagine that LS filmed a movie, ", 
            sent_context: " LS approached SP and asked \"How was my movie?\"", 
            sent_context2: " SP saw the movie.",
            BB: "movie",
	},
	   solo: {
            sent_precontext: "Imagine that LS played a cello solo part at a concert, ", 
            sent_context: " LS approached SP and asked \"How was my solo?\"", 
            sent_context2: " SP heard the solo.",
            BB: "solo",
	},        
	   dance: {
            sent_precontext: "Imagine that LS gave a tap dance performance, ", 
            sent_context: " LS approached SP and asked \"How was my dance?\"", 
            sent_context2: " SP saw the dance.",
            BB: "dance",
	},   
	   painting: {
            sent_precontext: "Imagine that LS drew a painting, ", 
            sent_context: " LS approached SP and asked \"How was my painting?\"", 
            sent_context2: " SP saw the painting.",
            BB: "painting",
	}, 
	   monologue: {
            sent_precontext: "Imagine that LS gave a monologue during a school play, ", 
            sent_context: " LS approached SP and asked \"How was my monologue?\"", 
            sent_context2: " SP heard the monologue.",
            BB: "monologue",
	},
	   app: {
            sent_precontext: "Imagine that LS designed a mobile app, ", 
            sent_context: " LS approached SP and asked \"How was my app?\"", 
            sent_context2: " SP saw the app.",
            BB: "app",
	},
	   review: {
            sent_precontext: "Imagine that LS wrote a review for a book, ", 
            sent_context: " LS approached SP and asked \"How was my review?\"", 
            sent_context2: " SP read the review.",
            BB: "review",
	},
	   recital: {
            sent_precontext: "Imagine that LS had a piano recital, ", 
            sent_context: " LS approached SP and asked \"How was my performance?\"", 
            sent_context2: " SP attended the recital.",
            BB: "performance",
	},
    },
//    states: {
//        terrible: {
//            state: " <b>everyone thought LS's BB was terrible</b>,"        
//        },
//        bad: {
//            state: " <b>everyone thought LS's BB was bad</b>,"        
//        },
//        okay: {
//            state: " <b>everyone thought LS's BB was just okay</b>,"        
//        },
//        good: {
//            state: " <b>everyone thought LS's BB was good</b>,"        
//        },
//        amazing: {
//            state: " <b>everyone thought LS's BB was amazing</b>,"        
//        },
//    },
    goals: {
        nice: {
            goal: "make LS feel good"
        },
        honest: {
            goal: "give informative feedback"            
        } 
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

function doSentSubs (sents, polite, domain, utterance, people, goal1, goal2)
{
    utterance = sents["utterances"][utterance]["sent_utterance"];
    precontext = sents["domains"][domain]["sent_precontext"];
    context = sents["domains"][domain]["sent_context"];
    context2 = sents["domains"][domain]["sent_context2"];
    state = sents["states"][state]["state"]
    goal1 = sents["goals"][goal1]["goal"]
    goal2 = sents["goals"][goal2]["goal"]
    if (state_knowledge == "known") {
        knowledge = " <b>and LS knew it</b>."
    } else if (state_knowledge == "unknown") {
        knowledge = " but LS had no idea what people thought about it."
    }

    feeling = "Here's how SP <b>actually</b> felt about LS's BB:"
    question = "Based on what SP said, how likely do you think that <b>SP's goal</b> was to be:"     
    question2 = "How would SP <b>actually</b> rate LS's BB? <br>Please select the number of stars you think SP would actually give:";
    question3 = "Based on what SP said, how likely is it for you to <b>like SP</b>?";
    BB = sents["domains"][domain]["BB"]; //Item 2
    SP = sents["people"][people]["SP"]; //speaker
    LS = sents["people"][people]["LS"]; //addressee
 
    utterance = utterance.replace("BB",BB).replace("SP",SP).replace("LS",LS);
    context = context.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    context2 = context2.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    precontext = precontext.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    state = state.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    question = question.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    question2 = question2.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    question3 = question3.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    knowledge = knowledge.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    goal1 = goal1.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    goal2 = goal2.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    feeling = feeling.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   

    
    return [utterance, context, state, precontext, question, question2, question3, knowledge, goal1, goal2, feeling, context2];
}

var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
var allTrialOrders = allConditions[chooseCondition];
var numTrials = allTrialOrders.length;
var shuffledOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
shuffledOrder = shuffledOrder.filter(item => ![0, 1, 2].includes(item))
var currentTrialNum = 0;
var trial;
var numComplete = 0;
var buyer;

showSlide("instructions");
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experiment = {
    
    data: {
    expt: expt,
//    cond: cond,
    order: [],
    knowledge: state_knowledge,
    domain: [],
    state: [],
    utterance: [],
    people: [],
//    goal: [],
//    context: [],
    goal0: goals0[0],
    goal1: goals0[1],
//    goal2: score[2],
//    goal3: score[3],
//    prediction0: prediction[0],
//    prediction1: prediction[1],
    goalProb0: [],
    goalProb1: [],
//    goalProb2: [],
    judgment: [],
//    stateProb: [],
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
    
   practice: function() {
    // Allow experiment to start if it's a turk worker OR if it's a test run
	if (window.self == window.top | turk.workerId.length > 0) {

    if (numComplete > 0) {
      var judgment = getRadioCheckedValue(0, "judgment");
        
      experiment.data.order.push(numComplete);
      experiment.data.utterance.push(trial.utterance);
      experiment.data.domain.push(trial.domain);
      experiment.data.state.push(trial.state);
      experiment.data.judgment.push(judgment);

      clearForm(document.forms[0]);
      clearForm(document.forms[1]);

      //Clear stars
      $(".rating-stars").attr({"style":"width: 0%"});
        
    }
    if (numComplete >= 3) {
    	$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    	$("#trial-num").html(numComplete);
    	$("#total-num").html(numTrials);
    	experiment.next();
    } else {
    	$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    	$("#trial-num").html(numComplete);
    	$("#total-num").html(numTrials);
    	currentTrialNum = numComplete;
    	trial = allTrialOrders[numComplete];
//    	trial = allTrialOrders[shuffledOrder[numComplete]];
        utterance = trial.utterance;
        state = trial.state;
        domain = trial.domain;
        context = trial.context;
        people = trial.people;
        goal1 = trial.goal1;
        goal2 = trial.goal2;
        sent_materials = doSentSubs(sents, state, domain, utterance, people, goal1, goal2);
      showSlide("practice");
//      $("#context").html(sent_materials[3] + sent_materials[1]);  
//      $("#question").html(sent_materials[8]); 
      $(".rating-stars").attr("style","width: " +
							    state + "%");

        //      $("#rating-stars").on("click", 
//			    	function(event) {
//						var selection = $("#rating-stars").val();
//			});
        
      
      for (var i = 0; i <= 4; i++)
      {         
        $("#score" + 10*i).html(score[i]);
      }
      $("#question2_pr").html(sent_materials[3] + "<br><br>" + sent_materials[1]);    
      $("#question3_pr").html(sent_materials[0]);    
      numComplete++;      
    }}
  },
 
    
  next: function() {
    // Allow experiment to start if it's a turk worker OR if it's a test run
	if (window.self == window.top | turk.workerId.length > 0) {

    if (numComplete > 0) {

      var prob0 = parseInt(document.getElementById("hiddenSliderValue0").value) / 40.00;
      var prob1 = parseInt(document.getElementById("hiddenSliderValue1").value) / 40.00;
        
      experiment.data.order.push(numComplete);
      experiment.data.utterance.push(trial.utterance);
      experiment.data.domain.push(trial.domain);
      experiment.data.state.push(trial.state);
      experiment.data.goalProb0.push(prob0);
      experiment.data.goalProb1.push(prob1);
      
      clearForm(document.forms[0]);
      clearForm(document.forms[1]);

      //Clear stars
      $(".rating-stars").attr({"style":"width: 0%"});
        
    }
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
        goal1 = trial.goal1;
        goal2 = trial.goal2;
        sent_materials = doSentSubs(sents, state, domain, utterance, people, goal1, goal2);
      showSlide("stage");
      $("#context").html(sent_materials[3] + sent_materials[7] + sent_materials[1]);  
      $("#context2").html(sent_materials[0]);  
      $("#question").html(sent_materials[4]); 
      $("#question2").html(sent_materials[9]); 
      $(".rating-stars").attr("style","width: " +
							    state + "%");

      
      $("#score0").html(sent_materials[8]);
      $("#score10").html(sent_materials[9]);
      $("#question2").html(sent_materials[10]);    
      $("#question3").html(sent_materials[0]);    
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
$("#slider2").slider({
               animate: true,
               orientation: "vertical",
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider2 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue2').attr('value', ui.value);
                   $("#slider2").css({"background":"#99D6EB"});
                   $("#slider2 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
//$("#slider3").slider({
//               animate: true,
//               orientation: "vertical",
//               max: 40 , min: 0, step: 1, value: 20,
//               slide: function( event, ui ) {
//                   $("#slider3 .ui-slider-handle").css({
//                      "background":"#E0F5FF",
//                      "border-color": "#001F29"
//                   });
//               },
//               change: function( event, ui ) {
//                   $('#hiddenSliderValue3').attr('value', ui.value);
//                   $("#slider3").css({"background":"#99D6EB"});
//                   $("#slider3 .ui-slider-handle").css({
//                     "background":"#667D94",
//                     "border-color": "#001F29" });
//               }});

$("#slider3").slider({
               animate: true,
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider3 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue3').attr('value', ui.value);
                   $("#slider3").css({"background":"#99D6EB"});
                   $("#slider3 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});

$("#slider4").slider({
               animate: true,
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider4 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue4').attr('value', ui.value);
                   $("#slider4").css({"background":"#99D6EB"});
                   $("#slider4 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});


