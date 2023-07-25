export default function logFoo() {
  console.log("foo");
  return "foo" as const;
}
