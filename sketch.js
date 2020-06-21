let textarea;
let submit;

function setup() {
    createCanvas(400, 400);
    noCanvas();
    noLoop();
    // textarea = select('#textarea');
    // submit = select('#submit');
    // submit.mousePressed(newText);
    // createP('dra.ft').addClass('logo');
    //createP('what is written will happen.').addClass('content');
}

function draw() {
    // background(220);
}

function newText() {
    // allClear()
    var node1 = document.getElementsByClassName("yourWords");
     for(i=0;i<node.length;i++)
    //  //console.log(node)
      var nodes1 = node1[i];
      document.getElementById("contentpost").appendChild(nodes1);
         console.log(nodes1)

}

function allClear() {
    var p_elements = document.getElementsByClassName('content');
    while (p_elements.length > 0) {
        p_elements[0].parentNode.removeChild(p_elements[0]);
    }

}
