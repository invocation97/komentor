const learningContentTextarea = document.getElementById('learningContent');
const teachersFeedbackTextarea = document.getElementById('teachersFeedback');

document.getElementById('learningContentSave').addEventListener('click', saveLearningContent);
document.getElementById('teachersFeedbackSave').addEventListener('click', saveTeachersFeedback);

window.addEventListener('load', loadSavedContents);

function saveLearningContent() {
  const learningContent = learningContentTextarea.value;
  sessionStorage.setItem('learningContent', learningContent);
}

function saveTeachersFeedback() {
  const teachersFeedback = teachersFeedbackTextarea.value;
  sessionStorage.setItem('teachersFeedback', teachersFeedback);
}

function loadSavedContents() {
  const savedLearningContent = sessionStorage.getItem('learningContent');
  const savedTeachersFeedback = sessionStorage.getItem('teachersFeedback');

  if (savedLearningContent) {
    learningContentTextarea.value = savedLearningContent;
  }

  if (savedTeachersFeedback) {
    teachersFeedbackTextarea.value = savedTeachersFeedback;
  }
}
