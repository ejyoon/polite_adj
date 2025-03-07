var filename = "EJY_polgrice_goals_v4" 
var condCounts = "1,5;2,5;" //Example: "1,20;2,20;3,20"

// ---------------- HELPER ------------------
var NUM_SLIDERS = 3;
var NUM_SLIDERS1 = 3;
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
var expt = "polgrice_statePos_wNeg";
var cond = "statePos"

// call the maker getter to get the cond variable 
//var xmlHttp = null;
//xmlHttp = new XMLHttpRequest();
//xmlHttp.open( "GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + condCounts +"&filename=" + filename, false );
//xmlHttp.send( null );
//var cond = xmlHttp.responseText;

var score = shuffle(["nice", "honest", "mean"]);
var prediction = shuffle(["ask", "like"])

//if (cond == 1) {
//    state_knowledge = "known";
//} else if (cond == 2) {
    var state_knowledge = "unknown";
//}

//var domains = shuffle(["poem", "cake", "cookie", "presentation", "painting", "review"]);

var domains1 = 
    shuffle(["poem", "cake", "cookie", "presentation", "song", "film", "solo", "monologue", "dance", "painting", "app", "review", "recital"]);
var domains = domains1.concat(domains1, domains1, domains1)

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
var states = states1.concat(states2, states3, states4, states5, states1, states2, states3)

var utterances1 = 
    ["yes_terrible", "yes_bad", "yes_okay","yes_good", 
     "yes_amazing","not_terrible","not_bad", "not_okay", 
     "not_good", "not_amazing"];
var utterances = utterances1.concat(utterances1, utterances1, utterances1)

var goals1 = 
    ["social", "social", "social", "social", "social", "social", "social", "social", "social", "social"];
var goals2 = 
    ["informative", "informative", "informative", "informative", "informative", "informative", "informative", "informative", "informative", "informative"];
var goals3 = 
    ["both", "both", "both", "both", "both", "both", "both", "both", "both", "both"];
var goals4 = 
    ["no_goal", "no_goal", "no_goal", "no_goal", "no_goal", "no_goal", "no_goal", "no_goal", "no_goal", "no_goal"];
var goals = goals1.concat(goals2, goals3, goals4)

var speakers_all1 = shuffle([["John","Bob",], ["Hailey", "Mika"], ["Karen", "Jenny"], ["Kyle", "James"], ["Sean", "Chris"],
                    ["Lucy", "Sarah"], ["Bill", "Tom"], ["Heather", "Grace"], ["Jake", "Kevin"], ["Ann", "Diana"],
                    ["George", "Henry"], ["Nathan", "Patrick"], ["Wendy", "Emma"], ["Stephanie", "Barbara"], ["Oliver", "Robert"],
                    ["Matt", "Larry"], ["Steven", "Zack"], ["Fiona", "Yvonne"], ["Rebecca", "Cheryl"], ["Victoria", "Jasmine"],
                    ["Albert", "Frank"], ["Greg", "Colin"], ["Ed", "Peter"], ["Molly", "Kara"], ["Justine", "Kelly"],
                    ["Jason", "Gilbert"],["Clifton", "Zane"],["Gina", "Carley"],["Michelle","Alice"],["Naomi","Priscilla"]]);
var speakers_all2 = shuffle([["John","Bob",], ["Hailey", "Mika"], ["Karen", "Jenny"], ["Kyle", "James"], ["Sean", "Chris"],
                    ["Lucy", "Sarah"], ["Bill", "Tom"], ["Heather", "Grace"], ["Jake", "Kevin"], ["Ann", "Diana"]]);

var speakers_all = speakers_all1.concat(speakers_all2)

var speakers = [];

    for (var i = 0; i < 40; i++) {
        speakers[i] = shuffle(speakers_all[i]);
    }

var allConditions = [];

for (var i = 0; i < 40; i++) {
    allConditions.push(
    {"domain": domains[i],
 "state": states[i],
 "utterance": utterances[i],
 "people": i,
 "goal": goals[i],
}
    )
}

var allConditions = shuffle([shuffle(allConditions)]);

var keys = ["SP", "LS"];
var values = [];
for (var i=0; i<40; i++) {
    values.push([speakers[i][0],speakers[i][1]])
}
var arrayOfObjects = [];

for(var i=0; i<values.length; i++){
    var obj = {};
    for(var j=0; j<values[i].length; j++){
         obj[keys[j]] = values[i][j];  
      }
    arrayOfObjects.push(obj);
}


var sents = {
    utterances: {
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
       presentation: {
            sent_precontext: "Imagine that LS just gave a presentation, ", 
            sent_context: " LS approached SP, who had just seen LS's presentation, and asked \"How was my presentation?\"",
            BB: "presentation",
	},
	   cookie: {
            sent_precontext: "Imagine that LS baked some cookies, ", 
            sent_context: " LS approached SP, who had just tasted LS's cookie, and asked \"How did my cookie taste?\"", 
            BB: "cookie",
	},
	   poem: {
            sent_precontext: "Imagine that LS wrote a poem, ", 
            sent_context: " LS approached SP, who had just read LS's poem, and asked \"How was my poem?\"", 
            BB: "poem",
	},        
	   cake: {
            sent_precontext: "Imagine that LS baked a cake, ", 
            sent_context: " LS approached SP, who had just tasted LS's cake, and asked \"How did my cake taste?\"", 
            BB: "cake",
	},
	   song: {
            sent_precontext: "Imagine that LS composed a song, ", 
            sent_context: " LS approached SP, who had just heard LS's song, and asked \"How was my song?\"", 
            BB: "song",
	},
	   film: {
            sent_precontext: "Imagine that LS filmed a movie, ", 
            sent_context: " LS approached SP, who had just seen LS's movie, and asked \"How was my movie?\"", 
            BB: "movie",
	},
	   solo: {
            sent_precontext: "Imagine that LS played a cello solo part at a concert, ", 
            sent_context: " LS approached SP, who had just heard LS's solo, and asked \"How was my solo?\"", 
            BB: "solo",
	},        
	   dance: {
            sent_precontext: "Imagine that LS gave a tap dance performance, ", 
            sent_context: " LS approached SP, who had just seen LS's dance, and asked \"How was my dance?\"", 
            BB: "dance",
	},   
	   painting: {
            sent_precontext: "Imagine that LS drew a painting, ", 
            sent_context: " LS approached SP, who had just seen LS's painting, and asked \"How was my painting?\"", 
            BB: "painting",
	}, 
	   monologue: {
            sent_precontext: "Imagine that LS gave a monologue during a school play, ", 
            sent_context: " LS approached SP, who had just heard LS's monologue, and asked \"How was my monologue?\"", 
            BB: "monologue",
	},
	   app: {
            sent_precontext: "Imagine that LS designed a mobile app, ", 
            sent_context: " LS approached SP, who looked at LS's mobile app, and asked \"How was my app?\"", 
            BB: "app",
	},
	   review: {
            sent_precontext: "Imagine that LS wrote a review for a book, ", 
            sent_context: " LS approached SP, who had just read LS's review, and asked \"How was my review?\"", 
            BB: "review",
	},
	   recital: {
            sent_precontext: "Imagine that LS had a piano recital, ", 
            sent_context: " LS approached SP, who had just attended LS's recital, and asked \"How was my recital performance?\"", 
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
    goals: {
        social: {
            goal: " <b>SP wanted to make LS feel good: "
        },
        informative: {
            goal: " <b>SP wanted to give as accurate and informative feedback as possible: "            
        },
        both: {
            goal: " <b>SP wanted to make LS feel good and give accurate and informative feedback: "            
        },
        no_goal: {
            goal: " <b>"            
        }  

    },

    people: 
    arrayOfObjects
};

function doSentSubs (sents, polite, domain, utterance, people, goal)
{
    utterance = sents["utterances"][utterance]["sent_utterance"];
    precontext = sents["domains"][domain]["sent_precontext"];
    context = sents["domains"][domain]["sent_context"];
    state = sents["states"][state]["state"]
    goal = sents["goals"][goal]["goal"]
    if (state_knowledge == "known") {
        knowledge = " <b>and LS knew it</b>."
    } else if (state_knowledge == "unknown") {
        knowledge = " but had no idea what people thought about it."
    }
    
    question = "Based on what SP said, how likely do you think that <b>SP's goal</b> was to be:";
    
//    if (prediction[0] == "ask") {
    question2 = "How do you think SP <b>actually</b> felt about LS's BB?";
    question3 = "Based on what SP said, how likely is it for you to <b>like SP</b>?";
//    } else if (prediction[0] == "like") {
//    question3 = "Based on what SP said, how likely is it for you to <b>ask for SP's opinion on your own BB</b>?";
//    question2 = "Based on what SP said, how likely is it for you to <b>like SP</b>?";
//    }    
    BB = sents["domains"][domain]["BB"]; //Item 2
    SP = sents["people"][people]["SP"]; //speaker
    LS = sents["people"][people]["LS"]; //addressee
 
    utterance = utterance.replace("BB",BB).replace("SP",SP).replace("LS",LS);
    context = context.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    precontext = precontext.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    state = state.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    question = question.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    question2 = question2.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    question3 = question3.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    knowledge = knowledge.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    goal = goal.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   

    
    return [utterance, context, state, precontext, question, question2, question3, knowledge, goal];
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
//    state: [],
    utterance: [],
    people: [],
    goal: [],
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
    
  next: function() {
    // Allow experiment to start if it's a turk worker OR if it's a test run
	if (window.self == window.top | turk.workerId.length > 0) {

    if (numComplete > 0) {

      var prob0 = parseInt(document.getElementById("hiddenSliderValue0").value) / 40.00;
      var prob1 = parseInt(document.getElementById("hiddenSliderValue1").value) / 40.00;
      var prob2 = parseInt(document.getElementById("hiddenSliderValue2").value) / 40.00;
//      var prob3 = parseInt(document.getElementById("hiddenSliderValue3").value) / 40.00;
//      var prob3 = parseInt(document.getElementById("hiddenSliderValue3").value) / 40.00;
//      var prob4 = parseInt(document.getElementById("hiddenSliderValue4").value) / 40.00;

//      var prob3 = getRadioCheckedValue(1, "state");
//      experiment.stateRatings[currentTrialNum] = getRadioCheckedValue(1, "state");    
      var judgment = $(".rating-stars").attr("style");
      judgment = parseInt(judgment.replace(/[^\d.]/g, ''));

        
      experiment.data.order.push(numComplete);
      experiment.data.utterance.push(trial.utterance);
      experiment.data.domain.push(trial.domain);
//      experiment.data.state.push(trial.state);
//      experiment.data.goalProb0.push(prob0);
//      experiment.data.goalProb1.push(prob1);
//      experiment.data.goalProb2.push(prob2);
//      experiment.data.stateProb.push(prob3);
//      experiment.data.predictedProb0.push(prob3);
//      experiment.data.predictedProb1.push(prob4);
      experiment.data.goal.push(goal);
      experiment.data.judgment.push(judgment);
      
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
        goal = trial.goal;
        sent_materials = doSentSubs(sents, state, domain, utterance, people, goal);
      showSlide("stage");
      $("#context").html(sent_materials[3] + sent_materials[7] + sent_materials[1] + sent_materials[8] + sent_materials[0]);  
      $("#question").html(sent_materials[4]); 
      $("#rating-stars").on("click", 
			    	function(event) {
						var selection = $("#rating-stars").val();
			});
        
      
      for (var i = 0; i <= 4; i++)
      {         
        $("#score" + 10*i).html(score[i]);
      }
      $("#question2").html(sent_materials[5]);    
      $("#question3").html(sent_materials[6]);    
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


