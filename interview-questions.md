# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The student would need the foreign key of cohort_id in order to specifiy which single cohort he belongs_to. We could do this with a migration file, We start a migration file by typing rails g migrate NameOfTheMigrationFileWeWantToMake. The name should be as descriptive as possible.

Researched answer: Found some other ways to add foreign keys. 
add_reference :students, :cohort, foreign_key: true
add_foreign_key :students, :cohorts
The thing I find most interseting about these different syntaxes is that one uses singular table name, and one uses plural, according to stack.overflow, which is just more confusing but ok.

add_reference   :articles, :author, foreign_key: true

add_foreign_key :articles, :authors

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, Edit, Update, Destroy must all recieve a param because they are all called on indiviual database elements. They cannot work if they do not recieve some information about which element they are targeting.

Researched answer: Some of these routes are only differentiated by their verb. As in the request will go to the exact same route or URL, and the only thing different will be the type of request sent.

3. Name three rails generator commands. What is created by each? 


Your answer:
rails g model generates a database model and a migration file for us to check before we migrate it.
rails g controller generates a controller of the name specified and the view folder for that controller. Im reasonably certain for both of these a testing file will be generated too if you have a testing suite installed.
rails g resource generates a model, a controller, and the 7 RESTful routes. 

Researched answer: The models generated will also allow us to manipulate the schema file. Resource also generates the expected view files.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index, returns all of the of the students in teh database
action: "POST" location: /students
create, actually what creates the student
action: "GET" location: /students/new
new, returns a form with the model of a student, for the purpose of filling out and submitting, to create a new student
action: "GET" location: /students/2
show, returns only one student in the database (the one with id 2)
action: "GET" location: /students/2/edit
edit, returns a form populated with information about a specific student(id 2)
action: "PATCH" location: /students/2
update, actually updates the student with the specific id
action: "DELETE" location: /students/2
destroy, does what it says it does to that student

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.


1 - As a user I can see add a task to a list of tasks.

2 - As a user I can add a title to this list.

3 - As a user I can mark a task complete and see it marked off (strike through).

4 - As a user I can create multiple lists.

5 - As a user I can delete tasks and lists completely.

6 - As a user I can add due dates to each task.

7 - As a user I can recieve a warning when a due date is approaching.

8 - As a user I can see my passed comleted tasks and lists.

9 - As a user I can choose the color of my background and list items.

10 - As a user I can share my lists to social media.