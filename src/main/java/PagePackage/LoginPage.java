package PagePackage;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Basepackage.BaseClass;

public class LoginPage extends BaseClass{

	
	@FindBy(xpath="//input[@id='email']")
	WebElement email;
	
	@FindBy(xpath="//input[@id='passwd']")
	WebElement pass;
	
	@FindBy(xpath="//button[@type='submit'][@id='SubmitLogin']")
	WebElement submit;
	
	@FindBy(xpath="//*[@id='center_column']/div[1]/ol/li")
	WebElement Error;
	
	@FindBy(xpath="//h3[@class='page-subheading'][contains(text(),'Already registered?')]")
	WebElement gettext;
	
	
	
	public LoginPage() throws IOException {
		
		PageFactory.initElements(driver,this);
	}
	
	//Action
	public String validatetheText (){
		
		String flag = gettext.getText();
		return flag;
		
	}

	//Action
	public UserHomePage ValidateloginCredential(String uname,String Passwrd) throws IOException {
		
		email.sendKeys(uname);
		pass.sendKeys(Passwrd);
		submit.click();
		return new UserHomePage();
		
	}
	
	public String invalidloginCredentialErrorMessage() {
		
		
		String err = Error.getText();
		return err;
		
		
	}
	
}
		