import Films from '../components/Films';
import People from '../components/People';
import Locations from '../components/Locations';
import Species from '../components/Species';
import Vehicles from '../components/Vehicles';
import CategoryItemComponent from '../components/CategoryItemComponent';

const componentLookUp = component => ({
  'films': Films,
  'films-item': CategoryItemComponent,
  'people': People,
  'people-item': CategoryItemComponent,
  'locations': Locations,
  'locations-item': CategoryItemComponent,
  'species': Species,
  'species-item': CategoryItemComponent,
  'vehicles': Vehicles,
  'vehicles-item': CategoryItemComponent
})[component] || null;

export const getComponentFor = componentName => componentLookUp(componentName);
