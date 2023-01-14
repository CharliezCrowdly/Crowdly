Feature: Is a comment successfully posted?
  Comment on a post
  Scenario: Comment on a post
    Given I visit Crowdly Registration Page
    When I enter my email
    When I enter my password
    When I press login
    When I Press comment
    When I enter comment
    When I Press post
    Then The post should be commented