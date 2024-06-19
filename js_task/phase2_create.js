



sounds_p2 = [ // load sound files
        './audio/hux.mp3',
        './audio/jick.mp3',
        './audio/nare.mp3',
        './audio/slint.mp3',
        './audio/pizer.mp3',
        './audio/ratch.mp3'
  ];


bird= ['img/bird/pigeon1.jpg',
'img/bird/pigeon2.jpg',
'img/bird/pigeon3.jpg',
'img/bird/pigeon4.jpg',
'img/bird/pigeon5.jpg',
'img/bird/pigeon6.jpg'
];

birdGen =['img/bird/owl1.jpg','img/bird/rooster1.jpg',];
shuffle(birdGen)

fruits = ['img/fruits/ber1.jpg',
'img/fruits/ber2.jpg',
'img/fruits/ber3.jpg',
'img/fruits/ber4.jpg',
'img/fruits/ber5.jpg',
'img/fruits/ber6.jpg'
]



fruitGen = ['img/fruits/app1.jpg','img/fruits/ban1.jpg'];
shuffle(fruitGen)

instrument = ['img/instrument/guitar1.jpg',
'img/instrument/guitar3.jpg',
'img/instrument/guitar4.jpg',
'img/instrument/mandolin1.jpg',
'img/instrument/mandolin2.jpg',
'img/instrument/mandolin3.jpg'];

instrumentGen = ['img/instrument/grandpiano4.jpg','img/instrument/saxophone5.jpg'];
shuffle(instrumentGen)

appliance = ['img/appliance/microwave1.jpg',
'img/appliance/microwave2.jpg',
'img/appliance/microwave3.jpg',
'img/appliance/microwave4.jpg',
'img/appliance/microwave5.jpg',
'img/appliance/microwave6.jpg',];

applianceGen = ['img/appliance/fridge1.jpg','img/appliance/toaster1.jpg'];
shuffle(applianceGen)

tools = ['img/tools/screwdriver1.jpg',
'img/tools/screwdriver2.jpg',
'img/tools/screwdriver3.jpg',
'img/tools/screwdriver4.jpg',
'img/tools/screwdriver5.jpg',
'img/tools/screwdriver6.jpg'];

toolsGen = ['img/tools/wrench5.jpg','img/tools/swissarmy1.jpg'];
shuffle(toolsGen)

plant = ['img/plant/bonsai1.jpg',
'img/plant/bonsai2.jpg',
'img/plant/bonsai3.jpg',
'img/plant/bonsai4.jpg',
'img/plant/bonsai5.jpg',
'img/plant/bonsai6.jpg']

plantGen = ['img/plant/palmtree1.jpg','img/plant/fern1.jpg'];
shuffle(plantGen)





var catAudio_ = [1, 2, 3, 4, 5, 6];
catAudioRand_p2 = shuffle(Array.from(Array(catAudio.length).keys()));
var zipfFreq = [11,5,3,1];
//var zipfFreq = [6,2,1,1];
var unfFreq = [5,5,5,5];
var mixedFreq = [[11,5,3,1],[5,5,5,5]]
var mixedInd = shuffle([0,0,0,1,1,1]) //for randomly assigning categories to unf or zipf
//var unfFreq = [3,3,2,2];
var nTrainItems=4;





// randomize order of items for each category, decides which are trained/test and high vs. low freq
birdInd = shuffle(Array.from(Array(bird.length).keys()));
fruitInd = shuffle(Array.from(Array(fruits.length).keys()));
instrumentInd = shuffle(Array.from(Array(instrument.length).keys()));
applianceInd = shuffle(Array.from(Array(appliance.length).keys()));
toolsInd = shuffle(Array.from(Array(tools.length).keys()));
plantInd = shuffle(Array.from(Array(plant.length).keys()));

instrumentTrain = [];
plantTrain=[];
toolsTrain = [];
birdTrain = [];
fruitTrain=[];
applianceTrain=[];

instrumentFreq = [];
plantFreq=[];
toolsFreq = [];
birdFreq = [];
fruitFreq=[];
applianceFreq=[];


if (condition_p2=="Zipf") {
  instrumentFreq = zipfFreq;
  plantFreq=zipfFreq;
  toolsFreq = zipfFreq;
  birdFreq = zipfFreq;
  fruitFreq=zipfFreq;
  applianceFreq=zipfFreq;
}
if (condition_p2=="Unf"){
  instrumentFreq = unfFreq;
  plantFreq=unfFreq;
  toolsFreq = unfFreq;
  birdFreq = unfFreq;
  fruitFreq=unfFreq;
  applianceFreq=unfFreq;

}

if (condition_p2=="mixed"){

  // the mixedFreq indicies are randomized
  instrumentFreq = mixedFreq[mixedInd[0]];
  plantFreq=mixedFreq[mixedInd[1]];
  toolsFreq = mixedFreq[mixedInd[2]];
  birdFreq = mixedFreq[mixedInd[3]];
  fruitFreq=mixedFreq[mixedInd[4]];
  applianceFreq=mixedFreq[mixedInd[5]];


}





for (i=0;i<instrumentInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<instrumentFreq[i];j++)
  {

    instrumentTrain.push([instrumentInd[i],catAudioRand_p2[0]]); //same random sound assigned at every index.
  }
}

for (i=0;i<plantInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<plantFreq[i];j++)
  {
    plantTrain.push([plantInd[i],catAudioRand_p2[1]]); //same random sound assigned at every index.
  }
}

for (i=0;i<toolsInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<toolsFreq[i];j++)
  {
    toolsTrain.push([toolsInd[i],catAudioRand_p2[2]]); //same random sound assigned at every index.
  }
}

for (i=0;i<birdInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<birdFreq[i];j++)
  {
    birdTrain.push([birdInd[i],catAudioRand_p2[3]]); //same random sound assigned at every index.
  }
}

for (i=0;i<fruitInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<fruitFreq[i];j++)
  {
    fruitTrain.push([fruitInd[i],catAudioRand_p2[4]]); //same random sound assigned at every index.
  }
}

for (i=0;i<applianceInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<applianceFreq[i];j++)
  {
    applianceTrain.push([applianceInd[i],catAudioRand_p2[5]]); //same random sound assigned at every index.
  }
}




shuffle(instrumentTrain)
shuffle(plantTrain)
shuffle(toolsTrain)
shuffle(birdTrain)
shuffle(fruitTrain)
shuffle(applianceTrain)




instrumentCounter=0;
plantCounter=0;
toolsCounter=0;
birdCounter=0;
fruitCounter=0;
applianceCounter=0;

totalStim_p2 = instrumentTrain.length + plantTrain.length+toolsTrain.length+birdTrain.length+fruitTrain.length+applianceTrain.length;


indVec= [0,1,2,3,4,5];
trainMat_p2=[]; //contents of each individual training trial, separated by row.


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


if (randInd.includes(0) && instrumentCounter<instrumentTrain.length ){

  temp.push(instrument[instrumentTrain[instrumentCounter][0]])
  temp.push(sounds_p2[instrumentTrain[instrumentCounter][1]])
  instrumentCounter++;
  if (instrumentCounter==instrumentTrain.length){
    //remove instruments category index from the vector
    index=indVec.indexOf(0);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(1) && plantCounter<plantTrain.length ){

  temp.push(plant[plantTrain[plantCounter][0]]);
  temp.push(sounds_p2[plantTrain[plantCounter][1]]);
  plantCounter++;
  if (plantCounter==plantTrain.length){
     //remove plant category index from the vector
     index=indVec.indexOf(1);
     if (index > -1) {
       indVec.splice(index, 1); }
    }


}

if (randInd.includes(2) && toolsCounter<toolsTrain.length ){

  temp.push(tools[toolsTrain[toolsCounter][0]]);
  temp.push(sounds_p2[toolsTrain[toolsCounter][1]]);
  toolsCounter++;
  if (toolsCounter==toolsTrain.length){
    //remove tools category index from the vector
    index=indVec.indexOf(2);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(3) && birdCounter<birdTrain.length ){

  temp.push(bird[birdTrain[birdCounter][0]]);
  temp.push(sounds_p2[birdTrain[birdCounter][1]]);
  birdCounter++;
  if (birdCounter==birdTrain.length){
    //remove bird category index from the vector
    index=indVec.indexOf(3);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(4) && fruitCounter<fruitTrain.length ){

  temp.push(fruits[fruitTrain[fruitCounter][0]]);
  temp.push(sounds_p2[fruitTrain[fruitCounter][1]]);
  fruitCounter++;
  if (fruitCounter==fruitTrain.length){
    //remove fruit category index from the vector
    index=indVec.indexOf(4);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(5) && applianceCounter<applianceTrain.length ){

  temp.push(appliance[applianceTrain[applianceCounter][0]]);
  temp.push(sounds_p2[applianceTrain[applianceCounter][1]]);
  applianceCounter++;
  if (applianceCounter==applianceTrain.length){
    //remove appliance category index from the vector
    index=indVec.indexOf(5);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

trainMat_p2[i]=temp;


}






instrumentCounter
plantCounter
toolsCounter
birdCounter
fruitCounter
applianceCounter











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



testRepeatMat_p2 = [];
testNovelMat_p2 = [];
testGenMat_p2 = [];
nTest=6;

answerMat_p2 = ["instrument","plant","tools","bird","fruits","appliance"];
phase2_FreqMat=[instrumentFreq,plantFreq,toolsFreq,birdFreq,fruitFreq,applianceFreq];
testImageN = 6;
categoryN = 6;
trainN = 4;
novelN = 2;
genN = 2;
