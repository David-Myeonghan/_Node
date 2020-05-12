'npm init -y' -> install npm with default value 'yes'

if you need a dynamic, hbs would be the best, need static? just html would be ok.

To get restarted the server even when hbs file modified with Nodemon
'nodemon src/app.js -e js,hbs'

paddig: putting space inside of box.
margin: putting space outside of box.

fetch API is not JS, it's browser based API, which can be used in all modern browser

- heroku suitable for start-ups
  "heroku login"

- git
  download git from git-scm.com
  - one repository for the whole folder,
  - one for web-server

Untracked Files -> Unstaged Changeds -> Staged Changes -> Commits

- ⭐️SSH (Secure Shell)⭐️
  How to transfer the code between local machine and the other third party (Github, and Heroku)

  - To see the existing SSH keys: 'ls -a -l ~/.ssh'
    -a: shows hidden files and folders
    -l: easy to read

  - To Generate the SSH key: 'ssh-keygen -t rsa -b 4096 -C "email@Address"'
    -t rsa : RSA type
    -b 4096: how many bits for this key. 4096 is enough secure.
    -C: comment
    -Continue with default settings by pressing Enter key.

  - id_rsa : Must be kept secret on your local machine
  - id_rsa.pub : publi c

  - Make sure the program is running & Register the new pricate key file
  - start up SSH agent: 'eval "$(ssh-agent -s)"' (no two quotes " " for Windows)
    -Agent pid showing if already running.
  - Register the file: 'ssh-add -K ~/.ssh/id_rsa' (no "-K" for Win and Linux)
    '~/.ssh.id_rsa': providing the path of rsa key.
    
  
