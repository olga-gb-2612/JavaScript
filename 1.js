function calc(c)
{
    f= (9 / 5) * c + 32;
    return f;
}
const C = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
alert(`Цельсий: ${C}, Фаренгейт: ${calc(C).toFixed(1)}`);
