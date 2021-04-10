/// Header Component in JavaScript


// Data for the header options
const header_options = [
  {
    "title": "Home",
    "path": "/index.html"
  },
  {
    "title": "GitHub",
    "path": "https://www.github.com/yashsehgal"
  }
];

/// creating an DOM Object as header
let header = document.createElement("div");
header.classname = "header";

/// appending all the details in the header as header-options, accordingly
for (let option in header_options) {
  let __option = document.createElement("a");
  __option.classname = "header_option";
  __option.innerHTML = header_option[option].title;
  __option.href = header_option[option].path;
  header.append(__option);
}

/// appending this DOM Object to the container having id=header
document.getElementById("header").appendChild(header);