# Timetable Optimizer

A smart, conflict-aware timetable builder for students.  
Helps you plan course schedules using mock registration data, select preferred teachers, auto-generate clash-free timetables, and export your final schedule as an image or PDF.

> ⚠️ Uses mock registration data. Final course registration may differ.

## Live Demo

**Try it here:**  https://roshansai07.github.io/Timetable-Optimizer/

## ✨ What’s New in v4.2

- **Updated Course & Teacher Data**  
  Includes refreshed mock registration data with courses, teachers, and slot mappings.

- **Selected Teachers Table**  
  Automatically lists your chosen theory & lab teachers in a clean, shareable table.

- **Smart Auto-Select (No Clashes)**  
  Picks teacher–slot combinations that avoid overlaps wherever possible.

- **Conflict Detection System**  
  Highlights overlapping slots with visual warnings and details.

- **Timetable Grid View**  
  Clear weekly layout with theory, lab, and conflict markers.

- **Export as Image**  
  One-click export of the full timetable + selected teachers.

- **Export as PDF (A3 Landscape)**  
  High-quality PDF export for sharing or printing.

- **Help Overlay**  
  Built-in guide explaining how to use the tool, Auto-Select logic, and tips.

- **Original Course Registration Demo Video**  
  Built-in video frame for the demo video of the course registration-official.

## Core Features

- Smart slot mapping for theory + lab
- Auto-skip theory slots during lab hours
- Dynamic teacher selection with “No Preference”
- Randomized valid schedule generation
- Conflict highlighting and warnings
- Local storage for selections
- Shareable exports (PNG / PDF)
- Clean UI with mobile support

## Tech Stack

**Frontend**
- HTML
- CSS (Custom UI)
- JavaScript (DOM-based rendering)

**Libraries**
- html2canvas  
- jsPDF  

No backend. No frameworks. Everything runs locally in your browser.

## How to Use

1. Select one or more courses from the dropdown  
2. Click **Add**, then **Continue**  
3. Choose preferred teachers or leave as **No Preference**  
4. Click **Generate Timetable**  
5. Review:
   - Selected Teachers Table  
   - Weekly timetable grid  
   - Conflict warnings (if any)  
6. Re-roll schedules or adjust selections  
7. Export as **Image** or **PDF** to share with friends  

## Important Notes

- This tool uses **mock registration data**
- Final course registration may differ
- Teachers or slots may be added, removed, or changed
- Always keep **alternative timetables** ready
- Do not rely on a single generated schedule

## Project Structure

```text
Timetable-Optimizer/
├── index.html     # Main page structure
├── style.css      # UI and layout styling
├── script.js      # Core logic & export features
└── README.md
