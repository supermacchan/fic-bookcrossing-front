import { AuthInputProps } from './AuthInput.props';

const AuthInput: React.FC<AuthInputProps> = ({ input }) => {
  return (
    <>
      {input.label && (
        <label
          htmlFor={input.name}
          className="text-sm md:text-base xxl:text-xl"
        >
          <span className="block font-semibold">{input.warning}</span>
          {input.label}
        </label>
      )}

      <input
        name={input.name}
        id={input.name}
        type={input.type}
        placeholder={input.placeholder}
        autoComplete={input.autocomplete}
        required={input.required}
        className="rounded-xl border border-coldBg px-4 py-3 text-sm md:text-base xl:px-5 xl:py-4 xxl:text-xl"
      />
    </>
  );
};

export default AuthInput;
