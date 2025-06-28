# Personal Study AI

Personal Study AI is a collaborative, productivity-focused web application designed to enhance the learning experience for students. It leverages AI features and community engagement tools to help users plan, track, and optimize their study sessions, connect with peers, and make learning more interactive and rewarding.

## Features

### 🧑‍🎓 Community Hub
- **Connect & Collaborate**: Join a vibrant community of students to discuss topics, share resources, and grow together.
- **Recent Discussions**: View and participate in trending discussions.
- **Study Groups**: Easily create or join study groups based on interests or subjects.
- **Quick Actions**: Start discussions, create study groups, share resources, or join challenges with one click.
- **Community Guidelines**: Encourages knowledge sharing, constructive discussions, and peer support.

### 📝 Audio Notes (AI-Powered)
- **Record & Transcribe**: Use your microphone to record study notes. Notes are automatically transcribed using AI-powered speech-to-text (Whisper API in production).
- **Summarization**: Generate key point summaries of your notes.
- **Flashcard Generation**: Automatically create flashcards from transcribed notes for effective revision.
- **Organization**: Categorize and tag notes for easy retrieval.

### 🏆 Challenges & Achievements
- **Weekly & Monthly Challenges**: Participate in challenges such as "Study Streak", "Flashcard Master", and "Focus Master" to earn XP and badges.
- **Progress Tracking**: See your challenge progress and completed milestones.
- **Rewards**: Earn badges, XP, profile boosts, and more for active participation.

### 📅 Study Planner & Dashboard
- **Set Study Goals**: Define study goals and track your progress visually.
- **Upcoming Events**: Stay updated on workshops, quizzes, and community events.
- **Reminders & Streaks**: Maintain study streaks and never miss a session.

### 🤝 Study Buddies
- **Connect with Peers**: Find and connect with study buddies based on interests, subjects, or skill levels.
- **Mutual Support**: Message buddies, schedule sessions, and build study streaks together.

### 🔧 Productivity Tools
- **Pomodoro Sessions**: Integrated Pomodoro timer with focus tracking.
- **Leaderboard**: See how you rank among peers and get recognized for your efforts.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **AI Services**: (Mocked for development) Whisper API (for transcription), GPT (for summarization & flashcards)
- **Icons**: Lucide-react
- **State Management**: React hooks and context
- **Other Utilities**: Custom hooks, local storage for user data

## Getting Started

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Vigneshm2004/personal-study-AI.git
    ```

2. **Install Dependencies**
    ```bash
    cd personal-study-AI
    npm install
    ```

3. **Run the Application**
    ```bash
    npm start
    ```

4. **Build for Production**
    ```bash
    npm run build
    ```

> **Note:** For full AI features (audio transcription, summarization, flashcard generation), you will need API keys for OpenAI/Whisper in production. The current version uses mocked services for local development.

## Folder Structure

```
src/
  components/
    Audio/           # Audio notes, recording, playback, and AI transcription
    Community/       # Community Hub, Study Buddies, Challenges, Discussions
    Dashboard/       # Main dashboard and overview widgets
    Study/           # Study planner and tools
  hooks/             # Custom React hooks (e.g., useAudioRecorder)
  services/          # Integration with AI and storage services
  utils/             # Utility functions (e.g., storage)
  types/             # TypeScript types and interfaces
```

## Contributing

Contributions are welcome! Open an issue or submit a pull request to help improve Personal Study AI.

## License

[MIT](LICENSE)

## Author

[Vignesh M](https://github.com/Vigneshm2004)

---

Happy learning! 🚀
