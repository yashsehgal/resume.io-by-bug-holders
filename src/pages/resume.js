
let resume_container = document.createElement("div");
resume_container.className = "resume_container";

let resume = document.createElement("div");
resume.className = "resume";

let resume_data_object;

fetch('resume_data.json').then((res) => res.json()).then((res) => {
  console.log(res[Object.keys(res).sort().reverse()[0]]);
  resume_data_object = res[Object.keys(res).sort().reverse()[0]];
  console.log(resume_data_object);
  resume.innerHTML = `
    <p id="name">${resume_data_object.firstname} ${resume_data_object.lastname}</p>
    <a id="contact_number">${resume_data_object.contact_number}</a>
    <a href="mailto:${resume_data_object.email_address}" id="email_address">${resume_data_object.email_address}</a>
    <p id="state_country">${resume_data_object.state}, ${resume_data_object.country}</p>
    <div id="social_icons">
      <a href="${resume_data_object.github_profile}">
        <i class="fab fa-github" id="icons"></i>
      </a>
      <a href="${resume_data_object.portfolio_url}">
        <i class="fas fa-user-circle" id="icons"></i>
      </a>
      <a href="${resume_data_object.instagram_url}">
        <i class="fab fa-instagram" id="icons"></i>
      </a>
      <a href="${resume_data_object.linkedin_url}">
        <i class="fab fa-linkedin" id="icons"></i>
      </a>
    </div>
    <div id="about-section">
      <h2>About Me</h2>
      <p id="about">${resume_data_object.about}</p>
    </div>
  
    <div class="flex">
      <div id="skills-section">
        <h2>Skills I have</h2>
        <p id="skills">${resume_data_object.skills}</p>
      </div>

      <div id="education-section">
        <h2>Educational Details</h2>
        <p id="college_name">${resume_data_object.college_name}</p>
        <p id="course_name">${resume_data_object.course_name}</p>
      </div>
    </div>
    
    <div id="project-section">
      <h2>Projects I have Made</h2>
      <p id="projects">${resume_data_object.projects}</p>
    </div>
    
    `;
});


resume_container.append(resume);

document.getElementById("application").appendChild(resume_container);