const colleges = [
  {
    name: "IIT Madras - Indian Institute of Technology - [IITM]",
    collegeduniaRating: 8.7,
    fees: 209550,
    userReviewRating: 8.6,
    highestPackage: 254650,
    averagePackage: 200000000,
    location: "Chennai, Tamil Nadu",
    course: "B.Tech Computer Science Engineering",
    cutoff: "JEE-Advanced 2023 Cutoff: 144",
    applyLink: "→ Apply Now & Download Brochure",
    featured: false,
  },
  {
    name: "IIT Delhi - Indian Institute of Technology [IITD]",
    collegeduniaRating: 8.7,
    fees: 209550,
    userReviewRating: 8.6,
    highestPackage: 2582000,
    averagePackage: 200000000,
    location: "New Delhi, Delhi NCR",
    course: "B.Tech M.Tech Mathematics and Computing",
    cutoff: "JEE-Advanced 2023 Cutoff: 115",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    name: "MIT - Massachusetts Institute of Technology",
    collegeduniaRating: 9.5,
    fees: 250000,
    userReviewRating: 9.3,
    highestPackage: 3000000,
    averagePackage: 250000,
    location: "Cambridge, Massachusetts",
    course: "Computer Science and Engineering",
    cutoff: "SAT 2023 Cutoff: 1500",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    name: "Stanford University",
    collegeduniaRating: 9.4,
    fees: 280000,
    userReviewRating: 9.2,
    highestPackage: 3500000,
    averagePackage: 270000,
    location: "Stanford, California",
    course: "Electrical Engineering",
    cutoff: "SAT 2023 Cutoff: 1480",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    name: "Harvard University",
    collegeduniaRating: 9.6,
    fees: 300000,
    userReviewRating: 9.5,
    highestPackage: 4000000,
    averagePackage: 280000,
    location: "Cambridge, Massachusetts",
    course: "Biomedical Engineering",
    cutoff: "SAT 2023 Cutoff: 1520",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    name: "University of Oxford",
    collegeduniaRating: 9.3,
    fees: 200000,
    userReviewRating: 9.1,
    highestPackage: 3200000,
    averagePackage: 260000,
    location: "Oxford, England",
    course: "Physics",
    cutoff: "A-levels 2023 Cutoff: AAA",
    applyLink: "→ Apply Now & Download Brochure",
    featured: false,
  },
  {
    name: "ETH Zurich - Swiss Federal Institute of Technology",
    collegeduniaRating: 9.2,
    fees: 220000,
    userReviewRating: 9.0,
    highestPackage: 3800000,
    averagePackage: 290000,
    location: "Zurich, Switzerland",
    course: "Mechanical Engineering",
    cutoff: "Swiss Matura 2023 Cutoff: 5.5",
    applyLink: "→ Apply Now & Download Brochure",
    featured: false,
  },
  {
    name: "University of Tokyo",
    collegeduniaRating: 9.1,
    fees: 180000,
    userReviewRating: 9.0,
    highestPackage: 3300000,
    averagePackage: 270000,
    location: "Tokyo, Japan",
    course: "Computer Engineering",
    cutoff: "University Entrance Exam 2023 Cutoff: 80%",
    applyLink: "→ Apply Now & Download Brochure",
    featured: false,
  },
  {
    name: "California Institute of Technology (Caltech)",
    collegeduniaRating: 9.4,
    fees: 270000,
    userReviewRating: 9.2,
    highestPackage: 3600000,
    averagePackage: 280000,
    location: "Pasadena, California",
    course: "Chemical Engineering",
    cutoff: "SAT 2023 Cutoff: 1500",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    "name": "Massachusetts Institute of Technology (MIT)",
    "collegeduniaRating": 9.6,
    "fees": 280000,
    "userReviewRating": 9.4,
    "highestPackage": 3800000,
    "averagePackage": 300000,
    "location": "Cambridge, Massachusetts",
    "course": "Aerospace Engineering",
    "cutoff": "SAT 2023 Cutoff: 1550",
    "applyLink": "→ Apply Now & Download Brochure",
    "featured": true
},
];

// Insert data into table rows and columns with data from array of objects
function insertColleges(colleges) {
  const tableBody = document.getElementById("table-body");

  colleges.forEach((college) => {
    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${college.name}</td>
              <td>${college.fees}</td>
              <td>${college.userReviewRating}</td>
              <td>${college.highestPackage}</td>
              <td>${college.averagePackage}</td>
              <td>${college.collegeduniaRating}</td>
              ${college.featured ? '<td>Featured</td>' : '<td>NA</td>'}
          `;
    tableBody.appendChild(row);
  });
}

// Reset sorting 
const selects = document.getElementsByTagName("select");
for (let i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = 0;
}

// Sort table rows based on selected column

function sortTable(n, dir) {
const table = document.getElementById("table-body");
const rows = table.getElementsByTagName("tr");
const values = [];

for (let i = 0; i < rows.length; i++) {
    values.push(rows[i].getElementsByTagName("td")[n].textContent);
}

if(dir === "asc") {
    values.sort();
} else {
    values.sort();
    values.reverse();
}

for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < rows.length; j++) {
        if (rows[j].getElementsByTagName("td")[n].textContent === values[i]) {
            table.appendChild(rows[j]);
            break;
        }
    }
}
}

// Add event listeners to sorting selects
const sortByCollegedunia = document.getElementById("sort-by-collegedunia");
sortByCollegedunia.addEventListener("change", function () {
const dir = this.value;
if (dir !== "") {
    sortTable(5, dir);
}
});
// Add event listeners to sorting selects and table rows when fees is selected
const sortByFees = document.getElementById("sort-by-fees");
sortByFees.addEventListener("change", function () {
const dir = this.value;
if (dir !== "") {
    sortTable(1, dir);
}
});

// Add event listeners to sorting selects and table rows when user reviews is selected
const sortByUserReviews = document.getElementById("sort-by-user-reviews");
sortByUserReviews.addEventListener("change", function () {
const dir = this.value;
if (dir !== "") {
    sortTable(2, dir);
}
});

// Search colleges by name and display only those that match 
// the search query string passed to the function above and hide 
// the rest of the rows that do not match.
function searchColleges() {
  const input = document.getElementById("search");
  const filter = input.value.toUpperCase();
  const rows = document.getElementById("table-body").getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const td = rows[i].getElementsByTagName("td")[0];
    if (td) {
      const txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}

insertColleges(colleges);
