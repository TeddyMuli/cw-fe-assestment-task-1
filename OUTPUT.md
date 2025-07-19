## Changes Made

### App.tsx
1. Components in App.tsx
  - Issue: Lack of modularity and readability
  - Fix: Move components to different files for readability and import components into App.tsx
2. Colors mismatch
  - Issue: Black background and grey border
  - Fix: Change to #121417 background and #9EABB8 border
3. UseState for tags
  - Issue: Use of useState without modifying the values; setTags is unused
  - Fix: Convert tags to normal list

### Header.tsx
1. Colors mismatch
  - Issue: Black background and grey border
  - Fix: Change to #121417 background and #9EABB8 border
2. SearchBar
  - Issue: Complex and wrong implementation. Color and size mismatch.
  - Fix: Simplify implementation. Match colors and size to design.

### TagList.tsx
1. Type error
  - Issue: Type Errors for title and tags props
  - Fix: Create props interface
