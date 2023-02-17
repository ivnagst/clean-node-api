import { SignUpController } from "./signup";
import { MissingParamError } from "../errors/missing-param-error";

describe("SignUp Controller", () => {
  test("Should return 400 if no name is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "anymail@mail.com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("name"));
  });

  test("Should return 400 if no e-mail is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "ivan ferreira",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("email"));
  });
});
