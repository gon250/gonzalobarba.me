---
title: Why ReactJS & AngularJs
slug: why-reactjs-and-angularjs
date: '2015-10-04'
---

# ReactJS

[ReactJS](https://facebook.github.io/react/docs/why-react.html) is an open source javascript `library` provided by Facebook (it's not a framework), it's focus on the visualization (Components), as they say many people choose to think of React as the V in MVC.

They built React to solve one problem: building large applications with data that changes over time.

ReactJs provide you a really good benefits for the modularity, performance and make you easy plan and develop a complex apps making easy work with data and events.

# AngularJs

[AngularJS](https://docs.angularjs.org/guide/introduction) is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.

# AngularJs as your App Controller

When we are going to start a new application using `ReactJS` is very common base the architecture in [Flux](https://facebook.github.io/flux/) or [Redux](https://github.com/rackt/redux), but if we have already an application using a `MVC` framework as `AngularJs` or simply we want to do it, we can keep the logic of the application with AngularJs and let the views to ReactJs.

It makes sense because the ReactJs performance working with the `DOM` is much better than AngularJs.

### Why ReactJs improves the performance working with the DOM?

ReactJs to improve the performance working with the view it's using a [Virtual DOM](https://en.wikipedia.org/wiki/Document_Object_Model) and doing it, they avoid to render all the DOM for every single change (Render all the DOM is the common situation). It makes a copy of the DOM in the stack and then compare it with the real DOM and finally makes the changes only where is necessary.

- Take a look this [link](https://facebook.github.io/react/docs/advanced-performance.html) to know more about it.

Use ReactJS require more code but we will improve the UX, because it´s going to improve the performance in the view, for example think about a timeline like in twitter, where we can have hundreds of records in the interface and we have four changes there, it´s more efficient make 4 changes, locate the components and render only that components than make 4 changes and render the full timeline.

Also a good point about it is the flow of react applications is `unidirectional`,

What does mean it?

[![Screen Shot 2015-10-04 at 17.35.07.png](https://svbtleusercontent.com/tueqztb7fi1wa_small.png)](https://svbtleusercontent.com/tueqztb7fi1wa.png)

It's not like most of the frameworks because them are focus on a `bidirectional` sense, and in this case could be hard plan an application and find errors in a complex application but with react we have an unidirectional flow, so it's going to make it more simple.

- [Original post](https://gon250.svbtle.com/starting-with-reactjs-facebook-library-jsx)
