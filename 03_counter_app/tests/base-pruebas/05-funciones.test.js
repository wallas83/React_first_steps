import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas en 05-funcniones', () => { 

    test('getUser debe de retorna un objeto', () => {
            const testUser ={
                uid: 'ABC123',
                username:'El_Papi1502'
            };
            const user = getUser();

            expect( testUser ).toEqual(user);
    });

    test('getusuarioActivo debe de retornar un objeto', () => {
        const name = 'wallas';
 
        const user = getUsuarioActivo( name );
        expect( user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
 });