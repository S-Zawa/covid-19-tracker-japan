type _Config = {
    latestDataApiUrl: string;
}

const Config: _Config = {
    latestDataApiUrl: process.env.REACT_APP_LATEST_DATA_API_URL || ""
}

export default Config