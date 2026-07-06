# Carrier Frontend Assignment

## Project Overview

The application converts the provided service manual into a responsive web page using reusable React components. For this assignment I chose to build using React, TypeScript, Vite, and Bootstrap. The project was built around a small reusable component library that allows pages to be assembled without modifying the underlying components. I also chose Bootstrap so layout could be adjusted as needed as the page was assembled. Overall, the goal was to transform the provided PDF into a responsive and easy-to-use web page with a strong focus on mobile usability.

## Approach

My overall approach was to focus on not just mobile usability but design reusability as well as scalability. The stated goal was to make the PDF usable on mobile-focused devices. Knowing that the most likely end user would be a technician, I decided to emphasize ease of use. Because of this, the styling was intentionally simplistic with an emphasis on readability and navigation rather than visual complexity.

When it came to building the application, I chose reusable components. Although this assignment only required a single PDF, based on our interview discussion I viewed it as the first page of what could become a much larger documentation system. My focus was to build a set of reusable building blocks that could be assembled into future pages while requiring little or no modification to the underlying components. The majority of page construction was intentionally designed to take place within the page itself.

The page file was intentionally structured to read almost like plain English, making the overall layout and content flow easy to follow. All page-specific content is defined there, while the reusable components contain the majority of the shared styling and behavior. Bootstrap was then used within the page to handle layout and positioning as the components were assembled.

These design decisions were heavily influenced by maintainability and scalability. By building with reusable components, future documentation could be updated consistently across multiple pages with minimal changes. For example, if a search feature were added once additional pages had been created, the DocumentationSection component was intentionally designed so ids or metadata could easily be incorporated. This was a major reason I structured the application around clearly defined content sections.

## Design Decisions

The reusable/generic components to me were an easy decision. I designed them to be this way so that building out additional pages would mostly involve using them like blocks to assemble the actual page within the page.tsx file for the specific page. This ensures that overall design across any future pages would be consistent as well as the speed at which it could be implemented would grow as the component library grew. Even while I built out this application for this small assignment my component library grew and due to how it was structured it was simple to add new components and layer parts into the final page construction.

I chose to use Bootstrap so that layout and styling could be handled with ease. For this project there was not really a set design/style guide so I mostly maintained a rather generic style. Considering the nature of this and the likely end user I wanted the styling to stay out of the way but provide a clean structure that made the page usable. Bootstrap allowed me to rapidly get the project styled but it also provided the layout architecture that allows this component library to really shine.

The component library was built with the plan of the base styling existing already coded into the components. So the base layout was more or less the exact same. But by using Bootstrap I was able to actually align the components as needed right when I assembled it all in the page.tsx. This allows for quick building but also flexibility. Using Bootstrap grid the page can easily be laid out as needed for desktop while also making mobile simple to implement.

One of the main design layout decisions I made was making all tables accordions. I chose to do this so that navigating the page would be simple. As a technician using this manual being able to instantly look and find what you need on both desktop and mobile is essential. By placing the tables under accordions the whole page can be easily seen and scrolled in an expedited manner. On desktop it was more of a convenience that makes the whole page very easily scanned but on mobile it really shines. If the tables were not laid out in accordions most of the user experience is spent scrolling. Instead it's simple to click on the appropriate table dropdown and access the content you want as you need it.

There were a number of things I considered adding such as a search feature. But my focus was on remaining practical while still being scalable. This was why I decided to focus predominantly on components. The section component in particular was designed with the thought of being able to add an id to use for a search feature. Each specific section of the document was given structure so that the layout was consistent. But because we only had one PDF I kept the focus simplistic and practical, choosing to design it so adding new features would be simple without adding unnecessary ones in the meantime.

## Component Architecture

The application was intentionally structured so that the page.tsx file acts as the composition layer for the page. Rather than containing styling or component logic, it is primarily responsible for assembling reusable components and supplying the content for each section. This keeps the page itself easy to read while allowing the individual components to remain generic and reusable.

At the highest level, the application is organized around the DocumentationSection component. Each section serves as a container that groups related content together and provides a consistent structure throughout the document. These sections are built using the Bootstrap grid, allowing individual components to be positioned using rows and columns without modifying the components themselves.

Within each section are a collection of reusable content components. The DocumentationTable was designed to support a dynamic number of rows, columns, and content, making it flexible enough to support future documentation pages with different table structures. The Paragraph component supports both plain and formatted content, while the Image component provides a reusable solution for displaying QR codes or other documentation images.

The remaining components provide structure rather than content. The SectionHeader component is responsible for displaying section titles, while the AccordionSection component can wrap any child component, allowing tables or future content types to be collapsed without changing the underlying implementation. Although this assignment only uses accordions for documentation tables, the component was intentionally designed to remain generic so it can be reused throughout future documentation.

```text
Page.tsx
│
├── DocumentationSection
│   ├── SectionHeader
│   ├── Paragraph
│   ├── AccordionSection
│   │   └── DocumentationTable
│   └── Image
│
├── DocumentationSection
│
└── DocumentationSection
```

## Responsive Strategy

Responsiveness was the main driving point of this assignment and the page was designed with this in mind. I elected to use the Bootstrap grid so that I could easily set up the content to display correctly on mobile as well as simply laying it out on desktop. One of the main mobile considerations was scrolling. If all the tables are loaded on the screen open then finding the exact one you want requires a lot of scrolling and reading. With that in mind I placed them in accordions for increased usability. This creates a mobile experience where the full page can be easily and quickly scrolled.

Some of the tables in the PDF were rather large and wide so on mobile I focused on ensuring all tables were small enough to easily fit within the screen size while still being readable and usable. I also made sure on mobile to adjust some things like the initial QR code. I moved this below the section description so the page did not start with a large QR code.

## Tradeoffs

There were a number of compromises that had to be made for this project. One of the biggest ones was component design. I wanted to make the components as generic as possible so that long-term scalability would be as easy as possible. But obviously this assignment only had me working with one PDF so I had to be careful of designing it with what we clearly had versus what-ifs. So my biggest tradeoff was remaining practical while still focusing on scalability and maintainability.

This scalability and maintainability tradeoff I think is quite clear in the use of Bootstrap. I had considered adding most of my styling into the specific components. However, I decided that I wanted to prioritize the long-term flexibility of the components. So I kept them as simple as possible only holding generic styling, while most of the actual page layout came in the page.tsx using Bootstrap.

Another tradeoff was actually Bootstrap. Bootstrap does make ramping things up incredibly simple. It also has a very useful prebuilt component library. But it does cause things to take on a somewhat generic Bootstrap look as well as providing a lot of baseline CSS that can be annoying if it interferes with your overall design. But I decided for this project it far outweighed the cons. Our design interference concerns were nonexistent since we had no predetermined design, but we had a ton of pros. The grid feature of Bootstrap set up the main layout mechanic of my page. Additionally I elected to use Bootstrap's accordion instead of making my own. This decision was made because I was already using Bootstrap and because it ensures a consistent and familiar user experience.

## Future Improvements

Although I wanted to keep the project practical for the scope of the assignment, there are several features I would likely add if this documentation system continued to grow.

One of the first additions would be a search feature. The project was intentionally structured around reusable Documentation Sections so that section ids or metadata could easily be added to support searching and navigation across a larger manual. I believe this becomes much more valuable once multiple pages are introduced.

I would also move the page content into a JSON file or API-driven structure rather than defining it directly within the page. Since this assignment only consisted of a single document I felt keeping the content within the page file was the most practical approach, but separating the data would make maintaining a larger documentation library significantly easier.

Additional improvements would include expanding accessibility testing, adding automated component tests, implementing expand/collapse all functionality for the accordions, and continuing to grow the component library as additional documentation pages introduced new layouts or content types.

## Running Locally

1 Clone the repository.

2 Install dependencies using npm install.

3 Start the development server using npm run dev.

4 Build the production version using npm run build.

5 Preview the production build locally using npm run preview.

## GitHub Pages Deployment

The project is configured to be deployed using GitHub Pages.

To create a production build, run:

```bash
npm run build
```

The generated production files are output to the dist directory and are published through GitHub Pages.

Live Demo: https://mw228.github.io/carrier-manual-assignment/

GitHub URL : https://github.com/mw228/carrier-manual-assignment

## Closing Thoughts

This assignment was enjoyable because it emphasized solving a usability problem rather than simply recreating a PDF. My goal throughout was to build something that would not only satisfy the requirements for a single document, but could also serve as the foundation for a larger documentation system while remaining easy to maintain and extend.
