module.exports.course = () => async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error("Failed to fetch courses", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
