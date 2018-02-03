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
    var splitted = text.split(/\s+/);
    for (var i = 0; i < splitted.length; i++) {
        var word = splitted[i];
        if (/[aeiou]/gi.test(word)) {
            word = word.replace(/a/g, 'aa');
            word = word.replace(/e/g, 'ee');
            word = word.replace(/i/g, 'ii');
            word = word.replace(/o/g, 'oo');
            word = word.replace(/u/g, 'uu');
            word = word.replace(/A/g, 'AA');
            word = word.replace(/E/g, 'EE');
            word = word.replace(/I/g, 'II');
            word = word.replace(/O/g, 'OO');
            word = word.replace(/U/g, 'UU');
            splitted[i] = word;
        }
    }
    var combined = splitted.join(" ");
    return combined;
}