import './Button.module.css';

export default function Button({
    children,
    variant = 'primary',
    onClick,
    type = 'button'
}) {
    return (
        <button className={`Button button-${variant}`}
        onCLick={onClick}
        type={type}
        >
            {children}
        </button>
    );
}