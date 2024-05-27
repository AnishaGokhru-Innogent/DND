import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableField = ({ id, type, label,name ,fieldType}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type,
        item: { id, type, label, name ,fieldType},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                padding: '10px',
                border: '1px solid black',
                marginBottom: '5px',
            }}
        >
            {label}
        </div>
    );
};

export default DraggableField;
