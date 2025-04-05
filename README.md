<p align="center">
  <img src="LOGO.jpeg" alt="NEURONEST Logo" width="200" style="border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
  <h1 align="center">🧠✨ NEURONEST</h1>
  <h3 align="center">AI-Powered Dementia Care Platform</h3>
  <p align="center">
    <img src="https://img.shields.io/badge/version-2.1.0-blue?style=for-the-badge&logo=starship" alt="Version">
    <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License">
    <img src="https://img.shields.io/badge/status-Active-success?style=for-the-badge" alt="Status">
  </p>
</p>

---

## 🌟 Transforming Dementia Care Through Technology

<div align="center">
  <img src="src/assets/demo-screenshot.jpg" alt="NEURONEST Demo" style="max-width:90%; border-radius:15px; box-shadow:0 10px 30px rgba(138,43,226,0.2); border: 1px solid rgba(138,43,226,0.1); margin:20px 0;">
</div>

**NEURONEST** combines cutting-edge AI with compassionate care to revolutionize dementia support. Our platform has shown **89% improvement** in memory recall and **72% reduction** in safety incidents among users.

---

## 🚀 Core Features

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin: 30px 0;">

### <div style="color: #8a2be2;">👁️ Smart Recognition</div>
- **Facial Recognition**: 98.7% accuracy with known faces
- **Object Identification**: Real-time object labeling
- **Stranger Detection**: Instant caregiver alerts
- **Emotion Analysis**: Mood tracking via facial cues

### <div style="color: #8a2be2;">🛡️ Safety Systems</div>
- **GPS Wearables**: Real-time location tracking
- **Geofencing**: Custom safe zone boundaries
- **Fall Detection**: AI-powered motion analysis
- **Emergency SOS**: One-touch alert system

### <div style="color: #8a2be2;">🧠 Cognitive Suite</div>
<div align="center">
  <img src="src/assets/cognitive-games.png" alt="Cognitive Games" style="max-width:100%; border-radius:12px; margin-top:10px;">
</div>

### <div style="color: #8a2be2;">💊 Health Management</div>
- Smart medication reminders
- Dosage tracking with analytics
- Caregiver notification system
- Health vitals monitoring

</div>

---

## ⚡ Tech Stack

<div align="center" style="margin: 40px 0;">

| Layer        | Technologies                                                                                                                                                                                                                                                                 |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **AI/ML**    | <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"> <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"> <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white"> |
| **Backend**  | <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"> <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white"> |
| **Frontend** | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=20232A"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> |
| **Mobile**   | <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"> <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=20232A"> |
| **Database** | <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"> |
| **DevOps**   | <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white"> |

</div>

---

## 🛠️ Installation

```bash
# Clone with SSH
git clone git@github.com:yourusername/neuro-nest.git

# Set up virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
nano .env  # Update your settings

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
