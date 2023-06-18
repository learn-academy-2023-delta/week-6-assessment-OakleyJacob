# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is declaring a class called BlogPostsController that inherits from Application Controller
# this sets up a parent-child relationship between the App and BlogPostsController
class BlogPostsController < ApplicationController
  def index
    # ---2) This sets up an instance variable that is holding an array of all BlogPosts in our db
    # We do this in order to pass the array to our view or act as an API and send it off in JSON
    @posts = BlogPost.all
  end

  # ---3) This defines our Show method, it is the method that is called on when we recieve a get requests to the correct route
  # it shows one BlogPost
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This defines our New method, It returns a form for the purposes of building out a new BlogPost 
  # This is just a get request though, It does not actually interact with our database, except 'glancing' at the model
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This is the part that allows new to actually create a BlogPost. It is a post request from the new form.
    # We also see strongparams for the first time on this line, which is a way to regulate what users are or arent allowed to pass into the DB
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)This is the line of code that finds a single blog post via the Id that we recieve in our http request params
    # It is just a get request that returns a form with the information about the targeted blogpost
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This is the part that actually updates the blogpost, we once again see strong params here, protecting our db
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This line simply redirects us to our (presumably, I cant actually see the route aliases) to our index route after a successful delete
      redirect_to blog_posts_path
    end
  end

  # ---9) This keyword marks everything below it as only accessible by this particular class
  # no objects or users or anything can access anything below this line
  private
  def blog_post_params
    # ---10) This is where we set up strong params, We are essentially looking at the blogpost model
    # and then 'permitting' the user to pass information into the columns we list
    params.require(:blog_post).permit(:title, :content)
  end
end
