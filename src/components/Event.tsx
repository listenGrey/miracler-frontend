import React from 'react';
import {EventItem} from "../types/event";
import styles from './Event.module.css';
import { eventColorMap } from '../constants/eventColors';

interface EventProps {
    title: string;
    items: EventItem[];
    onUpdateItem: (index: number, checked: boolean) => void;
    color: keyof typeof eventColorMap;
}

function Event({ title, items, onUpdateItem, color }: EventProps) {
    // 主题颜色
    const colorStyle = eventColorMap[color]['light'];
    const handleItemChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateItem(index, event.target.checked);
    };

    return (
        <div /*className={classNames(styles.event, styles[color])}*/
            className={styles.event}
            style={{
                backgroundColor: colorStyle.background,
                '--event-title-bg': colorStyle.title,
                /*'--event-bg': colorStyle.background,*/
                '--item-bg': colorStyle.itemBg,
                '--item-text': colorStyle.itemText,
            } as React.CSSProperties}
        >
            <div className={styles.header} style={{ backgroundColor: colorStyle.title, color: colorStyle.itemText }}>
                {title}
            </div>

            <div className={styles.items}>
                {items.map((item, index) => {
                    const inputId = `${title}-item-${index}`;
                    return (
                        <div className={styles.item} key={inputId} style={{ backgroundColor: colorStyle.itemBg, color: colorStyle.itemText }}>
                            <div className={styles.card}>
                                <input
                                    type="checkbox"
                                    id={inputId}
                                    checked={item.checked}
                                    onChange={(e) => handleItemChange(index, e)}
                                    title={`勾选事项：${item.text}`}
                                />
                                <label
                                    htmlFor={inputId}
                                    className={item.checked ? styles.checkedLabel : ''}
                                >
                                    {item.text}
                                </label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Event;
