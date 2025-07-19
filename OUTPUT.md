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
4. Lack of space at the bottom of the page.
  - Issue: Lack of space at the bottom of the page.
  - Fix: Add a padding bottom of 32 px

### Header.tsx
1. Colors mismatch
  - Issue: Black background and grey border
  - Fix: Change to #121417 background and #9EABB8 border
2. SearchBar
  - Issue: Complex and wrong implementation. Color and size mismatch.
  - Fix: Simplify implementation. Match colors and size to design.
3. Profile Picture.
  - Issue: Missing Profile Picture
  - Fix: Add profile picture from design

### TagList.tsx
1. Type error
  - Issue: Type Errors for title and tags props
  - Fix: Create props interface
2. Height
  - Issue: Height mismatch
  - Fix: Change height to that of figma designs.

### SearchBar.tsx
1. BoxArea108 is an ambigous name
  - Issue: The name BoxArea108 is ambigous
  - Fix: Change component name to SearchBar for clarity.
2. Size mismatch.
  - Issue: The size doesn't match the designs.
  - Fix: Change size to 480 x 64
3. Color Mismatch.
  - Issue: The colors of the background don't match the designs.
  - Fix: Change color to match those in the designs.
4. Search Button
  - Issue: Size mismatch
  - Fix: Change size to match design

### HeroSection.tsx
1. BoxArea97 is an ambigous name
  - Issue: The name BoxArea97 is ambigous
  - Fix: Change component name to HeroSection for clarity.
2. Heading
  - Issue: Heading didn't match designs
  - Fix: Add break to create second line
