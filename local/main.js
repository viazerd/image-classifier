let mobilenet;

function setup(){

    createCanvas(640,480);
    img_dog = createImg('./img/lucky1.jpg',imageready);

    img_dog.hide();

    //Initialising our image classifier model (Mobilenet as it is mobile friendly)
    mobilenet = ml5.imageClassifier('Mobilenet',modelReady);

}

function imageready(){
    console.log('Image Ready!!');
    image(img_dog,0,0,width,height);
}

function modelReady(){
    console.log('Mobilenet is ready');
    mobilenet.predict(img_dog,result);
}

function result(err,result){
    if(err) console.error(err);
    else{
        let identifier =result[0].className
        let prob =  Math.floor(result[0].probability * 100) + '%'
        console.log(identifier);
        console.log(prob);
        fill('white');
        textSize(35);
        text(identifier,20,height-20);

    }

}

function draw(){

}