const VisualService = require("../services/VisualPartnerService");
const Reader = require("../utils/Reader");

const dataStudents = Reader.readJson("visualpartners.json");

class VisualPartnerController{
    static getAllStudents(){
        const allStudents = VisualService.getAllVisualPartners(dataStudents);
        return allStudents; 
    }

    static getAllEmailsHaveCertifications(){
        const withCertification = VisualService.getAllhaveCertification(dataStudents);
        return withCertification;
    }

    static getAllStudentsWith500(){
        const studentWithMas500 = VisualService.creditsMayor500(dataStudents);
        return studentWithMas500;
    }
}

module.exports = VisualPartnerController;