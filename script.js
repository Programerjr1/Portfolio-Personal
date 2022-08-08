let menu = document.querySelector('.menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick = () =>{
  navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
}

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function validate() {
      let name = document.querySelector('.name');
      let email = document.querySelector('.email');
      let msg = document.querySelector('.message');
      let sendbtn = document.querySelector('.send-btn');

      sendbtn.addEventListener('click', (e) => {
          e.preventDefault();
          if(name.value == "" || email.value == "" || msg.value == "")
          {
              emptyerror();
          }
          else{
              sendmail(name.value, email.value, msg.value);
              success();
          }
      })
  }

  validate();

  function sendmail(name,email,msg){
    emailjs.send("service_lfrys98","template_5lu0gqa",{
        from_name: email,
        to_name: name,
        message: msg,
        });
  }
  function emptyerror(){
    swal({
        title: "Error...",
        text: "Fields cannot be empty!",
        icon: "error",
        button: "Cancel!",
      });
  }
  function success(){
    swal({
        title: "Email Sent successfully",
        text: "We try to reply in 24 hours!",
        icon: "success",
        button: "Ok",
      });
  }

  let header = document.querySelector("header");

  window.addEventListener("scroll",() => {
      header.classList.toggle("header-active",window.scrollY > 0)
  });

