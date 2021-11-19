function switchUser(){
    var p = Math.floor(Math.random() * 5) + 1;
    var filename = 'user' + p + '.html';
    document.getElementById('userframe').src = filename;
}