import React from "react";
import {
    Box,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function MyExperience() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const experiences = [
        {
            title: "Full Stack Developer – Fladdra Technologies",
            location: "Pune, India | Jan 2025 – Dec 2025",
            points: [
                "Built and optimized highly responsive, reusable UI components in React.js, improving load time by 30%.",
                "Designed and deployed RESTful APIs with FastAPI for secure authentication and data handling.",
                "Developed and maintained admin & user panels, reducing manual workflows by 40%.",
                "Collaborated with cross-functional teams to integrate frontend and backend seamlessly.",
            ],
        },

    ];

    return (
        <Box
            id="exp"
            sx={{
                minHeight: "100vh",
                background: "radial-gradient(circle, #ffffff 0%, #D7D7D7  100%)",
                px: { xs: 3, md: 10 },
                py: 12,
            }}
        >
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: 10 }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                    <img src={`${process.env.PUBLIC_URL}/breaker.svg`} alt="breaker" style={{ maxWidth: "200px" }} />
                </Box>

                <Typography variant="overline" sx={{ color: "GREY", letterSpacing: 2 }}>
                    What Skill's I Have
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        mb: 6,
                        fontSize: 50,
                        color: "grey",
                    }}
                >
                    My Experience
                </Typography>
            </Box>

            {/* Experience Cards */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                }}
            >
                {experiences.map((exp, i) => (
                    <Paper
                        key={i}
                        elevation={4}
                        sx={{
                            flex: "1 1 40%",
                            minWidth: "300px",
                            maxWidth: "500px",
                            p: 4,
                            borderRadius: 4,
                            background: "radial-gradient(circle, #ffffff 0%, #eaeaeaa8  100%)",
                            textAlign: "left",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            border: "1px solid #e0e0e0",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#111827",
                                mb: 1,
                            }}
                        >
                            {exp.title}
                        </Typography>

                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: "text.secondary",
                                mb: 2,
                                fontSize: 13.5,
                            }}
                        >
                            {exp.location}
                        </Typography>

                        <List dense>
                            {exp.points.map((point, j) => (
                                <ListItem key={j} disableGutters alignItems="flex-start">
                                    <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#374151' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={point}
                                        primaryTypographyProps={{
                                            sx: {
                                                color: "#374151",
                                                fontSize: 14.5,
                                                lineHeight: 1.7,
                                            },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
}
