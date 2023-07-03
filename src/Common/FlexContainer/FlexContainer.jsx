import React from 'react';

const FlexContainer = ({
    flexDirection,
    flexWrap,
    alignItems,
    gap,
    height,
    width,
    justifyContent,
    children,
    position,
    top,
    className,
    bottom,
    zIndex,
    style
}) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'flex',
                flexDirection: flexDirection || 'row',
                flexWrap: flexWrap || 'nowrap',
                alignItems: alignItems || 'flex-start',
                gap: gap || 0,
                height: height || '100%' || 'auto',
                width: width || '100%' || 'auto',
                justifyContent: justifyContent || 'flex-start',
                position: position || 'static',
                top: top || 0,
                bottom: bottom || 0,
                zIndex: zIndex || 'auto'
            }}
        >
            {children}
        </div>
    );
};

export default FlexContainer;