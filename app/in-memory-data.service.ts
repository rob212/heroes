import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 10, name: 'Mr Nice' },
      { id: 11, name: 'Narco' },
      { id: 12, name: 'Bombasto' },
      { id: 13, name: 'Celeritas' },
      { id: 14, name: 'Jemaine' },
      { id: 15, name: 'RubberMan' },
      { id: 16, name: 'Dynamo' },
      { id: 17, name: 'Dr IQ' },
      { id: 18, name: 'Magma' },
      { id: 19, name: 'Phil Dunphy' },
      { id: 20, name: 'Le Shadow' }
    ];
    return {heroes};
  }
}
