
interface PrimaryButtonProps {
    label?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
}
const PrimaryButton = ({label, type, onClick, className}:PrimaryButtonProps) => {
    return (
        <button type={type} onClick={onClick} className={`py-2 w-full rounded-md transition-colors duration-300 ${className}`}>
            {label}
        </button>
    )
}

export default PrimaryButton
