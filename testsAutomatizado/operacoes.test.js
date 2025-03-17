console.clear();
import { describe, expect, test } from 'bun:test';
import { somar, subtracao, multiplicacao, divisao } from './operacoes';

describe('testes de soma', () => {
    test('deve retornar um valor positivo', () => {
        expect(somar(2, 5)).toBe(7);
    })
    test('deve retornar a subtração', () => {
        expect(subtracao(5, 2)).toBe(3);
    })
    test('deve retornar a multiplicação', () => {
        expect(multiplicacao(2, 5)).toBe(10);
    })
    test('deve retornar a divisão', () => {
        expect(divisao(10, 2)).toBe(5)
    })
})