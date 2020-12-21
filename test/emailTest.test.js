const emailTest = require("../lib/emailTest");

test("emailTest should return false given an email without a name.", () => {
    const e = emailTest("@pizza.com")
    expect(e).toBe(false);
});

test("emailTest should return false given an email without a domain.", () => {
    const e = emailTest("test@.com")
    expect(e).toBe(false);
});

test("emailTest should return false given an email without a top level domain.", () => {
    const e = emailTest("test@pizza.")
    expect(e).toBe(false);
});

test("emailTest should return false given an email with a top level domain that is too long.", () => {
    const e = emailTest("test@pizza.comm")
    expect(e).toBe(false);
});

test("emailTest should return false given an email without a period.", () => {
    const e = emailTest("test@pizzacom")
    expect(e).toBe(false);
});

test("emailTest should return false given an email without an @.", () => {
    const e = emailTest("testpizza.com")
    expect(e).toBe(false);
});
  
test("numberTest should return false if given an empty string", () => {
    const e = emailTest("");
    expect(e).toBe(false);
});
  
test("numberTest should return true if given a properly formatted email address", () => {
    const e = emailTest("pizza@test.com");
    expect(e).toBe(true);
});