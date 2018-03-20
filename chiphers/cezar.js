// Шифр цезаря

var alphbet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

var k, n;

k = 3;
n = alphbet.length - 1;

function letsCezar() {

    var openMessage = document.getElementById('inputVal').value; // Получаем значение из инпута

    var arr = openMessage.split('');// разделяем его по символам

    var input = document.getElementById('input');
    var output = document.getElementById('output');


    // выводи результат
    for(var i = 0; i <= arr.length-1; i++){

        input.innerHTML += '<div class="letter">' + arr[i] + '</div>'; // выводим одну текущую букву

        var currentLetter = arr[i]; // Берем текущую букву

        var newIndex = alphbet.search(currentLetter) + 1; // Ищем ее индекс в алфавите

        var total = (newIndex + k ) % alphbet.length - 1; // Сдвигаем ее на 3

        output.innerHTML += '<div class="letter">' + alphbet[total] + '</div>'; // выводим сдвинутую букву
    }
}


