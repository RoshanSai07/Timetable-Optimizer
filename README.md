# Timetable-Optimizer

This branch contains Version 2.0 of the Course Selection & Timetable Assistant.

## Try It
👉 [Live Demo](https://roshansai07.github.io/Timetable-Optimizer/)

## What’s New in v3.1

✅ Updated Course & Teacher Data
Includes complete information for 4th Semester — all courses, teachers, and slot mappings are refreshed and verified.

✅ Selected Teachers Table
Automatically lists your chosen teachers in a neat, shareable format — perfect for sending your final selections to friends or teammates.


## From v2.0 (Features You Still Have)

Smart Slot Mapping Logic — Unified alignment for theory + lab slots.
Lab-only Time Handling — Auto-skips theory slots during lab hours.
Dynamic Teacher Selection — Picks best-fit teachers when “No Preference” is selected.
Export Timetable — One-click export to PDF or image.
Conflict Detection System — Highlights overlapping slots with detailed info.
Save & Load Selections — Your timetable preferences stay stored locally.

## Tech Stack
Frontend: HTML, CSS (Custom UI), JavaScript (DOM-based rendering)
Libraries: html2canvas, jsPDF

## Branch Purpose
This branch contains the stable v3.0 release, featuring 4th Semester data and the new Selected Teacher Table.
The main branch remains clean or hosts the legacy build.

## How to Use

Select a course from the dropdown.
Click Confirm to view available teachers.
Choose your preferred teacher(s).
View your chosen teachers in the Selected Teachers Table.
Click Generate Timetable to see your schedule.
Use Reset to start again.

## Notes
Multiple courses can be selected before generating.
Choices remain locked until you reset.
All selections and data are stored locally in your browser — no backend.
Lab end times rounded to 50 minutes for logic consistency.

## Files
index.html — Main page structure.
style.css — UI and layout styling.
script.js — Logic for selection, sharing table, and timetable generation.

## Clone It

```bash
git clone git@github.com:RoshanSai07/Timetable-Optimizer.git

## Author

Created by Roshan – VIT-AP, 2025–2026
