// $('button').click(function () {
//   $('p').hide();
// });

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = $('.needs-validation');
  //   console.log(forms);
  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });

  $('input.mujer').focus(function () {
    $('h1').css('color', '#ffc0cb');
    $('input').css('background', '#ffc0cb');
    $('svg').css('color', '#ffc0cb');
  });
  $('input.hombre').focus(function () {
    $('h1').css('color', '#87ceeb');
    $('input').css('background', '#87ceeb');
    $('svg').css('color', '#87ceeb');
  });

  // $("#id").val( ) = newVal
})();
