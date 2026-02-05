
import React from 'react';

interface ChronicleButtonProps {
    text: string;
    outlined?: boolean;
    width?: string;
    onClick: () => void;
    borderRadius?: string;
    hoverColor?: string;
    customBackground?: string;
    customForeground?: string;
    hoverForeground?: string;
}

export const ChronicleButton: React.FC<ChronicleButtonProps> = ({
    text,
    outlined = false,
    width = 'auto',
    onClick,
    borderRadius = '2em',
    hoverColor,
    customBackground,
    customForeground,
    hoverForeground,
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const baseStyle: React.CSSProperties = {
        width,
        padding: '0.6em 1.2em',
        borderRadius,
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '0.9rem',
        border: `2px solid ${outlined ? (customForeground || '#fff') : 'transparent'}`,
        background: outlined ? 'transparent' : (customForeground || '#fff'),
        color: outlined ? (customForeground || '#fff') : (customBackground || '#000'),
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
    };

    const hoverStyle: React.CSSProperties = {
        background: outlined ? (hoverColor || '#fff') : (hoverColor || '#e0e0e0'),
        color: hoverForeground || '#fff',
        borderColor: hoverColor || '#fff',
        transform: 'translateY(-2px)',
    };

    return (
        <button
            onClick={onClick}
            style={{ ...baseStyle, ...(isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </button>
    );
};
