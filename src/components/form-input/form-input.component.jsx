import { Group, Input, InputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				<InputLabel shrink={otherProps.value.length}>{label}</InputLabel>
			)}
		</Group>
	);
};

export default FormInput;
