# Mocksy

Mocksy is an intelligent mock interview platform that uses AI to simulate real interview scenarios. Users can sign in, generate role-based interviews, and get voice-interacted feedback—all powered by modern tech stacks like Firebase, Gemini, and Vapi.

## Features

- 🔐 **User Authentication** using Firebase
- 🧠 **AI Interviewer** powered by Vapi for voice-based Q&A
- ✨ **Question and Feedback Generation** using Google's Gemini
- 📚 **Firestore Integration** for storing interviews and results
- 🎯 **Scoring System**: AI-generated feedback score out of 100
- 🔄 **Retake Interviews** To improve Feedback score
- 🌍 **Public Access**: Take interviews created by other users
- 🎨 **UI Components** styled with ShadCN
- 🌗 **Light/Dark Mode Toggle** for better accessibility

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Firebase Auth** | Sign-in and authentication |
| **Firestore** | Store user data, interviews, and feedback |
| **Vapi** | Voice assistant for conducting interviews |
| **Gemini** | Generates role-based interview questions and insightful feedback |
| **Shadcn/UI** | Modern and customizable component library |
| **Next.js** | App framework |


## How It Works

1. **Sign In** using Firebase authentication
2. **Generate Interview** based on:
   - Role (e.g., Frontend Developer)
   - Tech Stack (e.g., React, Node.js)
   - Experience Level or Post
3. **Start Interview** with the Vapi-powered AI interviewer
4. **Real-time Q&A**: Speak with the assistant
5. **Feedback** is generated using Gemini and scored out of 100
6. **Retake Interview** or **Browse public interviews**
7. **View Past Feedback** in your history

## Live preview
- https://mocksy-2bgx.vercel.app/
