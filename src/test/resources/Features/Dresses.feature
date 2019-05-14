Feature: Dresses

   @Additional 
  Scenario: Homepage displayed and verify the Dresses menu option available 
     
      Given Open the browser and enter the url
      Then Dresses link is Displayed 
   @Additional   
  Scenario: user at the homepage and verify the Dresses menu option is click and navigate 
            
      Given Open the browser and enter the url
      Then Dresses menu option clicked and navigated to dresses homepage
  
   @Requested 
  Scenario: All five dresses are listed on the summary page
  
      Given Open the browser and enter the url
      When Dresses menu option clicked and navigated to dresses page
      And select the five dresses 
      And click on Shopping cart and navigate to summary page
      Then five dresses listed on summary page 
      
   @Requested
  Scenario: The Total price of each dress is correct
  
      Given Open the browser and enter the url
      When Dresses menu option clicked and navigated to dresses page
      And select the five dresses 
      And click on Shopping cart and navigate to summary page
      Then Total each item Price matched
      
   @Requested
   Scenario: The Total product price is the sum of the total price of each dress
  
      Given Open the browser and enter the url
      When Dresses menu option clicked and navigated to dresses page
      And select the five dresses 
      And click on Shopping cart and navigate to summary page
      Then total product price is the sum of the total price of each address 