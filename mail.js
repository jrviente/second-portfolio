emailjs.init("fWzLEahbSb_IY4_Iu");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_zpkpboh", "template_8amrsfa", this).then(
      function (response) {
        console.log("Success:", response);
        alert("Your message has been sent successfully!");
      },
      function (error) {
        console.log("Error:", error);
        alert("There was an error sending your message.");
      }
    );
  });
