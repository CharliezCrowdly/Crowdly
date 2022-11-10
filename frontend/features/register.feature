Feature: Is register successful?
  Is Registration process successfully completed

  Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"