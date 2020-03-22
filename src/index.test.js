import { jsonToCssCustomPropeties } from ".";

test("change Json to CSS properties", () => {
  const t = JSON.stringify({ ssNavElement: "#009999" });
  console.log(jsonToCssCustomPropeties(t));
  expect(jsonToCssCustomPropeties(t, false, false)).toBe(
    "--ss-nav-element : #009999;"
  );
});
