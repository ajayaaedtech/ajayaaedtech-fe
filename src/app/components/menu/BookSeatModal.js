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
    Snackbar,
    Alert
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';

// API endpoint
const FORM_SUBMIT_API = 'https://ajayaaedtech-be.onrender.com/api/form/submit';

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
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success" // or "error"
    });

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
                message: `Student registration for Grade ${formData.grade}`
            };

            const response = await fetch(FORM_SUBMIT_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            setSnackbar({
                open: true,
                message: 'Registration successful! Confirmation email has been sent.',
                severity: 'success'
            });
            
            // Reset form and close modal after successful submission
            setFormData({
                name: "",
                email: "",
                whatsapp: "",
                school: "",
                grade: "",
            });
            
            // Close modal after a short delay
            setTimeout(() => {
                handleClose();
            }, 1500);
            
        } catch (error) {
            console.error('Registration error:', error);
            setSnackbar({
                open: true,
                message: error.message || 'Registration failed. Please try again.',
                severity: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar(prev => ({ ...prev, open: false }));
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
                        background: 'linear-gradient(145deg, #f5f7fa 0%, #e4e8f0 100%)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }
                }}
            >
                <DialogTitle sx={{
                    position: 'relative',
                    background: 'linear-gradient(to right, #4f46e5, #3b82f6)',
                    color: 'white',
                    py: 2,
                    px: 3
                }}>
                    <Typography variant="h6" fontWeight={600}>
                        <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Event Registration
                    </Typography>
                    {!isSubmitting && (
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 16,
                                top: 16,
                                color: 'white',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                </DialogTitle>

                <DialogContent sx={{ py: 3 }}>
                    <Box sx={{ mb: 2, textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            Fill in your details to secure your spot
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:grid-cols-2">
                        {/* Student Name */}
                        <div className="w-full">
                            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                                Student Name
                            </label>
                            <input
                                type="text"
                                id="studentName"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange("name")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                disabled={isSubmitting}
                            />
                            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange("email")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                disabled={isSubmitting}
                            />
                            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* WhatsApp Number */}
                        <div className="w-full">
                            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                                WhatsApp Number
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-sm text-gray-700">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    placeholder="Enter WhatsApp number"
                                    value={formData.whatsapp}
                                    onChange={handleChange("whatsapp")}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    disabled={isSubmitting}
                                />
                            </div>
                            {errors.whatsapp && <p className="text-red-600 text-xs mt-1">{errors.whatsapp}</p>}
                        </div>

                        {/* School */}
                        <div className="w-full">
                            <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                                School/College
                            </label>
                            <input
                                type="text"
                                id="school"
                                placeholder="Enter your school name"
                                value={formData.school}
                                onChange={handleChange("school")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                disabled={isSubmitting}
                            />
                            {errors.school && <p className="text-red-600 text-xs mt-1">{errors.school}</p>}
                        </div>

                        {/* Grade */}
                        <div className="w-full">
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
                                <option value="6">Grade 6</option>
                                <option value="7">Grade 7</option>
                                <option value="8">Grade 8</option>
                                <option value="9">Grade 9</option>
                                <option value="10">Grade 10</option>
                                <option value="11">Grade 11</option>
                                <option value="12">Grade 12</option>
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
                            background: 'linear-gradient(to right, #4f46e5, #3b82f6)',
                            color: 'white',
                            py: 1.5,
                            borderRadius: 2,
                            fontSize: '1rem',
                            fontWeight: 600,
                            boxShadow: '0 4px 6px rgba(79, 70, 229, 0.3)',
                            '&:hover': {
                                background: 'linear-gradient(to right, #3b36b5, #2563eb)',
                                boxShadow: '0 6px 8px rgba(79, 70, 229, 0.4)',
                            },
                            width: '100%',
                            position: 'relative'
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <CircularProgress 
                                    size={24} 
                                    sx={{
                                        color: 'white',
                                        position: 'absolute',
                                        left: '50%',
                                        marginLeft: '-12px',
                                    }}
                                />
                                <span style={{ opacity: 0 }}>Register Now</span>
                            </>
                        ) : (
                            'Register Now'
                        )}
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
}