import Films from '../components/Films';
import People from '../components/People';
import Locations from '../components/Locations';
import Species from '../components/Species';
import Vehicles from '../components/Vehicles';

const componentLookUp = component => ({
  'films': Films,
  'people': People,
  'locations': Locations,
  'species': Species,
  'vehicles': Vehicles
})[component] || null;

export const getComponentFor = componentName => componentLookUp(componentName);
