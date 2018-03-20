var alphbet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя ';

function vijener() {

    var key = document.getElementById('inputKey').value;
    var message = document.getElementById('inputMessage').value;

    var test = message.split('');

    var output = document.getElementById('output');

    var stroka = [];
    var keySort = [];

    output.innerHTML += ('<b>Разделенное по буквам сообщение:</b> <br>' + test + '<br>');

    // Ищем ключи букв алфавита в ключе
    for (var b = 0; b <= key.length - 1; b++) {
        var currentLetter = key[b];

        var newIndex = alphbet.search(currentLetter) + 1;

        keySort.push(newIndex);
    }

    var lenMessage = message.length; // длина исходного сообщения
    var lenKey = key.length; // длина ключ
    var messageToKey = lenMessage / lenKey; // длину массива / длину ключа
    messageToKey = Math.ceil(messageToKey); // Вычисяем сколько будет строк

    // Проверяем, нужно ли добавлять пробелы строке
    if(!(lenMessage%lenKey === 0)){
        complementString = lenKey - (lenMessage%lenKey);
        complementString = (lenMessage) + complementString;

        message = message.padEnd(complementString, "_");
        output.innerHTML += ('<b>Сообщение с дополненныйми пробелами: </b> <br>' + message + '<br>');
    }


    // Ищем индксы букв сообщения, что бы записать шифрованное сообщение в строку
    for (var i = 0; i < lenKey; i++) {
        var s = 0;
        while(s < lenMessage){
            current = i+s;
            stroka += message[current];
            s = s + lenKey;
        }
    }

    output.innerHTML += ('<b>Зашифрованное сообщение:</b> <br>' + stroka + '<br>');

    // Делим строку на равные части
    pattern = new RegExp(".{1,"+messageToKey+"}", "g");
    var splitOutputMessage = stroka.match(pattern);

    output.innerHTML += ('<b>Разделенно сообщение на части количество которых равно количеству букв шифра: </b> <br>' + splitOutputMessage + '<br>');


    // Заполняем двумерный массив [ключ буквы алфавита][кусок шифрованных букв]
    var doubleArray = [];
    for (var j = 0; j <= lenKey - 1; j++) {
        doubleArray.push([keySort[j], splitOutputMessage[j]]);
    }
    output.innerHTML += ('<b>Не отсортированный массив</b> <br>' + doubleArray + '<br>');


    // Сортируем исходный массив по первому ключу (индекс буквы в алфавите)
    doubleArray.sort(function (a, b) {
        return a[0] - b[0]
    });
    output.innerHTML += ('<b>Отсортированный массив</b> <br>' + doubleArray + '<br>');

    // Заполняем массив исходного сообщения только шифрованными буквами
    var finalOutPutArray = [];
    for (var o = 0; o <= lenKey - 1; o++) {
        finalOutPutArray += (doubleArray[o][1]);
    }

    output.innerHTML += ('<b>Шифрованное сообщение</b> <br>' + finalOutPutArray.toLowerCase() + '<br>');

}
