
var text = "Hello my name is Marjon and today happens to be my birthday. Because Marjon broke her foot, she is at home, learning Javascript on CodeAcademy. Happy birthday Marjon!"

var myName = "Marjon"
var hits = []

for (var i = 0; i < text.length; i++){
    if (text[i] === myName[0]) {
        for (var j = i; j < i + myName.length; j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}
