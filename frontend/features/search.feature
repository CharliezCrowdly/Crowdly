Feature: Search a post
  Is the explore page working?
  Scenario: Like a post
    Given I visit Crowdly Registration Page
    When I enter my email
    When I enter my password
    When I press login
    When I visit explore page
    Then I should be able to see other posts