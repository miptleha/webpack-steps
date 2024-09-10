export default function ToggleButton({children, name, status, setStatus}) {
    
    function toggle() {
        setStatus(status === name ? "" : name );
    }

    return (
        <button className={status === name ? "Button Pressed" : "Button"} onClick={toggle}>{children}</button>
    )
}