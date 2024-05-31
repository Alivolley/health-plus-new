'use client';

// MUI
import { createTheme } from '@mui/material';

// Styles
import getDesignTokens from '@/configs/theme';

const themeConfig = createTheme(getDesignTokens('light'));

export default themeConfig;
