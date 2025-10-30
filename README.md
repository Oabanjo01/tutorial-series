# 🧭 Tutorial Series

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)
![Next.js](https://img.shields.io/badge/framework-Next.js-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue?logo=typescript)
![React](https://img.shields.io/badge/library-React-61DAFB?logo=react)

A collection of structured, hands-on tutorials exploring **React**, **React Native**, and **AI-powered applications**.  
Each project is a self-contained example focused on clean architecture, maintainability, and production-ready design.

---

# 🧭 Tutorial Series

## 📚 Tutorials

### [01 - Interactive 3D Globe with Next.js](./01-interactive-3d-globe/)
A modern 3D globe visualization with geographic data clustering, particle effects, and smooth animations.

**Tech Stack:** Next.js, Three.js, TypeScript, React Globe GL

---

## 📁 Repository Structure

tutorial-series/
├── 01-interactive-3d-globe/
│ ├── README.md
│ ├── src/
│ │ ├── app/
│ │ ├── components/
│ │ ├── utils/
│ │ └── types/
│ └── structure.txt
└── future-projects/


Each folder includes:
- A **README.md** with tutorial details  
- A **structure.txt** file generated using:
  ```bash
  tree -I 'node_modules|.git|build|dist|.next|coverage' -a -L 4 > structure.txt

## ⚙️ Getting Started

Clone the repository and explore the **3D Globe** tutorial:

```bash
git clone https://github.com/<your-username>/tutorial-series.git
cd tutorial-series/01-interactive-3d-globe
```
Install dependencies and start the development server:

```bash
yarn install
yarn dev
Open http://localhost:3000 to view the interactive globe.
```

# 💡 Learn by Building

This series emphasizes **learning through implementation**, covering:

- Front-end architecture and component structuring  
- State management and API workflows  
- Deployment readiness and optimization practices  

---

## 🤝 Contribution & Feedback

Contributions are welcome! You can:

- Suggest new tutorial ideas  
- Report issues or improvements  
- Submit pull requests for enhancements  

---

© 2025 [Your Name]. Released under the [MIT License](LICENSE).
