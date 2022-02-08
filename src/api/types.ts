export type ItemList = {
    itemList: DailyData[];
};
export type DailyData = {
    date: Date;
    name_jp: string;
    npatients: number;
}
type County = {
    name: string;
};

export type CountryData = {
    countries: County[];
};
export type Total = {
    date: string;
    pcr: number;
    hospitalize: number;
}