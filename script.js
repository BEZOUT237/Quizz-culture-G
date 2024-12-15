
        const questions = [
            {
                question: "Quel est le plus grand océan du monde?",
                answer: "Pacifique"
            },
            {
                question: "Qui a écrit 'Les Misérables'?",
                answer: "Victor Hugo"
            },
            {
                question: "Quelle est la capitale de l'Australie?",
                answer: "Canberra"
            },
            {
                question: "Combien de continents y a-t-il sur Terre?",
                answer: "7"
            },
            {
                question: "Quel est le symbole chimique de l'or?",
                answer: "Au"
            },
            {
                question: "Qui est le père de la psychanalyse?",
                answer: "Sigmund Freud"
            },
            {
                question: "Quel animal est connu comme le roi de la jungle?",
                answer: "Lion"
            },
            {
                question: "Quel est le pays le plus peuplé du monde?",
                answer: "Chine"
            },
            {
                question: "En quelle année a eu lieu la Révolution française?",
                answer: "1789"
            },
            {
                question: "Quel est l'élément le plus abondant dans l'univers?",
                answer: "Hydrogène"
            },
            {
                question: "Quel est le plus grand désert du monde?",
                answer: "Sahara"
            },
            {
                question: "Qui a peint la Mona Lisa?",
                answer: "Leonard de Vinci"
            },
            {
                question: "Quel est le plus long fleuve du monde?",
                answer: "Amazone"
            },
            {
                question: "Quelle est la langue la plus parlée au monde?",
                answer: "Mandarin"
            },
            {
                question: "Quel est le plus grand pays du monde par superficie?",
                answer: "Russie"
            }
        ];

        let currentQuestions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let userName = '';

        const quizContainer = document.getElementById('quizContainer');
        const messageDiv = document.getElementById('message');
        const startQuizButton = document.getElementById('startQuiz');
        const userNameInput = document.getElementById('userName');

        const startQuiz = () => {
            userName = userNameInput.value.trim();
            if (!userName) {
                messageDiv.textContent = 'Veuillez entrer votre nom.';
                return;
            }
            currentQuestionIndex = 0;
            score = 0;
            messageDiv.textContent = '';
            userNameInput.style.display = 'none';
            startQuizButton.style.display = 'none';
            currentQuestions = getRandomQuestions(questions, 10);
            askQuestion();
        };

        const askQuestion = () => {
            if (currentQuestionIndex < currentQuestions.length) {
                const currentQuestion = currentQuestions[currentQuestionIndex];
                const userAnswer = prompt(`${currentQuestion.question}`);

                if (userAnswer) {
                    if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
                        score++;
                    } else {
                        messageDiv.innerHTML = `Mauvaise réponse! La bonne réponse était: <strong>${currentQuestion.answer}</strong>`;
                    }
                }
                currentQuestionIndex++;
                askQuestion();
            } else {
                displayScore();
            }
        };

        const getRandomQuestions = (questionsArray, numQuestions) => {
            const shuffled = questionsArray.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, numQuestions);
        };

        const displayScore = () => {
            quizContainer.innerHTML = `<h1>Merci, ${userName}!</h1><p>Votre score: ${score} / ${currentQuestions.length}</p>`;
        };

        startQuizButton.addEventListener('click', startQuiz);
    