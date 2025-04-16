This is the main mobile app repository where other submodules would be referrenced into.# Mobile App - Sandbox Project

This repository serves as the main container and orchestrator for the mobile application sandbox project. It utilizes Git submodules to manage individual features and components as separate, modular units.

## Purpose

This sandbox environment is designed for:

* **Modular Development:** Organizing different features (top navigation, community feed, bottom navigation, about us) into independent, manageable modules.
* **Technology Exploration:** Testing and experimenting with JavaScript, HTML, and CSS within a mobile-like context.
* **Submodule Integration:** Demonstrating and practicing the integration of Git submodules into a larger project.
* **Prototyping:** Rapidly prototyping UI/UX elements for the mobile version of our web application.
* **Team Collaboration:** Enabling different team members (or individual efforts) to work on distinct modules with less risk of conflicts.

## Submodules

This repository currently houses the following submodules:

* **`/top-nav`**: Contains the HTML, CSS, and JavaScript for the top navigation bar component.
    * [Link to the `top-nav` submodule repository (if public)]
    * See its [README](top-nav/README.md) for specific details.
* **`/community`**: Contains the HTML, CSS, and JavaScript for the community feed section.
    * [Link to the `community` submodule repository (if public)]
    * See its [README](community/README.md) for specific details.
* **`/bottom-nav`**: Contains the HTML, CSS, and JavaScript for the bottom navigation bar component.
    * [Link to the `bottom-nav` submodule repository (if public)]
    * See its [README](bottom-nav/README.md) for specific details.
* **`/about-us`**: Contains the HTML, CSS, and JavaScript for the "About Us" section.
    * [Link to the `about-us` submodule repository (if public)]
    * See its [README](about-us/README.md) for specific details.


## Usage

The `src/index.js` file in this main repository serves as the entry point for integrating and calling the JavaScript functions from the various submodules. The `index.html` provides the basic HTML structure with container `div` elements where the content from the submodules will be injected.

Refer to the individual README files within each submodule's directory (`<module-name>/README.md`) for specific instructions on how their components are initialized and can be further customized.

## Project Structure
mobile-app/
├── .git/
├── .gitmodules
├── about-us/
│   ├── src/
│   │   ├── about-us.css
│   │   │   ├── about-us.html
│   │   │   └── about-us.js
│   │   └── README.md
├── bottom-nav/
│   │   ├── src/
│   │   │   ├── bottom-nav.css
│   │   │   ├── bottom-nav.html
│   │   │   └── bottom-nav.js
│   │   └── README.md
├── community/
│   │   ├── src/
│   │   │   ├── community.css
│   │   │   ├── community.html
│   │   │   └── community.js
│   │   └── README.md
└── top-nav/
│       ├── src/
│       │   ├── top-nav.css
│       │   ├── top-nav.html
│       │   └── top-nav.js
│       └── README.md
├── src/
│   ├── index.js
│   ├── style.css
├── └── index.html
├── package.json
└── README.md (this file)