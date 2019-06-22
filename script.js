var R = prompt('Введите радиус окружности основы цилиндра (в см');
var H = prompt('Введите высоту цилиндра (в см)');
var S = Math.PI * Math.pow(R,2);
var V = S * H;
var S = (Math.round(S * 100) / 100);
var V = (Math.round(V * 100) / 100);

document.write("Обьем цилиндра с площадью основы " + S + "см2, радиусом " + R + "см и высотой " + H + "см равен: " + V +"см3");