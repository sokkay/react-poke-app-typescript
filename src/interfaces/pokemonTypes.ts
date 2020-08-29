export interface IPokemonTypes {
    count: number;
    next: null;
    previous: null;
    results: IPokemonTypesResult[];
}

export interface IPokemonTypesResult {
    name: string;
    url: string;
}