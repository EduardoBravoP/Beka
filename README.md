# Gerald - Tech assignment

---

## Table of Contents
- [Overview](#overview)
- [Pattern](#Pattern)
- [Routes](#Routes)
- [Tech Stack](#tech-stack)
- [Thought Process](#Thought-Process)
- [Installation](#installation)

---

## Overview
I have built the entire app with React Native with React Navigation for the routes.
For the screen animations I used react-native-reanimated

### iOS
https://github.com/user-attachments/assets/593c40c7-744c-489a-9752-b7aeba839f11

### Android
[ANDROID.webm](https://github.com/user-attachments/assets/5cdccf9b-1c86-4784-92bc-1f47342bd273)

---

## Pattern
I implemented the screens and components using MVVM pattern. In this particular project it was overkill, because it doesn't have a lot of business logic.
However the responsibilities were very well separated.

---

## Routes
### Drawer Navigator
- **Main** (BottomTab Navigator)
  - **Home** (Stack)
    - Home
    - ProductDetails
  - **Cart**
  - **Favorites**
- **Orders**

---

## Thought Process
Example:  
1. I designed the screens I wanted to make in Figma.
2. I implemented the routes with navigators including the types for stacks.
3. I added animation to the drawer screen.
4. I added animation to the bottom tab.
5. I ran it on both devices (Android and iOS) to check that everything was working correctly.

---

## Installation
```bash
# Clone the repo
git clone https://github.com/EduardoBravoP/beka.git

# Install dependencies
npm install
# or
yarn install

# Run the app
npx react-native run-ios # for iOS
npx react-native run-android # for Android
