@chrome @en.m.wikipedia.beta.wmflabs.org @firefox @test2.m.wikipedia.org
Feature: Loading pages

Background:
  Given the page "Selenium page loading test" exists

# In stable pages are loaded the standard way via links.
Scenario: Page loads without ajax in stable
  Given I am logged in as a new user
    And I visit a protected page
    And I click the placeholder search box
    And I type into search box "Selenium page loading test"
  When I click a search result
  Then The edit button is enabled
    And The text of the first heading is "Selenium page loading test"

# In alpha mode pages are loaded via JavaScript and ajax.
Scenario: Edit button updates when lazy load a page from search
  Given I am logged in as a new user
    And I am in alpha mode
    And I visit a protected page
    And I click the placeholder search box
    And I type into search box "Selenium page loading test"
  When I click a search result
  Then The edit button is enabled
    And The text of the first heading is "Selenium page loading test"
