/// Header Component in JavaScript


// Data for the header options
const header_option = [
  {
    "title": "Create Resume",
    "path": "/src/details.html"
  },
  {
    "title": "Home",
    "path": "../../index.html"
  }
  
];

/// creating an DOM Object as header
let header = document.createElement("div");
header.className = "header";

let logo = document.createElement("a");
logo.className = "logo"
logo.innerHTML = "Resume.io";
logo.href = "../../index.html";

header.append(logo)

/// appending all the details in the header as header-options, accordingly
for (let option in header_option) {
  let __option = document.createElement("a");
  __option.className = "header_option";
  __option.innerHTML = header_option[option].title;
  __option.href = header_option[option].path;
  header.append(__option);
}

/// appending this DOM Object to the container having id=header
document.getElementById("header").appendChild(header);