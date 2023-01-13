function count(input) {
    const obj = {};
    for (let ch of input) {
        if (Object.keys(obj).includes(ch)){
            obj[ch] ++;
        } else {
            obj[ch] = 1;
        }
    }
    return obj;
};
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
    const obj2 = {};
    for (let object of input2) {
        const ch = object['key'];
        const num = object['value'];
        if (Object.keys(obj2).includes(ch)) {
            obj2[ch] += num;
        } else {
            obj2[ch] = num;
        }
    }
    return obj2;
};
let input2 = [
{ key: "a", value: 3 },
{ key: "b", value: 1 },
{ key: "c", value: 2 },
{ key: "a", value: 3 },
{ key: "c", value: 5 }
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}