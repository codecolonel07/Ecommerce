interface TextInputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

const TextInput = ({
  label,
  type = "text",
  placeholder,
}: TextInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="border rounded-lg p-3 outline-none"
      />
    </div>
  );
};

export default TextInput;