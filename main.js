console.log("main.js loaded");

window.addEventListener("load", function() {
  alert("main.js has been loaded!");
});

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