const { averageExams, isStudentPassExam } = require("../gradeCalculations");

describe("grade calculations", () => {
  // Test Pertama
  test("it should return exact average", () => {
    // Menentukan daftar nilai ujian
    const listValueOfExams = [80, 100, 100, 80];

    // Memeriksa apakah fungsi averageExams mengembalikan nilai rata-rata yang tepat
    expect(averageExams(listValueOfExams)).toEqual(90);
  });

  // Test Kedua
  test("it should return exam passed status", () => {
    // Menentukan daftar nilai ujian untuk siswa Budi
    const listValueOfExams = [80, 100, 100, 80];

    // Memeriksa apakah fungsi isStudentPassExam mengembalikan nilai true (lulus)
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
  });

  // Test Ketiga
  test("it should return exam failed status", () => {
    // Menentukan daftar nilai ujian untuk siswa Budi
    const listValueOfExams = [50, 40, 70, 80];

    // Memeriksa apakah fungsi isStudentPassExam mengembalikan nilai false (gagal)
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(false);
  });
});
