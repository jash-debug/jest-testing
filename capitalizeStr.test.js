const capitalizeStr = require("./capitalizeStr")

test("jash should be Jash", () => {
    expect(capitalizeStr("jash")).toBe("Jash");
});