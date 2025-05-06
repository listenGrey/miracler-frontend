import {EventColor} from "../constants/eventColors";

export interface EventItem {
    text: string;
    checked: boolean;
}

export interface EventData {
    id: number;
    title: string;
    color: EventColor;
    items: EventItem[];
}
