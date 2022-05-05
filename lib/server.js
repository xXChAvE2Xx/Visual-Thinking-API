const VisualPartnerController = require("./controllers/VisualPartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking API welcome!"});
});

app.get("/v1/students/all", (response) =>{
    const allStudents = VisualPartnerController.getAllStudents();
    response.json(allStudents);
});

app.get("/v1/students/certification/email", (response)=>{
    const email = VisualPartnerController.getAllEmailsHaveCertifications();
    response.json(email);
});

app.get("/v1/students/credits", (response) =>{
    const credits = VisualPartnerController.getAllStudentsWith500();
    response.json(credits);
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});