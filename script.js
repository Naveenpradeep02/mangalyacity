document.addEventListener("DOMContentLoaded", (event) => {
  // Get the modal
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const openModalButtons = document.querySelectorAll(".open-modal-btn");

  // Get the <span> element that closes the modal
  const closeModalButton = document.querySelector(".modal .close");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Add event listeners to all open modal buttons
  openModalButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  // Add event listener to the close button
  closeModalButton.addEventListener("click", closeModal);

  // Add event listener to close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("newModal");
  var span = document.getElementsByClassName("new-close")[0];

  // Function to get cookie value by name
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Function to set cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Check if the user has visited the site before
  //!getCookie('visitedNew')
 
    modal.style.display = "block";
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

document
  .getElementById("modalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById("modalForm");
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const countryCode = document.getElementById("countryCode").value;

    const formData = new FormData();

    formData.append("userName",userName)
    formData.append("email",email)
    formData.append("mobile",mobile)
    formData.append("countryCode",countryCode)

   //const url = "https://localhost/mangalyan_city/booking_details"

    const url = "https://www.mdqualityapps.in/API/mangalyacity/booking_details"

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if(!data.error){
          form.reset();
         
        }
        alert(data.message);
        // Handle success (e.g., show a success message or close the modal)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (e.g., show an error message)
      });
  });

  document
  .getElementById("newModalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById("newModalForm");
    const userName = document.getElementById("newName").value;
    const email = document.getElementById("newEmail").value;
    const mobile = document.getElementById("newmobile").value;
    const countryCode = document.getElementById("newcountryCode").value;

    const formData = new FormData();

    formData.append("userName",userName)
    formData.append("email",email)
    formData.append("mobile",mobile)
    formData.append("countryCode",countryCode)

   //const url = "https://localhost/mangalyan_city/booking_details"

    const url = "https://www.mdqualityapps.in/API/mangalyacity/booking_details"

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if(!data.error){
          form.reset();
         
        }
        alert(data.message);
        // Handle success (e.g., show a success message or close the modal)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (e.g., show an error message)
      });
  });



// Close modal functionality
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

//Display the modal (for example purposes, you might want to handle this differently)
//document.getElementById("myModal").style.display = "block";
