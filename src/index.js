// modules/top-nav/src/top-nav.js
import './top-nav.css';

export function initializeTopNav(containerId) {
  const container = document.getElementById(containerId);
  fetch('./modules/top-nav/src/top-nav.html')
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
      document.getElementById('menu-button').addEventListener('click', () => {
        alert('Menu clicked!');
      });
      document.getElementById('profile-button').addEventListener('click', () => {
        alert('Profile clicked!');
      });
    });
}

// modules/community/src/community.js
import './community.css';

export function initializeCommunity(containerId) {
  const container = document.getElementById(containerId);
  fetch('./modules/community/src/community.html')
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
      // Simulate fetching posts
      setTimeout(() => {
        document.getElementById('post-container').innerHTML = '<p>Post 1</p><p>Post 2</p>';
      }, 1000);
    });
}

// modules/bottom-nav/src/bottom-nav.js
import './bottom-nav.css';

export function initializeBottomNav(containerId) {
  const container = document.getElementById(containerId);
  fetch('./modules/bottom-nav/src/bottom-nav.html')
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
      document.getElementById('home-button').addEventListener('click', () => {
        alert('Home clicked!');
      });
      document.getElementById('chat-button').addEventListener('click', () => {
        alert('Chat clicked!');
      });
      document.getElementById('settings-button').addEventListener('click', () => {
        alert('Settings clicked!');
      });
    });
}

// modules/about-us/src/about-us.js
import './about-us.css';

export function initializeAboutUs(containerId) {
  const container = document.getElementById(containerId);
  fetch('./modules/about-us/src/about-us.html')
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
    });
}

// src/index.js (in the main repo)
import { initializeTopNav } from '../modules/top-nav/src/top-nav.js';
import { initializeCommunity } from '../modules/community/src/community.js';
import { initializeBottomNav } from '../modules/bottom-nav/src/bottom-nav.js';
import { initializeAboutUs } from '../modules/about-us/src/about-us.js';

initializeTopNav('top-nav-container');
initializeCommunity('community-container');
initializeBottomNav('bottom-nav-container');
initializeAboutUs('about-us-container');