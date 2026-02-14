import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* =========================
   SOUND SYSTEM
========================= */

const playBeep = (freq, duration = 150) => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.frequency.value = freq;
  oscillator.type = "sine";
  oscillator.start();
  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration / 1000);
};

const soundClick = () => playBeep(500, 100);
const soundCorrect = () => playBeep(900, 200);
const soundWrong = () => playBeep(200, 300);

/* =========================
   DATA 120 WORDS + EMOJI
========================= */

const DATA = [
  // ===== FRUITS =====
  { word: "Apple", emoji: "🍎", category: "Fruits" },
  { word: "Banana", emoji: "🍌", category: "Fruits" },
  { word: "Orange", emoji: "🍊", category: "Fruits" },
  { word: "Mango", emoji: "🥭", category: "Fruits" },
  { word: "Grapes", emoji: "🍇", category: "Fruits" },
  { word: "Watermelon", emoji: "🍉", category: "Fruits" },
  { word: "Pineapple", emoji: "🍍", category: "Fruits" },
  { word: "Strawberry", emoji: "🍓", category: "Fruits" },
  { word: "Cherry", emoji: "🍒", category: "Fruits" },
  { word: "Pear", emoji: "🍐", category: "Fruits" },
  { word: "Peach", emoji: "🍑", category: "Fruits" },
  { word: "Kiwi", emoji: "🥝", category: "Fruits" },
  { word: "Lemon", emoji: "🍋", category: "Fruits" },
  { word: "Avocado", emoji: "🥑", category: "Fruits" },
  { word: "Durian", emoji: "🟡", category: "Fruits" },
  { word: "Rambutan", emoji: "🔴", category: "Fruits" },
  { word: "Blueberry", emoji: "🫐", category: "Fruits" },
  { word: "Coconut", emoji: "🥥", category: "Fruits" },

  // ===== ANIMALS =====
  { word: "Cat", emoji: "🐱", category: "Animals" },
  { word: "Dog", emoji: "🐶", category: "Animals" },
  { word: "Cow", emoji: "🐮", category: "Animals" },
  { word: "Goat", emoji: "🐐", category: "Animals" },
  { word: "Horse", emoji: "🐴", category: "Animals" },
  { word: "Chicken", emoji: "🐔", category: "Animals" },
  { word: "Duck", emoji: "🦆", category: "Animals" },
  { word: "Bird", emoji: "🐦", category: "Animals" },
  { word: "Fish", emoji: "🐟", category: "Animals" },
  { word: "Elephant", emoji: "🐘", category: "Animals" },
  { word: "Lion", emoji: "🦁", category: "Animals" },
  { word: "Tiger", emoji: "🐯", category: "Animals" },
  { word: "Monkey", emoji: "🐵", category: "Animals" },
  { word: "Rabbit", emoji: "🐰", category: "Animals" },
  { word: "Frog", emoji: "🐸", category: "Animals" },
  { word: "Snake", emoji: "🐍", category: "Animals" },
  { word: "Sheep", emoji: "🐑", category: "Animals" },
  { word: "Zebra", emoji: "🦓", category: "Animals" },
  { word: "Giraffe", emoji: "🦒", category: "Animals" },
  { word: "Bear", emoji: "🐻", category: "Animals" },

  // ===== CLASSROOM =====
  { word: "Book", emoji: "📚", category: "Classroom" },
  { word: "Chair", emoji: "🪑", category: "Classroom" },
  { word: "Table", emoji: "🛋️", category: "Classroom" },
  { word: "Pencil", emoji: "✏️", category: "Classroom" },
  { word: "Pen", emoji: "🖊️", category: "Classroom" },
  { word: "Eraser", emoji: "🧽", category: "Classroom" },
  { word: "Ruler", emoji: "📏", category: "Classroom" },
  { word: "Bag", emoji: "🎒", category: "Classroom" },
  { word: "Whiteboard", emoji: "⬜", category: "Classroom" },
  { word: "Marker", emoji: "🖍️", category: "Classroom" },
  { word: "Notebook", emoji: "📓", category: "Classroom" },
  { word: "Crayons", emoji: "🖍️", category: "Classroom" },
  { word: "Glue", emoji: "🧴", category: "Classroom" },
  { word: "Scissors", emoji: "✂️", category: "Classroom" },
  { word: "Clock", emoji: "🕒", category: "Classroom" },
  { word: "Computer", emoji: "💻", category: "Classroom" },
  { word: "Projector", emoji: "📽️", category: "Classroom" },
  { word: "Map", emoji: "🗺️", category: "Classroom" },
  { word: "Dictionary", emoji: "📖", category: "Classroom" },

  // ===== COLORS =====
  { word: "Red", emoji: "🔴", category: "Colors" },
  { word: "Blue", emoji: "🔵", category: "Colors" },
  { word: "Yellow", emoji: "🟡", category: "Colors" },
  { word: "Green", emoji: "🟢", category: "Colors" },
  { word: "Orange", emoji: "🟠", category: "Colors" },
  { word: "Purple", emoji: "🟣", category: "Colors" },
  { word: "Pink", emoji: "🌸", category: "Colors" },
  { word: "Black", emoji: "⚫", category: "Colors" },
  { word: "White", emoji: "⚪", category: "Colors" },
  { word: "Brown", emoji: "🟤", category: "Colors" },
  { word: "Gray", emoji: "⬜", category: "Colors" },
  { word: "Gold", emoji: "🥇", category: "Colors" },
  { word: "Silver", emoji: "🥈", category: "Colors" },
  { word: "Maroon", emoji: "🟥", category: "Colors" },
  { word: "Navy", emoji: "🟦", category: "Colors" },
  { word: "Turquoise", emoji: "🟢", category: "Colors" },
  { word: "Beige", emoji: "🟡", category: "Colors" },
  { word: "Cyan", emoji: "🔷", category: "Colors" },
  { word: "Magenta", emoji: "🟣", category: "Colors" },
  { word: "Indigo", emoji: "🔵", category: "Colors" },

  // ===== BODY PARTS =====
  { word: "Head", emoji: "🙂", category: "Body Parts" },
  { word: "Eye", emoji: "👁️", category: "Body Parts" },
  { word: "Ear", emoji: "👂", category: "Body Parts" },
  { word: "Nose", emoji: "👃", category: "Body Parts" },
  { word: "Mouth", emoji: "👄", category: "Body Parts" },
  { word: "Hand", emoji: "✋", category: "Body Parts" },
  { word: "Finger", emoji: "☝️", category: "Body Parts" },
  { word: "Arm", emoji: "💪", category: "Body Parts" },
  { word: "Leg", emoji: "🦵", category: "Body Parts" },
  { word: "Foot", emoji: "🦶", category: "Body Parts" },
  { word: "Hair", emoji: "💇", category: "Body Parts" },
  { word: "Teeth", emoji: "😁", category: "Body Parts" },
  { word: "Tongue", emoji: "👅", category: "Body Parts" },
  { word: "Shoulder", emoji: "🤷", category: "Body Parts" },
  { word: "Knee", emoji: "🦵", category: "Body Parts" },
  { word: "Stomach", emoji: "🤰", category: "Body Parts" },
  { word: "Back", emoji: "🧍", category: "Body Parts" },
  { word: "Neck", emoji: "🧍", category: "Body Parts" },
  { word: "Face", emoji: "😀", category: "Body Parts" },
  { word: "Chest", emoji:, category: "Body Parts" },

  // ===== NUMBERS =====
  { word: "One", emoji: "1️⃣", category: "Numbers" },
  { word: "Two", emoji: "2️⃣", category: "Numbers" },
  { word: "Three", emoji: "3️⃣", category: "Numbers" },
  { word: "Four", emoji: "4️⃣", category: "Numbers" },
  { word: "Five", emoji: "5️⃣", category: "Numbers" },
  { word: "Six", emoji: "6️⃣", category: "Numbers" },
  { word: "Seven", emoji: "7️⃣", category: "Numbers" },
  { word: "Eight", emoji: "8️⃣", category: "Numbers" },
  { word: "Nine", emoji: "9️⃣", category: "Numbers" },
  { word: "Ten", emoji: "🔟", category: "Numbers" },
  { word: "Eleven", emoji: "11", category: "Numbers" },
  { word: "Twelve", emoji: "12", category: "Numbers" },
  { word: "Thirteen", emoji: "13", category: "Numbers" },
  { word: "Fourteen", emoji: "14", category: "Numbers" },
  { word: "Fifteen", emoji: "15", category: "Numbers" },
  { word: "Sixteen", emoji: "16", category: "Numbers" },
  { word: "Seventeen", emoji: "17", category: "Numbers" },
  { word: "Eighteen", emoji: "18", category: "Numbers" },
  { word: "Nineteen", emoji: "19", category: "Numbers" },
  { word: "Twenty", emoji: "20", category: "Numbers" },
];

/* =========================
   MAIN APP
========================= */

export default function App() {
  const categories = [...new Set(DATA.map((d) => d.category))];

  const [mode, setMode] = useState("landing");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [categoryScore, setCategoryScore] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("zoneApp");
    if (saved) {
      const parsed = JSON.parse(saved);
      setScore(parsed.score || 0);
      setCategoryScore(parsed.categoryScore || {});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("zoneApp", JSON.stringify({ score, categoryScore }));
  }, [score, categoryScore]);

  const filtered = selectedCategory
    ? DATA.filter((d) => d.category === selectedCategory)
    : [];

  const current = filtered[index % filtered.length];

  const speak = () => {
    soundClick();
    const u = new SpeechSynthesisUtterance(current.word);
    u.lang = "en-US";
    window.speechSynthesis.speak(u);
  };

  const next = () => {
    soundClick();
    setIndex((prev) => prev + 1);
    setFeedback("");
  };

  const generateOptions = () => {
    const options = [current.word];
    while (options.length < 4) {
      const random = filtered[Math.floor(Math.random() * filtered.length)].word;
      if (!options.includes(random)) options.push(random);
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const checkAnswer = (ans) => {
    if (ans === current.word) {
      soundCorrect();
      setScore(score + 1);
      setCategoryScore((prev) => ({
        ...prev,
        [selectedCategory]: (prev[selectedCategory] || 0) + 1,
      }));
      setFeedback("✅ Correct!");
    } else {
      soundWrong();
      setFeedback("❌ Wrong!");
    }
  };

  const isUnlocked = (cat) => {
    if (cat === "Fruits") return true;
    return (categoryScore["Fruits"] || 0) >= 5;
  };

  const level = Math.floor(score / 10) + 1;

  /* ================= UI ================= */

  if (mode === "landing") {
    return (
      <div style={styles.landing}>
        <h1>ZONE LEARNING</h1>
        <button
          style={styles.btn}
          onClick={() => {
            soundClick();
            setMode("menu");
          }}
        >
          Start
        </button>
      </div>
    );
  }

  if (mode === "menu") {
    return (
      <div style={styles.container}>
        <h2>Select Category</h2>
        {categories.map((cat) => (
          <button
            key={cat}
            disabled={!isUnlocked(cat)}
            style={{ ...styles.btn, opacity: isUnlocked(cat) ? 1 : 0.5 }}
            onClick={() => {
              soundClick();
              setSelectedCategory(cat);
              setIndex(0);
              setMode("learn");
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  }

  if (mode === "learn") {
    return (
      <div style={styles.container}>
        <h3>{selectedCategory}</h3>
        <h4>
          Level {level} ⭐ | Score {score}
        </h4>
        <motion.div
          key={current.word}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.card}
        >
          <div style={{ fontSize: 80 }}>{current.emoji}</div>
          <h2>{current.word}</h2>
          <button style={styles.smallBtn} onClick={speak}>
            🔊 Pronounce
          </button>
        </motion.div>
        <button style={styles.btn} onClick={next}>
          Next
        </button>
        <button
          style={styles.btn}
          onClick={() => {
            soundClick();
            setMode("quiz");
          }}
        >
          Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h3>Quiz - {selectedCategory}</h3>
      <div style={styles.card}>
        <div style={{ fontSize: 70 }}>{current.emoji}</div>
        <h3>What is this?</h3>
        {generateOptions().map((opt, i) => (
          <button
            key={i}
            style={styles.optionBtn}
            onClick={() => checkAnswer(opt)}
          >
            {opt}
          </button>
        ))}
        <h3>{feedback}</h3>
      </div>
      <button style={styles.btn} onClick={next}>
        Next Question
      </button>
      <button
        style={styles.btn}
        onClick={() => {
          soundClick();
          setMode("menu");
        }}
      >
        Back
      </button>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  landing: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#1e3a8a,#3b82f6)",
    color: "white",
  },
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    background: "#f2f7ff",
  },
  card: {
    background: "white",
    padding: 30,
    borderRadius: 20,
    textAlign: "center",
    width: 300,
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  btn: {
    padding: "10px 20px",
    borderRadius: 10,
    border: "none",
    background: "#1e3a8a",
    color: "white",
    cursor: "pointer",
    margin: 5,
  },
  smallBtn: {
    padding: "6px 15px",
    borderRadius: 8,
    border: "none",
    background: "#10b981",
    color: "white",
    cursor: "pointer",
  },
  optionBtn: {
    display: "block",
    width: "100%",
    margin: "5px 0",
    padding: 8,
    borderRadius: 8,
    border: "none",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
  },
};
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/ameliaa9905-create/ZL-ENGLISH.git
