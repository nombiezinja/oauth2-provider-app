# Basic OAuth2 provider application

An example application that can serve as the authorization server in a system, receiving appropriate parameters and returning a token that can be used by a separate resource server.

Grant flows accepted include:

* Client credentials
* Resource owner
* Authorization code

This application will also include a small sample client application. 

## Planning

### Routes

* Register user
* Register client application
* Return OAuth2 token by resource owner credentials
* Return OAuth2 token by client credentials
* Get user authorization page with authorization code parameters
* Validate user authorization and redirect to redirect_uri with authorization code
* Get OAuth2 token by authorization code
* Log out user

### Database

Need to store:

* Client applications and credentials
* Users
* User tokens
* Blacklisted tokens