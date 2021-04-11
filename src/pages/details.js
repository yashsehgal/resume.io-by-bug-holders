

let title = document.createElement('div');
title.id = '_title';
title.innerHTML = `Add details`;

application.append(title);

let form = document.createElement('div');
form.className = '_form';

let nameSection = document.createElement('div');
nameSection.id = 'namesection';

let firstName = document.createElement('input');
firstName.type = 'text';
firstName.id = '_firstName';
firstName.placeholder = 'First Name';
// firstName.style.padding = '0.4em';

let lastName = document.createElement('input');
lastName.type = 'text';
lastName.id = '_lastName';
lastName.placeholder = 'Last Name';

nameSection.append(firstName);
nameSection.append(lastName);
form.append(nameSection);


let contactDetails = document.createElement('div')
contactDetails.id = '_contactDetails';

let contactNumber = document.createElement('input');
contactNumber.type = 'tel'
contactNumber.id = '_contactNumber';
contactNumber.placeholder = 'Contact Number'

let emailId = document.createElement('input');
emailId.type = 'email'
emailId.id = '_email';
emailId.placeholder = 'Email ID'

contactDetails.append(contactNumber);
contactDetails.append(emailId);
form.append(contactDetails);


let url = document.createElement('div')
url.id = '_url';



let githubProfile = document.createElement('input')
githubProfile.type = 'url';
githubProfile.id = '_github';
githubProfile.placeholder= 'Github URL (if any)';

let portfolioProfile = document.createElement('input')
portfolioProfile.type = 'url';
portfolioProfile.id = '_portfolio';
portfolioProfile.placeholder= 'Portfolio URL (if any)';

let linkedinProfile = document.createElement('input')
linkedinProfile.type = 'url';
linkedinProfile.id = '_linkedin';
linkedinProfile.placeholder= 'linkedin URL (if any)';

url.append(githubProfile);
url.append(portfolioProfile);
url.append(linkedinProfile);

form.append(url);

let self = document.createElement('div');
self.id = '_self';

let collegeName = document.createElement('input');
collegeName.type = 'text';
collegeName.id = '_collegeName'
collegeName.placeholder = 'College Name'


let courseName = document.createElement('input');
courseName.type = 'text';
courseName.id = '_courseName'
courseName.placeholder = 'Course Name'


self.append(collegeName);
self.append(courseName);


form.append(self);


let self2 = document.createElement('div')
self2.id = '_self2'



let aboutMe = document.createElement('textarea')
aboutMe.type = 'text';
aboutMe.id = '_aboutMe';
aboutMe.placeholder = 'About Me';


let skills = document.createElement('textarea')
skills.type = 'text'
skills.id = '_skills';
skills.placeholder = 'Your Skills';

let projects = document.createElement('textarea')
projects.type = 'text'
projects.id = '_projects'
projects.placeholder = 'Projects (if any)';

self2.append(aboutMe);
self2.append(skills);
self2.append(projects);

form.append(self2);

var isButtonClicked = false;
var isResumeVisible = false;

let resume_data_object;

let button_layer = document.createElement("div");
button_layer.id = "button_layer_";
button_layer.innerHTML = `
  <button class="btn-1" 
  onclick="getUserDetails(); checkButtonStatus(); isButtonClicked=true;">
    Generate Resume
  </button>
`;

function checkButtonStatus() {
  if (isButtonClicked) {
    form.style.display = "none";
    resume_container.style.display = "block";
    resume.style.display = "block";

    console.log(resume_data_object);
    for (let data in resume_data_object) {
      resume.innerHTML = `
      <p id="name">${resume_data_object[data].firstname} ${resume_data_object[data].lastname}</p>
      <a id="contact_number">${resume_data_object[data].contact_number}</a>
      <a href="mailto:${resume_data_object[data].email_address}" id="email_address">${resume_data_object[data].email_address}</a>
      <div id="social_icons">
        <a href="${resume_data_object[data].github_profile}">
          <i class="fab fa-github" id="icons"></i>
        </a>
        <a href="${resume_data_object[data].portfolio_url}">
          <i class="fas fa-user-circle" id="icons"></i>
        </a>
        <a href="${resume_data_object[data].linkedin_url}">
          <i class="fab fa-linkedin" id="icons"></i>
        </a>
      </div>
      <div id="about-section">
        <h2>About Me</h2>
        <p id="about">${resume_data_object[data].about}</p>
      </div>
    
      <div class="flex">
        <div id="skills-section">
          <h2>Skills I have</h2>
          <p id="skills">${resume_data_object[data].skills}</p>
        </div>
  
        <div id="education-section">
          <h2>Educational Details</h2>
          <p id="college_name">${resume_data_object[data].college_name}</p>
          <p id="course_name">${resume_data_object[data].course_name}</p>
        </div>
      </div>
      
      <div id="project-section">
        <h2>Projects I have Made</h2>
        <p id="projects">${resume_data_object[data].projects}</p>
      </div>
      
      `;
      // });
    }


    let _button_layer = document.createElement("div");
    _button_layer.id = "button_layer_";
    _button_layer.innerHTML = `
  <button class="btn-1" onclick="generate();">Save as PDF</button>
  <button class="btn-2" onclick="reload();">Create a new Resume</button>
`;


    resume_container.append(resume);
    resume_container.append(_button_layer);
  }
}

form.append(button_layer);

application.append(form);


const getUserDetails = () => {

  let first_name = document.getElementById("_firstName").value;
  let last_name = document.getElementById("_lastName").value;
  let contact_number = document.getElementById("_contactNumber").value;
  let email_address = document.getElementById("_email").value;
  let github_profile = document.getElementById("_github").value;
  let portfolio_url = document.getElementById("_portfolio").value;
  let linkedin_profile = document.getElementById("_linkedin").value;
  let college_name = document.getElementById("_collegeName").value;
  let course_name = document.getElementById("_courseName").value;
  let about_me = document.getElementById("_aboutMe").value;
  let skills = document.getElementById("_skills").value;
  let projects = document.getElementById("_projects").value;

  console.log(first_name);
  console.log(last_name);
  console.log(contact_number);
  console.log(email_address);
  console.log(github_profile);
  console.log(portfolio_url);
  console.log(linkedin_profile);
  console.log(college_name);
  console.log(course_name);
  console.log(about_me);
  console.log(skills);
  console.log(projects);

  resume_data_object = [{
      "firstname": first_name,
      "lastname": last_name,
      "contact_number": contact_number,
      "email_address": email_address,
      "github_profile": github_profile,
      "about": about_me,
      "portfolio_url": portfolio_url,
      "linkedin_url": linkedin_profile,
      "skills": skills,
      "course_name": course_name,
      "college_name": college_name,
      "projects": projects
  }];

  console.log(resume_data_object);

  // let data = JSON.stringify(__temp_resume_data_object_);
  // fs.writeFileSync('resume_data.json', data);
};

let resume_container = document.createElement("div");
resume_container.className = "resume_container";
resume_container.style.display = "none";

let resume = document.createElement("div");
resume.className = "resume";
resume.id = "resume_pdf";

// let resume_data_object;

// fetch('resume_data.json').then((res) => res.json()).then((res) => {
  // console.log(res[Object.keys(res).sort().reverse()[0]]);
  // resume_data_object = res[Object.keys(res).sort().reverse()[0]];
//   console.log(resume_data_object);
//   for (let data in resume_data_object) {
//     resume.innerHTML = `
//       <p id="name">${resume_data_object[data].firstname} ${resume_data_object[data].lastname}</p>
//       <a id="contact_number">${resume_data_object[data].contact_number}</a>
//       <a href="mailto:${resume_data_object[data].email_address}" id="email_address">${resume_data_object[data].email_address}</a>
//       <div id="social_icons">
//         <a href="${resume_data_object[data].github_profile}">
//           <i class="fab fa-github" id="icons"></i>
//         </a>
//         <a href="${resume_data_object[data].portfolio_url}">
//           <i class="fas fa-user-circle" id="icons"></i>
//         </a>
//         <a href="${resume_data_object[data].linkedin_url}">
//           <i class="fab fa-linkedin" id="icons"></i>
//         </a>
//       </div>
//       <div id="about-section">
//         <h2>About Me</h2>
//         <p id="about">${resume_data_object[data].about}</p>
//       </div>
    
//       <div class="flex">
//         <div id="skills-section">
//           <h2>Skills I have</h2>
//           <p id="skills">${resume_data_object[data].skills}</p>
//         </div>
  
//         <div id="education-section">
//           <h2>Educational Details</h2>
//           <p id="college_name">${resume_data_object[data].college_name}</p>
//           <p id="course_name">${resume_data_object[data].course_name}</p>
//         </div>
//       </div>
      
//       <div id="project-section">
//         <h2>Projects I have Made</h2>
//         <p id="projects">${resume_data_object[data].projects}</p>
//       </div>
      
//       `;
//   // });
//   }


// let _button_layer = document.createElement("div");
// _button_layer.id = "button_layer_";
// _button_layer.innerHTML = `
//   <button class="btn-1" onclick="generate();">Save as PDF</button>
//   <button class="btn-2">Create a new Resume</button>
// `;


// resume_container.append(resume);
// resume_container.append(_button_layer);

document.getElementById("application").appendChild(resume_container);

// generate = function () {
//   var pdf = new jsPDF('p', 'pt', 'a4');
//   pdf.setFontSize(18);
//   pdf.fromHTML(document.getElementById('resume_pdf'),
//     margins.left, // x coord
//     margins.top,
//     {
//       // y coord
//       width: margins.width// max width of content on PDF
//     }, function (dispose) {
//       headerFooterFormatting(pdf)
//     },
//     margins);

//   var iframe = document.createElement('iframe');
//   iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
//   document.body.appendChild(iframe);

//   iframe.src = pdf.output('datauristring');
// };

function reload() {
  location.reload();
}