export interface Internship{
    id: number,
    name: string,
    numberAvailable: number,
    duration: number,
    startDate: Date,
    endDate: Date,
    startHour: string,
    endHour: string,
    deleted: boolean,
    image: string | null,
    price: number,
    place: string,
    fromAge: number | null,
    desc: string | null
};