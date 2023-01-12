Feature: Like a post
  Is a post liked successfully?
  Scenario: Like a post
    Given I visit Crowdly Registration Page
    When I enter my email
    When I enter my password
    When I press login
    When I Press Like
    Then the post should be liked