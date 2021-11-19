var text = document.getElementById('myText');
var myData;
var postData = window.localStorage.getItem("save");
var reset = text.innerHTML;
// if no data
if (postData == null || postData == '') {
    myData = text.innerHTML;
    // store default value
    window.localStorage.setItem("save", myData);
    // make it placeholder style
    text.classList.remove('changed');
} else {
    // if there is a value post it
    text.innerHTML = postData;
    // make dark text
    text.classList.add('changed');
}

function saveEdits() {
    // store the current value
    myData = text.innerHTML;
    // local store the value
    window.localStorage.setItem("save", myData);
    text.classList.add('changed');
}

function clearStorage() {
    text.classList.remove('changed');
    // clear storage
    window.localStorage.clear("save");
    // return to default text
    text.innerHTML = reset;
}