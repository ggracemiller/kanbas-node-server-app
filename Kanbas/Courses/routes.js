import Database from "../Database/index.js";
export default function CourseRoutes(app) {
  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = Database.courses.find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });

  app.post("/api/courses", (req, res) => {
    const course = { ...req.body, _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  const deleteCourses = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
  };
  const findAllCourses = async (req, res) => {
    const course = await dao.findAllCourses();
    res.json(course);
  };
  const findCourseById = async (req, res) => {
    const course = dao.findUserById(userId);
    res.json(course);
  };
  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    const currentUser = await dao.findUserById(courseId);
    req.session["currentUser"] = currentUser;
    res.json(status);
  };

  app.get("/api/courses/:id", findCourseById);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourses);
  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
}
