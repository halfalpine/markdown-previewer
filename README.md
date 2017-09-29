# Markdown Previewer
*React, Redux, CSS, JSX*

### About
[Markdown](https://daringfireball.net/projects/markdown/) is a simple syntax focused on writing for the web, allowing users to author formatted documents while maintaining the readability within the text itself. It's quick to write and easy to read. The Markdown Previewer allows a user to experiment with Markdown syntax by showing the formatted output in real-time. 

### Reflection
This was my first React project, and I later revisited it to add a Redux store. I refactored three times: 
* To extract presentational components from their containers
* To replace the global SCSS with component-based CSS using [styled-components](https://www.styled-components.com/).
* To store data in Redux
Overall, while writing I focused on absorbing 'the React way.' I found that declaring propTypes helped clarify the functionality of each component, and that extracting stateless functional components where possible helped create simplified architechure, and cleaner code. Using Redux meant that containers could communicate with the store directly, and less data had to be passed between components. These concepts are probably pretty pedestrian for experienced React developers, but it was quite helpful for me. After completing this project, I found I was able to work more quickly on subsequent projects.

### Next steps
* Improve UI of the Legend component
* Add media queries for responsive design