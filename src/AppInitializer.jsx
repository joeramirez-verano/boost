import { useEffect } from 'react';
import { appController } from './store/appController';
import getLocations from "./functions/getLocations"

const AppInitializer = () => {
  useEffect(() => {
    const initializeApp = async () => {
      try {
        const [_, locationsData] = await Promise.all([
          appController.initialize(),
          getLocations(),
        ]);

        const storeLocations = locationsData?.filter(hit => hit._geoloc);
        appController.updateState({ allStoreLocations: storeLocations });
      } catch (err) {
        console.error("App initialization failed:", err);
      }
    };

    initializeApp();
  }, []);

  return null;
};

export default AppInitializer;
