const userInputStrings = prompt(
    "Hi there! Please enter some froyo flavors you'd like, separated by commas:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputStrings.split(",");

const inputArray = [];

for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    inputArray.push(str);
}

const outputObject = {};

const inputCount = () => {
    array_elements = inputArray;
    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
        outputObject[current] = cnt;
    }
    if (cnt > 0) {
        return console.table(outputObject);
    }
}

inputCount();