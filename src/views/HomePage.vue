<script setup>
import AboutCard from '@/components/AboutCard.vue';
import LifetimeCounter from '@/components/LifetimeCounter.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { onMounted } from 'vue';

onMounted(() => {
    const canvas = document.getElementById('rive-canvas');
    const riveInstance = new rive.Rive({
        src: '/assets/landing-graphic.riv', // Rive File
        canvas: canvas,
        autoplay: true,
        stateMachines: 'Default', // if using a state machine
        onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();
        }
    });
});
</script>


<template>
    <div class="flex-col height-100 border-bottom gap-md">
        <div style="position: absolute; width: 100%;">
            <canvas id="rive-canvas" width="800" height="1000" class="landing-graphic fade-in-up"></canvas>
        </div>
        <div class="flex-col gap-md fade-in-up px-xl mt-md">
            <div class="landing-text flex-row flex-wrap">
                Hello, I’m Vassili Prokopenko and I’m passionate about creating experiences that can <span class="bold primary-color">improve people's lives</span>. 
            </div>
            <p class="landing-subtext">Currently a student @ McGill University</p>
        </div>
        
        <div class="flex-row flex-col-mobile gap-md px-xl mt-auto mb-lg z-100">
            <div class="flex-row gap-sm muted border-200 br-sm padding-sm w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <p class="bold">Based in the Washington D.C. area</p>
            </div>
            <div class="flex-row">
                <a href="mailto:vassiligb12@gmail.com" class="flex-row gap-sm muted border-200 br-sm bg-200 padding-sm w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-plus-icon lucide-mail-plus"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
                    <p class="bold">Get in Touch</p>
                </a>
            </div>
            <div class="flex-row gap-md ml-auto">
                <p>See Selected Works</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-down-icon lucide-move-down"><path d="M8 18L12 22L16 18"/><path d="M12 2V22"/></svg>
            </div>
        </div>
    </div>
    <div id="work"></div>
    <div class="flex-row px-xl py-lg">
        <h1 class="mb-lg">Selected Works</h1>
    </div>

    <div class="flex-row flex-wrap px-2xl py-lg pb-xl gap-md border-bottom">
        <RouterLink to="/mcss">
            <ProjectCard
                title="McGill Chinese Students' Society"
                description="I led an end-to-end redesign of the society’s website (mcss.ca) to improve usability, accessibility, and mobile responsiveness."
                coverImg="/assets/images/index/mcss-cover.jpg"
            />
        </RouterLink>
        <div class="flex-row flex-col-mobile gap-md">
            <RouterLink to="/prettify-minerva">
                <ProjectCard
                    title="Prettify Minerva"
                    description="I created a browser extension that modernizes the UI of Minerva, McGill’s central student information system."
                    coverImg="/assets/images/index/prettify-minerva-cover.jpg"
                />
            </RouterLink>
            <RouterLink to="/twisted-canvas">
                <ProjectCard
                    title="Twisted Canvas"
                    description="I designed a web drawing application as a final project for Harvard’s CS50 Web Programming with Python & Javascript course."
                    coverImg="/assets/images/index/twisted-canvas-cover.jpg"
                />
            </RouterLink>
        </div>
    </div>
    <div id="about"></div>
    <div class="flex-row px-xl py-lg">
        <h1 class="mb-lg mt-md">About</h1>
    </div>
    <div class="flex-row flex-col-mobile px-xl py-lg gap-lg mb-2xl">
        <div class="flex-col padding-md border-200 br-md flex-30 gap-md h-fit">
            <img src="/assets/images/index/portrait.jpg" class="about-portrait"></img>
            <div class="flex-row flex-wrap gap-md mb-md">
                <a href="https://docs.google.com/document/d/1W0-QIjajoPcEnDEO99qnTczTWo3l3Wu7W1VPZ29Igfw/preview?" class="resume-btn bold" target="_blank">Resume</a>
                <div class="flex-row gap-sm align-center padding-sm border-200 br-sm w-fit">
                    <video 
                        src="/assets/gifs/Flashing_Circle_Icon.webm" 
                        autoplay 
                        loop 
                        muted 
                        playsinline 
                        width="20" 
                        height="20"
                    ></video>
                    <LifetimeCounter ></LifetimeCounter>
                </div>
            </div>
        </div>
        <div class="flex-col gap-lg">
            <div class="flex-col gap-md padding-md border-200 br-md">
                <h2>Background</h2>
                <p>I’m an ambitious multidisciplinary designer passionate about crafting experiences that can improve people’s lives. I have 5+ years of digital design experience, from creating graphics for my high school newspaper to designing digital products currently in university. </p>
                <p>
                   Recently, I've designed and developed interactive web projects using frontend technologies and AI. I'm also studying business analytics at McGill University, learning how to leverage data to drive effective solutions.
                </p>
                <p>
                    Outside of design and school, you’ll usually find me training calisthenics.
                </p>
                <!-- <div class="flex-col gap-sm">
                    <p class="bold">Education</p>
                    <div class="flex-row gap-sm">
                        <img src="/assets/images/index/mcgill-bird-icon.jpg" class="about-education-icon"></img>
                        <p>McGill University <span class="muted">/ B.Comm Business Analytics</span></p>
                        <p class="ml-auto">Aug 2024 - Apr 2027</p>
                    </div>
                </div> -->
                <div class="flex-col gap-sm">
                    <p class="bold">Skills</p>
                    <p>Figma, Rive, Adobe Suite, Vue.js, Javascript, HTML, CSS</p>
                </div>
            </div>

            <div class="flex-col gap-md padding-md border-200 br-md">
                <h2>Education</h2>
                <AboutCard
                    image="/assets/images/index/mcgill-icon.jpeg"
                    title="McGill University"
                    description="Bachelor of Commerce, Major in Business Analytics | GPA: 3.78/4.0"
                    period="Aug 2024 - Apr 2027"
                />
                <AboutCard
                    image="/assets/images/index/hkust-icon.jpeg"
                    title="Hong Kong University of Science and Technology"
                    description="Exchange Program"
                    period="Sep 2025 - May 2026"
                />
            </div>

            <div class="flex-col gap-md padding-md border-200 br-md">
                <h2>Experience</h2>
                <AboutCard
                    image="/assets/images/index/usthing-icon.jpeg"
                    title="USThing"
                    description="UI/UX Designer"
                    period="Oct 2025 - Present"
                />
                <AboutCard
                    image="/assets/images/index/mcss-icon.jpeg"
                    title="McGill Chinese Students' Society"
                    description="Web Developer & Graphic Designer"
                    period="Oct 2024 - Present"
                />
                <AboutCard
                    image="/assets/images/index/lyft-icon.jpeg"
                    title="Lyft"
                    description="UX Research Intern | McGill Micro-Exp Program"
                    period="May 2025"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.landing-graphic {
    max-height: calc(100vh - var(--navbar-margin));
    max-width: 80vw;
    transform: translateY(-1rem);
    right: 0;
    position: absolute;
    scale: 90%;
}

.z-100 {
    z-index: 100;
}


#about, #work {
    position: inherit;
    transform: translateY(calc(-1 * var(--navbar-margin)));
}

.about-portrait {
    border-radius: var(--border-radius-sm);
}

.height-100 {
    min-height: calc(100vh - var(--navbar-margin));
}

.landing-text {
    font-size: var(--font-size-2xl);
    max-width: 80%;
    box-sizing: border-box;
    display: inline-block;
}

.landing-subtext {
    font-size: var(--font-size-lg);
    color: var(--neutral-color-600);
}

.resume-btn {
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-sm);
    background-color: var(--neutral-color-200);
    align-items: center;
    justify-content: center;
    color: var(--neutral-color-950);
    width: fit-content;
    transition: background-color 0.3s ease;
}

.resume-btn:hover {
    background-color: var(--neutral-color-300);
}

@media (max-width: 768px) {
    .landing-text {
        max-width: 100%;
    }
    #rive-canvas {
        display: none;
    }
}
</style>