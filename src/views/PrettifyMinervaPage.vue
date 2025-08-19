<script setup>
import ArrowLink from '@/components/ArrowLink.vue'
import CaseImage from '@/components/CaseCoverImage.vue'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
    <div class="flex-col px-3xl py-lg gap-md">
    <h1>Prettify Minerva</h1>
    <p>
      I created a browser extension that modernizes the UI of Minerva, McGill’s central student information system. 
    </p>
  </div>
  <div class="flex-row px-md py-md">
    <div class="pc-image-wrapper">
      <img src="/assets/images/index/prettify-minerva-cover.jpg"></img>
    </div>
  </div>
    <div class="flex-row flex-col-mobile px-3xl py-lg gap-3xl border-bottom">
        <div class="flex-col gap-lg flex-50">
        <h1>Overview</h1>
        <p class="paragraph">
            I undertook a redesign of Minerva, McGill University’s student portal, with the goal of improving its usability and visual clarity. What began as a dashboard-style concept in Figma evolved into a developing a browser extension which applies custom styling and layout improvements directly to the live site. Currently the extension is published on the chrome web store and has over 170 active users.
        </p>
        <div class="flex-col mb-lg">
            <ArrowLink href="https://chromewebstore.google.com/detail/gligldkmadhkgfbomifkomimankgljji?utm_source=item-share-cb">Chrome Web Store</ArrowLink>
            <ArrowLink href="https://github.com/VassiliProko/prettify_minerva">View Github</ArrowLink>
        </div>
        </div>
        <div class="flex-col gap-md mb-xl">
            <div class="flex-col gap-sm">
                <p class="bold">Time</p>
                <p>May 2025</p>
            </div>
            <div class="flex-col gap-sm">
                <p class="bold">Role</p>
                <p>Frontend Developer & Designer (Solo)</p>
            </div>
            <div class="flex-col gap-sm">
                <p class="bold">Tools</p>
                <p>Figma, Javascript, HTML, CSS</p>
            </div>
            <div class="flex-col gap-sm">
                <p class="bold">Skills</p>
                <p>Browser extension development</p>
            </div>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>Problem</h1>
        <div class="flex-col gap-md mb-xl">
            <p class="bold primary-color">Research</p>
            <p class="paragraph">
                McGill students have consistently expressed frustration with Minerva on forums like Reddit,
                often citing its outdated interface. According to the wayback machine, Minerva’s design has
                remained largely unchanged since 2002. Through my own experience using the platform and
                casual conversations with classmates, it was clear that Minerva has a poor reputation among
                students and presents real usability challenges.
            </p>
            <CaseImage src="/assets/images/prettify-minerva/problem-1.jpg"></CaseImage>
            <CaseImage src="/assets/images/prettify-minerva/problem-2.jpg"></CaseImage>
            <p class="bold primary-color">The Goal</p>
            <p class="paragraph">
                The aim of this project was to redesign Minerva to improve clarity, usability, and visual
                aesthetics. The existing interface presents dense information with poor spacing, small text,
                and a cluttered layout, making it difficult to navigate, especially for first-time users.
            </p>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>Initial Redesign Concept</h1>
        <p class="paragraph">
            I initially redesigned Minerva at the beginning of 2025 as a fun UX/UI redesign project to learn figma. I opted for a dashboard style concept with a left-aligned sidebar for the page navigation and a module styled layout inspired by other McGill sites like MyCourses, McGill’s learning management system.
        </p>
        <div class="flex-row flex-col-mobile gap-lg">
            <CaseImage src="/assets/images/prettify-minerva/initial-redesign-sketch.jpg" class="width-50"></CaseImage>
            <CaseImage src="/assets/images/prettify-minerva/initial-redesign-lofi.jpg" class="width-50"></CaseImage>
        </div>
        <CaseImage src="/assets/images/prettify-minerva/initial-redesign-concept.jpg"></CaseImage>
        <div class="flex-col gap-md">
            <p class="bold primary-color">Community Response</p>
            <p class="paragraph">
                I shared this redesign concept of Minerva on the McGill subreddit, which garnered over 70,000 views and positive engagement from the McGill community.
            </p>
        </div>
        <div class="comment flex-row gap-md border-200 padding-md br-sm width-50">
            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_reddit-512.png" alt="Reddit Icon" class="reddit-icon"></img>
            <p>
                “Could this be developed into a Chrome extension? This is a million times better than the current interface.” <span class="muted"> - Reddit User</span>
            </p>
        </div>
        <div class="flex-col gap-md mb-xl">
            <p class="bold primary-color">Top Comment</p>
            <p class="paragraph">
                One of the top upvoted comments suggested a Chrome extension to change Minerva’s appearance. I didn’t have much coding experience at the time, but the idea stuck with me. In May, I revisited this project and developed a working browser extension. 
            </p>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>Browser Extension Solution</h1>
        <p class="paragraph">
            While learning from YouTube tutorials, I explored the capabilities of Chrome extensions and used JavaScript to directly manipulate page content and structure. I injected custom CSS to restyle the interface, making the site cleaner and more visually appealing.
        </p>
        <div class="flex-col gap-md">
            <h2>Nav Bar</h2>
            <p class="paragraph">
                I began by redesigning the top navigation bar. Using JavaScript, I selected and rearranged HTML elements, added new components, and replaced the outdated layout with a cleaner, more intuitive version.
            </p>
        </div>
        <CaseImage src="/assets/images/prettify-minerva/browser-solution-navbar.jpg" class="mb-lg"></CaseImage>
        <div class="flex-row gap-lg mb-lg">
            <div class="flex-col gap-md flex-50">
                <h2>CSS Styling</h2>
                <p class="paragraph">
                    Changing the CSS styling was the quickest and best way to bring life to the site, applying site wide changes like changing the font to Inter, changing heading and table styling, and more.
                </p>
            </div>
            <CaseImage src="/assets/images/prettify-minerva/vs-code-ss.jpg" class="width-50"></CaseImage>
        </div>
        <div class="flex-row gap-lg mb-lg">
            <div class="flex-col gap-md flex-50">
                <h2>Quick Links</h2>
                <p class="paragraph">
                    From personal experience, I found the main menu which displayed the links from the nav bar but with descriptions to be not very useful. I wanted to improve this by adding a quick links sidebar on the right side of the main page, giving users an easy way to save and access their frequently visited Minerva pages.
                </p>
                <p class="paragraph">
                    A button to save the current page to quick links is placed in the top right corner of each page.
                </p>
            </div>
            <CaseImage src="/assets/images/prettify-minerva/browser-solution-quick-links.jpg" class="width-50"></CaseImage>
        </div>
        <div class="flex-row gap-lg mb-lg">
            <div class="flex-col gap-md flex-50">
                <h2>Other Changes</h2>
                <p class="paragraph">
                    The only page which I heavily redesigned was the login page. I wanted to keep the extension lightweight and avoid changing the layout of the content in pages, since most users are already familiar with Minerva’s layout. 
                </p>
                <p class="paragraph mb-md">
                    Inspired by the Made by McGill campaign font, I also designed a simple logo for the extension.
                </p>
                <CaseImage src="/assets/images/prettify-minerva/browser-solution-logo.jpg" class="width-50"></CaseImage>
            </div>
            <CaseImage src="/assets/images/prettify-minerva/browser-solution-login.jpg" class="width-50"></CaseImage>
        </div>
        <div class="flex-col gap-md">
            <h2>Challenges</h2>
            <p class="paragraph">
                I faced a range of challenges from working around notorious DOM quirks and design constraints, to styling messy table elements, and even implementing a hide.css file to prevent users from seeing the original page before the redesigned one loaded. Despite these hurdles, I was able to develop a polished, user-friendly chrome extension.
            </p>
        </div>
        <h2>Final Showcase</h2>
        <div class="youtube-wrapper mb-xl">
            <iframe src="https://www.youtube.com/embed/RvO95JGEGY0?autoplay=1&loop=1&playlist=RvO95JGEGY0&rel=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>Results</h1>
        <p class="paragraph">
            It was incredibly rewarding to take an idea from initial design through development and ultimately launch a real, usable product. Along the way, I deepened my understanding of front-end development using JavaScript, HTML, and CSS.
        </p>
        <p class="paragraph">
            After releasing the extension on the Chrome Web Store, I shared it with online communities like the McGill subreddit, where it received positive feedback. Open-sourcing the project on GitHub led to unexpected engagement—other developers forked the code and adapted it for browsers like Firefox and Safari.
        </p>
        <div class="flex-col gap-md mb-xl">
            <p class="bold primary-color">Key Outcome</p>
            <p class="paragraph">
                Shipped the Prettify Minerva Chrome extension on the Chrome Web Store, attracting over 170 active users
            </p>
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
            <RouterLink to="/twisted-canvas">
                <ProjectCard
                    title="Twisted Canvas"
                    description="I designed a web drawing application as a final project for Harvard’s CS50 Web Programming with Python & Javascript course."
                    coverImg="/assets/images/index/twisted-canvas-cover.jpg"
                />
            </RouterLink>
        </div>
    </div>
</template>


<style scoped>
.comment {
  display: flex;
  align-items: center;;
}

.reddit-icon {
  width: var(--spacing-lg);
  height: var(--spacing-lg);
}


</style>