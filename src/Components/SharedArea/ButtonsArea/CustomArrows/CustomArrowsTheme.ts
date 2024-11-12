class CustomArrowsTheme {

    public static arrowStyles = (position: "left" | "right") => ({
        position: "absolute",
        top: "50%",
        [position]: 0,
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        "&:hover .MuiSvgIcon-root": { color: "rgba(200,200,200)" },
    });

    public static iconColor = { color: "rgba(150,150,150)" };

};

export default CustomArrowsTheme;