var alphbet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя ';

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
// }
/*
прик
ладн
аяма
тема
тик


пр__


 */

function sub() {

    var key = 'гвба';
    // var message = 'Прикладная матем';
    var message = 'пр'; // Прикл адная матем атик
    var test = message.split('');

    var stroka = [];
    var keySort = [];

    console.log(test);

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

    // добавием строку символом "_"
    complementString = lenKey - (lenMessage%lenKey);
    complementString = (lenMessage) + complementString;

    message = message.padEnd(complementString, "_");

    // Ищем индксы букв сообщения, что бы записать шифрованное сообщение в строку
    for (var i = 0; i < lenKey; i++) {
        var s = 0;
        while(s < lenMessage){
            current = i+s;
            stroka += message[current];
            s = s + lenKey;
        }
    }

    console.log(stroka);

    // Делим строку на равные части
    pattern = new RegExp(".{1,"+messageToKey+"}", "g");
    var splitOutputMessage = stroka.match(pattern);

    console.log(splitOutputMessage);

    // Заполняем двумерный массив [ключ буквы алфавита][кусок шифрованных букв]
    var doubleArray = [];
    for (var j = 0; j <= lenKey - 1; j++) {
        doubleArray.push([keySort[j], splitOutputMessage[j]]);
    }

    // Сортируем исходный массив по первому ключу (индекс буквы в алфавите)
    doubleArray.sort(function (a, b) {
        return a[0] - b[0]
    });
    console.log(doubleArray);

    // Заполняем массив исходного сообщения только шифрованными буквами
    var finalOutPutArray = [];
    for (var o = 0; o <= lenKey - 1; o++) {
        finalOutPutArray += (doubleArray[o][1]);
    }
    console.log(finalOutPutArray.toLowerCase())

}

sub();