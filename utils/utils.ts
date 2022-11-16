export function range(start: number, end: number): number[] {
    return [...Array(start).keys()].map(item => item + end);
}