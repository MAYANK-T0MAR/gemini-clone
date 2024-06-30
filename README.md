# Gemini Clone

[![GitHub license](https://img.shields.io/github/license/MAYANK-T0MAR/gemini-clone)](https://github.com/MAYANK-T0MAR/gemini-clone/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/MAYANK-T0MAR/gemini-clone)](https://github.com/MAYANK-T0MAR/gemini-clone/issues)
[![GitHub stars](https://img.shields.io/github/stars/MAYANK-T0MAR/gemini-clone)](https://github.com/MAYANK-T0MAR/gemini-clone/stargazers)



## Live Demo

Check out the live demo of the project [here](https://mayank-t0mar.github.io/gemini-clone/).


## Overview

Gemini Clone is a web application that mimics the functionality of the Gemini AI using the Gemini API. Built with Vite and React, this project allows users to interact with the AI, record their prompt history, and switch between prompts easily.

## Features

- ### AI Response Generation: ###
  Interact with the AI to get responses based on your prompts. The project makes API calls to the Gemini API to fetch the response from Gemini. Using [Marked.js](https://marked.js.org/) library, the project processes the markup response received from the API and renders it as an HTML response for display.
  ![CPT2406302108-1606x865](https://github.com/MAYANK-T0MAR/gemini-clone/assets/137810128/55f4bec2-08d2-4721-8a4f-66e862941306)
- ### Prompt History Recording: ###
  Automatically records all the prompts entered by the user and displays them in a recent-to-old order. The current active prompt is highlighted for easy identification.
  ![image](https://github.com/MAYANK-T0MAR/gemini-clone/assets/137810128/f0c0e5e4-3964-4b13-929b-2d119a776cea)
- ### Prompt Switching: ###
  Easily switch between different prompts in the history to review or reuse them.
  ![CPT2406302124-1236x664](https://github.com/MAYANK-T0MAR/gemini-clone/assets/137810128/6700bdfa-ea16-43f7-b547-a3c9abf82880)
- ### Conditional Send Button Display: ###
  The send button only appears when there is text in the input field. If the input field is empty, the button remains hidden, ensuring a clean and intuitive user interface.
  ![CPT2406302144-935x71](https://github.com/MAYANK-T0MAR/gemini-clone/assets/137810128/bf0b49ec-e0c6-4836-8fdd-bac9034b0b05)



## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)
- Gemini Api Key

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/MAYANK-T0MAR/gemini-clone.git
   ```
2. Navigate to the project directory
    ```sh
   cd gemini-clone
   ```
3. Install dependencies
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. Marked.js installation
   ```sh
   npm install marked
   ```
   *Checkout the Marked.js [documentation](https://marked.js.org/) to know more about the installation and usage*
   
4. Start the development server
    ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```
## Acknowledgements
- [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
- [Gemini Api](https://ai.google.dev/gemini-api)
- [Marked.js](https://marked.js.org/)
