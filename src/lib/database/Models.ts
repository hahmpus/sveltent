type Recipie = {
    id?: string;
    name: string;
    description: string;
    ingredients: string[] | Ingredient[]; //either a list of ids or a list of ingredients
};

type Ingredient = {
    id?: string;
    name: string;
    weight: number;
    macros: Macro[];
};

type Macro = {
    name: string;
    value: number;
    unit: string;
}
