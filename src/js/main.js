import Inputmask from "inputmask";

$(function () {
  const form = $("#form");
  const checkbox = $("#checkbox");
  const submitBtn = $("#submitBtn");
  Inputmask("+33 999 999 99 99").mask("#phone");

  checkbox.on("change", function (e) {
    if (checkbox.is(":checked")) {
      submitBtn.removeAttr("disabled");
    } else {
      submitBtn.attr("disabled", "disabled");
    }
  });

  $.validator.addMethod(
    "phoneMask",
    function (value, element) {
      return /^\+\d{2} \d{3} \d{3} \d{2} \d{2}$/.test(value);
    },
    "Не верный формат телефона"
  );

  form.validate({
    rules: {
      first_name: {
        required: true,
      },
      last_name: {
        required: true,
      },
      address: {
        required: true,
      },
      postcode: {
        required: true,
      },
      city: {
        required: true,
      },
      phone: {
        required: true,
        phoneMask: true,
      },
      email: {
        required: true,
      },
    },
    messages: {
      first_name: {
        required: "Обязательное поле*",
      },
      last_name: {
        required: "Обязательное поле*",
      },
      address: {
        required: "Обязательное поле*",
      },
      postcode: {
        required: "Обязательное поле*",
      },
      city: {
        required: "Обязательное поле*",
      },
      phone: {
        required: "Обязательное поле*",
        phoneMask: "Не верный формат телефона",
      },
      email: {
        required: "Обязательное поле*",
      },
    },
    submitHandler: function () {
      const formData = form.serialize();
      window.location.replace(`https://www.google.com/&${formData}`);
    },
  });
});
