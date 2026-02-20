<script setup>
import ArrowLink from './ArrowLink.vue'
</script>

<template>
  <footer class="preserve-colors">
    <div class="flex-row footer footer-top">Designing a brighter future</div>
    <div class="flex-row footer-main">
      <div class="flex-col padding-md br-md gap-md h-fit footer-connect">
        Connect with me
        <a href="https://www.linkedin.com/in/vassili-prokopenko/" target="_blank">
          <div class="flex-col padding-sm br-sm connect-btn linkedin-btn">
            <div class="flex-row gap-3xl z-100">
              <div class="flex-col bold">Linkedin</div>
              <div class="flex-col ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
            <img class="connect-logo" src="/assets/images/li-icon.jpg" alt="Linkedin Logo" />
            <div class="radial-gradient-li"></div>
          </div>
        </a>
        <a href="mailto:vassiligb12@gmail.com">
          <div class="flex-col padding-sm br-sm connect-btn email-btn">
            <div class="flex-row gap-3xl z-100">
              <div class="flex-col bold">Email</div>
              <div class="flex-col ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
            <img class="connect-logo" src="/assets/images/email-icon.jpg" alt="Email Logo" />
            <div class="radial-gradient-email"></div>
          </div>
        </a>
      </div>
    </div>
    <div class="flex-row footer">
      <div class="flex-col">©2026 Vassili Prokopenko</div>
      <div class="flex-col ml-auto">Made with Vue.Js and Love</div>
    </div>
  </footer>
</template>

<style scoped>
.gap-3xl {
  gap: 8rem !important;
}

footer {
  color: var(--neutral-color-50);
}

.footer {
  background-color: var(--neutral-color-900);
  padding: var(--spacing-sm) var(--spacing-3xl);
}

.footer-top {
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
}

.footer-main {
  padding: var(--spacing-xl) var(--spacing-3xl);
  background-color: var(--neutral-color-950);
  background-image: url('/assets/images/footer-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.footer-connect {
  background-color: var(--neutral-color-800);
}

.connect-btn {
  background-color: #2a679c;
  color: var(--neutral-color-300);
  padding-bottom: 4rem;
  position: relative;
  overflow: hidden;
}

.linkedin-btn {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #2a679c;
  transition: all 0.3s cubic-bezier(1, 0, 0, 1);
}

.linkedin-btn:hover {
  color: var(--neutral-color-50);
}

.radial-gradient-li {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    52.81% 111.6% at 95.51% 14.2%,
    rgba(31, 177, 250, 0.5) 0%,
    rgba(31, 177, 250, 0) 100%
  );
  background-blend-mode: color-dodge, normal, normal;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.linkedin-btn:hover .radial-gradient-li {
  opacity: 1;
}

/* Email Button Styles */

.email-btn {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #575355;
  transition: all 0.3s cubic-bezier(1, 0, 0, 1);
}

.email-btn:hover {
  color: var(--neutral-color-50);
}

.radial-gradient-email {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    52.81% 111.6% at 95.51% 14.2%,
    rgba(250, 31, 195, 0.5) 0%,
    rgba(31, 177, 250, 0) 100%
  );
  background-blend-mode: color-dodge, normal, normal;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.email-btn:hover .radial-gradient-email {
  opacity: 1;
  color: var(--neutral-color-50);
}

.email-btn:hover .radial-gradient-email {
  opacity: 1;
}

/* Li & Email Logo Animation */

.connect-logo {
  position: absolute;
  aspect-ratio: 1 / 1;
  width: clamp(80px, 20%, 150px);
  right: -20px;
  bottom: -20px;
  border-radius: var(--border-radius-md);
  z-index: 0;
  opacity: 0.5;
  filter: brightness(0.8);
  mix-blend-mode: luminosity;
  transform: rotate(15deg) scale(0.9);
  transition: all 0.3s cubic-bezier(1, 0, 0, 1);
}

.linkedin-btn:hover .connect-logo {
  opacity: 0.7;
  transform: rotate(-15deg) scale(1.05);
  right: 20px;
  bottom: 10px;
}

.email-btn:hover .connect-logo {
  opacity: 0.7;
  transform: rotate(-15deg) scale(1.05);
  right: 20px;
  bottom: 10px;
}
</style>
