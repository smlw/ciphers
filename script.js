
// var alphbet = 'аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩьЬъЪыЫэЭюЮяЯ';
// var alphbet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var alphbet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';


var k, n;

k = 3;
n = alphbet.length - 1;

function letsCezar() {

    // var inputPhraze = document.getElementById('inputVal').value;

    // this.openMessage = document.getElementById('inputVal').value;

    var arr = openMessage.split('');

    var input = document.getElementById('input');
    var output = document.getElementById('output');

    for(var i = 0; i <= arr.length-1; i++){

        input.innerHTML += '<div class="letter">' + arr[i] + '</div>';

        var currentLetter = arr[i];

        var newIndex = alphbet.search(currentLetter) + 1;

        var total = (newIndex + k ) % alphbet.length - 1;

        output.innerHTML += '<div class="letter">' + alphbet[total] + '</div>';
    }
}


