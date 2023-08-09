const express = require("express");
const handlerBar = require("express-handlebars");
// const path = require("path");
const port = 3000;
const app = express();
app.use(express.static("public"));
app.use("/favicon.ico", express.static("images/favicon.ico"));
app.engine("handlebars", handlerBar.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

let courseList = () => {
  const courses = [
    "Engg. Admission Counselling",
    "1st Year Programming",
    "1st Year Engg. Coaching",
    "IT Services for Start-Up",
    "2nd Year Programming",
    "MS in US and Europe",
    "3rd Year Programming",
    "Project and Placement",
    "Youth Empowerment Hub",
    "Financial Litracy",
  ];

  let html = courses
    .map((course) => {
      return `<a href="#" draggable="false">${course}</a>`;
    })
    .join("\n");

  return html;
};

let courseCards = () => {
  const courses = [
    {
      name: "Engg. Admission Counselling",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/1st-Year-Engg-Counselling.jpg",
    },
    {
      name: "1st Year Programming",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/1st-Year-Programming.jpg",
    },
    {
      name: "1st Year Engg. Coaching",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/1st-Year-Engg.jpg",
    },
    {
      name: "IT Services for Start-Up",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/IT-Services-for-Start-Up.jpg",
    },
    {
      name: "2nd Year Programming",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/2nd-Year-Programming.jpg",
    },
    {
      name: "MS in US and Europe",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/MS-in-US-%26-Europe.jpg",
    },
    {
      name: "3rd Year Programming",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/3rd-Year-Programming.jpg",
    },
    {
      name: "Project and Placement",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/Project-and-Placement.jpg",
    },
    {
      name: "Youth Empowerment Hub",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/Financial-Literacy.jpg",
    },
    {
      name: "Financial Litracy",
      imgurl:
        "https://jkbstaticservices.s3.ap-south-1.amazonaws.com/Youth-Empowerment-Skills.jpg",
    },
  ];

  let html = courses
    .map((course) => {
      return `<div class="course-cards">
      <img
        src="${course.imgurl}"
        draggable="false"
      />
      <div>${course.name}</div>
    </div>`;
    })
    .join("\n");

  return html;
};

app.get("/", (req, res) => {
  res.render("home", {
    layout: false,
    helpers: {
      courseList,
      courseCards,
    },
  });
});

app.get("/it-services", (req, res) => {
  res.render("itservices", {
    layout: false,
    helpers: {
      courseList,
    },
  });
});

app.get("/about-us", (req, res) => {
  res.render("aboutus", {
    layout: false,
    helpers: {
      courseList,
    },
  });
});

app.listen(port, () => {
  console.log("Server connected to port ", port);
});
