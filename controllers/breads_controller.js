//dependencies
const express = require("express");
const router = express.Router();
const render = require("../render");

//import models
const Bread = require("../models/bread.js");
const Baker = require("../models/baker.js");

//breads route
router.get("/", async (req, res) => {
  try {
    const bakers = await Baker.find()
    const breads = await Bread.find().limit(3)

    res.send(render('Index', {breads: breads, bakers: bakers, title: 'Index Page'}))
  } catch (err) {
    res.status(404).send("404" + err)
  }
  // Baker.find()
  //   .then((bakers) => {
  //     Bread.find().then((breads) => {
  //       res.send(
  //         render("Index", {
  //           breads: breads,
  //           bakers: bakers,
  //           title: "Index Page",
  //         })
  //       );
  //     });
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //     res.status(404).send("404");
  //   });
});

//list route for baker
router.get("/bakers/:baker", async (req, res) => {
  try {
    let breads = await Bread.findByBaker(req.params.baker)

    res.send(render('Index', {bread: breads}))
  } catch (err) {
    res.status(404).send('404' + err)
  }
  // Bread.findByBaker(req.params.baker)
  //   .then((breads) => {
  //     res.send(render("Index", { breads: breads }));
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //     res.status(404).send("404");
  //   });
});

//new route
router.get("/new", async (req, res) => {
    let bakers = await Baker.find()
    res.send(render('New', {bakers: bakers}))

  // Baker.find().then((bakers) => {
  //   res.send(render("New", { bakers: bakers }));
  // });
});

//details route
router.get("/:id", async (req, res) => {
  try {
    let bread = await Bread.findById(req.params.id).populate('baker')

    res.send(render('Show', {bread: bread}))
  } catch (err) {
    res.status(404).send("404: Unable to find bread")
  }
  // Bread.findById(req.params.id)
  //   .populate("baker")
  //   .then((bread) => {
  //     res.send(render("Show", { bread: bread }));
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //     res.status(404).send("404: Unable to find bread");
  //   });
});

//create route
router.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.create(req.body);
  res.redirect("/breads");
});

//update route
router.put("/:id", async (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  try {
    let updatedBread = await Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})

    console.log(updatedBread)
    res.redirect(`/breads/${req.params.id}`)
  } catch (err) {
    res.status(404).send("404" + err)
  }

  // Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
  //   .then((updatedBread) => {
  //     console.log(updatedBread);
  //     res.redirect(`/breads/${req.params.id}`);
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //     res.status(404).send("404");
  //   });
});

//edit route form
router.get("/:id/edit", async (req, res) => {
  try {
    let foundBread = await Bread.findById(req.params.id)
    let bakers = await Baker.find()

    res.send(render("edit", { bread: foundBread, bakers: bakers }))
  } catch (err) {
    res.status(404).send("404")
  }
  // Bread.findById(req.params.id)
  //   .then((foundBread) => {
  //     Baker.find().then((bakers) => {
  //       res.send(render("edit", { bread: foundBread, bakers: bakers }));
  //     });
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //     res.status(404).send("404");
  //   });
});

//delete route
router.delete("/:id", async (req, res) => {
  try {
    let deletedBread = await Bread.findByIdAndDelete(req.params.id)
    
    res.status(303).redirect("/breads")
  } catch (err) {
    res.status(404).send("404")
  }

  // Bread.findByIdAndDelete(req.params.id)
  //   .then((deletedBread) => {
  //     res.status(303).redirect("/breads");
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //     res.status(404).send("404");
  //   });
});

module.exports = router;
