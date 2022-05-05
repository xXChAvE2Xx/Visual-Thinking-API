const Visual = require("../../lib/controllers/VisualPartnerController");

describe("Test para el funcionamiento del servicio VisualPartner", () =>{
    test("Requerimiento 1: Obtener toda la informacion de los estudiantes", () =>{
        const AllStudents = Visual.getAllStudents();
        
        expect(AllStudents.length).toBe(51);
    });

    test("Requerimiento 2: Mostrar todos los emails de las personas que tienen certificacion", () =>{
        const certification = Visual.getAllEmailsHaveCertifications();

        expect(certification.length).toBe(29);
    });

    test("Requerimiento 3: Mostrar todos los estudiantes con mas de 500 creditos", () =>{
        const studentsCreditsMas500 = Visual.getAllStudentsWith500();
        expect(studentsCreditsMas500.length).toBe(27);
    });
});