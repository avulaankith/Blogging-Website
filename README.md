# Blogging-Website

This repository contains a Blogging Website built using HTML, CSS, JavaScript, MySQL, and PHP. The website facilitates user login validation, posting messages, and replying to messages. It is implemented in two parts, focusing on form validation using JavaScript for a hotel booking website and creating a blogging platform with user authentication using PHP.

## Contents

### HTML
- `index.html`: Main landing page of the website.
- `pages/`: Directory containing additional HTML pages.

### CSS
- `styles/`: Folder containing CSS files for styling the website.
  - `styles.css`: Stylesheet for the entire website.

### JavaScript
- `javascript/`: Folder housing JavaScript files.
  - `contactform.js`: Script for validating contact details form.
  - `formvalidation.js`: Script for validating booking details form.

### PHP
- `php/`: Contains PHP scripts for user login validation and message posting.
  - `board.php`: Allows users to post and reply to messages.
  - `login.php`: Validates user login credentials.

### SQL
- `TablesInDbBoard.txt`: Schema defining the SQL tables used in the project.

## Running the Project

To run the project locally, follow these steps:

1. Install XAMPP on your system. The instructions provided here assume Ubuntu 22.04 LTS is used.
2. Place the project folder in the following directory within your XAMPP installation path: `/opt/lampp/htdocs/`.
3. Start the XAMPP server using the command: `sudo /opt/lampp/./manager-linux-x64.run`.
4. Once the Apache and SQL servers are running, access the webpage through: `https://localhost/<folder_name>/php/login.php`. Replace `<folder_name>` with the actual name of your project folder.

## Usage

- Navigate through the website using the provided HTML pages.
- Form validations are handled using JavaScript for contact details and booking details.
- PHP scripts validate user logins and enable posting and replying to messages on the board.

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request or raise an issue.

## License

This project is licensed under the [MIT License](LICENSE).
