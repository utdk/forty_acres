# Forty Acres Subtheme Developer Documentation

### Creating a Forty Acres Subtheme
Copy the STARTERKIT directory and put it at the same level as the forty_acres theme (/web/themes).  Rename the subtheme name in place of the name STARTERKIT, and replace the word STARTERKIT in your subtheme in the following places within your subtheme:
/config/install/STARTERKIT.settings.yml
package.json
STARTERKIT.info.yml (the name and 2 instances inside this file)
STARTERKIT.theme
STARTERKIT.libraries.yml

### Customizing your subtheme

#### Customizing templates
If you want to override a Forty Acres theme template just copy it into the templates directory in your new subtheme. Namespacing in those templates may need to be updated with the namespace of your new subtheme. For example, if you copy a header.html.twig file into your new subtheme, you would need to copy the page.html.twig file and reference the include file with the new theme namespace.
In other words, in page.html.twig, you would change:
{% include '@forty_acres/includes/header.html.twig' %} to {% include '@your_subtheme/includes/header.html.twig' %}

#### Customizing JS
There is an example.custom.js file in the /js directory. It is referenced in the libraries.yml file. To use it, rename it by removing the "example" part of the file names and uncomment the "js" and the line beneath it in the libraries file.
More information about adding JS to a subtheme is at:
https://www.drupal.org/docs/8/theming/adding-stylesheets-css-and-javascript-js-to-a-drupal-8-theme

#### Customizing CSS:
There are two ways to add or modify CSS in the subtheme:
    * Add CSS to the styles.css file in the /css directory. Any styles here will get read last and override all other styles.
    * Create Sass files and compile them. Instructions for using Sass and Gulp are below.

Typically new Sass partial files should go inside the /src/scss directory and be imported into the overrides.scss file to get compiled and output to the overrides.css file in /css.

#### Developing with SCSS Local environment requirements
Developers will need the following packages installed globally.

    Node
    Node Package Manager (NPM)
    Gulp

#### Local environment setup using NVM
Using Node Version Manager (NVM) is now recommended for installing Node/NPM. NVM is more flexible than Homebrew and avoids the situation where you use Homebrew to install Node which then installs your global packages. However, using NVM is not required and you may continue to use Homebrew if you so choose. If you have previously installed Node/NPM with Homebrew and want to delete it along with whatever global NPM packages you have installed run the following commands.

**Note: you will need to re-install whatever global packages you currently have using the NVM supplied NPM.**

    brew uninstall node;
    brew prune;
    rm -f /usr/local/bin/npm /usr/local/lib/dtrace/node.d;
    rm -rf ~/.npm;

To now install NVM run the following commands

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

Verify the following has been added to your bash_profile

    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

Next, verify NVM is working correctly by running the following which should output the options for NVM. If it is not found try sourcing your bash_profile or opening a new terminal window.

    nvm

Next, we need to install the stable version of Node and NPM. Run the following command to install both

    nvm install --lts

Now you can verify you have Node and NPM installed by running the following commands which should return node v8.11.3 and npm v5.6.0

    node -v
    npm -v

Next, we will need to globally install Gulp

    npm install -g gulp

You can check what global packages you have installed with the following command

    npm list -g --depth 0

You should now have Node, NPM and Gulp installed globally. You can verify the location of these packages by running the following commands. The packages should all be coming from inside the ~/.nvm directory.

    which node
    which npm
    which gulp

#### Running a gulp build
Now that you have Node, NPM and Gulp installed globally you can run the gulp configuration in Forty Acres. Forty Acres contains a package.json which defines a number of node packages and gulpfile.js which contains the Gulp configuration for tasks such as compiling SCSS and uglifying JS.

Run the following commands from your theme root to install the local packages and then to trigger a new build.

    npm install
    gulp

Gulp will run the following tasks:

+ compile SCSS
+ add vendor prefixes to CSS
+ uglify JS
+ copy CSS to relevant directory
+ concatenate files

#### Errors
If you run "gulp" and get an error similar to 'Syntax "undefined" is not supported yet...', it may be due to not having a Sass partial(s) to compile.

You may need disable CSS linting for any Sass that uses a "@" rule by adding a comment line above it, like the example below.
  @media screen and (min-width: #{$mq-breakpoint}) {
    // stylelint-disable-next-line at-rule-no-unknown
    @content;
  }
