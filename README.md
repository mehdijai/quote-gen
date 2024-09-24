# Quote Gen Demo

HTML page Quote generator based on data object and renders the page to be printed with Browser print API.
The web app will have a defined template of a quote, the data of that quote will be filled using a form (There will another version to update data using field selection and on-doc updates). Then, when the quote is ready, It will be printed using browser print API.
This is just the demo part of a detailed project, Therefore, the real implementation and process isn't included in this demo, such as dealing with persistency, handling templates and variant templates...

## About the project

This app is built with React, TypeScript and Vite. It includes Storybook for documenting components.

All the components are built from scratch using SCSS and RFCs

## Types

The types are stored in `.d.ts` files in `namespace` corresponding each category. Example:

```typescript
declare namespace Card {
  export interface CardProps {
    children: React.ReactNode;
  }
}
```

These namespaces groups the types and interfaces according to their use and category.
There are types only for components, they exist in `components` folder, as they are related only to component. Business Logic types would be stored in `src`, And vis-versa.

## Components

Components are structured based on their category:

- UI Components (Dumb components, does't deal with any logic)
- Forms Components: Forms with a purpose and a logic. This component calls and renders the UI components accordingly.
- Tables Components: I have a `Table` UI component. But the Tables components holds the structure and the logic and renders the `Table` component.

## Storybook

Each component will have `.stories.ts` and `.doc.mdx` file. These files will document and handle testing for those components. Generally, Only for UI components.

## Pages

I use React Router to handle routing, And I store the pages inside `pages` folder. Page manages Other Components and deal with logic.

## Layouts

PS: *Not available yet*

I will have some different layouts for certain pages, Therefore, I will create Layout component to handle that.

## Hooks

All the custom hooks will be written in their own file for re-usability and clearance.

## Lib

Contains the utility functions and formatters.

## SCSS

This project uses SCSS for styling, with the help of variables and mixins. The `scss` directory is divided into Category based folders. The global style is in the root of `scss`. As well as `mixins` file. For now, I only have one mixin, but if it got larger, there will be a folder of mixin files for more organized structure.

## Icons

I use `lucid-static` icons. I have a component named `Icon`. This icon takes the name of the icon (From their icons library) and attach it to a `<span>` class name with the prefix of `icon-`.

## Forms

I use React Form Hook to handle the form state and validation. Later on I will integrate ZOD as well.
