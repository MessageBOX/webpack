import cssContent from "http://localhost:9990/index.css";

it("http url request should be supported", () => {
	expect(cssContent).toBe("a {}.webpack{}");
});
