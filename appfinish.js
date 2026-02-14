import React, { useState } from "react";

// ==== DATA SOAL PER KATEGORI ====
type Question = { question: string; options: string[]; answer: string };

const quizData: Record<string, Question[]> = {
  "Fruits 🍎": [
    {
      question: "Buah berwarna kuning panjang?",
      options: ["Banana", "Apple", "Mango", "Grapes"],
      answer: "Banana",
    },
    {
      question: "Buah merah kecil manis?",
      options: ["Strawberry", "Papaya", "Pear", "Kiwi"],
      answer: "Strawberry",
    },
    {
      question: "Buah warna ungu?",
      options: ["Strawberry", "Grapes", "Mango", "Kiwi"],
      answer: "Grapes",
    },
    {
      question: "Which fruit is green and creamy inside",
      options: ["Durian", "Avocado", "Mango", "Kiwi"],
      answer: "Avocado",
    },
    {
      question: "Which fruit is king of fruit",
      options: ["Strawberry", "Grapes", "Mango", "Durian"],
      answer: "Durian",
    },
    {
      question: "Which fruit is oval and orange inside",
      options: ["Cherry", "Papaya", "Pear", "Kiwi"],
      answer: "Papaya",
    },
    {
      question: "Which fruit is brown color",
      options: ["Cherry", "Papaya", "Coconut", "Kiwi"],
      answer: "Coconut",
    },
    {
      question: "Which fruit is red color ",
      options: ["Cherry", "Papaya", "Pear", "Kiwi"],
      answer: "Cherry",
    },
    {
      question: "Which fruit taste is sweet",
      options: ["Lime", "Mango", "Lemon", "Kiwi"],
      answer: "Mango",
    },
    // ... tambahkan hingga 20 soal
  ],
  "Animals 🐶": [
    {
      question: "Hewan yang disebut sahabat manusia?",
      options: ["Dog", "Cat", "Tiger", "Elephant"],
      answer: "Dog",
    },
    {
      question: "Which Animal meows?",
      options: ["Dog", "Cat", "Tiger", "Elephant"],
      answer: "Cat",
    },
    {
      question: "Which Animal can run fast",
      options: ["Dog", "Cat", "Tiger", "Elephant"],
      answer: "Tiger",
    },
    {
      question: "Which Animal king of the junggle",
      options: ["Dog", "Cat", "Tiger", "Lion"],
      answer: "Lion",
    },
    {
      question: "Which Animal qwek qwek",
      options: ["Chicken", "Cat", "Duck", "Elephant"],
      answer: "Duck",
    },
    {
      question: "Which Animal have long neck",
      options: ["Dog", "Cat", "Girrafe", "Elephant"],
      answer: "Girrafe",
    },
    {
      question: "Hewan besar dengan belalai?",
      options: ["Elephant", "Horse", "Lion", "Cow"],
      answer: "Elephant",
    },
    {
      question: "Which Animal slow run",
      options: ["Dog", "Turtle", "Tiger", "Elephant"],
      answer: "Turtle",
    },
    {
      question: "Which Animal long body",
      options: ["Dog", "Turtle", "Snake", "Elephant"],
      answer: "Snake",
    },
    {
      question: "Which Animal has been long ears",
      options: ["Rabbit", "Tiger", "Snake", "Sheep"],
      answer: "Rabbit",
    },
    // ... hingga 20 soal
  ],
  "Colors 🎨": [
    {
      question: "Campuran biru dan kuning menghasilkan warna?",
      options: ["Green", "Red", "Purple", "Orange"],
      answer: "Green",
    },
    {
      question: "Warna langit cerah?",
      options: ["Blue", "Black", "Gray", "Pink"],
      answer: "Blue",
    },
    {
      question: "Warna Matahari",
      options: ["Blue", "Black", "Yellow", "Pink"],
      answer: "Yellow",
    },
    {
      question: "What color the blood",
      options: ["Blue", "Red", "Gray", "Pink"],
      answer: "Red",
    },
    {
      question: "What color is chocolate",
      options: ["Blue", "Brown", "Gray", "Pink"],
      answer: "Brown",
    },
    {
      question: "What color the lemon",
      options: ["Blue", "Yellow", "Gray", "Pink"],
      answer: "Yellow",
    },
    {
      question: "What color is a Grapes",
      options: ["Purple", "Black", "Gray", "Red"],
      answer: "Purple",
    },
    {
      question: "What color is milk",
      options: ["Blue", "White", "Gray", "Pink"],
      answer: "White",
    },
    {
      question: "What color is a banana",
      options: ["Blue", "White", "Yellow", "Pink"],
      answer: "Yellow",
    },
    {
      question: "What color is an orange",
      options: ["Blue", "White", "Orange", "Pink"],
      answer: "Orange",
    },
    {
      question: "What color is indonesian flag",
      options: [
        "Blue and White",
        "White and yellow",
        "Gray and black",
        "Red and White",
      ],
      answer: "Red and White",
    },
    {
      question: "What color is the sea?",
      options: ["Blue", "White", "Blue", "Pink"],
      answer: "Blue",
    },
    {
      question: "What color is grass? ",
      options: ["Blue", "Green", "Blue", "Pink"],
      answer: "Green",
    },
    // ... hingga 20 soal
  ],
  "Body Parts 👤": [
    {
      question: "Bagian tubuh untuk melihat?",
      options: ["Eye", "Nose", "Ear", "Hand"],
      answer: "Eye",
    },
    {
      question: "Bagian tubuh untuk mendengar?",
      options: ["Ear", "Mouth", "Neck", "Foot"],
      answer: "Ear",
    },
    {
      question: "Which body part has tongue?",
      options: ["Ear", "Chin", "Mouth", "Foot"],
      answer: "Mouth",
    },
    {
      question: "Which body part grows hair?",
      options: ["Ear", "Face", "Mouth", "Head"],
      answer: "Head",
    },
    {
      question: "Which body part helps us run?",
      options: ["Leg", "Face", "Mouth", "Head"],
      answer: "Leg",
    },
    {
      question: "Which body part helps us see?",
      options: ["Leg", "Face", "eyes", "Nose"],
      answer: "Eyes",
    },
    {
      question: "Which body part helps us hear? ",
      options: ["ears", "Face", "Mouth", "Head"],
      answer: "ears",
    },
    {
      question: "Which body part helps us hold things? ",
      options: ["ears", "Neck", "Hand", "Head"],
      answer: "Hand",
    },
    {
      question: "Which body part connect head to body? ",
      options: ["Knee", "Neck", "Hand", "Foot"],
      answer: "Neck",
    },
    {
      question: "Which body part bends when we sit ",
      options: ["ears", "Neck", "Hand", "Knee"],
      answer: "Knee",
    },
    // ... hingga 20 soal
  ],
  "Numbers 🔢": [
    {
      question: "Angka setelah Three?",
      options: ["Four", "Five", "Two", "Six"],
      answer: "Four",
    },
    {
      question: "Angka sebelum Ten?",
      options: ["Nine", "Eight", "Eleven", "Seven"],
      answer: "Nine",
    },
    {
      question: "Angka sebelum Eleven?",
      options: ["Nine", "Eight", "Twelve", "Ten"],
      answer: "Ten",
    },
    {
      question: "What number before two",
      options: ["Three", "Zero", "One", "Seven"],
      answer: "One",
    },
    {
      question: "What number After nineteen",
      options: ["Three", "Twelve", "One", "Twenty"],
      answer: "Twenty",
    },
    {
      question: "What number After Eleven",
      options: ["Seven", "Ten", "Twelve", "Seven"],
      answer: "Twelve",
    },
    {
      question: "What number After fifteen",
      options: ["Ten", "sixteen", "fifteen", "seventeen"],
      answer: "sixteen",
    },
    {
      question: "What number Before Twenty",
      options: ["eighteen", "Nineteen", "fifteen", "seventeen"],
      answer: "Nineteen",
    },
    {
      question: "Two plus three",
      options: ["six", "four", "Five", "seven"],
      answer: "Five",
    },
    {
      question: "Seven plus Three",
      options: ["six", "four", "one", "Ten"],
      answer: "Ten",
    },
    // ... hingga 20 soal
  ],
};

export default function App() {
  const [score, setScore] = useState(
    localStorage.getItem("zl_score")
      ? parseInt(localStorage.getItem("zl_score")!)
      : 0
  );
  const [quiz, setQuiz] = useState<{ cat: string; qIndex: number } | null>(
    null
  );

  // ==== SAVE PROGRESS ====
  const saveProgress = (newScore: number) => {
    localStorage.setItem("zl_score", newScore.toString());
  };

  // ==== START QUIZ ====
  const startQuiz = (cat: string) => {
    setQuiz({ cat, qIndex: 0 });
  };

  // ==== CHECK ANSWER ====
  const checkAnswer = (selected: string) => {
    if (!quiz) return;
    const currentQ = quizData[quiz.cat][quiz.qIndex];
    if (selected === currentQ.answer) {
      alert("Benar! 🎉 +10 poin");
      const newScore = score + 10;
      setScore(newScore);
      saveProgress(newScore);
    } else {
      alert("Salah ❌");
    }

    // lanjut ke soal berikut
    if (quiz.qIndex + 1 < quizData[quiz.cat].length) {
      setQuiz({ cat: quiz.cat, qIndex: quiz.qIndex + 1 });
    } else {
      alert("Kategori selesai!");
      setQuiz(null);
    }
  };

  // ==== BADGE ====
  const renderBadge = () => {
    if (score >= 50 && score < 150) {
      return (
        <div
          style={{
            background: "gold",
            color: "black",
            padding: 8,
            borderRadius: 10,
          }}
        >
          🥉 Beginner
        </div>
      );
    } else if (score >= 150 && score < 250) {
      return (
        <div
          style={{
            background: "silver",
            color: "black",
            padding: 8,
            borderRadius: 10,
          }}
        >
          🥈 Intermediate
        </div>
      );
    } else if (score >= 250) {
      return (
        <div
          style={{
            background: "gold",
            color: "black",
            padding: 8,
            borderRadius: 10,
          }}
        >
          🥇 Master
        </div>
      );
    } else {
      return <div style={{ opacity: 0.6 }}>Belum ada badge</div>;
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(135deg,#141e30,#243b55)",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>💙 ZONE LEARNING PRO ULTRA 💙</h1>

      {/* ==== MENU ==== */}
      {!quiz && (
        <div id="menu">
          {Object.keys(quizData).map((cat) => (
            <button
              key={cat}
              onClick={() => startQuiz(cat)}
              style={{
                padding: "12px 20px",
                margin: "8px",
                border: "none",
                borderRadius: "15px",
                background: "linear-gradient(45deg,#00c6ff,#0072ff)",
                color: "white",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* ==== QUIZ ==== */}
      {quiz && (
        <div id="quizBox">
          <h3>Quiz: {quiz.cat}</h3>
          <p>{quizData[quiz.cat][quiz.qIndex].question}</p>
          {quizData[quiz.cat][quiz.qIndex].options.map((opt) => (
            <button
              key={opt}
              onClick={() => checkAnswer(opt)}
              style={{ margin: "5px", padding: "10px 15px" }}
            >
              {opt}
            </button>
          ))}
          <br />
          <button onClick={() => setQuiz(null)}>⬅ Kembali</button>
        </div>
      )}

      {/* ==== DASHBOARD ==== */}
      <h2>📊 Dashboard</h2>
      <div id="dashboard">⭐ Poin: {score}</div>

      {/* ==== BADGES ==== */}
      <h2>🏆 Badge</h2>
      <div id="badges">{renderBadge()}</div>

      <br />
      <br />
      <div style={{ opacity: 0.4, fontSize: "12px" }}>ZONE LEARNING © 2026</div>
    </div>
  );
}
