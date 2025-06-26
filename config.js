// config.js - Configuration for the GitHub Portfolio Website

const config = {
    githubUsername: 'nuken', // Your GitHub username
    pageTitle: 'Nuken\'s GitHub Projects', // Title for the browser tab
    headerTitle: 'GitHub Projects', // Main title on the page (username will be prepended)
    headerSubtitle: 'A collection of my public projects on GitHub.', // Subtitle under the main header

    footerText: 'All rights reserved.', // Footer copyright text (year and username will be prepended)
    footerBuiltWithText: 'Nuken Built This!', // Footer tagline. Change to what you want

    // Text for loading and error states
    loadingProjectsText: 'Loading projects...',
    loadingProjectsSpinnerAltText: 'Loading spinner',
    errorLoadingProjectsTitle: 'Error loading projects:',
    errorLoadingProjectsMessage: 'Please check your internet connection or try again later.',
    noPublicReposFound: 'No public repositories found for', // Will be followed by username
    noPublicReposFoundHint: 'Make sure your repositories are public or try a different username.',

    // Text for project cards and details page
    viewProjectDetailsButtonText: 'View Project Details',
    repositoryLinkTitle: 'Repository Link:',
    goToGithubRepoButtonText: 'Go to GitHub Repository',
    projectHostedOnGithubText: 'This project is hosted on GitHub.',
    projectOverviewTitle: 'Project Overview',
    loadingReadmeText: 'Loading project README...',
    noReadmeFoundText: 'No README.md found for this project.',
    noReadmeFoundHint: 'You can manually add more details here if needed.',
    errorLoadingReadmeTitle: 'Error loading README:',
    backToAllProjectsButtonText: 'Back to All Projects',

    // Placeholder text for Project Overview if no README.md is found
    projectOverviewPlaceholderText1: 'This section would contain more detailed information about the project, its features, technologies used, and how to set it up.',
    projectOverviewPlaceholderText2: 'For example, you might include:',
    projectOverviewPlaceholderListItems: [
        'Key features and functionalities',
        'Technologies and libraries used',
        'Installation and setup instructions',
        'Usage examples or screenshots',
        'Future plans or roadmap'
    ]
};
