const school = {
    name: "Amjilt Cyber School",
    phoneNumber: 77772652485,
    students: [
        {studentName: "Alya", top: "24/7", progress: 70, lessons: 3,},
        {studentName: "Eraly", top: "24/7", progress: 40, lessons: 4,},
        {studentName: "Asylbek", top: "24/5", progress: 100, lessons: 7,},
        {studentName: "Asylhan", top: "24/5", progress: 80, lessons: 1,},
        {studentName: "Erkin", top: "24/7", progress: 90, lessons: 3,},
    ]
};

function changeSchoolName() {
    let newName = prompt("Оқу орталығының атауын өзгертіңіз:");
    school.name = newName;
    return `Атау "${newName}" болып өзгертілді!`
};

function changePhoneNumber() {
    let newPhoneNumber = prompt("Жаңа телефон нөмерін енгізіңіз:");
    if (newPhoneNumber == "") {
        school.phoneNumber != newPhoneNumber;
        return `Телефон нөмірі өзгертілмеді!`
    }
    else {
        school.phoneNumber = newPhoneNumber;
        return `Телефон нөмірі ${newPhoneNumber} болып өзгертілді!`
    }
};

function listStudentNames() {
    return school.students.map((student) => student.studentName);
};

function addStudent() {
    let newStudentName = prompt("Студенттің есімі:");
    let newStudentTop = prompt("Студенттің тобы:");
    let newStudentProgress = +prompt("Студенттің орташа бағасы:");
    let newStudentLessons = +prompt("Студенттің оқитын сабақ саны:");
    school.students.push({studentName: newStudentName, top: newStudentTop, progress: newStudentProgress, lessons: newStudentLessons,});
    return "Студент қосылды!";
};


function applyDecreaseToTop() {
    let nameOfGroup = prompt("Топтың атын енгізіңіз:");
    let percent = +prompt("Қанша пайыз төмендету керек:");

    if (isNaN(percent) || percent < 0 || percent > 100) {
        return "Қате пайыздық мән! Пайыз 0-100 арасында болуы керек.";
    }

    let studentsUpdated = false;
    school.students.forEach(student => {
        if (student.top === nameOfGroup) {
            student.progress -= student.progress * (percent / 100);
            studentsUpdated = true;
        }
    });

    if (studentsUpdated) {
        return `${nameOfGroup} тобының барлық студенттерінің үлгерімі ${percent}% төмендетілді.`;
    } else {
        return `Топ "${nameOfGroup}" табылмады.`;
    }
}
while (true) {
    let menu = prompt(`   1. Оқу орталығынын атауын өзгерту 
    2. Телефон нөмірін өзгерту
    3. Студенттер атауын шығару
    4. Жаңа студент қосу
    5. Топқа пайыздық мөлшерде орташа үлгерімін төмендету
    6. Тоқтат`);
    if (menu == "1") {
        alert(changeSchoolName());
    }
    else if (menu == "2") {
        alert(changePhoneNumber());
    }
    else if (menu == "3") {
        alert(listStudentNames());
    }
    else if (menu == "4") {
        alert(addStudent());
    }
    else if (menu == "5") {
        alert(applyDecreaseToTop());
    }
    else if (menu == "6") {
        break;
    }
};
