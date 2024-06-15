// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var developerSkills = {
    languages: ["JavaScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "WEbpack", "Docker"]
};
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0], "."));
