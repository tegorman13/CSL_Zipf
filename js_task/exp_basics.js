

check = ['./audio/elephant.mp3'];

uncertain = ['assets/uncertain.png'];


var conditOrder = [1,2,3];
shuffle(conditOrder)


var condit1=conditOrder[0]
var condit2=conditOrder[1]
var condit3=conditOrder[2]


//condit=3;
var condition_p1 = condit1==1? ("Zipf") : (condit1 === 2? "Unf" : "mixed");
var condition_p2 = condit2==1? ("Zipf") : (condit2 === 2? "Unf" : "mixed");
var condition_p3 = condit3==1? ("Zipf") : (condit3 === 2? "Unf" : "mixed");


var sound1_onset = 300;
var sound_interval=2200;
var delay_response=100;
var test_sound_start = 200;
var test_response_start = 1000;






// var sound1_onset = 100;
// var sound_interval=200;
// var delay_response=0;
// var test_sound_start = 0;
// var test_response_start = 0;



var getUrlParameter = function getUrlParameter(sParam) {
    		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    				sURLVariables = sPageURL.split('&'),
    				sParameterName,
    				i;

    		for (i = 0; i < sURLVariables.length; i++) {
    				sParameterName = sURLVariables[i].split('=');

    				if (sParameterName[0] === sParam) {
    						return sParameterName[1] === undefined ? true : sParameterName[1];
    				}
    		}
    };

var SONAID = getUrlParameter('sonaid');

var subjID = SONAID;



if (subjID===undefined) {subjID = jsPsych.randomization.randomID(8)}; //if ID isn't read in, best to give it a random value
if (Math.floor(Math.random() * 2) == 0) {categorizationRule = "horizontal"} else {categorizationRule = "vertical"};



var canvas_width_max=1000;
var canvas_height_max=900;


canvas_width = window.innerWidth * window.devicePixelRatio;
canvas_height = window.innerHeight * window.devicePixelRatio;

if (canvas_width>canvas_width_max)
{
  canvas_width=canvas_width_max;
}

if (canvas_height>canvas_height_max)
{
  canvas_height=canvas_height_max;
}


aspect_ratio = canvas_width / canvas_height;
if (aspect_ratio > 1) scale_ratio = canvas_height / canvas_height_max;
else scale_ratio = canvas_width / canvas_width_max;
scale_ratio_test=scale_ratio;
if (window.innerWidth<900){
scale_ratio_test=scale_ratio*.5;
}

scale_ratio_test=scale_ratio*.5;






today = new Date();
dd = today.getDate();
mm = today.getMonth()+1; //January is 0!
yyyy = today.getFullYear();
if(dd<10) {
   dd = '0'+dd
}
if(mm<10) {
   mm = '0'+mm
}
today = mm + '/' + dd + '/' + yyyy;



var expName = "Multimodal Word Learning"

var studyTopic = "language learning";
var studyPurpose = "to better understand how people acquire linguistic labels";
var taskDescription = "learn to associate new words with familiar objects";
var debriefDescription = "This study is investigating how people learn category labels. Specifically whether differences in item frequency influence category label acquisition."; //Full sentence
var investigatorName ="Thomas Gorman";
var departmentName ="Department of Psychological and Brain Sciences";
var institutionName ="Indiana University";

function indenter(nSpaces){
  var out = [];
  for (i = 0; i < nSpaces; i++){
    out += "&nbsp;"};
  return out};

var indention = 25;   //spaces
var indent = indenter(indention);

var keyAdvance =          "<p><i>Press the spacebar to advance.</i></p>";
var buttonAdvance =       "Make your response and click the <i>SUBMIT ANSWERS</i> button to continue.";
var noBrowserControl =    "<i>Note: Browser controls will not work during this task. Clicking BACKWARD or REFRESH in the browser controls will <u>reset the entire task</u>.</i>";
var transitionDelay = 100;


var contactGorman =
              indent + "<i>Thomas Gorman <br>"+
              indent + "Department of Psychological and Brain Sciences, Indiana University<br>"+
              indent + "1101 East 10th Street, Bloomington, IN 47405<br>"+
              indent + "tegorman at indiana dot edu</i></p>";

var contactInvestigator = contactGorman;


var invitation =
             ["<div style='text-align:left'>You are invited to participate in a research study on "+studyTopic+", conducted by "+ investigatorName +" in the "+ departmentName + " at "+ institutionName +". Please begin by reading the following consent form<br><br>"+
             noBrowserControl + "<br><br></div>"
             ];



 var debrief =
              ["<div style='text-align:left'>"+
               "<b>THANK YOU</b><br>" +
               "Thank you for participating in our study. <b> You should receive credit within 2 days. </b> " + debriefDescription + " If you have questions concerning this study you may contact the lead investigator:<br><br>" +
               contactInvestigator +
               "<p><b><i>Press button below to complete experiment.</i></b></p><br><br> </div>"];
               // "<p><i>Press any key to receive the HIT code.</i></p>"];

var consentForm =
          ["<div id='consent' style='text-align:left'>"+
            "<p >Study #0808000094</p>"+
            "<b>INDIANA UNIVERSITY<br></b>"+
            "<b>INFORMED CONSENT STATEMENT<br></b>"+
            "<b>Multimodal Word Learning – Cross-Situational Learning in Adults<br></b>"+

                "<p>You are invited to participate in a research study of language learning. We are interested in how people learn object categories and object names. We are mainly concerned with how humans learn to associate objects with object names. We are not interested in the particular behaviors of particular individuals.</p>"+

            "<p><b>INFORMATION</b><br>"+
                "<p>The entire study will last up to 60 minutes. You will be asked to watch some videos or pictures and hear some words. You will be asked to learn which word goes with which object you saw in the visual stimuli. We will test your performance during or after the study. You may be videotaped in this study.</p>"+
                "<p>During this experiment, your eye movements may be automatically tracked by an eye- tracker. The eye tracker helps us determine what you are paying attention to over the course of the experiment.</p>"+


            "<p><b>Risks</b><br>"+
                "There is a risk of loss of confidentiality and this is minimized by the investigator as outlined in the confidentiality section.</p>"+
            "<p><b>BENEFITS</b><br>"+
                "The findings will give us more information about how people link words to objects and object categories.</p>"+

            "<p><b>NUMBER OF PEOPLE TAKING PART IN THE STUDY</b><br>"+
                "If you agree to participate, you will be one of approximately 1,500 people who will be participating in this research study. </p>"+
            "<p><b>CONFIDENTIALITY</b><br>"+
                "All information collected in this study will be kept confidential. Subjects will be referred to by code numbers. Data will be kept in a locked cabinet in a locked laboratory. The data collected from you will be made available only to trained experimenters conducting the study and specific organizations that may inspect or copy your research data for quality assurance, such as the IU Institutional Review Board or its designees, the Office for Human Research Protections (OHRP), the National Science Foundation, or the National Institutes of Health. Digital records will be kept indefinitely as endorsed by the National Institutes of Health. Data, with no links to your identity, will be kept indefinitely. No references will be made in oral or written reports that could link you to this study. </p>"+

                "For the protection of your privacy, this research is covered by a Certificate of Confidentiality from the National Institutes of Health. The researchers may not disclose or use any information, documents, or specimens that could identify you in any civil, criminal, administrative, legislative,or other legal proceeding, unless you consent to it. Information, documents, or specimens protected by this Certificate may be disclosed to someone who is not connected with the research:</p>"+

                  "(1) If there is a federal, state, or local law that requires disclosure (such as to report child abuse or communicable diseases);</p>"+
                  "(2) if it is used for other scientific research in a way that is allowed by the federal regulations that protect research subjects</p>"+
                  "(3) for the purpose of auditing or program evaluation by the government or funding agency</p>"+

                "<p>You should understand that a Certificate of Confidentiality does not prevent you from voluntarily releasing information about yourself. If you want your research information released to an insurer, medical care provider, or any other person not connected with the research, you must provide consent to allow the researchers to release it.</p>"+

            "<p><b>FUTURE USE</b><br>"+
               "Information collected from you for this study may be used for future research studies or shared with other researchers for future research. If this happens, information which could identify you will be removed before any information are shared. Since identifying information will be removed, we will not ask for your additional consent.</p>"+
            "<p><b>COMPENSATION</b><br>"+
                "For participating in this study, you will receive 0.5 for every 30 minutes of participation. If you withdraw from the study prior to completion, you will still receive the course credit. </p>"+
            "<p><b>ALTERNATIVES TO TAKING PART IN THIS STUDY</b><br>"+
               "If you do not wish to begin this study or feel uncomfortable with the described procedure for any reason, you may either choose to sign up for another study being offered by a different lab within the psychology department or contact your course instructor about finding an alternative way to go about receiving this credit. Your course instructor must provide you with an alternative means of earning credit if you do not wish to participate in any form of research. </p>"+
            "<p><b>CONTACT</b><br>"+
                "If you have any questions about the study or the procedures, you may contact the researcher, <b>Chen Yu, at Indiana University, Department of Psychology, 1101 East 10th Street, Bloomington, IN 47405, 812-856-1920, or email chenyu@indiana.edu.</b></p>"+
                "<p>If you feel you have not been treated according to the descriptions in this form, or your rights as a participant in research have been violated during the course of this project, you may contact the office for the Indiana University Human Subjects Committee, Carmichael Center 203, 530 E. Kirkwood Ave., Bloomington, IN 47408, 812/856-4242, by email at irb@iu.edu </p>"+


            "<p><b>PARTICIPATION</b><br>"+
               "Your participation in this study is voluntary. You may choose not to take part or may leave the study at any time. Leaving the study will not result in any penalty or loss of benefits to which you are entitled. Your decision whether or not to participate in this study will not affect your current or future relations with the investigator(s). If you withdraw from the study before data collection is completed, your data will be returned to you or destroyed.</p>"+
            "<p><b>CONSENT:</b><br>"+
                "I have read and understand the above information. I have received a copy of this form. I have had all my questions answered to my satisfaction. I agree to take part in this study.</p>"+
                "By checking below, you acknowledge that you have read and understand the above information, the you are 18 years of age or older, and give your consent to participate in our internet-based study.</p>"+
                "<p><input type='checkbox' id='consent_checkbox'><i><u><b>I agree to take part in this study.</i></u></b></p>"+

                "<p>Consent Form Date: January 8, 2019</p>"+
                "<p>Print this page if you want a copy for your records.</p>"+
            "</div>"]


           var consentVoluntary =
                         ["<p><b>VOLUNTARY NATURE OF STUDY</b></p>" +
                          "<p>Taking part in this study is voluntary. You may choose not to take part or may leave the study at any time.<br> You may withdraw by closing your web browser.</p><br><br>"
                         ];


var pre_audio_test_text = 'In this next section you will hear a word.Please make sure your audio is turned on so that you can hear it.</b></p><p>Select the word you heard among the available options. Press any key to proceed to sound check'

          var consent_block = {
                        type:   "instructions",
                        pages:    [invitation,consentForm,consentVoluntary,pre_audio_test_text],//invitation,consentForm,consentVoluntary,
                        show_clickable_nav: true,
                        timing_post_trial: transitionDelay
            };



    var fixation1 = {
            type: 'html-button-response',
            stimulus: '<div style="font-size:60px;">+</div>',
            choices: [],
            button_html: [],
            trial_duration: 250,
            data:{ subjectID:subjID,phase:1,assignedCond:condition_p1,stage:'train1',day:today},
      }
      var fixation2 = {
              type: 'html-button-response',
              stimulus: '<div style="font-size:60px;">+</div>',
              choices: [],
              button_html: [],
              trial_duration: 250,
              data:{ subjectID:subjID,phase:2,assignedCond:condition_p2,stage:'train2',day:today},
        }
        var fixation3 = {
                type: 'html-button-response',
                stimulus: '<div style="font-size:60px;">+</div>',
                choices: [],
                button_html: [],
                trial_duration: 250,
                data:{ subjectID:subjID,phase:3,assignedCond:condition_p3,stage:'train3',day:today},
          }



            var firstTrain =  'For the 1st phase of the experiment, you will see 2 images appear on the screen, and also hear 2 sounds played in random order. Pay attention to the images and sounds, and after the 2nd sound plays, click next to continue.'


              var trainPrompt = {
                obj_type: 'text',
                content:'Observe the stimuli, then press the spacebar to move to the next trial',
                font:"20px Arial",
                startX: canvas_width*(1/2), // location in the canvas
                startY:canvas_height/10,

              };




          // plays elephant - correct button press is "1"

              // var pre_audio_test_text = {
              //           type: 'html-button-response',
              //           stimulus: `
              //           <h1>Sound Check</h1>
              //           <p>In this next section you'll hear a word.</p><p><b>Please make sure your audio is turned on so that you can hear it.</b></p><p>Select the word you heard among the available options</p><p>Press any key to proceed to sound check</p>`,
              //           choices: ['Continue']
              //     }

                  var pre_audio_test_text = 'In this next section you will hear a word.Please make sure your audio is turned on so that you can hear it.</b></p><p>Select the word you heard among the available options. Press any key to proceed to sound check'


                  var audio_check1 = {
                              type: 'audio-button-response-custom',
                              stimulus: check[0],
                              choices: ['monkey', 'elephant', "tornado", "strawberry", "book", "car"],
                              prompt: "<p>What word did you hear?</p>",
                              data:{ subjectID:subjID,phase:'one',assignedCond:condition_p1,stage:'pre',day:today},
                          };



              var pre_test_text1 = {
                        type: 'html-button-response',
                        stimulus: 'You are about to being the 1st testing phase of the experiment. You will now see 6 images on '+
                        'the screen at once, and hear a single sound. Use your keyboard to quickly press the number that '+
                        'corresponds to the sound which was played.',
                        choices: ['Continue']
                  }

              var pre_test_text2 = {
                            type: 'html-button-response',
                            stimulus: 'You are about to begin the second testing phase of the experiment. You will now see 6 images on '+
                            'the screen at once, and hear a single sound. Use your keyboard to quickly press the number that '+
                            'corresponds to the sound which was played.',
                            choices: ['Continue']
                      }

            var pre_test_text3 = {
                                    type: 'html-button-response',
                                    stimulus: 'You are about to begin the third and final testing phase of the experiment. You will now see 6 images on '+
                                    'the screen at once, and hear a single sound. Use your keyboard to quickly press the number that '+
                                    'corresponds to the sound which was played.',
                                    choices: ['Continue']
                              }



              var post_test_text1 = {
                            type: 'html-button-response',
                            stimulus: 'You have finished the 1st testing phase and are approximately 1/3 of the way done! Please press continue',
                            choices: ['Continue']
                      }


              var post_test_text2 = {
                                    type: 'html-button-response',
                                    stimulus: 'You have finished the second testing phase and are approximately 2/3 of the way done! Please press continue',
                                    choices: ['Continue']
                              }

            var post_test_text3= {
                          type:   "instructions",
                          pages:    [debrief],//invitation,consentForm,consentVoluntary,
                          show_clickable_nav: true,
                          timing_post_trial: 0

              };









            function shuffle(array) {
              var currentIndex = array.length, temporaryValue, randomIndex;

              // While there remain elements to shuffle...
              while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
              }

              return array;
            }
