import { apiClient } from "@/lib/api-client";

export interface CapacityData {
    current: number;
    limit: number;
}

const getCurrentCapacity = async (): Promise<CapacityData> => {
    try {
        const response = await apiClient.get('https://culinarium-ka.dm-drogeriemarkt.com/info');

        const storeKeys = Object.keys(response.data.stores);
        const firstStoreKey = storeKeys[0];

        if (firstStoreKey) {
            const data = response.data.stores[firstStoreKey];
            return {
                current: data.current_value,
                limit: data.limit,
            };
        } else {
            alert('No store keys found in the response.');
            return {
                current: 0,
                limit: 0,
            };
        }
    } catch (error) {
        console.error('Error fetching charts:', error);
        throw error;
    }
};

export default getCurrentCapacity;
