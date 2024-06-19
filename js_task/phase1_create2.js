



sounds_p1 = [ // load sound files
        './audio/agen.mp3',
        './audio/coodle.mp3',
        './audio/culp.mp3',
        './audio/eder.mp3',
        './audio/gree.mp3',
        './audio/hage.mp3'
  ];


dogs = ['img/animals/dog1.jpg',
'img/animals/dog2.jpg',
'img/animals/dog3.jpg',
'img/animals/dog4.jpg',
'img/animals/dog5.jpg',
'img/animals/dog6.jpg'
];

dogsGen =['img/animals/bun1.jpg','img/animals/pig1.jpg',];
shuffle(dogsGen)


insects = [ 'img/insects/but1.jpg',
'img/insects/but2.jpg',
'img/insects/but3.jpg',
'img/insects/but4.jpg',
'img/insects/but5.jpg',
'img/insects/but6.jpg'];

insectsGen = ['img/insects/bug1.jpg','img/insects/bug2.jpg'];
shuffle(insectsGen)

furniture = ['img/furniture/chair1.jpg',
'img/furniture/chair2.jpg',
'img/furniture/chair3.jpg',
'img/furniture/chair4.jpg',
'img/furniture/chair5.jpg',
'img/furniture/chair6.jpg'];

furnitureGen = ['img/furniture/bed1.jpg','img/furniture/desk1.jpg'];
shuffle(furnitureGen)

clothes = ['img/clothes/sho1.jpg',
'img/clothes/sho2.jpg',
'img/clothes/sho3.jpg',
'img/clothes/sho4.jpg',
'img/clothes/sho5.jpg',
'img/clothes/sho6.jpg',];

clothesGen = ['img/clothes/pan1.jpg','img/clothes/pan2.jpg'];
shuffle(clothesGen)

kitchen = ['img/dishware/cup1.jpg',
'img/dishware/cup2.jpg',
'img/dishware/cup3.jpg',
'img/dishware/mug1.jpg',
'img/dishware/mug2.jpg',
'img/dishware/mug3.jpg'];

kitchenGen = ['img/dishware/bowl1.jpg','img/dishware/plate1.jpg'];
shuffle(kitchenGen)

cars = ['img/cars/car1.jpg',
'img/cars/car2.jpg',
'img/cars/car3.jpg',
'img/cars/car4.jpg',
'img/cars/car5.jpg',
'img/cars/car6.jpg']

carsGen = ['img/cars/bus1.jpg','img/cars/truck1.jpg'];
shuffle(carsGen)





var catAudio = [1, 2, 3, 4, 5, 6];
catAudioRand_p1 = shuffle(Array.from(Array(catAudio.length).keys()));
var zipfFreq = [11,5,3,1];
//var zipfFreq = [6,2,1,1];
var unfFreq = [5,5,5,5];
var mixedFreq = [[11,5,3,1],[5,5,5,5]]
var mixedInd = shuffle([0,0,0,1,1,1]) //for randomly assigning categories to unf or zipf
//var unfFreq = [3,3,2,2];
var nTrainItems=4;




// randomize order of items for each category, decides which are trained/test and high vs. low freq
dogInd = shuffle(Array.from(Array(dogs.length).keys()));
insectInd = shuffle(Array.from(Array(insects.length).keys()));
furnitureInd = shuffle(Array.from(Array(furniture.length).keys()));
clothesInd = shuffle(Array.from(Array(clothes.length).keys()));
kitchenInd = shuffle(Array.from(Array(kitchen.length).keys()));
carsInd = shuffle(Array.from(Array(cars.length).keys()));

furnitureTrain = [];
carTrain=[];
kitchenTrain = [];
dogTrain = [];
insectTrain=[];
clothesTrain=[];

furnitureFreq = [];
carFreq=[];
kitchenFreq = [];
dogFreq = [];
insectFreq=[];
clothesFreq=[];


if (condition_p1=="Zipf") {
  furnitureFreq = zipfFreq;
  carFreq=zipfFreq;
  kitchenFreq = zipfFreq;
  dogFreq = zipfFreq;
  insectFreq=zipfFreq;
  clothesFreq=zipfFreq;
}
if (condition_p1=="Unf"){
  furnitureFreq = unfFreq;
  carFreq=unfFreq;
  kitchenFreq = unfFreq;
  dogFreq = unfFreq;
  insectFreq=unfFreq;
  clothesFreq=unfFreq;

}

if (condition_p1=="mixed"){

  // the mixedFreq indicies are randomized
  furnitureFreq = mixedFreq[mixedInd[0]];
  carFreq=mixedFreq[mixedInd[1]];
  kitchenFreq = mixedFreq[mixedInd[2]];
  dogFreq = mixedFreq[mixedInd[3]];
  insectFreq=mixedFreq[mixedInd[4]];
  clothesFreq=mixedFreq[mixedInd[5]];


}





for (i=0;i<furnitureInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<furnitureFreq[i];j++)
  {

    furnitureTrain.push([furnitureInd[i],catAudioRand_p1[0]]); //same random sound assigned at every index.
  }
}

for (i=0;i<carsInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<carFreq[i];j++)
  {
    carTrain.push([carsInd[i],catAudioRand_p1[1]]); //same random sound assigned at every index.
  }
}

for (i=0;i<kitchenInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<kitchenFreq[i];j++)
  {
    kitchenTrain.push([kitchenInd[i],catAudioRand_p1[2]]); //same random sound assigned at every index.
  }
}

for (i=0;i<dogInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<dogFreq[i];j++)
  {
    dogTrain.push([dogInd[i],catAudioRand_p1[3]]); //same random sound assigned at every index.
  }
}

for (i=0;i<insectInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<insectFreq[i];j++)
  {
    insectTrain.push([insectInd[i],catAudioRand_p1[4]]); //same random sound assigned at every index.
  }
}

for (i=0;i<clothesInd.length;i++) //each Ind is a unique category item
{
  for (j=0; j<clothesFreq[i];j++)
  {
    clothesTrain.push([clothesInd[i],catAudioRand_p1[5]]); //same random sound assigned at every index.
  }
}


// shuffle so that high freq items aren't systematically put together.
shuffle(furnitureTrain)
shuffle(carTrain)
shuffle(kitchenTrain)
shuffle(dogTrain)
shuffle(insectTrain)
shuffle(clothesTrain)




furnitureCounter=0;
carsCounter=0;
kitchenCounter=0;
dogCounter=0;
insectCounter=0;
clothesCounter=0;

totalStim_p1 = furnitureTrain.length + carTrain.length+kitchenTrain.length+dogTrain.length+insectTrain.length+clothesTrain.length;


indVec= [0,1,2,3,4,5];
trainMat_p1=[]; //contents of each individual training trial, separated by row.


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


if (randInd.includes(0) && furnitureCounter<furnitureTrain.length ){

  temp.push(furniture[furnitureTrain[furnitureCounter][0]])
  temp.push(sounds_p1[furnitureTrain[furnitureCounter][1]])
  furnitureCounter++;
  if (furnitureCounter==furnitureTrain.length){
    //remove furnitures category index from the vector
    index=indVec.indexOf(0);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(1) && carsCounter<carTrain.length ){

  temp.push(cars[carTrain[carsCounter][0]]);
  temp.push(sounds_p1[carTrain[carsCounter][1]]);
  carsCounter++;
  if (carsCounter==carTrain.length){
     //remove car category index from the vector
     index=indVec.indexOf(1);
     if (index > -1) {
       indVec.splice(index, 1); }
    }


}

if (randInd.includes(2) && kitchenCounter<kitchenTrain.length ){

  temp.push(kitchen[kitchenTrain[kitchenCounter][0]]);
  temp.push(sounds_p1[kitchenTrain[kitchenCounter][1]]);
  kitchenCounter++;
  if (kitchenCounter==kitchenTrain.length){
    //remove kitchen category index from the vector
    index=indVec.indexOf(2);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(3) && dogCounter<dogTrain.length ){

  temp.push(dogs[dogTrain[dogCounter][0]]);
  temp.push(sounds_p1[dogTrain[dogCounter][1]]);
  dogCounter++;
  if (dogCounter==dogTrain.length){
    //remove dog category index from the vector
    index=indVec.indexOf(3);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(4) && insectCounter<insectTrain.length ){

  temp.push(insects[insectTrain[insectCounter][0]]);
  temp.push(sounds_p1[insectTrain[insectCounter][1]]);
  insectCounter++;
  if (insectCounter==insectTrain.length){
    //remove insect category index from the vector
    index=indVec.indexOf(4);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

if (randInd.includes(5) && clothesCounter<clothesTrain.length ){

  temp.push(clothes[clothesTrain[clothesCounter][0]]);
  temp.push(sounds_p1[clothesTrain[clothesCounter][1]]);
  clothesCounter++;
  if (clothesCounter==clothesTrain.length){
    //remove clothes category index from the vector
    index=indVec.indexOf(5);
    if (index > -1) {
      indVec.splice(index, 1);}

}
}

trainMat_p1[i]=temp;


}






furnitureCounter
carsCounter
kitchenCounter
dogCounter
insectCounter
clothesCounter



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



testRepeatMat_p1 = [];
testNovelMat_p1 = [];
testGenMat_p1 = [];
nTest=6;

answerMat_p1 = ["furniture","car","kitchen","dog","insect","clothes"];
phase1_IndMat=[furnitureInd,carsInd,kitchenInd,dogInd,insectInd,clothesInd];
phase1_FreqMat=[furnitureFreq,carFreq,kitchenFreq,dogFreq,insectFreq,clothesFreq];


testImageN = 6;
categoryN = 6;
trainN = 4;
novelN = 2;
genN = 2;
