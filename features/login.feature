Feature: Login Feature

  Scenario: User logs in with valid credentials
    Given the user is on the login page
    When the user logs in with email "test@example.com" and password "Password123"
    Then the user should be redirected to their profile