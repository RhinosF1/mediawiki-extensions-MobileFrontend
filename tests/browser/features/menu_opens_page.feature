@en.m.wikipedia.beta.wmflabs.org @en.m.wikipedia.org @test2.m.wikipedia.org
Feature: Menus open correct page for anonymous users

  Background:
    Given I am on the home page

  Scenario: Home URL is set correctly
    When I click on "Home" in the main navigation menu
    Then the URL of of my page should contain "Main_Page"

  Scenario: Random URL is set correctly
    When I click on "Random" in the main navigation menu
    Then the URL of of my page should contain "campaign=random"

  Scenario: Nearby URL is set correctly
    When I click on "Nearby" in the main navigation menu
    Then the URL of of my page should contain "Special:Nearby"

  Scenario: Watchlist URL is set correctly
    When I click on "Watchlist" in the main navigation menu
    Then the URL of of my page should contain "returnto=Special%3AWatchlist"

  Scenario: Uploads URL is set correctly
    When I click on "Uploads" in the main navigation menu
    Then the URL of of my page should contain "returnto=Special%3AUploads"

  Scenario: Settings URL is set correctly
    When I click on "Settings" in the main navigation menu
    Then the URL of of my page should contain "Special:MobileOptions"

  Scenario: Log In URL is set correctly
    When I click on "Log in" in the main navigation menu
    Then the URL of of my page should contain "Special:UserLogin"





