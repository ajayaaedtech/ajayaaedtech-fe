"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    IconButton,
    Typography,
    Divider,
    Box,
    CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FORM_SUBMIT_API = "https://ajayaaedtech-be.onrender.com/api/form/submit";

export default function BookSeatModal({ open, handleClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        school: "",
        grade: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Student name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = "WhatsApp number is required.";
        } else if (!/^\d{10}$/.test(formData.whatsapp)) {
            newErrors.whatsapp = "Enter a valid 10-digit number.";
        }
        if (!formData.school.trim()) newErrors.school = "School/College is required.";
        if (!formData.grade) newErrors.grade = "Please select your grade.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
        setErrors({ ...errors, [field]: "" });
    };

    const handleSubmit = async () => {
        if (!validate()) return;
        setIsSubmitting(true);

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.whatsapp,
                college: formData.school,
                course: `Grade ${formData.grade}`,
                address: "Not provided",
                message: `Student registration for Grade ${formData.grade}`,
            };

            const response = await fetch(FORM_SUBMIT_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const contentType = response.headers.get("content-type");
            let data;

            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            } else {
                const text = await response.text();
                throw new Error("Server error: " + text.slice(0, 100));
            }

            if (!response.ok) throw new Error(data?.error || "Registration failed");

            toast.success("🎉 Registration successful! Confirmation email sent.", {
                position: "bottom-center",
                autoClose: 3000,
                style: { marginTop: "80px" }, // style tweak to appear visually near modal
            });

            setFormData({
                name: "",
                email: "",
                whatsapp: "",
                school: "",
                grade: "",
            });

            setTimeout(() => {
                handleClose();
            }, 1500);
        } catch (error) {
            toast.error(error.message || "Registration failed. Please try again.", {
                position: "top-center",
                autoClose: 4000,
                style: { marginTop: "80px" },
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={isSubmitting ? null : handleClose}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        background: "linear-gradient(145deg, #f5f7fa 0%, #e4e8f0 100%)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        position: "relative",
                        background: "linear-gradient(to right, #4f46e5, #3b82f6)",
                        color: "white",
                        py: 2,
                        px: 3,
                    }}
                >
                    <Typography variant="h6" fontWeight={600}>
                        <SchoolIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                        Event Registration
                    </Typography>
                    {!isSubmitting && (
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{ position: "absolute", right: 16, top: 16, color: "white" }}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                </DialogTitle>

                <DialogContent sx={{ py: 3 }}>
                    <Box sx={{ mb: 2, textAlign: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                            Fill in your details to secure your spot
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "name", label: "Student Name", type: "text", placeholder: "Enter your name" },
                            { id: "email", label: "Email", type: "email", placeholder: "Enter your email" },
                            {
                                id: "whatsapp",
                                label: "WhatsApp Number",
                                type: "tel",
                                placeholder: "10-digit WhatsApp number",
                                prefix: "+91",
                            },
                            {
                                id: "school",
                                label: "School/College",
                                type: "text",
                                placeholder: "Enter your school name",
                            },
                        ].map((field) => (
                            <div key={field.id}>
                                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                                    {field.label}
                                </label>
                                <div className="flex">
                                    {field.prefix && (
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-sm text-gray-700">
                                            {field.prefix}
                                        </span>
                                    )}
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        value={formData[field.id]}
                                        onChange={handleChange(field.id)}
                                        placeholder={field.placeholder}
                                        disabled={isSubmitting}
                                        className={`w-full px-4 py-2 border border-gray-300 ${field.prefix ? "rounded-r-md" : "rounded-md"
                                            } shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                </div>
                                {errors[field.id] && (
                                    <p className="text-red-600 text-xs mt-1">{errors[field.id]}</p>
                                )}
                            </div>
                        ))}

                        {/* Grade Field */}
                        <div>
                            <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                                Grade
                            </label>
                            <select
                                id="grade"
                                value={formData.grade}
                                onChange={handleChange("grade")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                disabled={isSubmitting}
                            >
                                <option value="">-- Select --</option>
                                {[6, 7, 8, 9, 10, 11, 12].map((g) => (
                                    <option key={g} value={g}>
                                        Grade {g}
                                    </option>
                                ))}
                            </select>
                            {errors.grade && <p className="text-red-600 text-xs mt-1">{errors.grade}</p>}
                        </div>
                    </div>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        sx={{
                            background: "linear-gradient(to right, #4f46e5, #3b82f6)",
                            color: "white",
                            py: 1.5,
                            borderRadius: 2,
                            fontSize: "1rem",
                            fontWeight: 600,
                            boxShadow: "0 4px 6px rgba(79, 70, 229, 0.3)",
                            "&:hover": {
                                background: "linear-gradient(to right, #3b36b5, #2563eb)",
                            },
                            width: "100%",
                            position: "relative",
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <CircularProgress
                                    size={24}
                                    sx={{ color: "white", position: "absolute", left: "50%", ml: "-12px" }}
                                />
                                <span style={{ opacity: 0 }}>Register Now</span>
                            </>
                        ) : (
                            "Register Now"
                        )}
                    </Button>
                </DialogActions>
            </Dialog>


            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
                style={{ bottom: "50px" }} // 👈 Custom bottom offset
            />

        </>
    );
}
