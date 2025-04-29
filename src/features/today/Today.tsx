import { useState } from 'react';
import Event from '../components/Event'; // 假设你也会用 React 写这个组件

interface EventItem {
    text: string;
    checked: boolean;
}

interface EventData {
    id: number;
    title: string;
    items: EventItem[];
}

function TodayPage() {
    const [events, setEvents] = useState<EventData[]>([
        {
            id: 1,
            title: '事件1',
            items: [
                { text: '事项1-1', checked: false },
                { text: '事项1-2', checked: false },
            ],
        },
        {
            id: 2,
            title: '事件2',
            items: [
                { text: '事项2-1', checked: false },
                { text: '事项2-2', checked: false },
            ],
        },
        // ... 其他事件
    ]);

    const updateEventItem = (eventIdx: number, itemIdx: number, checked: boolean) => {
        setEvents(prevEvents => {
            const updatedEvents = [...prevEvents];
            const updatedItems = [...updatedEvents[eventIdx].items];
            updatedItems[itemIdx] = { ...updatedItems[itemIdx], checked };
            updatedEvents[eventIdx] = { ...updatedEvents[eventIdx], items: updatedItems };
            return updatedEvents;
        });
    };

    return (
        <div className="today-page">
            {/* 顶部标题 */}
            <div className="today-header">
                <h1>今天</h1>
            </div>

            {/* 中间事件内容 */}
            <div className="today-events">
                {events.map((event, eventIdx) => (
                    <Event
                        key={event.id}
                        title={event.title}
                        items={event.items}
                        onUpdateItem={(itemIdx: number, checked: boolean) =>
                            updateEventItem(eventIdx, itemIdx, checked)
                        }
                    />
                ))}

                {/* 底部按钮 */}
                <div className="today-summary">
                    <div className="today-summary-button">搁置</div>
                    <div className="today-summary-button">结算</div>
                </div>
            </div>
        </div>
    );
}

export default TodayPage;