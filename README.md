biojs.net
========

Pull requests are welcome!

Biojs.net is the official overview page of Biojs resources and wants to offer relevant information to its users and contributors. The site itself is based on [Jekyll](http://jekyllrb.com/) which enables fast and easy content management of the page. Jekyll can be described as a simple and easy-to-use static site generator. 
It takes a template directory containing raw text files in various formats
and converts those to a ready-to-publish static website suitable for serving with your favorite web server.

To contribute to the biojs.net repository please follow the installation guide below.

# Installation
-----------
### Getting the code
The source code for biojs.net is organized via github. Completely new to git? Check out the [introduction for beginners](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics) and the [installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

When you've successfully setup git on your machine, choose a directory in which you'd like to manage your local version of biojs.net. 
In this example we want to store it in our Home projects folder:

~~~~bash
$ cd ~/projects
~~~~

We'll clone ("download") the source code of biojs.net into it by using the link found at the top of the [project page](https://github.com/biojs/biojs.net) after selecting HTTPS in the dropdown menu.

~~~~bash
$ git clone https://github.com/biojs/biojs.net.git
~~~~

This will create a new project folder under ~/projects/biojs.net which contains all our required source code.

### Setting up Jekyll
Check if your current environment matches the  
[prerequirements](http://jekyllrb.com/docs/installation/#requirements)
for the installation of Jekyll:

- [Install Ruby](https://www.ruby-lang.org/en/downloads/) (if you're unsure which version is the best for you, current stable is just perfect)
- [Install RubyGems](https://rubygems.org/pages/download) 

After this initial setup you are able to install Jekyll as described here [in the Jekyll documentation](http://jekyllrb.com/docs/installation/#install-with-rubygems).

To get your local Jekyll server running, start it with the following command executed in your terminal and inside your biojs.net project folder: 

~~~~bash
$ jekyll serve --watch
~~~~
The command ``jekyll serve`` will generate a current build of your project and  startup the server. The option ``--watch`` will make your server listen for changes in any of your project files. This means, once you edit any of your files in your project directory, Jekyll will automatically rebuild your project and reload the page subsequently - a perfect setup to make changes on your local machine right away!
You can now see your local copy of biojs.net under the url localhost:4200 in your favorite browser!

Read more about [Jekyll here](http://jekyllrb.com/). It's awesome.



# Write a new blog post
--------------------

```
ruby newpost.rb "BioJS is awesome"
```
# Need help? Any questions?
-----------------------
Drop us a message in our [group board](https://groups.google.com/forum/#!forum/biojs) and we'll be happy to help you!