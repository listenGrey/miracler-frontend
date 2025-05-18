import { useEffect, useState } from 'react';
import axios from 'axios';
import type { EventData } from '../types/event';

/*
export function useEvents() {
    const [events, setEvents] = useState<EventData[]>([
        {
            id: 1,
            title: '事件1',
            color: 'red',
            items: [
                { text: '事项1-1', checked: false },
                { text: '事项1-2', checked: false },
            ],
        },
        {
            id: 2,
            title: '事件2',
            color: 'pink',
            items: [
                { text: '事项2-1', checked: false },
                { text: '事项2-2', checked: false },
            ],
        },
        {
            id: 3,
            title: '事件3',
            color: 'purple',
            items: [
                { text: '事项3-1', checked: false },
                { text: '事项3-2', checked: false },
            ],
        },
        {
            id: 4,
            title: '事件4',
            color: 'blue',
            items: [
                { text: '事项4-1', checked: false },
                { text: '事项4-2', checked: false },
            ],
        },
        {
            id: 5,
            title: '事件5',
            color: 'green',
            items: [
                { text: '事项5-1', checked: false },
                { text: '事项5-2', checked: false },
            ],
        },
        {
            id: 6,
            title: '事件6',
            color: 'yellow',
            items: [
                { text: '事项6-1', checked: false },
                { text: '事项6-2', checked: false },
            ],
        },
        {
            id: 7,
            title: '事件7',
            color: 'orange',
            items: [
                { text: '事项7-1', checked: false },
                { text: '事项7-2', checked: false },
            ],
        },
        {
            id: 8,
            title: '事件8',
            color: 'brown',
            items: [
                { text: '事项8-1', checked: false },
                { text: '事项8-2', checked: false },
            ],
        },
        {
            id: 9,
            title: '事件9',
            color:  'gray',
            items: [
                { text: '事项9-1', checked: false },
                { text: '事项9-2', checked: false },
            ],
        }
    ]);

    const updateEventItem = (eventIdx: number, itemIdx: number, checked: boolean) => {
        setEvents(prev =>
            prev.map((event, idx) =>
                idx === eventIdx
                    ? {
                        ...event,
                        items: event.items.map((item, i) =>
                            i === itemIdx ? { ...item, checked } : item
                        ),
                    }
                    : event
            )
        );
    };

    return {
        events,
        updateEventItem,
    };
}
*/
export function useEvents() {
    const [events, setEvents] = useState<EventData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<EventData[]>('http://localhost:8083/api/v1/today')
            .then(res => {
                setEvents(res.data);
            })
            .catch(err => {
                console.error('获取事件失败:', err);
            })
            .finally(() => setLoading(false));
    }, []);

    const updateEventItem = (eventIndex: number, itemIndex: number, checked: boolean) => {
        const updated = [...events];
        updated[eventIndex].items[itemIndex].checked = checked;
        setEvents(updated);
        // 可选：向后端发送 PATCH 请求同步状态
        const eventId = updated[eventIndex].id;

        axios.patch(`http://localhost:8083/api/v1/events/${eventId}/items/${itemIndex}`, {
            checked
        }).then(res => {
            console.log('勾选同步成功:', res.data);
        }).catch(err => {
            console.error('勾选同步失败:', err);
        });
    };

    return {
        events,
        loading,
        updateEventItem,
    };
}
