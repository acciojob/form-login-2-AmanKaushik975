//your JS code here. If required.
function onSubmit() {
      var form = document.getElementById('myForm');
      var alertText = '';
      for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].name) {
          alertText += form.elements[i].name + ': ' + form.elements[i].value + ' ';
        }
      }
      alert(alertText);
    }