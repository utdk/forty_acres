# Forty Acres Developer Documentation

### Local environment requirements

Developers will need the following packages installed globally.

    Node
    Node Package Manager (NPM)
    Gulp

### Local environment setup using NVM
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

### Running a gulp build
Now that you have Node, NPM and Gulp installed globally you can run the gulp configuration in Forty Acres. Forty Acres contains a package.json which defines a number of node packages and gulpfile.js which contains the Gulp configuration for tasks such as compiling SCSS and uglifying JS. Run the following commands from your theme root to install the local packages and then to trigger a new build.

    npm install
    gulp

Gulp will run the following tasks (and probably more in the future)

+ compile SCSS
+ add vendor prefixes to CSS
+ uglify JS
+ copy CSS and JS file to relevant directories
+ concatenate files

All CSS and JS changes should be made to source SCSS and JS files and never directly to the files in /css and /js. Therefore, any CSS or JS changes will always require a gulp build to run through the various tasks and recreate the files in /css and /js.

### Tentative SCSS directory structure

├── build\
│   ├── base.scss\
│   ├── forty_acres_components.scss\
│   └── forty_acres.scss\
├── components\
│   └── _texas-design-system-overrides.scss\
├── fonts\
│   ├── _charis.scss\
│   └── _libre-franklin.scss\
├── layout\
│   ├── _footer.scss\
│   ├── _general.scss\
│   ├── _header.scss\
│   ├── _main-content.scss\
│   └── _sidebar-content.scss\
├── mixins\
│   ├── _icons.scss\
│   └── _responsive.scss\
├── texas-design-system\
│   ├── components\
│   │   ├── cards\
│   │   │   ├── _contact-info.scss\
│   │   │   ├── _flex-content-area.scss\
│   │   │   ├── _newsreel.scss\
│   │   │   ├── _photo-content-area.scss\
│   │   │   ├── _promo-list.scss\
│   │   │   ├── _promo-unit.scss\
│   │   │   ├── _quick-links.scss\
│   │   │   ├── _resource.scss\
│   │   ├── _brandbar.scss\
│   │   ├── _buttons.scss\
│   │   ├── _footer.scss\
│   │   ├── _forms.scss\
│   │   ├── _header.scss\
│   │   ├── _hero.scss\
│   │   ├── _main-nav.scss\
│   │   ├── _menu-block.scss\
│   │   ├── _pagination.scss\
│   │   ├── _search-bar.scss\
│   │   ├── _sidebar-default-style.scss\
│   │   ├── _social-sharing.scss\
│   │   ├── _tables.scss\
│   │   └── _twitter-widget.scss\
│   └── core-brand\
│       ├── _icons.scss\
│       ├── _typography.scss\
│       ├── _utilities.scss\
│       └── _variables.scss\
├── _variables.scss\
├── _overrides.scss\
├── _settings.scss\
