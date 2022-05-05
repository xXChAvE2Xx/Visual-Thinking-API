class VisualPartner{
    static getAllVisualPartners(students){
        return students;
    }

    static getAllhaveCertification(students){
        const haveCertification = students.filter((student) => student.haveCertification === true);
        const emails = haveCertification.map((student) => student.email);

        return emails;
    }

    static creditsMayor500(students){
        const studentsCredits500 = students.filter((student) => student.credits > 500);

        return studentsCredits500;
    }
}

module.exports = VisualPartner;