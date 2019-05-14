package PagePackage;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Basepackage.BaseClass;

public class UserHomePage extends BaseClass{

	
	
	@FindBy(xpath="//a[@class='logout']")
	WebElement logout;
	
	
	
	
	public UserHomePage() throws IOException {
		
		PageFactory.initElements(driver, this);
	}
	
	
	
	//Action
	public String validateSignOut() {
		
		String getsignouttext = logout.getText();
		return getsignouttext;
	}
	
	
}
