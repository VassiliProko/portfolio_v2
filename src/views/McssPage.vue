<script setup>
import ArrowLink from '@/components/ArrowLink.vue';
import CaseImage from '@/components/CaseCoverImage.vue';
import ProjectCard from '@/components/ProjectCard.vue';

</script>

<template>
  <div class="flex-col px-3xl py-lg gap-md">
    <h1>McGill Chinese Students’ Society</h1>
    <p>
      I led an end-to-end redesign of the society’s website (mcss.ca) to improve usability,
      accessibility, and mobile responsiveness.
    </p>
  </div>
  <div class="flex-row px-md py-md">
    <div class="pc-image-wrapper">
      <img src="/assets/images/index/mcss-cover.jpg"></img>
    </div>
  </div>
    <div class="flex-row flex-col-mobile px-3xl py-lg gap-3xl border-bottom">
        <div class="flex-col gap-lg flex-50">
        <h1>Overview</h1>
        <p class="paragraph">
            To improve usability and provide more relevant content to visitors, I led a redesign of the McGill Chinese Students’ Society website. The new design introduces a cleaner, mobile-friendly layout and includes richer content such as event photos and detailed sponsor information. These changes make the website more informative, engaging, and aligned with the needs of students exploring the club.
        </p>
        <div class="flex-col mb-lg">
            <ArrowLink href="https://mcss.ca">View Website</ArrowLink>
            <ArrowLink href="https://github.com/Dev-MCSS/mcss-website">View Github</ArrowLink>
        </div>
        </div>
        <div class="flex-col gap-md mb-xl">
            <div class="flex-col gap-sm">
                <p class="bold">Time</p>
                <p>Jun - Jul 2025</p>
            </div>
            <div class="flex-col gap-sm">
                <p class="bold">Role</p>
                <p>Web Developer (Solo)</p>
            </div>
            <div class="flex-col gap-sm">
                <p class="bold">Tools</p>
                <p>Figma, Vue.js, Cloudinary, Netlify</p>
            </div>
            <div class="flex-col gap-sm">
                <p class="bold">Skills</p>
                <p>Web Design, Frontend Development, Mobile Responsiveness</p>
            </div>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>Problem</h1>
        <p class="paragraph">
            The previous website lacked visual hierarchy and clear user guidance. Key information was missing or poorly structured, making it difficult for visitors to understand the purpose of the site or take action.            </p>
        <CaseImage src="/assets/images/mcss/mcss-problem-1.jpg" class="width-50"></CaseImage>
        <CaseImage src="/assets/images/mcss/mcss-problem-2.jpg" class="width-50"></CaseImage>
        <CaseImage src="/assets/images/mcss/mcss-problem-3.jpg" class="width-50 mb-md"></CaseImage>
        <div class="flex-col gap-sm">
            <p class="bold primary-color">Redesign Goal</p>
            <p class="paragraph mb-xl">
                The primary design goal was to create a clear, user-friendly informational hub for the McGill Chinese Students’ Society that effectively supports the needs of prospective and current members. While society members primarily receive event updates through Instagram, the website functions as a comprehensive resource, providing detailed background, event information, member recruitment details, and other relevant content for those seeking deeper engagement.
            </p>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>Solution</h1>
        <p class="paragraph">
            High-fidelity mockups made in figma guided the development, where I used the Vue.js framework. Netlify is used for hosting and Cloudinary for cloud-based image management.
        </p>
        <CaseImage src="/assets/images/mcss/mcss-solution-figma.png" class="width-50 mb-lg"></CaseImage>
        <div class="flex-row flex-col-mobile gap-xl">
            <div class="flex-col gap-lg flex-50">
                <div class="flex-col gap-sm">
                    <h2>Home Page</h2>
                    <p class="paragraph">
                        The original homepage featured only a banner carousel with no supporting text or user direction. I introduced a split layout on the homepage to balance informational text and visual engagement, enabling users to quickly grasp the site's purpose while seeing active content.
                    </p>
                </div>
                <div class="flex-col gap-sm">
                    <p class="bold primary-color">Call to Action</p>
                    <p class="paragraph">
                        The Become a member button directs users to the membership page.
                    </p>
                </div>
                <div class="flex-col gap-sm">
                    <p class="bold primary-color">Nav Bar</p>
                    <p class="paragraph">
                        I made the navigation bar more compact and collapsible in mobile mode. 
                    </p>
                </div>
            </div>
            <CaseImage src="/assets/images/mcss/mcss-solution-homepage-old.jpg" tag="Old" class="width-50"></CaseImage>
        </div>
        <CaseImage src="/assets/images/mcss/mcss-solution-homepage.jpg" tag="New"></CaseImage>
        <div class="flex-row flex-col-mobile gap-xl">
            <div class="flex-col gap-lg flex-50">
                <h2>Events Page</h2>
                <p class="paragraph">
                    The old website displayed past event posters, which made the page feel more like a creative bulletin board than an event archive. I replaced this with a photo gallery to create a stronger sense of energy and connection, allowing visitors to get a better glimpse of what the events felt like and why they should attend our future events.
                </p>
            </div>
            <CaseImage src="/assets/images/mcss/mcss-solution-events-old.jpg" tag="Old" class="width-50"></CaseImage>
        </div>
        <CaseImage src="/assets/images/mcss/mcss-solution-events.jpg" tag="New" class="mb-xl"></CaseImage>

        <h2>Sponsor Details</h2>
        <p class="paragraph">
            Additional details were incorporated into the sponsor logo cards to provide members with valuable information directly, eliminating the need to look elsewhere.
        </p>
        <CaseImage src="/assets/images/mcss/mcss-solution-sponsors.jpg" class="mb-xl width-50 mb-xl"></CaseImage>

        <h2>Mobile View</h2>
        <p class="paragraph">
            All pages are mobile responsive and follow google PageSpeed Insight best practices.
        </p>
        <div class="youtube-wrapper youtube-mobile mb-xl">
            <iframe src="https://www.youtube.com/embed/icscW0CIBXw?autoplay=1&mute=1&loop=1&controls=0&playlist=icscW0CIBXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg border-bottom">
        <h1>Results</h1>
        <p class="paragraph">
            Redesigning the website involved addressing several UX and UI flaws, particularly around content structure and layout. I reworked each page to optimize hierarchy to highlight content and usability, while also incorporating MCSS’s signature red and font.
        </p>
        <div class="flex-col gap-md mb-xl">
            <p class="bold primary-color">Key Outcomes</p>
            <p class="paragraph">
                Improved Google PageSpeed Insights scores, cutting load times by over 50% with optimized images via Cloudinary.
            </p>
            <p class="paragraph">
                Launched a fully responsive, mobile-first site that performs seamlessly across devices.
            </p>
        </div>
    </div>
    <div class="flex-col px-3xl py-lg gap-lg mt-lg mb-xl">
        <h1>Other Projects</h1>
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
</template>

<style scoped>
.pc-image-wrapper {
  aspect-ratio: auto;
}
.pc-image-wrapper img {
  height: 100%;
}



</style>
