import React, { useState } from "react";
import { useRouter } from "next/router";
import { RiSecurePaymentLine } from "react-icons/ri";
import styles from "../styles/kuisioner.module.css";

const Kuisioner = () => {
  const router = useRouter();
  const [showCaution, setShowCaution] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [shopeePayNumber, setShopeePayNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Data pertanyaan
  const questions = [
    {
      id: 1,
      question: "Seberapa sering Anda menggunakan Instagram dalam sehari?",
      options: ["Jarang", "Beberapa kali", "Sering", "Setiap saat"],
    },
    {
      id: 2,
      question: "Fitur apa yang paling sering Anda gunakan di Instagram?",
      options: [
        "Feed",
        "Stories",
        "Explore",
        "Direct Message",
        "Reels",
        "IGTV",
        "Shopping",
        "Live",
      ],
    },
    {
      id: 3,
      question: "Apakah Anda merasa Instagram memengaruhi produktivitas Anda?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 4,
      question: "Apakah Anda pernah menggunakan fitur Instagram Music?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 5,
      question: "Bagaimana pendapat Anda tentang fitur Instagram Reels?",
      options: ["Menarik", "Biasa saja", "Tidak suka"],
    },
    {
      id: 6,
      question:
        "Apakah Anda sering berinteraksi dengan konten yang diposting di Feed Instagram?",
      options: ["Ya", "Tidak terlalu sering", "Jarang"],
    },
    {
      id: 7,
      question:
        "Apakah Anda pernah membeli produk melalui fitur Shopping di Instagram?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 8,
      question: "Apakah Anda mengikuti akun-akun influencer di Instagram?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 9,
      question:
        "Seberapa penting keberadaan fitur Stories dalam penggunaan Anda sehari-hari?",
      options: ["Sangat penting", "Cukup penting", "Tidak begitu penting"],
    },
    {
      id: 10,
      question:
        "Apakah Anda pernah melakukan siaran langsung (Live) di Instagram?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 11,
      question:
        "Bagaimana Anda menilai keamanan data pribadi Anda di Instagram?",
      options: ["Baik", "Cukup baik", "Kurang baik"],
    },
    {
      id: 12,
      question:
        "Apakah Anda menggunakan fitur Direct Message (DM) secara aktif?",
      options: ["Ya", "Jarang", "Hanya sesekali"],
    },
    {
      id: 13,
      question:
        "Seberapa sering Anda mengecek Instagram saat sedang bekerja atau belajar?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 14,
      question: "Bagaimana pendapat Anda tentang algoritma feed Instagram?",
      options: [
        "Membantu menemukan konten yang relevan",
        "Kurang transparan",
        "Perlu peningkatan",
      ],
    },
    {
      id: 15,
      question: "Apakah Anda pernah menggunakan fitur IGTV di Instagram?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 16,
      question:
        "Seberapa penting bagi Anda untuk memiliki akun bisnis di Instagram?",
      options: [
        "Sangat penting",
        "Tidak terlalu penting",
        "Tidak penting sama sekali",
      ],
    },
    {
      id: 17,
      question:
        "Apakah Anda menggunakan Instagram lebih untuk pribadi atau bisnis?",
      options: ["Pribadi", "Bisnis", "Keduanya"],
    },
    {
      id: 18,
      question:
        "Seberapa sering Anda menemukan produk atau layanan baru melalui Instagram?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 19,
      question:
        "Bagaimana pendapat Anda tentang keberadaan fitur Shopping di Reels?",
      options: ["Menarik", "Kurang menarik", "Belum pernah menggunakan"],
    },
    {
      id: 20,
      question:
        "Apakah Anda merasa tekanan untuk selalu memposting konten yang menarik di Instagram?",
      options: ["Ya", "Tidak begitu", "Tidak sama sekali"],
    },
    {
      id: 21,
      question:
        "Seberapa sering Anda menggunakan fitur Instagram untuk mencari ide atau inspirasi?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 22,
      question:
        "Bagaimana pendapat Anda tentang keberadaan fitur Instagram Stories Ads?",
      options: ["Mengganggu", "Tidak mengganggu", "Belum pernah melihat"],
    },
    {
      id: 23,
      question: "Apakah Anda pernah menggunakan fitur Instagram Guides?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 24,
      question: "Seberapa sering Anda membagikan konten di Instagram?",
      options: ["Sering", "Jarang", "Hanya kadang-kadang"],
    },
    {
      id: 25,
      question:
        "Bagaimana pendapat Anda tentang fitur Instagram Pinned Comments?",
      options: ["Berguna", "Kurang berguna", "Belum pernah menggunakan"],
    },
    {
      id: 26,
      question: "Apakah Anda pernah memanfaatkan fitur Collabs di Instagram?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 27,
      question:
        "Seberapa sering Anda menggunakan fitur Instagram untuk berbagi cerita kehidupan sehari-hari?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 28,
      question:
        "Bagaimana pendapat Anda tentang efektivitas Instagram dalam mempromosikan acara atau produk?",
      options: ["Efektif", "Kurang efektif", "Belum pernah mencoba"],
    },
    {
      id: 29,
      question:
        "Apakah Anda merasa Instagram meningkatkan kualitas hubungan sosial Anda?",
      options: ["Ya", "Tidak begitu", "Tidak sama sekali"],
    },
    {
      id: 30,
      question: "Seberapa sering Anda memperbarui profil Instagram Anda?",
      options: ["Sering", "Jarang", "Hanya kadang-kadang"],
    },
    {
      id: 31,
      question:
        "Bagaimana pendapat Anda tentang fitur Instagram Questions dalam Stories?",
      options: ["Menarik", "Kurang menarik", "Belum pernah menggunakan"],
    },
    {
      id: 32,
      question: "Apakah Anda sering menonton konten video di Instagram Reels?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 33,
      question: "Seberapa sering Anda berinteraksi dengan iklan di Instagram?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 34,
      question:
        "Bagaimana pendapat Anda tentang keberadaan fitur Instagram Shop?",
      options: ["Berguna", "Kurang berguna", "Belum pernah menggunakan"],
    },
    {
      id: 35,
      question:
        "Apakah Anda menggunakan Instagram untuk mencari informasi berita?",
      options: ["Ya", "Jarang", "Tidak"],
    },
    {
      id: 36,
      question:
        "Seberapa sering Anda mengubah tema atau tampilan profil Instagram Anda?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 37,
      question:
        "Bagaimana pendapat Anda tentang fitur Instagram Direct Message Voice Notes?",
      options: ["Berguna", "Kurang berguna", "Belum pernah menggunakan"],
    },
    {
      id: 38,
      question:
        "Apakah Anda menggunakan fitur Instagram untuk menonton acara langsung (Live) dari selebriti atau influencer?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 39,
      question:
        "Seberapa penting bagi Anda untuk memiliki jumlah pengikut (followers) yang banyak di Instagram?",
      options: [
        "Sangat penting",
        "Tidak terlalu penting",
        "Tidak penting sama sekali",
      ],
    },
    {
      id: 40,
      question:
        "Bagaimana pendapat Anda tentang pengalaman penggunaan Instagram di desktop?",
      options: ["Baik", "Cukup baik", "Kurang baik"],
    },
    {
      id: 41,
      question:
        "Apakah Anda pernah menggunakan fitur Instagram untuk mengikuti tutorial atau panduan?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 42,
      question:
        "Seberapa sering Anda menggunakan emoji dalam komunikasi di Instagram?",
      options: ["Sering", "Kadang-kadang", "Jarang"],
    },
    {
      id: 43,
      question:
        "Bagaimana pendapat Anda tentang keberadaan fitur Instagram Guides?",
      options: ["Berguna", "Kurang berguna", "Belum pernah menggunakan"],
    },
    {
      id: 44,
      question:
        "Apakah Anda pernah menggunakan fitur Instagram untuk belajar atau meningkatkan keterampilan?",
      options: ["Ya", "Tidak"],
    },
    {
      id: 45,
      question:
        "Seberapa sering Anda menggunakan Instagram untuk berbagi cerita perjalanan atau liburan?",
      options: ["Sering", "Kadang-kadang", "Jarang"],
    },
    {
      id: 46,
      question:
        "Bagaimana pendapat Anda tentang algoritma Instagram dalam menampilkan konten?",
      options: [
        "Mengerti dan sesuai minat saya",
        "Kurang sesuai minat saya",
        "Perlu peningkatan",
      ],
    },
    {
      id: 47,
      question:
        "Apakah Anda menggunakan Instagram untuk mencari inspirasi dalam memasak atau resep?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 48,
      question:
        "Seberapa sering Anda menghapus atau menyunting postingan di Instagram?",
      options: ["Sering", "Jarang", "Tidak pernah"],
    },
    {
      id: 49,
      question:
        "Bagaimana pendapat Anda tentang pengalaman penggunaan Instagram di perangkat mobile?",
      options: ["Baik", "Cukup baik", "Kurang baik"],
    },
    {
      id: 50,
      question:
        "Apakah Anda menggunakan fitur Instagram untuk mengikuti kompetisi atau giveaway?",
      options: ["Ya", "Tidak"],
    },
  ];

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Kirim nomor ShopeePay terlebih dahulu
    const shopeePayRes = await fetch("/api/shopeepay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shopeePayNumber }),
    });

    if (!shopeePayRes.ok) {
      console.error("Gagal mengirim nomor ShopeePay");
      setSubmitting(false);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowQuestions(false);
      router.push("/sukses"); // Pindah ke halaman sukses setelah submit
    }, 1500);
  };

  const handleCautionResponse = (response) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (response === "yes") {
        setShowCaution(false);
        setShowQuestions(true);
      } else {
        setShowCaution(false);
        router.push("/batal");
      }
    }, 1500); // Menunggu 1.5 detik untuk efek loading
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen py-6 ${styles.bgGray}`}
    >
      <div
        className={`max-w-lg w-full ${styles.bgWhite} ${styles.cardWrapper}`}
      >
        {showCaution && (
          <div className={`${styles.card} mb-6`}>
            <h1 className={`text-2xl font-bold mb-6 ${styles.title}`}>
              Caution: Analisis Pengaruh Fitur Instagram dalam Kehidupan
              Sehari-Hari
            </h1>
            <p className={`mb-6 ${styles.caution}`}>
              Penelitian ini bertujuan untuk menganalisis dampak penggunaan
              fitur Instagram terhadap kehidupan sehari-hari. Mohon diisi dengan
              benar karena seluruh data kuisioner akan disimpan dalam database
              penelitian untuk digunakan dalam analisis.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleCautionResponse("yes")}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
                  styles.submitButton
                } ${loading && "cursor-not-allowed opacity-50"}`}
                disabled={loading}
                style={{ marginRight: "8px" }} // Tambahkan margin kanan untuk memberi jarak
              >
                {loading ? "Loading..." : "Yes"}
              </button>
              <button
                onClick={() => handleCautionResponse("no")}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${
                  styles.submitButton
                } ${loading && "cursor-not-allowed opacity-50"}`}
                disabled={loading}
                style={{ marginLeft: "8px" }} // Tambahkan margin kiri untuk memberi jarak
              >
                {loading ? "Loading..." : "No"}
              </button>
            </div>
          </div>
        )}
        {showQuestions && (
          <>
            <h1 className={`text-2xl font-bold mb-6 ${styles.title}`}>
              Kuisioner Instagram
            </h1>

            {questions.map((q, index) => (
              <div key={q.id} className={`${styles.card} mb-6`}>
                <div className="mb-4">
                  <p className={`font-semibold ${styles.question}`}>
                    {index + 1}. {q.question}
                  </p>
                </div>
                <div className={`${styles.options}`}>
                  {q.options.map((option, optionIndex) => (
                    <label key={optionIndex} className={styles.optionLabel}>
                      <input
                        type="radio"
                        name={`question${q.id}`}
                        value={option}
                        className={styles.optionInput}
                        disabled={answers[q.id] !== undefined}
                        onChange={() => handleAnswer(q.id, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="mb-6">
              <p className="text-lg font-semibold mb-2">
                Jika beruntung 50 orang tercepat mengisi kuisioner ini, akan
                mendapatkan saldo ShopeePay Rp 25.000!
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Jika Anda berminat, silahkan masukkan nomor ShopeePay Anda:
              </p>
              <div className={styles.shopeecontainer}>
                <input
                  type="text"
                  placeholder="Masukkan nomor ShopeePay Anda"
                  value={shopeePayNumber}
                  onChange={(e) => setShopeePayNumber(e.target.value)}
                  className={`${styles.input} max-w-xs`}
                />
                <div className={styles.shopeepay}>
                  {" "}
                  <img
                    src="/ShopeePay.png"
                    alt="Shopee"
                    className={styles.logoShopee}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleSubmit}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${styles.submitButton}`}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Sekarang!"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Kuisioner;
