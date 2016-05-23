# BioJS.net Ghost Blog

BioJS.net is the new CMS-based website for BioJS resources based on Ghost. You find the running app on https://biojsnet.herokuapp.com/
If you have issues setting up the development environment or if would like to add content on the live site, pop us a message on [Slack](http://biojs-slackin.herokuapp.com/).


# [Ghost](https://github.com/TryGhost/Ghost) on [Heroku](http://heroku.com)

Ghost is a free, open, simple blogging platform. Visit the project's website at <http://ghost.org>, or read the docs on <http://support.ghost.org>.

# Ghost Setup of Biojs.net

This Ghost Blog uses the ghost on heroku deploy workflow by [cobyism](https://github.com/cobyism/ghost-on-heroku). To enable collaboration on the biojs.net page we enabled automatic deploy of the website through this git repository. A new deploy of the website will be triggered on heroku everytime a pull request has been merged into the master branch of this git repository. The code will then be built on heroku and deployed instantly if the build is successful. 

# How to Contribute

## Setup Your Dev Environment

* Clone this git repo into your favorite local folder
~~~~bash
$ git clone https://github.com/biojs/biojs.net2.git
~~~~

* In the root of the project folder, install all the npm dependencies
~~~~bash
$ npm install
~~~~
* After all your dependencies have been installed successfully, you can spin up the Ghost server like so
~~~~bash
$ npm start
~~~~
Your Own Ghost instance is now running on http://localhost:2368
CMS users login on http://localhost:2368/ghost/

## Get Started With Sass
This project uses [Sass](http://sass-lang.com/) to build the blog's css dependencies. There is a grunt watch task configured which will - once started -  rebuild all css dependencies of the BioJS theme once any of the .scss files in the directory /content/themes/biojs-theme/assets/sass changes. To start the grunt task while developing, just open another terminal tab, go to the root of the project folder and do the magic:
~~~~bash
$ grunt
~~~~

## Add your changes to the repository
Once you are happy with your local changes, add the changed files to your upcoming commit and push them to a feature-branch of your choice
~~~~bash
$ git checkout -b <my-new-feature-branch-name>
# do all your local changes
$ git add -p # add your changes to the upcoming commit
$ git commit -m'A descriptive commit message or something fun'
$ git push -u origin <my-new-feature-branch-name> # create a new remote feature branch and push your local changes to it 
~~~~
Create a pull request for your feature branch on the repo website on github and ask any of the collaborators to review it. That's it, many thanks for your cool work!


# Heroku Configuration for File Uploads (not enabled yet - please use the assets folder for images for now)
#### Using with file uploads disabled

Heroku app filesystems [aren’t meant for permanent storage](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem), so file uploads are disabled by default when using this repository to deploy a Ghost blog to Heroku. If you’re using Ghost on Heroku with S3 file uploads disabled, you should leave all environment variables beginning with `S3_…` blank.

#### Configuring S3 file uploads

To configure S3 file storage, create an S3 bucket on Amazon AWS, and then specify the following details as environment variables on the Heroku deployment page (or add these environment variables to your app after deployment via the Heroku dashboard):

- `S3_ACCESS_KEY_ID` and `S3_ACCESS_SECRET_KEY`: **Required if using S3 uploads**. These fields are the AWS key/secret pair needed to authenticate with Amazon S3. You must have granted this keypair sufficient permissions on the S3 bucket in question in order for S3 uploads to work.

- `S3_BUCKET_NAME`: **Required if using S3 uploads**. This is the name you gave to your S3 bucket.

- `S3_BUCKET_REGION`: **Required if using S3 uploads**. Specify the region the bucket has been created in, using slug format (e.g. `us-east-1`, `eu-west-1`). A full list of S3 regions is [available here](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region).

- `S3_ASSET_HOST`: Optional, even if using S3 uploads. Use this variable to specify the S3 bucket URL in virtual host style, path style or using a custom domain. See [this page](http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html) for details.

Once your app is up and running with these variables in place, you should be able to upload images via the Ghost interface and they’ll be stored in Amazon S3. :sparkles:




## Further Reading
* [official documentation](http://support.ghost.org/)
* [Ghost Theme Development](https://themes.ghost.org/)
* [Ghost API](http://api.ghost.org/)
* [Talk to the repo collaborators](http://biojs-slackin.herokuapp.com/)

