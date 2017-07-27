# Git Commit Web

[![N|Solid](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)](https://github.com/Priyank1504/Git_Commit_Web)

Web application that shows git commit history of any project considering the fact that the project is __public__.
To use the App user don't have to Sign up or Sign in, as a GitHub user.
__Home page__ will be by default shows the commit history of the same web app.
User can reset, come to default page and view commits of other projects.
User can directly jump into the __commit file__ on GitHub by directly clicking on the __commit message link__. 

# Technologies used:
- **HTML5**
- **CSS**
- **AngularJS**
- **AJAX**

# Functionalities achieved are as follows:
 [x] Input Fields:
 - **Enter Git UserName** 
 - **Enter Git Project Name**
 
[x] Default Button : _"Git Commit Web" projects commits._

[x] Reset Button : _Reset the search result and input fields and allow user to search again._

[x] View Commits Button :  _Search all commits for the given inputs._

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
### GitHub API

[![N|Solid](http://www.cloudways.com/blog/wp-content/uploads/cloudwaysgithub.jpg)](https://developer.github.com/v3/)

I've used GitHub REST [API v3 API](https://developer.github.com/v3/) and it's a near real-time data API offering various end points to play with GitHub.
**Example**
```javascript
req = {
                    method: 'GET',
                    url: 'https://api.github.com/repos/'+_userName+'/'+_projectName+'/commits',
  }
```
# Author
- **Priyank Verma**


### License
This project is licensed under the MIT License - see the [LICENSE.md](https://en.wikipedia.org/wiki/MIT_License) file for details
