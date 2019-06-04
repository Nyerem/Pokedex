export interface PokemonApi {
    count: number;
    next: string;
    previous: string;
    results: PokeResult[];
}

export interface PokeResult {
    name: string;
    url: string;
}

export interface PokeURL {
    abitities: string;
    base_experience: number;
    forms: string;
    game_indices: string;
    height: number;
    held_items: string;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: string;
    name: string;
    order: number;
    species: string;
    sprites: PokeSprite;
    stats: string;
    types: string;
    weight: number;
}

export interface PokeSprite {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}
