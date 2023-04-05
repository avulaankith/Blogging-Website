# Blogging-Website
Blogging Website made using HTML, CSS, JavaScript, MySQL and PHP to validate user logins and create posts as texts and reply to texts. The website does form validation, user login validation and posting messages and replies of the users. 

The website is implemented in two parts as two separate projects. One project is validation of details entered in the forms of the hotel booking website using JavaScript and other part is developing a blogging website for the hotel website along with user login validation using PHP. The code houses both of the implementation using the same HTML and CSS.

## HTML
Index.html and Directory Pages constitute the HTML portion of Website

## CSS
Styles folder contains all CSS for the website
* Styles/
  * styles.css

## javascript 
The javascript has the form validation code
* javascript/
  * contactform.js - for validation of contact details form
  * formvalidation.js - for validation of booking details form 

## PHP
The php folder has the code to validate user login and posting messages and replies for Users.
* php/
  * board.php - for posting and replying to messages
  * login.php - for validation of user login credentials

## SQL
The SQL tables' schema is defined in TablesInDbBoard.txt

## Running the code

1. Install XAMPP in your desktop. In this case Ubuntu 22.04 LTS is used for the project.
2. Place the project folder in `/opt/lampp/htdocs/` in your xampp installation path.
3. Run the XAMPP server using the command `sudo /opt/lampp/./manager-linux-x64.run`
4. You can access the webpage using `https://localhost/<folder_name>/php/login.php` upon start of apache and sql server from xampp application. Replace folder name with your folder name.

