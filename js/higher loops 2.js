const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    sift: "swift byt apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'cpp', 'rb', 'java', 'py']

for (const key in programming) {
    console.log(programming[key]);
}
