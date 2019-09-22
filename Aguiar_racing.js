var jitterbug = -60;
var tango = 85;
var eyeSize = 7.5;
var toothHeight = 10;
var x = 52;
var y = 56;
var bunnyX = -60;
var bunnyY = 185;
var bitmojiSpeed = round(random(1,5));
var bunnySpeed = round(random(1,5));
var frogSpeed = round(random(1,5));

draw= function() {
    background(255, 255, 255);
    //bitmoji
    fill(23, 12, 84);
    stroke(23, 12, 84);
    rect(jitterbug + 63, tango + 90, 75, 84); //shirt
    stroke(122, 26, 26); //lines are shirt lines
    line(jitterbug + 138, tango + 90, jitterbug + 63, tango + 90);
    line(jitterbug + 138, tango + 95, jitterbug + 63, tango + 95);
    line(jitterbug + 138, tango + 100, jitterbug + 63, tango + 100);
    line(jitterbug + 138, tango + 105, jitterbug + 63, tango + 105);
    line(jitterbug + 138, tango + 110, jitterbug + 63, tango + 110);
    line(jitterbug + 138, tango + 115, jitterbug + 63, tango + 115);
    line(jitterbug + 138, tango + 120, jitterbug + 63, tango + 120);
    line(jitterbug + 138, tango + 125, jitterbug + 63, tango + 125);
    line(jitterbug + 138, tango + 130, jitterbug + 63, tango + 130);
    line(jitterbug + 138, tango + 135, jitterbug + 63, tango + 135);
    line(jitterbug + 138, tango + 140, jitterbug + 63, tango + 140);
    line(jitterbug + 138, tango + 145, jitterbug + 63, tango + 145);
    line(jitterbug + 138, tango + 150, jitterbug + 63, tango + 150);
    line(jitterbug + 86, tango + 171, jitterbug + 86, tango + 154); //P line
    arc(jitterbug + 91, tango + 159, 10, 11, -146, 152); //P arc
    line(jitterbug + 99, tango + 171, jitterbug + 105, tango + 154); //A line "/"
    line(jitterbug + 111, tango + 171, jitterbug + 105, tango + 154); //A line "\"
    line(jitterbug + 108, tango + 163, jitterbug + 102, tango + 163); //A line center
    stroke(23, 12, 84);
    fill(23, 12, 84);
    rect(jitterbug + 120, tango + 128, 15, 19); //pocket
    fill(230, 200, 141);
    strokeWeight(4);
    arc(jitterbug + 100, tango + 90, 62, 86, 4, 178); //collar
    stroke(158, 145, 121);
    strokeWeight(1);
    ellipse(jitterbug + 100, tango + 80, 65, 82); //face
    arc(jitterbug + 100, tango + 92, 10, 10, 78, 264); //nose
    arc(jitterbug + 100, tango + 98, 31, 22, 55, 165); //smile
    stroke(0, 0, 0);
    strokeWeight(2.5);
    ellipse(jitterbug + 85, tango + 79, 20, 20); //left lens
    ellipse(jitterbug + 116, tango + 79, 20, 20); //right lens
    strokeWeight(1);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    arc(jitterbug + 100, tango + 61, 56, -55, 1, 180); //hat
    strokeWeight(0.4);
    fill(255, 255, 255);
    ellipse(jitterbug + 85, tango + 79, 12, 12); //left eye
    ellipse(jitterbug + 116, tango + 79, 12, 12); //right eye
    noStroke();
    fill(92, 56, 31);
    ellipse(jitterbug + 85, tango + 79, 7, 7); //left iris
    ellipse(jitterbug + 116, tango + 79, 7, 7); //right iris
    arc(jitterbug + 90, tango + 59, 41, 15, 19, 161); //hair
    arc(jitterbug + 129, tango + 59, 15, 39, 68, 172); //side of hair
    strokeWeight(3);
    stroke(0, 0, 0);
    line(jitterbug + 96, tango + 75, jitterbug + 105, tango + 75); //glasses bridge
    line(jitterbug + 68, tango + 69, jitterbug + 74, tango + 76); //left handle
    line(jitterbug + 125, tango + 76, jitterbug + 130, tango + 70); //right handle
    noStroke();
    fill(0, 0, 0);
    ellipse(jitterbug + 85, tango + 79, 3, 3); //left pupil
    ellipse(jitterbug + 116, tango + 79, 3, 3); //right pupil
    //bitmoji
    jitterbug = jitterbug + bitmojiSpeed;
    
    //bunny
    fill(255, 255, 255);
    stroke(171, 171, 171);
    ellipse(bunnyX + 80, bunnyY + 120, 30, 60);  // left ear
    ellipse(bunnyX + 124, bunnyY + 120, 30, 60);  // right ear
    
    ellipse(bunnyX + 100, bunnyY + 175, 75, 75);    // face
    
    fill(0, 0, 0);
    ellipse(bunnyX + 85, bunnyY + 160, eyeSize, eyeSize);  // left eye
    ellipse(bunnyX + 117, bunnyY + 160, eyeSize, eyeSize);  // right eye
    
    line(bunnyX + 128, bunnyY + 185, bunnyX + 77, bunnyY + 185);   // mouth
    
    noFill();
    rect(bunnyX + 85, bunnyY + 186, 15, toothHeight); // left tooth
    rect(bunnyX + 100, bunnyY + 186, 15, toothHeight); // right tooth
    //bunny
    bunnyX = bunnyX + bunnySpeed;

    //frog
    noStroke();
    fill(30, 204, 91); // a nice froggy green!
    
    ellipse(x, y, 100, 50); // face
    ellipse(x - 24, y - 27, 20, 20); // left eye socket
    ellipse(x + 24, y - 27, 20, 20); // right eye socket
    
    fill(255, 255, 255); // for the whites of the eyes!
    ellipse(x - 24, y - 27, 15, 15); // left eyeball
    ellipse(x + 24, y - 27, 15, 15); // right eyeball
    
    fill(0, 0, 0);
    ellipse(x, y, 75, 30); //mouth
    rect(x - 26, y - 29, 5, 5); //left pupil
    rect (x + 21, y - 29, 5, 5); //right pupil
    x = x + frogSpeed;
    //frog
    };