import { useEvents } from '../../hooks/useEvents';
import Event from '../../components/Event';
import styles from './Today.module.css';

function Today() {
    const { events, updateEventItem } = useEvents();

    const handlePostpone = () => {
        alert('点击了「搁置」按钮（后续实现逻辑）');
    };

    const handleSettle = () => {
        alert('点击了「结算」按钮（后续实现逻辑）');
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1>今天</h1>
            </div>

            <div className={styles.scrollable}>
                {events.map((event, eventIdx) => (
                    <Event
                        key={event.id}
                        title={event.title}
                        items={event.items}
                        color={event.color}
                        onUpdateItem={(itemIdx, checked) =>
                            updateEventItem(eventIdx, itemIdx, checked)
                        }
                    />
                ))}
            </div>
            <div className={styles.summary}>
                <div className={styles.button} onClick={handlePostpone}>搁置</div>
                <div className={styles.button} onClick={handleSettle}>结算</div>
            </div>
        </div>
    );
}

export default Today;
