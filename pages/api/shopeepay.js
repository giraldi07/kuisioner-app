import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { shopeePayNumber } = req.body;

    // Lakukan validasi nomor ShopeePay di sini jika diperlukan

    // Contoh penyimpanan nomor ShopeePay ke file
    const filePath = path.join(process.cwd(), 'data', 'shopeePay.txt');
    fs.writeFileSync(filePath, shopeePayNumber);

    res.status(200).json({ message: 'ShopeePay number saved successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
