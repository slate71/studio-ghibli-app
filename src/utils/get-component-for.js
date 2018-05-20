import Films from '../components/Films';
import FilmItem from '../components/FilmItem';
import People from '../components/People';
import PersonItem from '../components/PersonItem';
import Locations from '../components/Locations';
import LocationItem from '../components/LocationItem';
import Species from '../components/Species';
import SpeciesItem from '../components/SpeciesItem';
import Vehicles from '../components/Vehicles';
import VehicleItem from '../components/VehicleItem';

const componentLookUp = component => ({
  'films': Films,
  'films-item': FilmItem,
  'people': People,
  'people-item': PersonItem,
  'locations': Locations,
  'locations-item': LocationItem,
  'species': Species,
  'species-item': SpeciesItem,
  'vehicles': Vehicles,
  'vehicles-item': VehicleItem
})[component] || null;

export const getComponentFor = componentName => componentLookUp(componentName);
