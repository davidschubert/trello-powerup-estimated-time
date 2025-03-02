# Trello Power-Up Estimated Time Guide

## Project Commands
- **Deploy**: Upload files to web server at `trello-powerups.hawaii.studio`
- **Local testing**: Run `python -m http.server` in project root
- **Trello testing**: Add as Power-Up at `https://trello.com/power-ups/admin`
- **Debug**: Use browser console logs to monitor Power-Up behavior

## Code Style Guidelines
- **JavaScript**: ES6+ syntax, semicolons required, promise-based async handling
- **Naming**: camelCase for variables/functions (e.g., `estimatedTime`, `saveButton`)
- **Comments**: Prefer English for new code (German comments exist in legacy code)
- **Error Handling**: Include try/catch in promise chains, proper error callbacks
- **Trello API**: Always use `t` object from `TrelloPowerUp.iframe()` for Trello operations
- **HTML**: 4-space indentation, semantic HTML5 elements, proper attribute quoting
- **CSS**: Minimal inline styles with descriptive classes, mobile-friendly sizing

## Project Structure
- `/estimated-time/` - Main Power-Up files
  - `client.js` - Core Power-Up initialization and callbacks
  - `popup.html` - UI for setting time estimates with client-side script
  - `index.html` - Entry point that loads the Power-Up
  - `manifest.json` - Power-Up configuration for Trello
  - `icon.png` - Power-Up icon image