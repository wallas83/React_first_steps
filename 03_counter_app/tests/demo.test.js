describe('Prueba en <DemoComponent/>', () => { 
    test('Ësta prueba no debe fallar', () => {
        //1 inicializacion
         const message1 = 'Hola mundp';
        //2. estimulo
         const message2 = message1.trim();
        //3. Observar el comportamiento...esperado
        expect (message1).toBe(message2);
     });

 });

