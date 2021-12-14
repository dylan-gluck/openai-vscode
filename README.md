<img src="openai.svg" alt="drawing" width="200"/>

# OpenAI Codex - VS Code Extension

This is a VS Code Extension using OpenAI API. OpenAI’s API provides access to GPT-3, which performs a wide variety of natural language tasks, and Codex, which translates natural language to code.

_Requires OpenAI API Key._ Create a free API Key at [OpenAI.com](https://openai.com/)

Example Usage:

- Highlight any section of text or code
- Launch Command Pallete `CMD`+`SHFT`+`P`
- Run command "OpenAI Autocomplete"

## Local Installation

To run locally, pull this repo and install all dependencies using yarn.

```
yarn install
```

Open the project in VS Code. Run the extension locally by pressing `F5`.

## Developing

This project is open source and open to contributions. Please create a pull request detailing any changes that are being made.

Some TODO items:

- Refactor using Typescript
  - Having issues with imported modules (es5 vs es6)
- Create a shortcut key for the autocomplete function
- Allow user to select "davinci-codex" engine
