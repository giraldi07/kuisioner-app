import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { answers } = req.body;

    // Simpan jawaban ke dalam file atau database
    const answersFilePath = path.join(process.cwd(), 'data', 'answers.json');
    let savedAnswers = [];

    // Baca data jawaban yang sudah ada jika file ada
    if (fs.existsSync(answersFilePath)) {
      const currentAnswers = fs.readFileSync(answersFilePath, 'utf8');
      savedAnswers = JSON.parse(currentAnswers);
    }

    // Tambahkan jawaban baru
    savedAnswers.push(answers);

    // Tulis kembali file dengan jawaban yang sudah ditambahkan
    fs.writeFileSync(answersFilePath, JSON.stringify(savedAnswers, null, 2));

    res.status(200).json({ message: 'Answers saved successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
