export enum MessageType {
    my,
    other,
    service,
}

export interface Message {
    id: number;
    type: MessageType;
    name: string;
    text: string;
    fullDate: string;
    time: string;
}