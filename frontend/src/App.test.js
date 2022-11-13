/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { LoginPage, FeedPage } from "./pages";
import { AppProvider } from "./context/appContext";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {useAppContext} from "./context/appContext"
describe("Login component", () => {
  beforeEach(() => {
    render(
      <React.StrictMode>
        <Router>
          <AppProvider>
            <LoginPage />
          </AppProvider>
        </Router>
      </React.StrictMode>
    );
  });

  const setup = () => {
    const FullnameElement = screen.getByPlaceholderText("Enter Fullname");
    const usernameField = screen.getByPlaceholderText("Enter Username");
    const EmailField = screen.getByPlaceholderText("Enter Email");
    const PasswordField = screen.getByPlaceholderText("Enter Password");
    const togglebtn = screen.getByTestId('toggle-account')
    const btnsubmit = screen.getByTestId('btn-submit')
   

    const utils = render(
      <React.StrictMode>
        <Router>
          <AppProvider>
            <LoginPage />
          </AppProvider>
        </Router>
      </React.StrictMode>
    );


    return {
      ...utils,
      FullnameElement,
      usernameField,
      EmailField,
      PasswordField,
      btnsubmit,
      togglebtn,
   
    };
  };

  test("checking input fields to be visible", async () => {
    const { FullnameElement, usernameField, EmailField, PasswordField } =
      setup();

    expect(usernameField).toBeVisible();
    expect(FullnameElement).toBeVisible();
    expect(EmailField).toBeVisible();
    expect(PasswordField).toBeVisible();
  });

  test("checking login inputfields", () => {
    const { FullnameElement, usernameField, EmailField, PasswordField,togglebtn } =
      setup();

      userEvent.click(togglebtn)
    expect(FullnameElement).not.toBeVisible();  
    expect(usernameField).not.toBeVisible();
    expect(EmailField).toBeVisible();
    expect(PasswordField).toBeVisible();
  });

  test("handle change event",()=>{
    const { FullnameElement, usernameField, EmailField, PasswordField } =
      setup();
    fireEvent.change(FullnameElement,{target:{value:"John Doe"}})
    fireEvent.change(usernameField, { target: { value: "John Doe" } });

    fireEvent.change(EmailField, { target: { value: "John@gmail.com" } });

    fireEvent.change(PasswordField, { target: { value: "JohnDoe" } });

    expect(FullnameElement.value).toBe('John Doe')
    expect(usernameField.value).toBe("John Doe");

    expect(EmailField.value).toBe("John@gmail.com");

    expect(PasswordField.value).toBe("JohnDoe");

  })


  test("login success", () => {
    const {  EmailField, PasswordField,togglebtn,btnsubmit } =
      setup();

    userEvent.click(togglebtn);


    fireEvent.change(EmailField, { target: { value: "cristiano1@gmail.com" } });

    fireEvent.change(PasswordField, { target: { value: "cristiano" } });
    userEvent.click(btnsubmit)

    setTimeout(()=>{
      const alerts = screen.getByText("Login Successful: Redirection...");

      expect(alerts).toBeVisible()
    },500)


   
  });

    test("invalid credentials", () => {
      const { EmailField, PasswordField, togglebtn, btnsubmit } = setup();

      userEvent.click(togglebtn);

      fireEvent.change(EmailField, {
        target: { value: "cristiano1@gmail.com" },
      });

      fireEvent.change(PasswordField, { target: { value: "cristiano" } });
      userEvent.click(btnsubmit);

      

      setTimeout(() => {
        const alerts = screen.getByTestId('alert-bar');

        expect(alerts).toBeVisible();
      }, 5000);
    });

     test("invalid credentialsz", () => {
       const { EmailField, PasswordField, togglebtn, btnsubmit } = setup();

       userEvent.click(togglebtn);

       fireEvent.change(EmailField, {
         target: { value: "cristiano1@gmail.com" },
       });

       fireEvent.change(PasswordField, { target: { value: "cristiano" } });
       userEvent.click(btnsubmit);

       setTimeout(() => {
         
       }, 500);
     });





});
