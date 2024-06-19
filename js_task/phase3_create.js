



sounds_p3 = [ // load sound files
        './audio/pell.mp3',
        './audio/poda.mp3',
        './audio/ragly.mp3',
        './audio/zorch.mp3',
        './audio/tood.mp3',
        './audio/vamy.mp3'
  ];


fish = ['img/fish/fish1.jpg',
'img/fish/fish2.jpg',
'img/fish/fish3.jpg',
'img/fish/fish4.jpg',
'img/fish/bass1.jpg',
'img/fish/bass2.jpg'
];

fishGen =['img/fish/dolphin2.jpg','img/fish/killerwhale.jpg',];
shuffle(fishGen)


light = [ 'img/light/lamp1.jpg',
'img/light/lamp3.jpg',
'img/light/lamp3.jpg',
'img/light/lamp4.jpg',
'img/light/lamp5.jpg',
'img/light/lamp6.jpg'];

lightGen = ['img/light/chandelier2.jpg','img/light/flashlight2.jpg'];
shuffle(lightGen)

ship = ['img/ship/schooner1.jpg',
'img/ship/schooner2.jpg',
'img/ship/schooner3.jpg',
'img/ship/schooner4.jpg',
'img/ship/schooner5.jpg',
'img/ship/schooner6.jpg'];

shipGen = ['img/ship/ferry1.jpg','img/ship/speedboat1.jpg'];
shuffle(shipGen)

sports = ['img/sports/hoop1.jpg',
'img/sports/hoop3.jpg',
'img/sports/hoop3.jpg',
'img/sports/hoop4.jpg',
'img/sports/hoop5.jpg',
'img/sports/hoop6.jpg',];

sportsGen = ['img/sports/baseball1.jpg','img/sports/soccer1.jpg'];
shuffle(sportsGen)

time = ['img/time/watch1.jpg',
'img/time/watch2.jpg',
'img/time/watch3.jpg',
'img/time/watch4.jpg',
'img/time/watch5.jpg',
'img/time/watch6.jpg'];

timeGen = ['img/time/hourglass1.jpg','img/time/metronome2.jpg'];
shuffle(timeGen)

vegetable = ['img/vegetable/pep1.jpg',
'img/vegetable/pep3.jpg',
'img/vegetable/pep3.jpg',
'img/vegetable/pep4.jpg',
'img/vegetable/pep5.jpg',
'img/vegetable/pep6.jpg']

vegetableGen = ['img/vegetable/cab1.jpg','img/vegetable/oni1.jpg'];
shuffle(vegetableGen)





var catAudio = [1, 2, 3, 4, 5, 6];
catAudioRand_p3 = shuffle(Array.from(Array(catAudio.length).keys()));
var zipfFreq = [11,5,3,1];
//var zipfFreq = [6,2,1,1];
var unfFreq = [5,5,5,5];
var mixedFreq = [[11,5,3,1],[5,5,5,5]]
var mixedInd = shuffle([0,0,0,1,1,1]) //for randomly assigning categories to unf or zipf
//var unfFreq = [3,3,2,2];
var nTrainItems=4;




// randomize order of items for each category, decides which are trained/test and high vs. low freq
fishInd = shuffle(Array.from(Array(fish.length).keys()));
lightInd = shuffle(Array.from(Array(light.length).keys()));
shipInd = shuffle(Array.from(Array(ship.length).keys()));
sportsInd = shuffle(Array.from(Array(sports.length).keys()));
timeInd = shuffle(Array.from(Array(time.length).keys()));
vegetableInd = shuffle(Array.from(Array(vegetable.length).keys()));

shipTrain = [];
vegetableTrain=[];
timeTrain = [];
fishTrain = [];
lightTrain=[];
sportsTrain=[];

shipFreq = [];
vegetableFreq=[];
timeFreq = [];
fishFreq = [];
lightFreq=[];
sportsFreq=[];


if (condition_p3=="Zipf") {
  shipFreq = zipfFreq;
  vegetableFreq=zipfFreq;
  timeFreq = zipfFreq;
  fishFreq = zipfFreq;
  lightFreq=zipfFreq;
  sportsFreq=zipfFreq;
}
if (condition_p3=="Unf"){
  shipFreq = unfFreq;
  vegetableFreq=unfFreq;
  timeFreq = unfFreq;
  fishFreq = unfFreq;
  lightFreq=unfFreq;
  sportsFreq=unfFreq;

}

if (condition_p3=="mixed"){

  // the mixedFreq indicies are randomized
  shipFreq = mixedFreq[mixedInd[0]];
  vegetableFreq=mixedFreq[mixedInd[1]];
  timeFreq = mixedFreq[mixedInd[2]];
  fishFreq = mixedFreq[mixedInd[3]];
  lightFreq=mixedFreq[mixedInd[4]];
  sportsFreq=mixedFreq[mixedInd[5]];


}





for (i=0;i<shipInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<shipFreq[i];j++)
  {

    shipTrain.push([shipInd[i],catAudioRand_p3[0]]); //same random sound assigned at every index.
  }
}

for (i=0;i<vegetableInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<vegetableFreq[i];j++)
  {
    vegetableTrain.push([vegetableInd[i],catAudioRand_p3[1]]); //same random sound assigned at every index.
  }
}

for (i=0;i<timeInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<timeFreq[i];j++)
  {
    timeTrain.push([timeInd[i],catAudioRand_p3[2]]); //same random sound assigned at every index.
  }
}

for (i=0;i<fishInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<fishFreq[i];j++)
  {
    fishTrain.push([fishInd[i],catAudioRand_p3[3]]); //same random sound assigned at every index.
  }
}

for (i=0;i<lightInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<lightFreq[i];j++)
  {
    lightTrain.push([lightInd[i],catAudioRand_p3[4]]); //same random sound assigned at every index.
  }
}

for (i=0;i<sportsInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<sportsFreq[i];j++)
  {
    sportsTrain.push([sportsInd[i],catAudioRand_p3[5]]); //same random sound assigned at every index.
  }
}


shuffle(shipTrain)
shuffle(vegetableTrain)
shuffle(timeTrain)
shuffle(fishTrain)
shuffle(lightTrain)
shuffle(sportsTrain)


shipCounter=0;
vegetableCounter=0;
timeCounter=0;
fishCounter=0;
lightCounter=0;
sportsCounter=0;

totalStim_p3 = shipTrain.length + vegetableTrain.length+timeTrain.length+fishTrain.length+lightTrain.length+sportsTrain.length;


indVec= [0,1,2,3,4,5];
trainMat_p3=[]; //contents of each individual training trial, separated by row.


//generate each unique pairwise category combination
var a = indVec
var l = a.length;
var r = [];
var r2= [];
for (var i = 0; i < l; ++i) {
  for (var j = i + 1; j < l; ++j) {
      for( var z =j+1;z<l;++z){
      r.push([a[i],a[j],a[z]]);
      r2.push([a[i],a[j],a[z]]);
      }
  }
}





r3=r2.concat(r);



//r2 = shuffle(r2).slice(0,10);
//r3=r2.concat(r);


rfull=r3 // for the 40 trial version


train_simul_image=3; //how many images are shown at once during training

pairShuffle = shuffle(rfull);


nTrainTrials = totalStim_p1/train_simul_image; //make sure this is an integer

shuffleInd=0;


//make the loop run through pairShuffle.length if you want to include every possible combo
for (i=0;i<pairShuffle.length;i++){

temp  =[]; //hold image and sound file on each loop iteration.
randInd = pairShuffle[i];

// if (randInd.length<2){ //don't add anymore trials if there's only 1 category left
//   break;
// }


if (randInd.includes(0) && shipCounter<shipTrain.length ){

  temp.push(ship[shipTrain[shipCounter][0]])
  temp.push(sounds_p3[shipTrain[shipCounter][1]])
  shipCounter++;
  if (shipCounter==shipTrain.length){
    //remove ships category index from the vector
    index=indVec.indexOf(0);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(1) && vegetableCounter<vegetableTrain.length ){

  temp.push(vegetable[vegetableTrain[vegetableCounter][0]]);
  temp.push(sounds_p3[vegetableTrain[vegetableCounter][1]]);
  vegetableCounter++;
  if (vegetableCounter==vegetableTrain.length){
     //remove vegetable category index from the vector
     index=indVec.indexOf(1);
     if (index > -1) {
       indVec.splice(index, 1); }
    }


}

if (randInd.includes(2) && timeCounter<timeTrain.length ){

  temp.push(time[timeTrain[timeCounter][0]]);
  temp.push(sounds_p3[timeTrain[timeCounter][1]]);
  timeCounter++;
  if (timeCounter==timeTrain.length){
    //remove time category index from the vector
    index=indVec.indexOf(2);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(3) && fishCounter<fishTrain.length ){

  temp.push(fish[fishTrain[fishCounter][0]]);
  temp.push(sounds_p3[fishTrain[fishCounter][1]]);
  fishCounter++;
  if (fishCounter==fishTrain.length){
    //remove fish category index from the vector
    index=indVec.indexOf(3);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(4) && lightCounter<lightTrain.length ){

  temp.push(light[lightTrain[lightCounter][0]]);
  temp.push(sounds_p3[lightTrain[lightCounter][1]]);
  lightCounter++;
  if (lightCounter==lightTrain.length){
    //remove light category index from the vector
    index=indVec.indexOf(4);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(5) && sportsCounter<sportsTrain.length ){

  temp.push(sports[sportsTrain[sportsCounter][0]]);
  temp.push(sounds_p3[sportsTrain[sportsCounter][1]]);
  sportsCounter++;
  if (sportsCounter==sportsTrain.length){
    //remove sports category index from the vector
    index=indVec.indexOf(5);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

trainMat_p3[i]=temp;


}






shipCounter
vegetableCounter
timeCounter
fishCounter
lightCounter
sportsCounter



var testPrompt = {
  obj_type: 'text',
  content:'Listen to the sound, then press the number above the picture that matches the sound',
  font:"20px Arial",
  startX: canvas_width*(1/2), // location in the canvas
  startY:canvas_height/10,

};


var text1 = {
  obj_type: 'text',
  content:'1',
  font:"30px Arial",
  startX: canvas_width*(1/8), // location in the canvas
  startY:(canvas_height/2)-80,

};

var text2 = {
  obj_type: 'text',
  content:'2',
  font:"30px Arial",
  startX: canvas_width*(2/8), // location in the canvas
  startY:(canvas_height/2)-80,

};

var text3 = {
  obj_type: 'text',
  content:'3',
  font:"30px Arial",
  startX: canvas_width*(3/8), // location in the canvas
  startY:(canvas_height/2)-80,

};

var text4 = {
  obj_type: 'text',
  content:'4',
  font:"30px Arial",
  startX: canvas_width*(4/8), // location in the canvas
  startY:(canvas_height/2)-80,

};

var text5 = {
  obj_type: 'text',
  content:'5',
  font:"30px Arial",
  startX: canvas_width*(5/8), // location in the canvas
  startY:(canvas_height/2)-80,

};

var text6 = {
  obj_type: 'text',
  content:'6',
  font:"30px Arial",
  startX: canvas_width*(6/8), // location in the canvas
  startY:(canvas_height/2)-80,

};

var text7 = {
  obj_type: 'text',
  content:'7',
  font:"30px Arial",
  startX: canvas_width*(7/8), // location in the canvas
  startY:(canvas_height/2)-80,

};



testRepeatMat_p3 = [];
testNovelMat_p3 = [];
testGenMat_p3 = [];
nTest=6;

answerMat_p3 = ["ship","vegetable","time","fish","light","sports"];
phase3_FreqMat=[shipFreq,vegetableFreq,timeFreq,fishFreq,lightFreq,sportsFreq];

testImageN = 6;
categoryN = 6;
trainN = 4;
novelN = 2;
genN = 2;
