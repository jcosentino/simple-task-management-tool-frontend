export interface ITask {
    id: number;
    name: string;
    description?: string;
    dueDateMonth?: number;
    dueDateDay?: number;
    dueDateYear?: number;
    status: string;
}
