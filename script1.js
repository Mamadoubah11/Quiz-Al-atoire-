// Données des questionnaires
const quizdata = {
    CultureGenerale: [
        {
            question: "Qui a peint la Joconde ?",
            reponse: ["Pablo Picasso", "Léonard de Vinci", "Claude Monet", "Michel-Ange"],
            correct: 1
        },
        {
            question: "Combien y a-t-il de continents sur Terre ?",
            reponse: ["5", "6", "7", "8"],
            correct: 3
        },
        {
            question: "Dans quel pays se trouve la tour Eiffel ?",
            reponse: ["Italie", "France", "Espagne", "Allemagne"],
            correct: 2
        },
        {
            question: "Qui a écrit Roméo et Juliette ?",
            reponse: ["Victor Hugo", "William Shakespeare", "Charles Dickens", "Molière"],
            correct: 2
        },
        {
            question: "Quelle est la langue la plus parlée au monde ?",
            reponse: ["Anglais", "Espagnol", "Arabe", "Mandarin"],
            correct: 4
        },
        {
            question: "Quel scientifique a proposé la théorie de la relativité ?",
            reponse: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
            correct: 3
        },
        {
            question: "Quelle est la monnaie utilisée au Japon ?",
            reponse: ["Yuan", "Won", "Yen", "Ringgit"],
            correct: 3
        },
        {
            question: "En quelle année l’homme a-t-il marché sur la Lune pour la première fois ?",
            reponse: ["1959", "1969", "1979", "1989"],
            correct: 2
        },
        {
            question: "Quel pays a remporté la Coupe du Monde de football en 2018 ?",
            reponse: ["Allemagne", "Brésil", "France", "Argentine"],
            correct: 3
        },
        {
            question: "Quel est le symbole chimique de l’eau ?",
            reponse: ["CO2", "H2O", "NaCl", "O2"],
            correct: 3
        },
    ],
       Technologie: [
        {
            question: "Quelle entreprise a développé le système d'exploitation Android ?",
            reponse: ["Apple", "Google", "Microsoft", "Samsung"],
            correct: 2
        },
        {
            question: "Lequel des éléments suivants est un langage de programmation ?",
            reponse: ["HTML", "Python", "Excel", "Wi-Fi"],
            correct: 2
        },
        {
            question: "Que signifie 'URL' ?",
            reponse: ["Unique Resource Locator", "Uniform Resource Locator", "Universal Response Locator", " United Resource Link"],
            correct: 2
        },
        {
            question: "Lequel est un navigateur web ?",
            reponse: ["Android", "Firefox", "Word", "Instagram"],
            correct: 2
        },
        {
            question: "Lequel n’est pas un langage de programmation ?",
            reponse: ["JavaScript", "HTML", "Python", "Photoshop"],
            correct: 4
        },
        {
            question: "Que fait un antivirus ?",
            reponse: ["Répare les ordinateurs", "Protège contre les programmes malveillants", "Augmente la vitesse de l’internet", "Éteint l’ordinateur"],
            correct: 2
        },
        {
            question: "Que signifie 'IA' ?",
            reponse: ["Informatique Appliquée", "Intelligence Avancée", "Intelligence Artificielle", "Interface Automatique"],
            correct: 3
        },
        {
            question: "Quel est l’unité de mesure de la vitesse d’un processeur ?",
            reponse: ["Hertz", "Octet", "Volt", "Watt"],
            correct: 1
        },
        {
            question: "Lequel de ces objets utilise l’Internet des Objets (IoT) ?",
            reponse: ["Frigo connecté", "Livre", "Four à bois", "Télévision à tube cathodique"],
            correct: 1
        },
        {
            question: "Que permet de faire le Cloud computing ?",
            reponse: ["Créer des nuages artificiels", "Stocker des données à distance", "Produire de l'électricité", "Nettoyer le disque dur"],
            correct: 2
        },
    ],
    Geographie: [
        {
            question: "Quelle est la capitale du Canada ?",
            reponse: ["Toronto", "Vancouver", "Ottawa", "Montréal"],
            correct: 3
        },
        {
            question: "Quel est le plus long fleuve du monde ?",
            reponse: ["Amazone", "Nil", "Mississippi", "Congo"],
            correct: 2
        },
        {
            question: "Quelle chaîne de montagnes traverse l’Europe ?",
            reponse: ["Rocheuses", "Alpes", "Andes", "Himalaya"],
            correct: 2
        },
        {
            question: "Quel pays est une île ?",
            reponse: ["Portugal", "Madagascar", "Égypte", "Chili"],
            correct: 2
        },
        {
            question: "Quelle mer borde la Guinée ?",
            reponse: ["Mer Noire", "Mer Méditerranée", "Océan Atlantique", "Mer Rouge"],
            correct: 3
        },
        {
            question: "Le Mont Kilimandjaro se trouve en :",
            reponse: ["Afrique du Sud", "Tanzanie", "Kenya", "Éthiopie"],
            correct: 2
        },
        {
            question: "Quelle est la capitale de la Guinée ?",
            reponse: ["Bamako", "Conakry", "Dakar", "Abidjan"],
            correct: 2
        },
        {
            question: "Quelle est la plus grande île du monde ?",
            reponse: ["Australie", "Islande", "Groenland", "Madagascar"],
            correct: 3
        },
        {
            question: "Quel pays a la plus grande population ?",
            reponse: ["États-Unis", "Inde", " Chine", "Russie"],
            correct: 2
        },
        {
            question: "Le Sahara est un désert situé en :",
            reponse: ["Amérique", "Asie", "Afrique", "Europe"],
            correct: 3
        },
    ],
    Ecm: [
        {
            question: "Une démocratie est un régime où :",
            reponse: ["Le pouvoir appartient à un roi", "Le peuple élit ses dirigeants", "Le pouvoir est détenu par les militaires", "Le président est nommé à vie"],
            correct: 2
        },
        {
            question: "La Déclaration Universelle des Droits de l’Homme a été adoptée en :",
            reponse: ["1776", "1945", "1948", "1960"],
            correct: 3
        },
        {
            question: "Quel est l’objectif de la justice ?",
            reponse: ["Récompenser les riches", "Punir tous les citoyens", "Assurer l’équité et faire respecter la loi", "Favoriser les politiciens"],
            correct: 3
        },
        {
            question: "Quel est l'âge minimum pour voter en Guinée ?",
            reponse: ["15 ans", "18 ans", "21 ans", "25 ans"],
            correct: 2
        },
        {
            question: "Un bon citoyen est celui qui :",
            reponse: ["Ignore les lois", "Respecte ses devoirs et ses droits", "Travaille uniquement pour lui-même", "Travaille uniquement pour lui-même"],
            correct: 2
        },
        {
            question: "Quel est le rôle du Président de la République ?",
            reponse: ["Rédiger les lois", "Appliquer les lois et représenter l'État", "Diriger le parlement", "Commander la police locale"],
            correct: 2
        },
        {
            question: "Le civisme consiste à :",
            reponse: ["Défendre ses propres intérêts", "Respecter les règles de la vie collective", "S'opposer à toute autorité", "Voter contre tous les projets"],
            correct: 2
        },
        {
            question: "Une constitution est :",
            reponse: ["Une promesse électorale", "Un discours politique", " La loi fondamentale d’un pays", "Un règlement d’école"],
            correct: 3
        },
        {
            question: "Lequel est un symbole de l’État ?",
            reponse: ["Le stylo", "L’hymne national", "Le drapeau d’un club", "La maison familiale"],
            correct: 2
        },
        {
            question: "Le respect de l’environnement est un exemple :",
            reponse: ["D’acte civique", "De politique étrangère", "D’économie de marché", "De culture personnelle uniquement"],
            correct: 1
        },
    ]
};

// État global du quiz
let courantcategories = '';
let courantquestions = [];
let courantquestionsindex = 0;
let score = 0;

// Références DOM
const home = document.querySelector('.home');
const quizcache = document.getElementById('quizcache');
const ecranresultat = document.getElementById('ecranresultat');
const categoriecontenaire = document.getElementById('categoriecontenaire');
const randomquizbtn = document.getElementById('randomquiz');
const quizcategorieselement = document.getElementById('quizcategories1');
const questionscountelement = document.getElementById('questionscount');
const progressbar = document.getElementById('progressbar');
const questiontexteElement = document.getElementById('questiontexte');
const reponsescontainerElement = document.getElementById('reponsescontainer');
const scorefinalElement = document.getElementById('scorefinal');
const pourcentageElement = document.getElementById('pourcentage');
const resultmessage = document.getElementById('resultmessage');
const restartquizbtn = document.getElementById('restartquiz');
const newquizbtn = document.getElementById('newquiz');

// Initialisation
function initApp() {
    // Génère les boutons de catégories
    for (const categorie in quizdata) {
        const boutton = document.createElement('button');
        boutton.className = 'btn btn-primaire';
        boutton.textContent = formatcategorieNom(categorie);
        boutton.addEventListener('click', () => startQuiz(categorie));
        categoriecontenaire.appendChild(boutton);
    }

    // Écouteurs d'événements
    randomquizbtn.addEventListener('click', startRandomQuiz);
    restartquizbtn.addEventListener('click', restartQuiz);
    newquizbtn.addEventListener('click', goToHome);
}

// Démarre un quiz de catégorie spécifique
function startQuiz(categorie) {
    courantcategories = categorie;
    
    // 1. Mélange et sélectionne 5 questions
    courantquestions = [...quizdata[categorie]];
    shuffleArray(courantquestions);
    courantquestions = courantquestions.slice(0, 5);
    
    // 2. Réinitialise l'état
    courantquestionsindex = 0;
    score = 0;

    showquiz();
    showquestions();
}

// Démarre un quiz mixte
function startRandomQuiz() {
    // 1. Fusionne toutes les questions
    let toutesQuestions = [];
    for (const categorie in quizdata) {
        toutesQuestions.push(...quizdata[categorie]);
    }
    
    // 2. Mélange et sélectionne 5 questions
    shuffleArray(toutesQuestions);
    courantquestions = toutesQuestions.slice(0, 5);
    
    // 3. Paramètre le mode
    courantcategories = 'Mixte';
    courantquestionsindex = 0;
    score = 0;

    showquiz();
    showquestions();
}

// Affiche l'interface du quiz
function showquiz() {
    home.style.display = 'none';
    ecranresultat.style.display = 'none';
    quizcache.style.display = 'block';
    
    // Affiche le nom de la catégorie
    quizcategorieselement.textContent = courantcategories === 'Mixte' 
        ? 'Catégories Mixtes' 
        : formatcategorieNom(courantcategories);
}

// Affiche une question
function showquestions() {
    const question = courantquestions[courantquestionsindex];
    const progress = (courantquestionsindex / 5) * 100; // Basé sur 5 questions

    // Met à jour l'interface
    questionscountelement.textContent = `Question ${courantquestionsindex + 1}/5`;
    progressbar.style.width = `${progress}%`;
    questiontexteElement.textContent = question.question;

    // Génère les boutons de réponse
    reponsescontainerElement.innerHTML = '';
    question.reponse.forEach((reponse, index) => {
        const reponseBtn = document.createElement('button');
        reponseBtn.className = 'reponse-btn';
        reponseBtn.textContent = reponse;
        reponseBtn.addEventListener('click', () => selectAnswer(index));
        reponsescontainerElement.appendChild(reponseBtn);
    });
}

// Gère la sélection de réponse 
function selectAnswer(index) {
    // Vérifie la réponse
    if (index === courantquestions[courantquestionsindex].correct -1) score++;
    
    // Passe à la question suivante ou affiche les résultats
    courantquestionsindex++;
    courantquestionsindex < 5 ? showquestions() : showResults();
}

// Affiche les résultats finaux
function showResults() {
    const pourcentage = Math.round((score / 5) * 100); // Basé sur 5 questions
    
    // Met à jour l'affichage
    scorefinalElement.textContent = `${score}/5`;
    pourcentageElement.textContent = `${pourcentage}% de bonnes réponses`;
    resultmessage.textContent = getResultMessage(pourcentage);
    
    // Affiche l'écran de résultats
    quizcache.style.display = 'none';
    ecranresultat.style.display = 'block';
}

// Outils utilitaires
function formatcategorieNom(categorie) {
    return categorie.replace(/([A-Z])/g, ' $1'); // "CultureGenerale" → "Culture Generale"
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Mélange Fisher-Yates
    }
}

function getResultMessage(pourcentage) {
    return pourcentage >= 80 ? "🌟 Excellent !" 
         : pourcentage >= 50 ? "👍 Correct !" 
         : "😞 À améliorer...";
}

// Navigation
function restartQuiz() {
    courantcategories === 'Mixte' ? startRandomQuiz() : startQuiz(courantcategories);
}

function goToHome() {
    home.style.display = 'block';
    ecranresultat.style.display = 'none';
    quizcache.style.display = 'none';
}

// Démarrage
document.addEventListener('DOMContentLoaded', initApp);