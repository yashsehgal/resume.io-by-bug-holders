
let resume_container = document.createElement("div");
resume_container.className = "resume_container";

let resume = document.createElement("div");
resume.className = "resume";

fetch('resume_data.json').then((res) => res.json()).then((res) => {
  for (let resume_data in res) {
    console.log(res[resume_data]);
  }
});

resume.innerHTML = `

`;

document.getElementById("application").appendChild(resume_container)