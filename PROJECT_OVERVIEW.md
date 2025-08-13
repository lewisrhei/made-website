# Made Website - Project Overview

## Project Location
- **Main Project Path**: `/Users/lball/Scripts/Made Local - Website/made-website`
- **Repository**: https://github.com/lewisrhei/made-website.git
- **Development Server**: http://localhost:3000 (run with `npm run dev`)

## Tech Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Version Control**: Git/GitHub

## Project Structure

### Key Components

#### 1. Hero Section (`/components/sections/CinematicHero.tsx`)
- Features 6 AI agents displayed with transparent PNGs (640x480)
- Hover interactions trigger video playback (736x544 WebM videos)
- Speech bubbles appear on hover with agent catchphrases
- Agents positioned horizontally with 200px spacing
- Animated benefit chips cycling every 3.5 seconds
- Removed mouse-following animation for stability

#### 2. Agent Data (`/lib/vtm-data.ts`)
- Contains all agent information including:
  - Names: Milo, Zara, Remi, Enzo, Lila, Amie
  - Transparent PNG paths: `/agents/[Name]_Transparent.png`
  - Hero videos: `/agents/[Name] Hero_balanced_736x544.webm`
  - Catchphrases, roles, colors, and gradient configurations

#### 3. Individual Agent Showcases
Each agent has a dedicated showcase component with interactive skill demonstrations:

- **MiloShowcase** (`/components/sections/MiloShowcase.tsx`)
  - Video Ideas with trending topics
  - Thumbnail Creation (renamed from "Thumbnail A/B")
  - Script Writing with hooks
  - Content Strategy planning

- **ZaraShowcase** (`/components/sections/ZaraShowcase.tsx`)
  - Trend Detection with real-time updates
  - Hashtag Optimization
  - Viral Timing predictions
  - Audience Insights

- **RemiShowcase** (`/components/sections/RemiShowcase.tsx`)
  - **Viral Clips**: Now features 3 real video clips
    - `/agents/remi_clip1.webm` (3 seconds - Hook)
    - `/agents/remi_clip2.webm` (3 seconds - Climax)
    - `/agents/remi_clip3.webm` (3 seconds - Reaction)
  - Vertical Video conversion
  - AI Video generation
  - Multi-format optimization

- **EnzoShowcase** (`/components/sections/EnzoShowcase.tsx`)
  - Performance Forecast
  - Competitor Analysis
  - Strategy Recommendations
  - Revenue Optimization

- **LilaShowcase** (`/components/sections/LilaShowcase.tsx`)
  - Content Protection
  - Multi-platform Distribution
  - Rights Management
  - Fan Content Monitoring

- **AmieShowcase** (`/components/sections/AmieShowcase.tsx`)
  - Bug Reports tracking
  - Feature Requests
  - Feedback Analysis
  - User Support metrics

### Styling & Animations

#### Gradient System (`/app/page.tsx`)
- **Light Mode**: Bright, vibrant gradients for each section
- **Dark Mode**: Deep, rich gradients with adjusted colors
  - Zara: `#a16207, #eab308, #422006` (warm gold)
  - Amie: `#ea580c, #f97316, #451a03` (vibrant orange to dark)
  
#### Animation Improvements
- Removed continuous scaling animations from video containers (all showcases)
- Removed mouse-following movement from hero section
- Videos now remain perfectly still
- Smooth fade transitions between content

### Assets Location
- **Agent Images**: `/public/agents/`
  - Transparent PNGs (640x480): `[Name]_Transparent.png`
  - Hero Videos (736x544): `[Name] Hero_balanced_736x544.webm`
  - Remi Clips (640x356): `remi_clip1/2/3.webm`

### Recent Updates

1. **Hero Page Improvements**
   - Fixed agent centering with calc() positioning
   - Implemented speech bubbles with proper alignment
   - Updated headlines: "Your creative dream team" + "Free to create without limits"
   - Added animated benefit chips cycling through benefits

2. **Dark Mode Gradient Fixes**
   - Refined Zara's gradient from muddy brown to warm gold
   - Fixed Amie's gradient from washed out to vibrant orange

3. **Animation Cleanup**
   - Removed all subtle video container movements
   - Eliminated mouse-following animations
   - Ensured stable, professional presentation

4. **Remi Video Integration**
   - Converted 3 MP4 videos to WebM format
   - Integrated real videos into viral clips demonstration
   - Synchronized timeline with 9-second total duration

### Running the Project

```bash
# Navigate to project
cd "/Users/lball/Scripts/Made Local - Website/made-website"

# Install dependencies (if needed)
npm install

# Run development server
npm run dev

# Git operations
git add -A
git commit -m "Your message"
git push origin main
```

### Key Design Decisions

1. **Resolution Handling**: Using fixed container sizes to handle different resolutions between images (640x480) and videos (736x544)
2. **Hover Interactions**: Clean transitions between static images and video playback
3. **Z-Index Management**: Proper layering of glow effects, videos, and UI overlays
4. **Performance**: WebM format for optimal video compression and quality

### File Conversion Commands Used

```bash
# Converting MP4 to WebM (3 seconds, 640px width)
ffmpeg -i input.mp4 -t 3 -c:v libvpx-vp9 -crf 30 -b:v 0 -vf "scale=640:-1" -an output.webm -y
```

### Important Notes

- Always use absolute paths for file operations
- Videos are muted and set to autoplay/loop
- All showcase components have been stripped of continuous animations
- The project uses snap scrolling for section navigation
- Dark mode toggle is available in bottom-right corner

## Next Steps / Pending Items

- Thumbnail concepts for Milo section (20 universal ideas documented)
- Potential integration of actual thumbnail images
- Further content additions to agent showcases
- Performance optimizations as needed

---

Last Updated: August 13, 2025
Session Context: Completed gradient fixes, animation cleanup, and Remi video integration