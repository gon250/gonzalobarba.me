---
title: Getting started with GIT
slug: getting-started-with-git
date: '2014-03-27'
---

Git allows groups of people to work on the same documents (often code) at the same time, and without stepping on each other's toes. It's a distributed version control system.

First you have to install git in your computer. You can follow the steps in github website.

- [Download and Install Git](https://help.github.com/articles/set-up-git)

#### Initialize a Git

To initialize a Git repository here, type the following command:
`$ git init`

#### Check current state of our project

Command to see what the current state of our project is:

```
    $ git status
```

After any change you should run the `git status` command again to see how the repository status has changed.

#### Add & track changes

To tell Git to start tracking changes made to myFile.txt. we first need to add it to the staging area by using git add

```
    $ git add myFile.txt
```

> Git is now tracking our myFile.txt file. Let's run `git status` again to see where we stand

#### Store our staged changes

To store our staged changes we run the commit command with a message describing what we've changed. Let's do that:

```
    $ git commit -m "Adding comment"
```

You also can use wildcards if you want to add many files of the same type:

```
    $ git add '*.txt'
```

#### Committing all changes

To commit all the changes we have made:

```
    $ git commit -m 'Add all files files'
```

#### History of commits

We can see the history of commits, type the following command:

```
     $ git log
```

#### Remote repositories

To push our local repo to the GitHub server we'll need to add a remote repository.
This command takes a remote name and a repository URL

```
$ git remote add origin https://github.com/myfolder/myfolder.git
```

#### Pushing remotely

The push command tells Git where to put our commits when we're ready. So let's push our local changes to our origin repo (on GitHub).

```
    $ git push -u origin master
```

#### Pulling remotely

We've invited other people to our github project who have pulled your changes, made their own commits, and pushed them.
We can check for changes on our GitHub repository and pull down any new changes by running:

```
    $ git pull origin master
```

#### Differences

What is different from our last commit by using:

```
    $ git diff HEAD
```

> note: In this case we want the diff of our most recent commit, which we can refer to using the HEAD pointer.

#### Staged Differences

Run git diff with the `--staged` option to see the changes you just staged

```
     $ git diff --staged
```

#### Resetting the stage

You can unstage files by using the git reset command.

```
    $ git reset your-folder/my-file.txt
```

#### Undo

Files can be changed back to how they were at the last commit by using the command:

```
    $ git checkout -- <target>
```

#### Branching out

Creating a branch, type the following command:

```
    $ git branch first_br
```

Git branch you'll see local branches:

```
    $ git branch
```

#### Switching Brands

You can switch branches using the git checkout `branch` command

```
    $ git checkout <branch>
```

#### Committing Branch changes

```
    $ git commit -m "first commit brand"
```

#### Switching back to master

Witch back to the master branch so you can copy your changes from the branch back into the master branch

```
    $ git checkout master
```

#### Preparing to merge

To merge your changes from the clean_up branch into the master branch. We’re already on the master branch, so we just need to tell Git to merge the clean_up branch into it:

```
    $ git merge clean_up
```

#### Keeping Things Clean

You can use git `branch -d` `branch name` to delete a branch

```
    $ git branch -d your_br
```

#### The Final push

To push everything you've been working on to your remote repository:

```
    $ git push
```

---

I've created this post to make easier consult all the commands we've seen above.

- [Original post](https://gon250.svbtle.com/getting-started-with-git)
