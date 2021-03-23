var question
question = document.querySelector(".Assessment__question").innerHTML
question = question.replaceAll("<br>", "")
question = question.replace("            ", "")
console.log(question)