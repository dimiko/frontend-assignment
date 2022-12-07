import { getLocations as apiGetLocations } from "../services";
import {useQuery} from "@tanstack/react-query";

export default function useLocations() {
    const queryKey = ['locations']

    const {
        data: locationsData,
        error,
        isLoading
    } = useQuery(queryKey, async () => {
        const response = await apiGetLocations()
        return response.data;
    },
        {
                    // refetchInterval: 5000,
                })

    return {
        locationsData: locationsData ? locationsData : [],
        error,
        isLoading
    }
}
