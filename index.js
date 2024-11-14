const violenceTypes = [
    {
        type: "Violencia Física",
        description: "La violencia física incluye cualquier acto de fuerza contra el cuerpo de la mujer, con resultado o riesgo de producir lesión física o daño. Estos actos de violencia física contra la mujer pueden ser ejercidos por hombres con quienes tenga o haya tenido relaciones de pareja, o por hombres de su entorno familiar, social y laboral.",
        image: "img/violencia-mujeres.webp"
    },
    {
        type: "Violencia Psicológica",
        description: "La violencia psicológica incluye toda conducta, verbal o no verbal, que produzca en la mujer desvalorización o sufrimiento, a través de amenazas, humillaciones o vejaciones, exigencia de obediencia o sumisión, coerción, insultos, aislamiento, culpabilización o limitaciones de su ámbito de libertad.",
        image: "img/zaiat_violencia.webp"
    },
    {
        type: "Violencia Sexual",
        description: "La violencia sexual comprende cualquier acto de naturaleza sexual forzada por el agresor o no consentida por la mujer, y que abarcan la imposición, mediante la fuerza o con intimidación, de relaciones sexuales no consentidas, y el abuso sexual, con independencia de que el agresor guarde o no relación conyugal, de pareja, afectiva o de parentesco con la víctima.",
        image: "img/file-20240405-17-beli7n.webp"
    },
    {
        type: "Violencia Económica",
        description: "Toda conducta dirigida a limitar, controlar o impedir ingresos económicos de una mujer, incluso el no pago contumaz de las obligaciones alimentarias, con el fin de menoscabar su autonomía.",
        image: "img/female-hands-in-shackles-offering-euro-banknotes-1024x684.webp"
    },
    {
        type: "Violencia por Orientación Sexual",
        description: "Es aquella que tiene como objetivo reprimir y sancionar a quienes no cumplen las normas tradicionales de género, sea por su orientación sexual, identidadde género o expresión de género.",
        image: "img/violencia_por_prejuicio.webp"
    },
    {
        type: "Violencia Patrimonial",
        description: "Toda conducta dirigida a afectar la libre disposición del patrimonio de una mujer, mediante la sustracción, destrucción, distracción, daño, pérdida, limitación o retención de objetos, documentos personales, instrumentos de trabajo, bienes, valores y derechos patrimoniales.",
        image: "img/violencia-patrimonial-e1618849858357.webp"
    },
    {
        type: "Violencia Simbólica",
        description: "Es la ejercida a través de mensajes, valores, símbolos, íconos, imágenes, signos e imposiciones sociales, económicas, políticas, culturales y de creencias religiosas que transmiten, reproducen y consolidan relaciones de dominación, exclusión, desigualdad y discriminación, que contribuyen a naturalizar la subordinación de las mujeres.",
        image: "img/KFMELNDMOVDV5G5SAAKMSZ7UAA.webp"
    },
    {
        type: "Violencia Obstétrica",
        description: "Toda acción, omisión y patrón de conducta del personal de la salud en los procesos reproductivos de una mujer, que afecte su autonomía para decidir libremente sobre su cuerpo o abuso de técnicas y procedimientos invasivos.",
        image: "img/0yc35q20ya74zct6tm2jpn0i9.webp"
    },
    {
        type: "Violencia Laboral",
        description: "Es la ejercida en el contexto laboral, por medio de actos que obstaculizan el acceso de una mujer al trabajo, el ascenso o estabilidad en el mismo, tales como el acoso moral, el sexual, la exigencia de requisitos sobre el estado civil, la edad, la apariencia física, la solicitud de resultados de exámenes de laboratorios clínicos, fuera de lo establecido en los marcos legales aplicables, o la disminución del salario correspondiente a la tarea ejercida por el hecho de ser mujer.",
        image: "img/violencia-laboral.webp"
    },
    {
        type: "Violencia en el Ámbito Educativo",
        description: "Es la violencia ejercida contra una mujer por su condición de tal en una relación educativa, con abuso de poder, incluyendo el acoso sexual, que daña la autoestima, salud, integridad, libertad y seguridad de la víctima y atenta contra la igualdad.",
        image: "img/bullying-744x465.webp"
    },
    {
        type: "Violencia Política",
        description: "Todo acto de presión, persecución, hostigamiento o cualquier tipo de agresión a una mujer o a su familia, en su condición de candidata, electa o en ejercicio de la representación política, para impedir o restringir el libre ejercicio de su cargo o inducirla a tomar decisiones en contra de su voluntad.",
        image: "img/Portada-ODOD-25.webp"
    },
    {
        type: "Violencia Mediática",
        description: "Toda publicación o difusión de mensajes e imágenes a través de cualquier medio masivo de comunicación, que de manera directa o indirecta promueva la explotación de las mujeres o sus imágenes, injurie, difame, discrimine, deshonre, humille o atente contra la dignidad de las mujeres, legitime la desigualdad de trato o construya patrones socioculturales reproductores de la desigualdad o generadores de violencia contra las mujeres.",
        image: "img/QJMBDHW4PZA6BBAFY4XFTBJO5M.webp"
    },
    {
        type: "Violencia Femicida",
        description: "Es la acción de extrema violencia que atenta contra el derecho fundamental a la vida y causa la muerte de una mujer por el hecho de serlo, o la de sus hijas, hijos u otras personas a su cargo, con el propósito de causarle sufrimiento o daño.",
        image: "img/amenaza-mujer-con-cuchillo.webp"
    },
    {
        type: "Violencia Doméstica",
        description: "Constituye violencia doméstica toda acción u omisión, directa o indirecta, que menoscabe limitando ilegítimamente el libre ejercicio o goce de los derechos humanos de una mujer, ocasionada por una persona con la cual tenga o haya tenido una relación de parentesco, matrimonio, noviazgo, afectiva o concubinaria.",
        image: "img/diferencia-violencia-genero-y-domestica.webp"
    }
];

function createViolenceType(type, index, hidden = false) {
    const section = document.createElement('section');
    section.className = `violence-type ${hidden ? 'hidden' : ''}`;
    const titleWords = type.type.split(' ');
    const highlightedTitle = `<span class="highlight">${titleWords[0]}</span> ${titleWords.slice(1).join(' ')}`;
    section.innerHTML = `
        <div class="container">
            <div class="row align-items-center">
                <div class="${index % 2 === 0 ? 'col-md-6 order-md-1' : 'col-md-6 order-md-2'}">
                    <img src="${type.image}" alt="${type.type}" class="img-fluid mb-4 mb-md-0 rounded">
                </div>
                <div class="${index % 2 === 0 ? 'col-md-6 order-md-2' : 'col-md-6 order-md-1'}">
                    <h2>${highlightedTitle}</h2>
                    <p>${type.description}</p>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createViolenceTypes() {
    const container = document.getElementById('violenceTypes');
    violenceTypes.forEach((type, index) => {
        const section = createViolenceType(type, index, index >= 4);
        if (index === 1) {
            const waveDivider = document.createElement('div');
            waveDivider.className = 'wave-divider';
            waveDivider.innerHTML = `
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            `;
            section.appendChild(waveDivider);
        }
        container.appendChild(section);
    });
    if (violenceTypes.length > 4) {
        document.getElementById('loadMoreBtn').style.display = 'block';
    }
}

function loadMore() {
    const hiddenSections = document.querySelectorAll('.violence-type.hidden');
    hiddenSections.forEach(section => {
        section.classList.remove('hidden');
    });
    document.getElementById('loadMoreBtn').style.display = 'none';
}

function checkScroll() {
    const sections = document.querySelectorAll('.violence-type');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

const quizData = [
    {
        question: "¿Cuál de las siguientes NO es un tipo de violencia de género?",
        choices: ["Violencia física", "Violencia psicológica", "Violencia económica", "Violencia deportiva"],
        correctAnswer: 3
    },
    {
        question: "En Uruguay, ¿cuál es el número de teléfono para la línea de ayuda contra la violencia de género?",
        choices: ["911", "0800 4141", "555-1234", "1234"],
        correctAnswer: 1
    },
    {
        question: "La violencia digital es aquella que se ejerce a través de:",
        choices: ["Redes sociales únicamente", "Tecnologías de la información y la comunicación", "Solamente por correo electrónico", "Ninguna de las anteriores"],
        correctAnswer: 1
    },
    {
        question: "¿Qué ley en Uruguay aborda específicamente la violencia hacia las mujeres basada en género?",
        choices: ["Ley 18.561", "Ley 19.580", "Ley 17.514", "Ley 19.846"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de estos NO es un tipo de violencia reconocido por la ley uruguaya?",
        choices: ["Violencia simbólica", "Violencia obstétrica", "Violencia política", "Violencia recreativa"],
        correctAnswer: 3
    },
    {
        question: "¿Qué institución es responsable de las políticas públicas contra la violencia de género en Uruguay?",
        choices: ["Ministerio del Interior", "Ministerio de Salud Pública", "Instituto Nacional de las Mujeres", "Ministerio de Educación y Cultura"],
        correctAnswer: 2
    },
    {
        question: "¿Cuál es el nombre del servicio de atención a mujeres en situación de violencia en Uruguay?",
        choices: ["Servicio de Atención a Mujeres", "Línea Azul", "Servicio de Atención a la Violencia Intrafamiliar", "Comunamujer"],
        correctAnswer: 0
    },
    {
        question: "¿Qué porcentaje aproximado de mujeres en Uruguay ha sufrido violencia de pareja en algún momento de su vida?",
        choices: ["15%", "25%", "35%", "45%"],
        correctAnswer: 2
    },
    {
        question: "¿Cuál de estas acciones NO es considerada violencia económica?",
        choices: ["Limitar el acceso a los ingresos familiares", "Prohibir que la mujer trabaje", "Destruir objetos de valor de la mujer", "Ahorrar dinero sin informar a la pareja"],
        correctAnswer: 3
    },
    {
        question: "¿Qué organismo internacional adoptó la 'Convención de Belém do Pará' para prevenir, sancionar y erradicar la violencia contra la mujer?",
        choices: ["ONU", "OEA", "UNICEF", "OMS"],
        correctAnswer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    choicesEl.innerHTML = "";

    currentQuizData.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.classList.add("btn", "btn-outline-primary", "m-2");
        button.addEventListener("click", () => selectChoice(index));
        choicesEl.appendChild(button);
    });
}

function selectChoice(choiceIndex) {
    const buttons = document.querySelectorAll("#choices button");
    buttons.forEach(button => button.classList.remove("active"));
    buttons[choiceIndex].classList.add("active");
}

function submitAnswer() {
    const selectedButton = document.querySelector("#choices button.active");
    if (!selectedButton) return;

    const selectedAnswer = Array.from(document.querySelectorAll("#choices button")).indexOf(selectedButton);
    const currentQuizData = quizData[currentQuestion];

    if (selectedAnswer === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizEl = document.getElementById("quiz");
    const resultsEl = document.getElementById("results");
    quizEl.style.display = "none";
    const percentage = (score / quizData.length) * 100;
    let message = `<h3>Resultados del Quiz</h3>
                   <p>Has acertado ${score} de ${quizData.length} preguntas.</p>`;
    
    if (percentage >= 70) {
        message += `<div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">¡Felicitaciones!</h4>
                        <p>Has demostrado un excelente conocimiento sobre la violencia de género. Tu comprensión puede marcar la diferencia en la vida de muchas personas.</p>
                    </div>`;
    } else {
        message += `<div class="alert alert-info" role="alert">
                        <h4 class="alert-heading">Buen intento</h4>
                        <p>Gracias por participar. Te animamos a seguir aprendiendo sobre este importante tema.</p>
                    </div>`;
    }
    
    message += `<button onclick="resetQuiz()" class="btn btn-primary">Intentar de nuevo</button>`;
    resultsEl.innerHTML = message;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("results").innerHTML = "";
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    createViolenceTypes();
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    loadQuestion();
    document.getElementById("submit").addEventListener("click", submitAnswer);
    document.getElementById("loadMoreBtn").addEventListener("click", loadMore);

    // Funcionalidad para la galería modal
    const galleryModal = document.getElementById('galleryModal');
    galleryModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const imgSrc = button.getAttribute('data-img');
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');

        const modalTitle = galleryModal.querySelector('.modal-title');
        const modalImg = galleryModal.querySelector('.modal-body img');
        const modalDescription = galleryModal.querySelector('#galleryModalDescription');

        modalTitle.textContent = title;
        modalImg.src = imgSrc;
        modalImg.alt = title;
        modalDescription.textContent = description;
    });
});