# Household Census

This project is a demonstration Rails app that includes a single page application written in React using ES6. It's purpose is simple, allow users to fill out a multi-part form that describes their household, the people in the household, and the vehicles each person owns.

## Tech Stack

This project has the following dependencies:

  * Ruby on Rails 4
  * PostgreSQL 9.4
  * Node/NPM 4.0+

You must have these installed and configured to run this project in your local environment.

Additional technological highlights used by this project include:

  * Bootstrap
  * React
  * Redux
  * ES6

This project is live on Heroku! The master branch can be found at [https://household-census.herokuapp.com](https://household-census.herokuapp.com).

## Running the Project

1. Clone the project and download it to your computer.
2. Run the following terminal commands to install the needed gems and packages:

  ```bash
  $ bundle install
  $ npm install
  ```

3. Run the following terminal commands to create the database:

  ```bash
  $ bin/rake db:create
  $ bin/rake db:migrate
  $ bin/rake db:test:prepare
  ```

4. You should now be able to start the server with this command:

  ```bash
  $ bin/rails s
  ```
Navigate to [localhost:3000](localhost:3000) in your browser to view the project live!

## Testing the Project

This project has two separate test suites available, one for the Ruby code and a separate one for the JavaScript.

To run the Ruby tests:
```bash
$ bin/rake test
```

To run the JavaScript tests:
```bash
$ bin/rake teaspoon
```

## Contributing

This project is not open to contributions at this time.
