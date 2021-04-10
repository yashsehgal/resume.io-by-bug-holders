let title = document.createElement('div');
title.id = '_title';
title.innerHTML = `Add details`;

application.append(title);

let form = document.createElement('form');
form.action= 'resume_date.json';
form.className = '_form';

let nameSection = document.createElement('div');
nameSection.id = 'namesection';

let firstName = document.createElement('input');
firstName.type = 'text';
firstName.id = '_firstName';
firstName.placeholder = 'First Name';

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
contactNumber.type = 'number'
contactNumber.id = '_contactNumber';
contactDetails.placeholder = 'Contact Number'

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


let aboutMe = document.createElement('textarea')
aboutMe.type = 'text';
aboutMe.id = '_aboutMe';
aboutMe.placeholder = 'About Me';

self.append(collegeName);
self.append(courseName);
self.append(aboutMe);

form.append(self);


let self2 = document.createElement('div')
self2.id = '_self2'

let skills = document.createElement('textarea')
skills.type = 'text'
skills.id = '_skills';
skills.placeholder = 'Your Skills';

let projects = document.createElement('textarea')
projects.type = 'text'
projects.id = '_projects'
projects.placeholder = 'Projects (if any)';

self2.append(skills);
self2.append(projects);

form.append(self2);



application.append(form);
