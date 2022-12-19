
      var openmodal1 = document.querySelectorAll(".modal-open1");
      for (var i = 0; i < openmodal1.length; i++) {
        openmodal1[i].addEventListener("click", function (event) {
          event.preventDefault();
          toggleModal1();
        });
      }

      const overlay1 = document.querySelector(".modal-overlay1");
      overlay1.addEventListener("click", toggleModal1);

      var closemodal1 = document.querySelectorAll(".modal-close1");
      for (var i = 0; i < closemodal1.length; i++) {
        closemodal1[i].addEventListener("click", toggleModal1);
      }

      document.onkeydown = function (evt) {
        evt = evt || window.event;
        var isEscape1 = false;
        if ("key" in evt) {
          isEscape1 = evt.key === "Escape" || evt.key === "Esc";
        } else {
          isEscape1 = evt.keyCode === 27;
        }
        if (isEscape1 && document.body.classList.contains("modal-active1")) {
          toggleModal1();
        }
      };

      function toggleModal1() {
        const body1 = document.querySelector("body");
        const modal1 = document.querySelector(".modal1");
        modal1.classList.toggle("opacity-0");
        modal1.classList.toggle("pointer-events-none");
        body1.classList.toggle("modal-active1");
      }
    