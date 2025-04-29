import React from 'react';

interface Item {
    text: string;
    checked: boolean;
}

interface EventProps {
    title: string;
    items: Item[];
    onUpdateItem: (index: number, checked: boolean) => void;
}

function Event({ title, items, onUpdateItem }: EventProps) {
    const handleItemChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateItem(index, event.target.checked);
    };

    return (
        <div className="event">
            <div className="event-header">
                {title}
            </div>
            <div className="event-items">
                {items.map((item, index) => (
                    <div className="event-item" key={index}>
                        <input
                            type="checkbox"
                            id={`item-${index}`}
                            checked={item.checked}
                            onChange={(e) => handleItemChange(index, e)}
                        />
                        <label htmlFor={`item-${index}`}>{item.text}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Event;