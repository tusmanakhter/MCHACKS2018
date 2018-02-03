var allElements = document.getElementsByTagName('*');

var elements = [];
for (element in allElements) {
    var innerElem = allElements[element];
    if (innerElem.tagName !== undefined) { 
        if (innerElem.tagName.toLowerCase() !== "script" && innerElem.tagName.toLowerCase() !== "style") {
            elements[elements.length] = innerElem;
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            var replacedText = buildWord(text);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

function buildWord(text) {
    if (/[aeiou]/gi.test(text)) {
        console.log(text);
    }
    return text.replace(/hello/gi, 'bye');
}