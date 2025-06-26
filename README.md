# **GitHub Portfolio Website**

This project is a simple, single-page web application designed to showcase your public GitHub repositories. It dynamically fetches your project data directly from the GitHub API and renders each project's README.md file, providing a clean and organized overview of your work.

## **Features**

* **Dynamic Project Loading:** Automatically fetches and displays your public repositories from GitHub.
* **Single-Page Application (SPA) Feel:** Navigates between the project list and individual project details without full page reloads.
* **README.md Integration:** Populates the "Project Overview" section for each project by fetching and rendering its README.md file directly from GitHub, including formatted code blocks.
* **Configurable Content:** Easily customize the GitHub username, page titles, header text, and footer text through a separate config.js file, without touching the main HTML structure.
* **Dark Theme:** A modern, eye-friendly dark color scheme.
* **Responsive Design:** Built with Tailwind CSS to ensure a great viewing experience on various devices (desktop, tablet, mobile).
* **Navigation:** "View Project Details" buttons on project cards and "Home" / "Back to All Projects" buttons on detail pages for easy navigation.

## **How to Use and Deploy**

This website consists of two main files: index.html and config.js.

1. **Download the files:**
   * Save the content of the github-portfolio-page immersive as index.html.
   * Save the content of the config-js immersive as config.js.
2. **Place in Root Directory:** Ensure both index.html and config.js are placed in the **root directory** of your web hosting service (e.g., public\_html/ or similar).
3. **Favicon:** Place your favicon.ico file in the same root directory.

Once these files are uploaded, your website should be live at your domain (e.g., nuken.ct.ws).

## **How to Edit**

The beauty of this project is its easy configurability\!

### **1\. Editing config.js (Recommended for most changes)**

All the main textual content and your GitHub username are stored in config.js.

* **githubUsername**: Change 'nuken' to your actual GitHub username. This is crucial for the site to fetch your repositories.
* **pageTitle**: The text that appears in the browser tab.
* **headerTitle**: The main part of the large title on your page (your username will be automatically prepended in uppercase).
* **headerSubtitle**: The smaller text below the main header.
* **footerText**: The main copyright text in the footer.
* **footerBuiltWithText**: The tagline in the footer.
* **Loading/Error Messages:** You can customize the text for loadingProjectsText, errorLoadingProjectsTitle, etc., to suit your preference.
* **Button Text:** Text for buttons like viewProjectDetailsButtonText, goToGithubRepoButtonText, and backToAllProjectsButtonText.
* **README Placeholder Text:** If a project doesn't have a README.md, the projectOverviewPlaceholderText1, projectOverviewPlaceholderText2, and projectOverviewPlaceholderListItems will be displayed. You can customize these.

**To edit config.js:**

1. Open config.js in a text editor.
2. Modify the values of the variables as needed (e.g., githubUsername: 'your-github-username').
3. Save the file and re-upload it to your hosting.

### **2\. Editing index.html (For advanced changes)**

You generally **do not** need to edit index.html for text content, as most of it is pulled from config.js or the GitHub API. However, if you want to make structural, layout, or advanced styling changes:

* **HTML Structure:** The index.html defines the overall layout. You can adjust div elements, add new sections, or rearrange existing ones.
* **Styling (Tailwind CSS):** The project uses Tailwind CSS for styling. You can modify existing Tailwind classes (e.g., bg-gray-900, text-blue-400) or add new ones directly to HTML elements. For custom CSS, you can add it within the \<style\> tags.
  * **Markdown Code Areas:** The CSS for .markdown-content pre and .markdown-content code specifically styles the code blocks from your README.md files. You can adjust colors, fonts, or spacing here to further customize their appearance.
* **JavaScript Logic:** The \<script\> section contains the core logic for fetching data, rendering content, and handling navigation. Only modify this if you understand JavaScript and the GitHub API.

### **3\. Favicon**

The website is configured to use a favicon.ico file located in your site's root directory.

To use your own favicon:

1. Create or obtain your favicon file named favicon.ico. A size of 32x32 pixels is common.
2. Upload this favicon.ico file to the **root directory** of your web hosting.

