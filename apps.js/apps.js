  const newspaperdate = document.getElementById("newspaper-date");
    const readMoreLink = document.getElementById("readMoreLink");
    const extraContent = document.getElementById("extraContent");
    const readMoreLink1 = document.getElementById("readMoreLink1");
    const extraContent1 = document.getElementById("extraContent1");
    const readMoreLink2 = document.getElementById("readMoreLink2");
    const extraContent2 = document.getElementById("extraContent2");
    const readMoreLink3 = document.getElementById("readMoreLink3");
    const extraContent3 = document.getElementById("extraContent3");
    
 
function displayDate() {
 const today = new Date();
   const options = { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  };

  const formattedDate = today.toLocaleDateString("en-US", options);


  newspaperdate.textContent = formattedDate;
}
displayDate();

    readMoreLink.onclick = () => {
      if (extraContent.style.display === "none") {
        extraContent.style.display = "inline";
        readMoreLink.textContent = "Read Less"; 
      } else {
        extraContent.style.display = "none";
        readMoreLink.textContent = "Read More"; 
      }
    };

    readMoreLink1.onclick = () => {
      if (extraContent1.style.display === "none") {
        extraContent1.style.display = "inline"; 
        readMoreLink1.textContent = "Read Less"; 
      } else {
        extraContent1.style.display = "none"; 
        readMoreLink1.textContent = "Read More";
      }
    };
    readMoreLink2.onclick = () => {
      if (extraContent2.style.display === "none") {
        extraContent2.style.display = "inline"; 
        readMoreLink2.textContent = "Read Less"; 
      } else {
        extraContent2.style.display = "none"; 
        readMoreLink2.textContent = "Read More";
      }
    };
    readMoreLink3.onclick = () => {
      if (extraContent3.style.display === "none") {
        extraContent3.style.display = "inline"; 
        readMoreLink3.textContent = "Read Less"; 
      } else {
        extraContent3.style.display = "none"; 
        readMoreLink3.textContent = "Read More";
      }
    };
    document.addEventListener("DOMContentLoaded", () => {
      const newsCards = document.querySelectorAll(".card");
    
      newsCards.forEach((card) => {
        card.addEventListener("click", () => {
          alert(`You clicked on: ${card.querySelector("p").textContent}`);
        });
      });
    });
 
    