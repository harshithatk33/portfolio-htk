// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Harshitha",
    middleName: "",
    lastName: "Tumkur Kailasa Murthy",
    message: " Passionate about innovative ideas to solve various problems ",
    icons: [
        {
            image: "fa-github",
            url: "https://github.com/harshithatk33",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/harshitha-t-k/",
        },
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/IMG_20200310_141124~3.jpg"),
    imageSize: 375,
    message:
        "I'm Harshitha T K. I’m a graduate student at Boston University pursuing Master of Science in Computer Science",
    resume: "https://drive.google.com/file/d/1_WvN4_Tznpb8lDhiGpHtJyMS-oT1XNZl/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "harshithatk33", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: ["crud-app"],
};

// Leadership SECTION
const leadership = {
    show: false,
    heading: "Leadership",
    message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [
        {
            img: require("../editable-stuff/IMG_20200310_141124~3.jpg"),
            label: "First slide label",
            paragraph:
                "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
            img: require("../editable-stuff/IMG_20200310_141124~3.jpg"),
            label: "Second slide label",
            paragraph:
                "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
    ],
    imageSize: {
        width: "615",
        height: "450",
    },
};

// SKILLS SECTION
const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        { name: "JavaScript", value: 90 },
        { name: "Java", value: 75 },
        { name: "Python", value: 65 },
        { name: "Data Structures", value: 75 },
        { name: "React", value: 70 },
        { name: "Node", value: 75 },
        { name: "MySQL", value: 85 },
        { name: "Microservice", value: 70 },
    ],
    softSkills: [
        { name: "Goal-Oriented", value: 80 },
        { name: "Collaboration", value: 90 },
        { name: "Positivity", value: 75 },
        { name: "Adaptability", value: 85 },
        { name: "Problem Solving", value: 75 },
        { name: "Empathy", value: 90 },
        { name: "Organization", value: 70 },
        { name: "Creativity", value: 90 },
    ],
    Publications: [
        {
            name: "Optimal Sensor Deployment and Battery Life Enhancement Strategies for Smart Irrigation Solutions - Paper Published at Springer, Singapore",
        },
        {
            name: "",
        },
    ],
    Awards: [
        {
            name: "SPOT Awards and Team Award - Lowe’s India, 2021 - 2022",
        },
        { name: "UG Student Award, Indian Institute of Science, Bangalore." },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
        "I'm currently looking for Internship opportunities as a Software Engineering or Product Manager. If you know of any positions available please feel free to email me at",
    email: "harshutk@bu.edu OR harshithatk34@gmail.com",
};

const experiences = {
    show: true,
    heading: "Experiences",
    data: [
        {
            role: "Software Engineer - Lowe's India", // Here Add Company Name
            companylogo: require("../assets/img/lowes.png"),
            date: "July 2018 – August 2022",
            width: 400,
            height: 200,
        },
    ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
    navBar,
    mainBody,
    about,
    repos,
    skills,
    leadership,
    getInTouch,
    experiences,
};
