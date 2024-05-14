export interface Address {
    city: string,
    geo: {
        lat: string,
        lng: string
    },
    street: string,
    suite: string,
    zipcode: string
}

export interface Company {
    bs: string,
    catchPhrase: string,
    name: string
}

export interface User {
    id: number,
    name: string,
    email: string,
    phone: string,
    username: string,
    website: string,
    address: Address,
    company: Company
}

export interface Posts {
    id: number,
    userId: number,
    title: string,
    body: string
}