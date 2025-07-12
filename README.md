# Timetable-Optimizer

This branch contains Version 2.0 of the Course Selection & Timetable Assistant.

## Try It
👉 [Live Demo](https://roshansai07.github.io/Timetable-Optimizer/)

## What’s New in v2.0
✅ Improved Slot Mapping Logic
Smart alignment of theory and lab slots using unifiedTimes with accurate placement.

🎯 Lab-only Time Handling
Theory slots are now auto-skipped in lab-only periods, preserving logical slot allocation.

📚 Dynamic Teacher Selection
Auto-picks best-fit teachers if “No Preference” is selected, with visual selection UI.

📤 Export Timetable
Export as PDF or Image with a single click.

🧠 Conflict Detection System
Warns you of overlapping slots with exact time/day references.

💾 Save & Load Selections
Store your timetable preferences in the browser.

## Tech Stack
HTML, CSS (Custom UI)
JavaScript (DOM-based rendering)
html2canvas, jsPDF for export features

## Branch Purpose
This branch is deployed separately from main and serves as a stable release for Version 2.0.
The main branch will remain clean or host the legacy version.

## How to Use

1. Select a course from the dropdown.
2. Click "Confirm" to see available teachers.
3. Choose a teacher. Repeat for other courses.
4. Click "Generate Timetable" to see your schedule.
5. Use the "Reset" button to start over.

## Notes
-You can select one or more courses at a time, but your choices are locked until you hit the reset button.
- Lab end times have been rounded to 50 minutes for easier logic.
- Selections stay saved even when switching between courses.
- All data is stored in the browser's memory—no backend used.

## Files

- `index.html` — Main page structure.
- `style.css` — Basic styles.
- `script.js` — Logic for selection and timetable generation.
- `data.js` — Contains course and slot data.


## Clone It

```bash
git clone git@github.com:RoshanSai07/Timetable-Optimizer.git

## Author

Created by Roshan – VIT-AP, 2025–2026
