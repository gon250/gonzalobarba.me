---
title: A Good or Bad practice - How you don't have to set the config of an environment?
slug: bad-practice-switch-case-to-set-environment
date: '2015-07-06'
---

In the last 5 years that I have worked as developer, I saw a lot of times developers often use a switch to set the path (both in back-end and front-end).
Take a look below to see what I mean:

## Back-end example (c#):

```js
 public static string getHost(EnvironmentEnum environment){
            var path = String.Empty;
            switch (environment)
            {
                case EnvironmentEnum.dev:
                    path = "http://localhost:55793/";
                    break;
                case EnvironmentEnum.uat:
                    path = "http://dev.yourpath.com/";
                    break;
                case EnvironmentEnum.production:
                    path = "http://yourpath.com/";
                    break;
            }
            return path;
        }
```

## Front-end example (javascript):

```js
;(function () {
  if (window.location.host.indexOf('localhost') !== -1) {
    window.serviceUrl = 'http://localhost:57939/'
  } else if (window.location.host.indexOf('qa') !== -1) {
    window.serviceUrl = 'http://dev.yourpath.com/'
  } else {
    window.serviceUrl = 'http://yourpath.com/'
  }
})()
```

This topic has been discussed whether it is good or bad practice, and I think is a bad practice because we must avoid this kind of code and set a proper configuration.

I have investigated about this and my conclusion is **it is bad practice**, so I'm going to explain you why?.

# Why?

Code that works for you and is easy to maintain is by definition "good". You should never change things just for the sake of obeying someone's idea of "good practice" if that person cannot point out what the problem with your code is.

In this case, the most obvious problem is that resources are hard-coded into your application - even if they're selected dynamically, they're still hard-coded. This means that you cannot change these resources without recompiling/redeploying your application. With an external configuration file, you'd only have to change that file and restart/reload your application.

Whether or not that is a problem depends on what you do with it. In a Javascript framework that is automatically redistributed with every request anyway, it is no problem at all - the changed value will propagate to every user the next time they use the application. With an on-premises deployment in a compiled language in an inaccessible location it is a very big problem indeed. Reinstalling the application might take a long time, cost a lot of money or have to be done at night to preserve availability.

Whether or not hard-coded values are a problem depends on whether your situation is more like the first example or more like the second example.

# Think about this

What happens when you want to add another environment? Or change your development server? Or you need to fail over to a different location? You can't because your configuration is directly tied to code.

Configuration should be forced out of code and into the environment itself. It's a principle of a [Twelve-Factor App](http://12factor.net/config), but it's a good practice for any application.

---

That's all, I hope you enjoy it and feel free to share it.

Note: I made this post based in a question I asked and I have used the answers of my question for this post, you can take a look here http://programmers.stackexchange.com/questions/288848/bad-practice-switch-case-to-set-environment

- [Original post](https://gon250.svbtle.com/bad-practice-switch-case-to-set-environment)
