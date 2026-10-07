import { CategoryModel, UserModel } from "../../src/models";
import { LoginForm } from "../../src/forms/LoginForm";
import { LoginHandler } from "../../src/utils/handlers";

describe("demo models", () => {
  describe("UserModel", () => {
    it("reports required-field errors for an empty instance", () => {
      const user = new UserModel({});
      const errors = user.hasErrors();
      expect(errors).toBeDefined();
      expect(Object.keys(errors as object)).toEqual(
        expect.arrayContaining(["username", "secret"])
      );
    });
  });

  describe("CategoryModel", () => {
    it("reports the missing required name", () => {
      const category = new CategoryModel({ description: "no name here" });
      const errors = category.hasErrors();
      expect(errors).toBeDefined();
      expect(Object.keys(errors as object)).toContain("name");
    });

    it("passes validation when all required fields are provided", () => {
      const category = new CategoryModel({
        id: 1,
        name: "Beverages",
        createdAt: new Date(),
        updateAt: new Date(),
      });
      expect(category.hasErrors()).toBeUndefined();
    });
  });

  describe("LoginForm", () => {
    it("passes validation for a well-formed login", () => {
      const form = new LoginForm({
        username: "alice",
        password: "S3cret!x",
      });
      expect(form.hasErrors()).toBeUndefined();
    });

    it("reports the missing required username", () => {
      const form = new LoginForm({ password: "S3cret!x" });
      const errors = form.hasErrors();
      expect(errors).toBeDefined();
      expect(Object.keys(errors as object)).toContain("username");
    });
  });
});

describe("LoginHandler", () => {
  const handler = new LoginHandler();

  it("returns true when both username and password are present", async () => {
    await expect(
      handler.handle({ data: { username: "alice", password: "s3cret" } })
    ).resolves.toBe(true);
  });

  it("returns false when the username is missing", async () => {
    await expect(
      handler.handle({ data: { password: "s3cret" } })
    ).resolves.toBe(false);
  });

  it("returns false when the password is missing", async () => {
    await expect(
      handler.handle({ data: { username: "alice" } })
    ).resolves.toBe(false);
  });

  it("returns false when both credentials are missing", async () => {
    await expect(handler.handle({ data: {} })).resolves.toBe(false);
  });
});
