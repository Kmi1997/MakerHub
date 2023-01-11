export interface Internship{
    name: string,
    numberAvailable: number,
    duration: number,
    startDate: Date,
    endDate: Date,
    theme: string | null,
    deleted: boolean,
    image: string | null,
    price: number,
    place: string,
    fromAge: number | null,
    desc: string | null
};