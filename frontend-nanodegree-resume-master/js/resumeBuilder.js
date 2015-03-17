$("#main").append(["alex"]);

var formattedName = "Aleksey Veselov";
var formattedRole = "Programmer";

HTMLheaderName = HTMLheaderName.replace(/%data%/gi, formattedName);
HTMLheaderRole = HTMLheaderRole.replace(/%data%/gi, formattedRole);
alert(HTMLheaderName);

$('#header').append(HTMLheaderName + " " + HTMLheaderRole);
var skills =
["swimming","paintball"]
$("#main").append(skills);


var bio = { "name": "Aleksey Veselov","age": 16,"role": "Programmer", "contacts": {"email": "alex@veselov.net", "Facebook": "Alex Veselov"},"Welcomemessage": "ladies and gentleman welcome to my resume","skills": ["paintball", "swimming", "gaming"],"bioPic":"images/no.jpg" };
    


$("#main").append(bio.age);
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.Welcomemessage);
$("#main").append(bio.bioPic);
$("#main").append(bio.skills);
var work = {};
work.position = "Electrical Engineer";
work.years = 4;
work.employer = "Amazon"; 
var education = {};
education.school = "BWHS";
education.years = "2012-2016";
education.city = "Ashburn";
$("#main").append(work["position"]);
$("#main").append(education.school);
$("#main").append(education.years);
$("#main").append(education.city);
$("#main").append(work["years"]);
$("#main").append(work["employer"]);


var education = {
    "schools": [{
        "name": "BWHS",
        "city": "Ashburn,VA",
        "degree": "bachelor",
        "major": ["CompSci","German"]
    },
    {"name": "Coast Gaurd Academy",
    "city": "Newtown,PA",
    "degree": "bachelor",
    "major": ["CADD"]
    }
    ]
}
$("#main").append(education.name);

var work = {};
var project = {};
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer =HTMLworkEmployer.replace
    ("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$("work-entry:last").append(foramttedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
    
    $(".work-entry:last").append(formattedemployerTitle);
	
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0)  {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", porjects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				
				
			}
			
		}
		
	}
}