import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  const deleteCourses = async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  };
  const findAllCourses = async (req, res) => {
    const course = await dao.findAllCourses();
    res.json(course);
  };
  const findCourseById = async (req, res) => {
    const id = req.params.id;
    const course = await dao.findCourseById(id);
    res.json(course);
  };
  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  };
  const findCourseByStringId = async (req, res) => {
    const id = req.params.id;
    const course = await dao.findCourseByStringId(id);
    res.json(course);
  };

  app.get("/api/courses/:id", findCourseById);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourses);
  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/name/:id", findCourseByStringId);
}
