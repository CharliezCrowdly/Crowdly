Feature: Add a Todo
  Is a todo added successfully?
  Scenario: Like a post
    Given I visit Crowdly Registration Page
    When I enter my email
    When I enter my password
    When I press login
    When I enter todo
    When I Press add
    Then the todo should be added