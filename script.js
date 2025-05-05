function startQuiz() {
    let score = 0;
    const operators = ["+", "-", "*","/"];
    let attempt=0;
    while (true) {
      const num1 = Math.floor(Math.random() * 20) + 1;
      const num2 = Math.floor(Math.random() * 20) + 1;
      const operator = operators[Math.floor(Math.random() * operators.length)];
      const question = `${num1} ${operator} ${num2}`;
      const userInput = prompt(`What is ${question}? (type 'exit' to quit)`);
      attempt++;
    
      if (userInput === null || userInput.toLowerCase() === 'exit') break;
  
      const userAnswer = parseFloat(userInput);
      let correctAnswer;
      if(operator==="+"){
        correctAnswer=num1+num2
      }
      else if(operator==="-"){
        correctAnswer=num1-num2
      }
      else if(operator==="*"){
        correctAnswer=num1*num2
      }
      else{
        correctAnswer=num1/num2
      }
      if (Math.abs(userAnswer === correctAnswer)) {
        alert("Correct!");
        score++;
      } else {
        alert(`Incorrect. The correct answer was ${correctAnswer}.`);
      }
    }
  
    if (confirm(`You got ${score}/${attempt}.Show results on page?`)) {
      document.getElementById("result").innerText = `Your score: ${score}/${attempt}`;
      document.getElementById("datetime").innerText = `Finished at: ${new Date().toLocaleString()}`;
    }
  }