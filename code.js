function print() {
    group = document.getElementById('group');
    surname = document.getElementById('surname');
    class_ = document.getElementById('class');
    var html = "<h2>Вивід: </h2>"
    var g = group.value;
    var s = surname.value;
    var c = class_.value;
    var curse;
    for (var i=0; i<g.length; i++) {
        var digit = parseInt(g.charAt(i));
        
        if (!isNaN(digit)) {
            curse = digit;
            break;
        }
    }
    if (curse == undefined || curse !== parseInt(c)) {
        alert("Курс вказано невірно");
    }
    html = html + "<p>" + "Группа: " + g + "<br>Студент: " + s + "<br>" + c + "\tкурс"+ "</p>"
    document.getElementById("print").innerHTML = html;

}

function clear_all() {
    var html = "<p> </p>"
    document.getElementById("print").innerHTML = html;
}
