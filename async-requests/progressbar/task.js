document.forms.onsubmit = function() {
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
    xhr.upload.onprogress = function(event) {
      log(event.loaded + ' / ' + event.total);
    }
  
    // обработчики успеха и ошибки
    // если status == 200, то это успех, иначе ошибка
    xhr.onload = xhr.onerror = function() {
      if (this.status == 200) {
        log("success");
      } else {
        log("error " + this.status);
      }
    };
  
    xhr.open("POST", "upload", true);
    xhr.send(file);
  
}