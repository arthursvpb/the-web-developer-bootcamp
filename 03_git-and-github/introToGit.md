# Intro to git

It's a version control system: allow us to work with different versions of our code.

> Git is a technology. <br>
> Github is a website that works with git.

## Git basics

### Git init

* Tells git to get ready;
* Makes a hidden directory called *.git*;
* Make the directory under control by the git, with this .git file that contains all the changes made to the files on that directory.

### Git status

* Asks git for status of the files;
* We have <b>untracked (red)</b> files, that are files that wasn't "prepared" (moved to the staging(preparation) area) and <b>tracked (green)</b> files that was moved to the staging(preparation) area.

### Git add

* Just putting the file in the same directory as *.git* doesn't make it track every change they make;
* If we want git to track this files, we have to <b>move it to the staging(preparation) area by using the command `git add`.</b>

### Git commit

* Makes a checkpoint in time with the changes that you added.
* <b>Move the files from the staging(preparation) area to the local repository.</b>

* `git commit -m "My commit"`
* `-m` stands for <b>message</b> that should have nice description about your commit (version of the code, updates made it) so if needed we can search for it easily.

### Git log

* <b>History</b> of all the commits that have been made in the repo.
* Commits have a <b>hash string to identify the commit.</b>

### Git checkout

* Used for a lot of different things.
* It is used for going and viewing something else (checking something else out) that can be a branch, commit and etc.
* `git checkout cb571b6dee(...)` is used to <b>go back to a previous commit</b>.

<div style="text-align: center;">
    <img src="https://image.slidesharecdn.com/gittutorial-150724014321-lva1-app6891/95/git-tutorial-13-638.jpg?cb=1437702443" style="height: 300px;">
</div>

* I can <b>go back to a certain commit, make a change and switch back to the branch I was and commit the changes</b>.
* Or I can simply use this to <b>analise some previously code</b>.

### Git HEAD

* HEAD is a pointer to the <b>current place you are</b>.
* HEAD is like you, moving to different places, that are called *branches*.
* `HEAD->master` says that i am at branch master. 

### Git branches

* Master is the main default branch
* Branches are like <b>alternate timelines</b>, so we can handle commits, like going back and another stuff.
* If want to add some feature, for example, we can <b>create a branch for making the changes</b> and after that <b>merge</b> it on master again.

```git checkout -b name-of-branch``` <br>
*create a new branch (-b) and checkout to it* <br>

```git merge name-of-branch```<br>
*merge the changes to the master branch*

### Git revert --no-commit 0766c053..HEAD

* This will <b>revert the current workflow to a certain commit</br>
* The changes <b>will me tracked and you can commit again after revert</b>.
* This is a safe way of reverting to a commit, different from `git reset --hard` that <b>will discard everything uncommited</b>.

