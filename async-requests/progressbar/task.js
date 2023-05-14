document.forms.form.onsubmit = function (e) {
  e.preventDefault()
  var input = this.elements.file;
  var file = input.files[0];
  if (file) {
    upload(file);
  }
  return false;
}

function upload(file) {

  var xhr = new XMLHttpRequest();

  // обработчик для отправки
  xhr.upload.onprogress = function (event) {
    let progress = document.getElementById('progress');
    progress.value = (event.loaded / event.total);
  }

  // обработчики успеха и ошибки
  // если status == 201, то это успех, иначе ошибка
  xhr.onload = xhr.onerror = function () {
    if (this.status == 201) {
      console.log("success");
    } else {
      console.log("error " + this.status);
    }
  };

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true);
  xhr.send(file);

}