import {apiClient} from "@/lib/api-client";

const getCurrentCapacity = async () => {
    try {
        const response = await apiClient.get('https://culinarium-ka.dm-drogeriemarkt.com/info');

        const storeKeys = Object.keys(response.data.stores);
        const firstStoreKey = storeKeys[0];
        const data = response.data.stores[firstStoreKey];

        if (firstStoreKey) {
            return {
                current: data.current_value,
                limit: data.limit,
            }
        } else {
            alert('No store keys found in the response.');
        }
    } catch (error) {
        console.error('Error fetching charts:', error);
        throw error;
    }
};

export default getCurrentCapacity;
