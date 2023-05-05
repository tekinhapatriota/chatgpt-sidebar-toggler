# ChatGPT Sidebar Toggle Extension

Chrome extension to toggle the sidebar visibility on OpenAI's ChatGPT website, providing a cleaner interface for focused conversations.

This is a simple Google Chrome extension that adds a toggle button to show or hide the sidebar on the [OpenAI Chat website](https://chat.openai.com/). The extension works by modifying the width of the sidebar and repositioning the toggle button accordingly.

## Installation

To install the extension, follow these steps:

1. Clone this repository to your local machine.

2. Open the Google Chrome browser and navigate to the `chrome://extensions` page.

3. Enable "Developer mode" by clicking the toggle switch in the top right corner.

4. Click on the "Load unpacked" button and select the `sidebar-toggle-extension` folder that you cloned in step 1.

5. The extension should now appear in the list of installed extensions, and the toggle button should be visible on the target website.

## Usage

To use the extension, simply navigate to the [OpenAI Chat website](https://chat.openai.com/) and click on the toggle button (☰) in the top left corner of the page. The sidebar will show or hide based on its current state.

## Files

The extension consists of the following files:

- `manifest.json`: The manifest file containing metadata about the extension.
- `contentScript.js`: The content script that modifies the target website's DOM to add the toggle button and implement the show/hide functionality for the sidebar.
- `popup.html`: A simple popup containing a button that activates the content script.
- `popup.js`: JavaScript file that listens for clicks on the button in the popup and sends a message to the content script to execute its functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
