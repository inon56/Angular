export interface IProduct {
    category: string, 
    description: string,
    id: number,
    image: string,
    price: number,
    // rating: {rate:number,count:},
    rating: IRating,
    title: string,
}

export interface IRating {
    rate: number,
    counst: number
}