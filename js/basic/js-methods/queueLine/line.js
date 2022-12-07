let queueLine = [
  "Бат",
  "Дорж",
  "Пунцаг",
  "Готов",
  "Баяраа",
  "Болд",
  "Навчаа",
  "Гончигсумлай",
  "Цэцгээ",
  "Нэргүй",
  "Бальбийгомбо",
  "Баатар",
  "Сүхээ",
];

queueLine.splice(queueLine.indexOf("Гончигсумлай"), 0, "egch1", "egch2");

console.log("last 10 person is: " + queueLine.slice(0, 10).join(", "));
