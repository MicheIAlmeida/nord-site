import React from 'react';

export const Button = ({ 
    children, 
    size = 'default', 
    variant = 'default', 
    className = '', 
    ...props 
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
    
    const variants = {
        default: 'bg-white text-black hover:bg-gray-100',
        outline: 'border border-white/20 bg-white/5 text-white hover:bg-white/10',
    };
    
    const sizes = {
        default: 'h-10 py-2 px-4',
        lg: 'h-12 px-8 rounded-lg',
    };
    
    const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    
    return (
        <button 
            className={combinedClass}
            {...props}
        >
            {children}
        </button>
    );
};