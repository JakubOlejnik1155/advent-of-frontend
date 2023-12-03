export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
        let najwyzszaWartosc = -Infinity;
        let lokalizacjaWorek = null;
        for (let i = 0; i < lokalizacje.length; i++) {
            const { x, y, z, czas } = lokalizacje[i];
            const wartoscMapy = mapaCzasoprzestrzenna(x, y, z, czas);
            if (!isNaN(wartoscMapy) && isFinite(wartoscMapy)) {
                if (wartoscMapy > najwyzszaWartosc) {
                    najwyzszaWartosc = wartoscMapy;
                    lokalizacjaWorek = lokalizacje[i];
                }
            }
        }
        if (lokalizacjaWorek){
        const { x, y, z, czas } = lokalizacjaWorek;
        if (mapaCzasoprzestrzenna(x, y, z, czas ) === 0) return null
        return lokalizacjaWorek;
        }
        return null
}

export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number;

export  type Lokalizacja = {
    x: number;
    y: number;
    z: number;
    czas: number;
};
const mapaCzasoprzestrzenna: MapaCzasoprzestrzenna = (x, y, z, czas) => {
    return x + y + z + czas;
};
