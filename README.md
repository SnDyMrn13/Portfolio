
# My Portfolio

A React site that shows the projects I built in Level 2.

## Components

| Component | What it shows | Where its values come from | What it remembers | What it receives |
| --- | --- | --- | --- | --- |
| `Header` | my name and a line about me | typed into the JSX | - | - |
| `Hero` | my hero photo | `heroPhoto`, which calls `imageUrl` | whether the photo is in color or black and white | - |
| `Fortune` | a random fortune | a list and `randomNumber` | which fortune is showing | - |
| `Footer` | &copy; and the current year | the year the page is opened | - | - |
| `ProjectCard` | one project: its name, description, details, and two links | `project.js`, through `App` | its likes, and whether it shows more |  `project` |
| `PhotoControls` | the hero's buttons | `Hero` | - | `onNext`, `onPrevious`, `onColor`, `onBlackAndWhite` |

## What I'm adding next
- Color and Black and White buttons on my hero
-a New Fortune button
-a Like button on every card

## Built with

React, Vite, Bun, and Pico CSS.