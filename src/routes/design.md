# Design

This website was designed with composition at front of mind. There are a handful of _basic_ layout components that are used heavily throughout the app. Most notably is the `FlexBox` component. These basic layout components allow devs full flexibility without having to rewrite basic styles over and over.

## Page layout

Using the `MovieId` component as an example, the page is made up of a `Breadcrumb` component and a series of layout components including the `FlexBox`, `ListContainer`, and `GridBox`.

With these basic components, a dev can add/remove elements easily to customize each route as needed.

## Data fetching

This route also utilizes `react-router`'s `loader` paradigm. The `loader` fetches the pages necessary data before rendering the route so there is no layout shift or loading flashes on the page. Instead, when a user clicks a route that requires a fetch, a fetching indicator is shown before navigating the user. The end result is usually a site that _feels_ faster to the end user.
