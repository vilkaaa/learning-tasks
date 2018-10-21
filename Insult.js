var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random()*3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random()*3)];
var randomWord = randomWords[Math.floor(Math.random()*5)];
var randomInsult = "У тебя " + randomBodyPart + " словно " +randomAdjective + " " + randomWord + "!!!";
randomInsult;