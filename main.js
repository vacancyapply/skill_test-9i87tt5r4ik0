//alert("Hi there, Please note that our side is currently under maintainance, some functions are disabled, Thank you. Click ok to continue");

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


const jobs = [
  {
    title: "Software Engineer Program",
    image: "images/software-engineer.svg",
    details:
      "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "16",
    link: "#",
  },

  {
    title: "Data Scientist Program",
    image: "images/data-scientist.svg",
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "13",
    link: "#",
  },

  {
    title: "Administrator Program",
    image: "images/project-manager.svg",
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "21",
    link: "#",
  },

  {
    title: "Product Manager Program",
    image: "images/product-manager.svg",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "5",
    link: "#",
  },

  {
    title: "Sales Representative Programs",
    image: "images/sales-representative.svg",
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    link: "#",
  },

  {
    title: "Marketing Program",
    image: "images/marketing-manager.svg",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "8",
    link: "#",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
const inputBox = document.querySelector(".inputSec input");
const startBtn = document.querySelector(".inputBtn");
const test = document.querySelector(".test");
const display = document.getElementById("display");
const noBtn = document.querySelector(".no");

noBtn.addEventListener("click", ()=>{
  test.style.display = "None";
})

inputBox.addEventListener("keyup", ()=>{
  let userData = inputBox.value;
   switch (userData) {
      case"641352":
      test.style.display = "flex";
      display.innerText = "Jonker Shandre";
      break;

      case"731432":
      test.style.display = "flex";
      display.innerText = "Mohau Hope";
      break;

      case"623115":
      test.style.display = "flex";
      display.innerText = "Lwazi Zinto";
      break;

      case"176473":
      test.style.display = "flex";
      display.innerText = "Samantha Jacobs";
      break;

      case"849161":
      test.style.display = "flex";
      display.innerText = "Samuels Nogammed";
      break;

      case"223125":
      test.style.display = "flex";
      display.innerText = "Mpho Motlhabi";
      break;

      case"263451":
      test.style.display = "flex";
      display.innerText = "Busiswa Sibhozo";
      break;

      case"554170":
      test.style.display = "flex";
      display.innerText = "Shihaum Willoughby";
      break;

      case"479718":
      test.style.display = "flex";
      display.innerText = "Chelsea Marchart";
      break;

      case"795273":
      test.style.display = "flex";
      display.innerText = "Apiwe Nyanga";
      break;

      case"630641":
      test.style.display = "flex";
      display.innerText = "Tashriq Samsodien";
      break;

      case"884460":
      test.style.display = "flex";
      display.innerText = "Tammy-lee Brangt";
      break;

      case"159163":
      test.style.display = "flex";
      display.innerText = "Samboer Eugene";
      break;

      case"632041":
      test.style.display = "flex";
      display.innerText = "Kessia Cruz";
      break;


  default:
    {
      test.style.display = "None";
    }}
})
