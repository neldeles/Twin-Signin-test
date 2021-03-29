import tw, { styled } from "twin.macro";

const Form = styled.form(() => [
  tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`,
]);

const InputAttrs = ({ type, placeholder }) => ({
  type: type || "text",
  placeholder: placeholder,
});

const Input = styled.input.attrs(InputAttrs)(() => [
  tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`,
]);

const Input2 = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder,
}))`
  ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`},
`;

const Button = styled.button(() => [
  tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`,
]);

const SigninForm = (props) => (
  <Form>
    <Input placeholder="Full Name" />
    <Input placeholder="Email" />
    <Input2 placeholder="Password" />
    <Button>Sign In </Button>
  </Form>
);

export default SigninForm;
