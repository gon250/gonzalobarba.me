---
title: Quick guide - Adding an existing project to GitHub
slug: quick-guide-adding-an-existing-project-to-github
date: '2015-03-05'
---

1. Create a new repository by the website.
2. Using the terminal go to your local project.
3. Initialize the local directory as a Git repository.

```
$ git init
```

4. Add the files in your new local repository.

```
$ git add .
```

5. Commit the files that you've staged in your local repository.

```
$ git commit -m 'First commit'
```

6. Copy the remote repository URL(''https``) ¦¦
   get this in https://github.com/yourusername/yourproject.
7. Add the URL for the remote repository where your local repository will be pushed.

```
$ git remote add origin remote repository URL
```

`$ git remote -v`

8. Push the changes in your local repository to GitHub.

```
$ git push origin master
```

> source: [help.github](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

- [Original post](https://gon250.svbtle.com/quick-guide-adding-an-existing-project-to-github)
