# Household Census

This project is a demonstration Rails app that includes a React based SPA. It's purpose is simple, allow users to fill out a multi-part form that describes there household, the people in the household, and the vehicles each person owns.

This project is live on Heroku! The master branch can be found at [https://household-census.herokuapp.com](https://household-census.herokuapp.com).

## Running the Project

1. Clone the project and download it to your computer.
2. Run the following terminal commands to install the needed gems and packages:
  ```bash
  $ bundle install
  $ npm install
  ```
  _ * this project has both Rails and Node dependencies, and relies on PostgreSQL as it's database._
3. Run the following terminal command to create the database:
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
