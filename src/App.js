import React, { useEffect, useState } from 'react';
import DndContext from './Components/DndContext';
import DraggableField from './Components/DraggableField';
import DroppableArea from './Components/DroppableArea';

const App = () => {

    const [droppedItems, setDroppedItems] = useState([]);
   

    const handleDrop = (item) => {
        // console.log(item);
        setDroppedItems((prevItems) => [...prevItems, item]);
        // console.log(droppedItems);
    };

    // const handleDrop = (item) => {
    //     console.log('Dropped item:', item);
    // };
    
    useEffect(() => {
        console.log('Dropped items updated:', droppedItems);
    }, [droppedItems]);
    
    return (
        <DndContext>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                    <h3>Drag these fields</h3>
                    <DraggableField id="input-text" type="FIELD" label="Text Input" name = "text" fieldType="text"/>
                    <DraggableField id="input-email" type="FIELD" label="Email Input" name ="email" fieldType="email" />
                    <DraggableField id="input-number" type="FIELD" label="Number Input" name ="number" fieldType="number"/>
                    <DraggableField id="input-date" type="FIELD" label="Date Input" name ="date" fieldType="date"/>
                    <DraggableField id="input-age" type="FIELD" label="Age Input" name="age" fieldType="number"/>
                </div>
                <div>
                    <h3>Drop here to create your document</h3>
                    <DroppableArea accept="FIELD" onDrop={handleDrop} />
                </div>
            </div>
        </DndContext>
    );
};

export default App;
