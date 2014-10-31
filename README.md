# gloggy-server

Server code for Gloggy (http://glog.gy)


## Routes

* GET /:user
  * IDK my BFF Jill?

* GET /:user/post
  * List of all posts  

* GET /:user/post/:post
  * Retrieve a specific post for a user

* GET /:user/tag
  * List of all tags { tag: "", posts: 0 }

* GET /:user/tag/:tag
  * List of all posts made with :tag


## Query params


* ?size
  * micro - twitter style small pieces
  * normal - 
  * all - (default)

* ?page - Pagination index, 1 based

* 