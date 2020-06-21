// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
LSTM Generator example with p5.js
This uses a pre-trained model on a corpus of Virginia Woolf
For more models see: https://github.com/ml5js/ml5-data-and-training/tree/master/models/charRNN
=== */

let charRNN;
let textInput;
let lengthSlider;
let tempSlider;
let button;
let runningInference = false;

function setup() {
    noCanvas();

    // Create the LSTM Generator passing it the model directory
    charRNN = ml5.charRNN('models/horror-arendavey/', modelReady);

    // Grab the DOM elements
    textInput = select('#textarea');
    //lengthSlider = select('#lenSlider');
    //tempSlider = select('#tempSlider');
    button = select('#generate');

    // DOM element events
    button.mousePressed(generate);
    // lengthSlider.input(updateSliders);
    // tempSlider.input(updateSliders);
}


function modelReady() {
    select('#status').html('Model Loaded');
}

// Generate new text
function generate() {
    // prevent starting inference if we've already started another instance
    // TODO: is there better JS way of doing this?
      let original = textInput.value();
        // Make it to lower case
        let txt = original.toLowerCase();
     createDiv("You: " + txt + ".").addClass('yourWords');
    if (!runningInference) {
        runningInference = true;

        // Update the status log
//        select('#status').html('typing...');

        // Grab the original text
      

        // Check if there's something to send
        if (txt.length > 0) {
            // This is what the LSTM generator needs
            // Seed text, temperature, length to outputs
            // TODO: What are the defaults?
            let data = {
                seed: txt,
                temperature: 0.5,
                length: 100
            };

            // Generate text with the charRNN
            charRNN.generate(data, gotData);

            // When it's done
            function gotData(err, result) {
                // Update the status log
                //  select('#status').html('Ready!');
                //let  yourWords = select('.yourWords')
               
                createDiv("Bot: " + result.sample).addClass('results');
                //        select('.result').html("Bot: "+result.sample);

                runningInference = false;


            }
        }
    }
//    var node1 = document.getElementsByClassName("yourWords");
//    for (i = 0; i < node1.length; i++) {
//        var nodes1 = node1[i];
//        document.getElementById("contentpost").appendChild(nodes1);
//        console.log(nodes1)
//    }
//    var node2 = document.getElementsByClassName("results");
//    for (j = 0; j < node2.length; j++) {
//        var nodes2 = node2[j];
//        document.getElementById("contentpost").appendChild(nodes2);
//        console.log(nodes2)
//    }
    //  //console.log(node)

}
