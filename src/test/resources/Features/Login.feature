Feature: Login 



   @Additional
   Scenario: Verify the Text (ALREADY REGISTERED?) is present in the Login Area
   
      Given Open the browser and enter the url
      When Signin option clicked and navigated to Login page 
      Then ALREADY REGISTERED present in the Login Area


   @Additional
   Scenario Outline: <TestCase>
   
      Given Open the browser and enter the url
      When Signin option clicked and navigated to Login page
      And enter the username <username> and password <Password> and click on login button 
      Then user successfully login and navigate to userhomepage
      
      Examples: 
            
						  |TestCase                                      |username               |Password|                  
              |Login with valid username with valid password |mailtohassan2@gmail.com|hassan  |
   
   
   
   
   @Additional
   Scenario Outline: <TestCases>
   
      Given Open the browser and enter the url
      When Signin option clicked and navigated to Login page
      And enter the username <username> and password <Password> and click on login button 
      Then unsuccessful Login <ErrorMessage>
      
      Examples: 
						            
						 |TestCases                                        |username                |Password|ErrorMessage                  |                  
						 |Login with no email with valid password          |                        |hassan  |An email address required.    |
						 |Login with valid email and no password           |mailtohassan2@gmail.com |        |Password is required.         |
						 |Login with no email no password                  |                        |        |An email address required.    |
						 |Login with invalid username and valid password   |xxxxxxxxxxxxxx          |hassan  |Invalid email address.        |
						 |Login with valid username and invalid password   |mailtohassan2@gmail.com |xxxxxx  |Authentication failed.        |
						 |Login with invalid username and invalid password |$$$$$$$$$@gmail.com     |xxxxxx  |Authentication failed.        |       
             