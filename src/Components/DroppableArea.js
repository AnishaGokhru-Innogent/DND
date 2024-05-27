
// import React, { useRef, useState } from 'react';
// import { useDrop } from 'react-dnd';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';


// const DroppableArea = ({ accept, onDrop }) => {
//     const quillRef = useRef(null);
//     const [value, setValue] = useState('');
//     const [editingIndex, setEditingIndex] = useState(null);
//     const [customLabel, setCustomLabel] = useState('');

//     const [{ isOver }, drop] = useDrop(() => ({
//         accept,
//         drop: (item) => {
//             item.name = customLabel;
//             onDrop(item);
//             const quill = quillRef.current.getEditor();
//             let range = quill.getSelection();
//             if (!range) {
//                 range = { index: quill.getLength(), length: 0 }; // Default position
//             }
//             quill.insertText(range.index, `{{${item.name}}}`);
//             setEditingIndex(range.index);
//         },
//         collect: (monitor) => ({
//             isOver: !!monitor.isOver(),
//         }),
//     }));

//     const handleCustomLabelChange = (e) => {
//         setCustomLabel(e.target.value);
//     };

//     const handleCustomLabelSubmit = () => {
//         // console.log(customLabel);
//         if (customLabel) {
//             const quill = quillRef.current.getEditor();
//             const delta = quill.getContents();
//             const text = delta.ops.reduce((acc, op) => acc + (op.insert || ''), '');

//             const newText = text.replace(
//                 /{{(.*?)}}/g,
//                 (match, p1, offset) => (offset === editingIndex ? `{{${customLabel}}}` : match)
//             );

//             setValue(newText);
//         }
//         setEditingIndex(null);
//         setCustomLabel('');
      
//     };

//     return (
//         <div>
//             <div
//                 ref={drop}
//                 style={{
//                     backgroundColor: isOver ? 'lightgreen' : 'white',
//                     padding: '20px',
//                     minHeight: '300px',
//                     border: '1px solid black',
//                     position: 'relative',
//                 }}
//             >
//                 <ReactQuill
//                     style={{ height: "100px", width: "800px" }}
//                     ref={quillRef}
//                     value={value}
//                     onChange={setValue}
//                     placeholder="Write here or drag input fields..."
//                 />
//                 {editingIndex !== null && (
//                     <div
//                         style={{
//                             position: 'absolute',
//                             top: 0,
//                             left: 0,
//                             right: 0,
//                             bottom: 0,
//                             backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <div>
//                             <input
//                                 type="text"
//                                 value={customLabel}
//                                 onChange={handleCustomLabelChange}
//                                 placeholder="Enter custom label"
//                             />
//                             <button onClick={handleCustomLabelSubmit}>Submit</button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//             <button onClick={() => console.log(value)}>Click</button>
//         </div>
//     );
// };

// export default DroppableArea;


// import React, { useRef, useState } from 'react';
// import { useDrop } from 'react-dnd';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const DroppableArea = ({ accept, onDrop }) => {
//     const quillRef = useRef(null);
//     const [value, setValue] = useState('');
//     const [editingIndex, setEditingIndex] = useState(null);
//     const [customLabel, setCustomLabel] = useState('');
//     const [droppedItem, setDroppedItem] = useState(null);
//     const [{ isOver }, drop] = useDrop(() => ({
//         accept,
//         drop: (item) => {
//             setDroppedItem(item);
//             setEditingIndex(quillRef.current.getEditor().getSelection().index);
//         },
//         collect: (monitor) => ({
//             isOver: !!monitor.isOver(),
//         }),
//     }));
//     const handleCustomLabelChange = (e) => {
//         setCustomLabel(e.target.value);
//     };
//     const handleCustomLabelSubmit = () => {
//         if (customLabel && droppedItem) {
//             droppedItem.name = customLabel;
//             onDrop(droppedItem);
//             const quill = quillRef.current.getEditor();
//             let range = { index: editingIndex, length: 0 };
//             quill.insertText(range.index, `{{${droppedItem.name}}}`);
//             setValue(quill.getText()); // Update the value to reflect changes in the editor
//             setEditingIndex(null);
//             setCustomLabel('');
//             setDroppedItem(null);
//         }
//     };
//     return (
//         <div>
//             <div
//                 ref={drop}
//                 style={{
//                     backgroundColor: isOver ? 'lightgreen' : 'white',
//                     padding: '20px',
//                     minHeight: '300px',
//                     border: '1px solid black',
//                     position: 'relative',
//                 }}
//             >
//                 <ReactQuill
//                     style={{ height: "100px", width: "800px" }}
//                     ref={quillRef}
//                     value={value}
//                     onChange={setValue}
//                     placeholder="Write here or drag input fields..."
//                 />
//                 {editingIndex !== null && (
//                     <div
//                         style={{
//                             position: 'absolute',
//                             top: 0,
//                             left: 0,
//                             right: 0,
//                             bottom: 0,
//                             backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <div>
//                             <input
//                                 type="text"
//                                 value={customLabel}
//                                 onChange={handleCustomLabelChange}
//                                 placeholder="Enter custom label"
//                             />
//                             <button onClick={handleCustomLabelSubmit}>Submit</button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//             <button onClick={() => console.log(value)}>Click</button>
//         </div>
//     );
// };
// export default DroppableArea;

import React, { useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const DroppableArea = ({ accept, onDrop }) => {
    const quillRef = useRef(null);
    const [value, setValue] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [customLabel, setCustomLabel] = useState('');
    const [droppedItem, setDroppedItem] = useState(null);
    const [{ isOver }, drop] = useDrop(() => ({
        accept,
        drop: (item) => {
            const quill = quillRef.current.getEditor();
            const range = quill.getSelection() || { index: quill.getLength(), length: 0 };
            setDroppedItem(item);
            setEditingIndex(range.index);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    const handleCustomLabelChange = (e) => {
        setCustomLabel(e.target.value);
    };
    const handleCustomLabelSubmit = () => {
        if (customLabel && droppedItem !== null) {
            const quill = quillRef.current.getEditor();
            droppedItem.name = customLabel;
            onDrop(droppedItem);
            let range = { index: editingIndex, length: 0 };
            quill.insertText(range.index, `{{${droppedItem.name}}}`);
            setValue(quill.getText()); // Update the value to reflect changes in the editor
            setEditingIndex(null);
            setCustomLabel('');
            setDroppedItem(null);
        }
    };
    return (
        <div>
            <div
                ref={drop}
                style={{
                    backgroundColor: isOver ? 'lightgreen' : 'white',
                    padding: '20px',
                    minHeight: '300px',
                    border: '1px solid black',
                    position: 'relative',
                }}
            >
                <ReactQuill
                    style={{ height: "100px", width: "800px" }}
                    ref={quillRef}
                    value={value}
                    onChange={setValue}
                    placeholder="Write here or drag input fields..."
                />
                {editingIndex !== null && (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <input
                                type="text"
                                value={customLabel}
                                onChange={handleCustomLabelChange}
                                placeholder="Enter custom label"
                            />
                            <button onClick={handleCustomLabelSubmit}>Submit</button>
                        </div>
                    </div>
                )}
            </div>
            <button onClick={() => console.log(value)}>Click</button>
        </div>
    );
};
export default DroppableArea;