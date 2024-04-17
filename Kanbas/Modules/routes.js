// import db from "../Database/index.js";
// function ModuleRoutes(app) {
//   app.put("/api/modules/:mid", (req, res) => {
//     const { mid } = req.params;
//     const moduleIndex = db.modules.findIndex((m) => m._id === mid);
//     db.modules[moduleIndex] = {
//       ...db.modules[moduleIndex],
//       ...req.body,
//     };
//     res.sendStatus(204);
//   });

//   app.delete("/api/modules/:mid", (req, res) => {
//     const { mid } = req.params;
//     db.modules = db.modules.filter((m) => m._id !== mid);
//     res.sendStatus(200);
//   });

//   app.post("/api/courses/:cid/modules", (req, res) => {
//     const { cid } = req.params;
//     const newModule = {
//       ...req.body,
//       course: cid,
//       _id: new Date().getTime().toString(),
//     };
//     db.modules.push(newModule);
//     res.send(newModule);
//   });

//   app.get("/api/courses/:cid/modules", (req, res) => {
//     const { cid } = req.params;
//     const modules = db.modules.filter((m) => m.course === cid);
//     res.send(modules);
//   });
// }
// export default ModuleRoutes;

import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };
  const createModuleForCourse = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
    };
    const module = await dao.createModule(newModule);
    res.json(module);
  };
  const deleteModules = async (req, res) => {
    const status = await dao.deleteModule(req.params.id);
    res.json(status);
  };
  const findAllModules = async (req, res) => {
    const module = await dao.findAllModules();
    res.json(module);
  };
  const findModuleById = async (req, res) => {
    const id = req.params.id;
    const module = await dao.findModuleById(id);
    res.json(module);
  };
  const findModulesForCourse = async (req, res) => {
    const { cid } = req.params;
    const module = await dao.findModuleByCourse(cid);
    res.json(module);
  };
  const updateModule = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateModule(id, req.body);
    res.json(status);
  };

  app.get("/api/modules/:id", findModuleById);
  app.put("/api/modules/:id", updateModule);
  app.delete("/api/modules/:id", deleteModules);
  app.post("/api/modules", createModule);
  app.get("/api/modules", findAllModules);
  app.post("/api/courses/:cid/modules", createModuleForCourse);
  app.get("/api/courses/:cid/modules", findModulesForCourse)
}
