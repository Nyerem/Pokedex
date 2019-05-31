export interface Result {
    name: string;
    url: string;
}

export interface RootObject {
    count: number;
    next: string;
    previous: string;
    results: Result[];
}
