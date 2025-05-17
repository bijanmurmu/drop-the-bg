# 🎯 Drop The BG

**Drop The BG** is a powerful and intuitive web application for removing backgrounds from images.

---

## 🚀 Features

- 🌟 Clean, modern interface with Tailwind CSS
- ⚡ Fast and accurate background removal with `rembg`
- 🖼️ Supports JPG, PNG image formats
- 📥 Easy file upload and download
- 🎨 Real-time preview of both original and processed image
- 🖱️ Drag-and-drop or manual file selection
- ✅ Option to choose download destination (via browser)
- 🔗 Footer with GitHub & LinkedIn links

---

## 🛠️ Tech Stack

- **Frontend:** React (TypeScript), Tailwind CSS, Vite
- **Backend:** FastAPI (Python), rembg
- **Others:** Axios, framer-motion, react-icons, and more

---

## 📦 Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/bijanmurmu/drop-the-bg.git
cd drop-the-bg
```

---

### 2. Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

---

### 3. Frontend Setup (Vite + React + Tailwind)

```bash
cd frontend
npm install
npm run dev
```

---

## 📁 How It Works

1. **User uploads an image** from the frontend interface.
2. The image is sent to the **FastAPI backend**.
3. Background is removed using the `rembg` library.
4. The processed image is returned and shown in the browser.
5. User can **download** the background-free version.
