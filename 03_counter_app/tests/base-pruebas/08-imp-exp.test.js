import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08- imp-eexp', () => { 
    test('getHeroesByid debe de retornar un heroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect( hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' });
     });
     test('getHeroesByid debe de retornar undifined si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);
      //  expect( hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' });
      expect (hero).toBeFalsy();
     });

     test('getHeroesByid debe de retornar  los heroes de DC', () => { 
            const owner = 'DC';
            const heroes = getHeroesByOwner(owner);

            
       
        
     });

 });