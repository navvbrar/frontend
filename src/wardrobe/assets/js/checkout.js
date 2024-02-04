$(function () {
  var $registerform = $(".checkout-detail-form");
  $.validator.addMethod(
    "noSpace",
    function (value, element) {
      return value == "" || value.trim().length != 0;
    },
    "Spaces are not allowed"
  );
  if ($registerform.length) {
    $registerform.validate({
      rules: {
        first_name: {
          required: true,
          maxlength: 20,
          noSpace: true,
        },
        last_name: {
          required: true,
          maxlength: 20,
          noSpace: true,
        },
        email: {
          required: true,
          email: true,
          noSpace: true,
        },
        phone_number: {
          required: true,
          number: true,
          noSpace: true,
        },
      },
      messages: {
        first_name: {
          required: "*Please enter the first name !!",
        },
        last_name: {
          required: "*Please enter the last name!!",
        },
        email: {
          required: "*Please enter the email address!!",
        },
        phone_number: {
          required: "*Please enter the phone number !!",
        },
      },
    });
  }

  $(".full-btn .btn").click(function (e) {
    // e.preventDefault();
    if ($registerform.valid()) {
      return true;
    } else {
      return false;
    }
  });
});
