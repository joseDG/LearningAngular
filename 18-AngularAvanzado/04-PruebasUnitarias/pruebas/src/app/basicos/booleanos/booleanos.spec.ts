import { usuarioIngresado } from './booleanos';



describe('Prueba de Booleanos', () => {

  it('Debe de retornar true', () => {

    const res = usuarioIngresado();

    expect(res).toBeTruthy();
  })
})