import axios from "axios";
import latest from './latest.json';
import Config from "../config";

type Latest = typeof latest;

export const fetchLatestData = async (): Promise<Latest> => {
    try {
        const { data } = await axios.get<Latest>(Config.latestDataApiUrl);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return {} as Latest;
    }
};