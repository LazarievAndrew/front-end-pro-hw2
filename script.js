var cylinderBaseRadius = prompt('Введите радиус окружности основы цилиндра (в см)');
var cylinderHeight = prompt('Введите высоту цилиндра (в см)');
var cylinderBaseArea = Math.PI * Math.pow(cylinderBaseRadius,2);
var cylinderVolume = cylinderBaseArea * cylinderHeight;
var cylinderBaseArea = (Math.round(cylinderBaseArea * 100) / 100);
var cylinderVolume = (Math.round(cylinderVolume * 100) / 100);

document.write("Обьем цилиндра с площадью основы " + cylinderBaseArea + "см2, радиусом " + cylinderBaseRadius + "см и высотой " + cylinderHeight + "см равен: " + cylinderVolume +"см3");