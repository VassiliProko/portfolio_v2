<script setup>
import ArrowLink from '@/components/ArrowLink.vue'
import CaseImage from '@/components/CaseCoverImage.vue'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
    <div class="flex-col px-3xl py-lg gap-md">
    <h1>Twisted Canvas</h1>
    <p>
      I designed a web drawing application as a final project for Harvard’s CS50 Web Programming with Python & Javascript course.
    </p>
  </div>
  <div class="flex-row px-md py-md">
    <div class="pc-image-wrapper">
      <img src="/assets/images/index/twisted-canvas-cover.jpg"></img>
    </div>
  </div>
    <div class="flex-row flex-col-mobile px-3xl py-lg gap-3xl border-bottom">
        <div class="flex-col gap-lg flex-50">
        <h1>Overview</h1>
        <p class="paragraph">
            Twisted Canvas is a dynamic web-based drawing application that challenges artists with various "twists" every 15 seconds. Twists include flipping the canvas horizontally or vertically, applying various color filters, and more to challenge the usual drawing experience. By forcing users to adapt their style in real time, Twisted Canvas turns drawing into a fun (or not), unique digital drawing experience that promotes creativity and spontaneity.
        </p>
        <p class="paragraph">
            This project was created as a capstone project for CS50’s Web Programming with Python and Javascript EdX course.
        </p>
        <div class="flex-col mb-lg">
            <ArrowLink href="https://github.com/VassiliProko/Twisted-Canvas">View Github</ArrowLink>
            <ArrowLink href="https://www.youtube.com/watch?v=UQ-MXKcePGk">Full YouTube Video Breakdown</ArrowLink>
        </div>
        </div>
        <div class="flex-col gap-md mb-xl">
            <div class="flex-col gap-sm">
                <p class="bold">Time</p>
                <p>July 2025</p>
            </div>
            <div class="flex-col gap-sm">
                <p class="bold">Role</p>
                <p>Full Stack Developer (Solo)</p>
            </div>
            <div class="flex-col gap-sm">
                <p class="bold">Tools</p>
                <p>Figma, Django, Javascript, HTML, CSS</p>
            </div>
            <div class="flex-col gap-sm">
                <p class="bold">Skills</p>
                <p>Backend models with Django, HTML canvas, Web design</p>
            </div>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>The Goal</h1>
        <p class="paragraph">
            After completing CS50’s lectures and project assignments, I set out to build a web application from scratch as my final capstone project. As an artist, I was drawn to the idea of creating a browser-based drawing tool. To make it more unique, I added the twist element to add challenges to the drawing experience.
        </p>
        <div class="flex-col gap-md mb-xl">
            <p class="bold primary-color">Requirements</p>
            <p class="paragraph">
                This capstone project required the web application to be sufficiently distinct from other projects in the course and utilize Django on the back-end and Javascript on the front-end. 
            </p>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>The Process</h1>
        <p class="paragraph">
            I started by creating wireframes in Figma to define the core layout and tools of the drawing interface. Referencing applications like Figma and Procreate to develop a minimalist drawing application. 
        </p>
        <p class="paragraph">
            Since this web app needed to also be mobile responsive, I designed the drawing tools of the app into component buckets which would be aligned to an edge of the viewport, allowing for a cohesive experience across devices, and for simpler development.
        </p>
        <CaseImage src="/assets/images/twisted-canvas/process.jpg"></CaseImage>
        <div class="flex-col gap-md">
        <h2>Features</h2>
        <p class="paragraph">
            General drawing app features included:
        </p>
        <ul>
            <li>Undo/Redo</li>
            <li>Exporting</li>
            <li>Brush & Eraser Tool</li>
            <li>Zoom & Panning</li>
            <li>Color Picker</li>
        </ul>
        </div>
        <div class="flex-col gap-md">
            <p class="bold primary-color">Twists</p>
            <p class="paragraph">
                This drawing app also challenges artists with various "twists" every 15 seconds. These twists include grayscale filters, horizontal or vertical flips, and more which introduce playful chaos into the creative process.
            </p>
        </div>
        <h2>Video Showcase</h2>
        <div class="youtube-wrapper">
            <iframe src="https://www.youtube.com/embed/e0WE0mKI9r4?autoplay=1&mute=1&loop=1&controls=0&playlist=e0WE0mKI9r4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="youtube-wrapper youtube-mobile mb-xl">
            <iframe src="https://www.youtube.com/embed/bwVnPfHnkA8?autoplay=1&mute=1&loop=1&controls=0&playlist=bwVnPfHnkA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>Results</h1>
        <p class="paragraph">
            Overall this full stack capstone project provided a rewarding product development experience from designing wireframes in Figma to fully implementing the web application's frontend and backend with Python and Javascript. The final product is a responsive web-based drawing tool with interactive filters, working on both desktop and mobile. 
        </p>
        <p class="paragraph">
            A technical overview of the project’s structure and challenges can be found in the <a class="link" href="https://github.com/VassiliProko/Twisted-Canvas" target="_blank">Github</a> repository. 
        </p>
        <div class="flex-col">
            <ArrowLink href="https://certificates.cs50.io/3f0d0557-28ab-4c47-a3b2-3c36cf5f922c.pdf?size=letter">View Course Certificate</ArrowLink>
            <ArrowLink href="https://www.youtube.com/watch?v=UQ-MXKcePGk"  class="mb-xl">Full YouTube Video Breakdown</ArrowLink>
        </div>
        
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg mb-xl">
        <h1>Other Projects</h1>
        <div class="flex-row flex-col-mobile gap-md">
            <RouterLink to="/mcss">
            <ProjectCard
                    title="McGill Chinese Students' Society"
                    description="I led an end-to-end redesign of the society’s website (mcss.ca) to improve usability, accessibility, and mobile responsiveness."
                    coverImg="/assets/images/index/mcss-cover.jpg"
                />
            </RouterLink>
            <RouterLink to="/prettify-minerva">
                <ProjectCard
                    title="Prettify Minerva"
                    description="I created a browser extension that modernizes the UI of Minerva, McGill’s central student information system."
                    coverImg="/assets/images/index/prettify-minerva-cover.jpg"
                />
            </RouterLink>
        </div>
    </div>
</template>


<style scoped>
.youtube-mobile {
    aspect-ratio: 884 / 1484;
}

</style>