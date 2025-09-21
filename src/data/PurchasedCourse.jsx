// src/data/PurchasedCoursesData.jsx

const purchasedCourses = [
  {
    id: "html101",
    title: "HTML Fundamentals",
    description: "Learn the structure of web pages using HTML.",
    thumbnail: "/images/html-course.jpg",
    content: [
      { id: 1, type: "video", title: "Introduction to HTML", url: "https://example.com/html-intro" },
      { id: 2, type: "video", title: "HTML Elements", url: "https://example.com/html-elements" },
      { id: 3, type: "quiz", title: "HTML Quiz 1" },
    ],
  },
  {
    id: "css102",
    title: "CSS Basics",
    description: "Style your web pages with CSS.",
    thumbnail: "/images/css-course.jpg",
    content: [
      { id: 1, type: "video", title: "CSS Selectors", url: "https://example.com/css-selectors" },
      { id: 2, type: "video", title: "CSS Box Model", url: "https://example.com/css-boxmodel" },
      { id: 3, type: "quiz", title: "CSS Quiz 1" },
    ],
  },
  {
    id: "js103",
    title: "JavaScript Essentials",
    description: "Add interactivity to your websites with JS.",
    thumbnail: "/images/js-course.jpg",
    content: [
      { id: 1, type: "video", title: "Intro to JS", url: "https://example.com/js-intro" },
      { id: 2, type: "video", title: "Variables & Data Types", url: "https://example.com/js-vars" },
      { id: 3, type: "quiz", title: "JS Quiz 1" },
    ],
  },
];

export default purchasedCourses;
