console.log("main.js loaded");
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWgUrK4rO1spfMTBqytgsfXFitcRd0P-A",
  authDomain: "komentor-6cb74.firebaseapp.com",
  projectId: "komentor-6cb74",
  storageBucket: "komentor-6cb74.appspot.com",
  messagingSenderId: "1018810922529",
  appId: "1:1018810922529:web:4d00570460bfb22edcd560",
  measurementId: "G-CB6F1SJP9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


var db = firebase.firestore();

// Example: Save data to Firestore
function saveData() {
  var learningContent = document.getElementById("learningContent").value;
  var teachersFeedback = document.getElementById("teachersFeedback").value;

  db.collection("comments").add({
    learningContent: learningContent,
    teachersFeedback: teachersFeedback
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
}



const learningContentTextarea = document.getElementById('learningContent')
const teachersFeedbackTextarea = document.getElementById('teachersFeedback')

learningContentTextarea.addEventListener('click', saveLearningContent)
teachersFeedbackTextarea.addEventListener('click', saveTeachersFeedback)

window.addEventListener('load', loadSavedContents);



function saveLearningContent(){
    const learningContent = learningContentTextarea.value
    localStorage.setItem('learningContent', learningContent)
    console.log(localStorage.getItem(learningContent))
}

function saveTeachersFeedback() {
    const teachersFeedback = teachersFeedbackTextarea.value;
    localStorage.setItem('teachersFeedback', teachersFeedback);
    console.log(localStorage.getItem(teachersFeedback))
  }

function loadSavedContents() {
const savedLearningContent = localStorage.getItem('learningContent');
const savedTeachersFeedback = localStorage.getItem('teachersFeedback');

if (savedLearningContent) {
    learningContentTextarea.value = savedLearningContent;
}

if (savedTeachersFeedback) {
    teachersFeedbackTextarea.value = savedTeachersFeedback;
}
}