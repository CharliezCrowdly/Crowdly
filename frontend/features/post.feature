Feature: Upload a post
  Is a post uploaded successfully?
  Scenario: Like a post
    Given I visit Crowdly Registration Page
    When I enter my email
    When I enter my password
    When I press login
    When I enter description
    When I click files
    When I press post
    Then the post should be uploaded