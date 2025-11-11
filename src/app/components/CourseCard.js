"use client";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function CourseCard({ course }) {
  const router = useRouter();

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        p: 2,
        transition: "0.3s",
        "&:hover": { transform: "translateY(-5px)", boxShadow: "0 10px 22px rgba(0,0,0,0.15)" },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {course.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {course.duration}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {course.overview}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => router.push(`/dashboard/${course.courseId}`)}
        >
          View Modules
        </Button>
      </CardContent>
    </Card>
  );
}
