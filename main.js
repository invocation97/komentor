const learningContentTextarea = document.getElementById('learningContent')
const teachersFeedbackTextarea = document.getElementById('teachersFeedback')

learningContentTextarea.addEventListener('click', saveLearningContent)
teachersFeedbackTextarea.addEventListener('click', saveTeachersFeedback)

window.addEventListener('load', loadSavedContents);

function saveLearningContent(){
    const learningContent = learningContentTextarea.value
    localStorage.setItem('learningContent', learningContent)
}

function saveTeachersFeedback() {
    const teachersFeedback = teachersFeedbackTextarea.value;
    localStorage.setItem('teachersFeedback', teachersFeedback);
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