var currentTab = 0; // Текущая вкладка будет первой вкладкой (0)
showTab(currentTab); // Отображение текущей вкладки

function showTab(n) {
  // Эта функция отобразит указанную вкладку формы ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  // ... и запустите функцию, которая отображает правильный индикатор шага:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // Эта функция определит, какую вкладку отображать
  var x = document.getElementsByClassName("tab");
  // Скрыть текущую вкладку:
  x[currentTab].style.display = "none";
  // Увеличение или уменьшение текущей вкладки на 1:
  currentTab = currentTab + n;
  // Отобразите правильную вкладку:
  showTab(currentTab);
}


function fixStepIndicator(n) {
  // Эта функция удаляет "активный" класс всех шагов...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... и добавляет "активный" класс к текущему шагу:
  x[n].className += " active";
}
