class CustomArrowsTheme {

    public static arrowStyles = (position: "left" | "right") => ({
        position: "absolute",
        top: "50%",
        [position]: 0,
        margin: "6px",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        "&:hover .MuiSvgIcon-root": { color: "rgba(250,250,250, 0.7)" },
    });

    public static iconColor = { color: "rgba(50, 50, 50, 0.7)" };

};

export default CustomArrowsTheme;