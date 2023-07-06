// Define the course schema
const courseSchema = new mongoose.Schema({
  title: String,
  icon: String,
});
// Insert mock data into the course collection
const insertMockData = async () => {
  try {
    await Course.insertMany([
      {
        title: "(New) Responsive Web Design Certification ( 300 hours )",
        icon: "fa fa-laptop",
      },
      {
        title: "Legacy Responsive Web Design Certification ( 300 hours )",
        icon: "fa fa-laptop",
      },
      {
        title:
          "JavaScript Algorithms and Data Structures Certification ( 300 hours )",
        icon: "fa-brands fa-js",
      },
      {
        title: "Front End Development Libraries Certification ( 300 hours )",
        icon: "fa-brands fa-react",
      },
      {
        title: "Data Visualization Certification ( 300 hours )",
        icon: "fa-solid fa-database",
      },
      {
        title: "Quality Assurance Certification ( 300 hours )",
        icon: "fa-solid fa-vial-virus",
      },
      {
        title: "Back End Development and APIs Certification ( 300 hours )",
        icon: "fa-solid fa-database",
      },
    ]);
    console.log("Mock data inserted successfully");
  } catch (error) {
    console.error("Failed to insert mock data", error);
  } finally {
    mongoose.disconnect();
  }
};

insertMockData();
// Create the Course model
module.exports.Course = mongoose.model("Course", courseSchema);
