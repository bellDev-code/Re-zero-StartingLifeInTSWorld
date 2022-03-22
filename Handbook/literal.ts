function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
	return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

// console.log(rollDice())

// loc/lat 좌표에 지도를 생성합니다.
declare function setupMap(config: MapConfig): void;
// ---생략---
interface MapConfig {
	lng: number;
	lat: number;
	tileSize: 8 | 16 | 32;
}

setupMap({ lng: 73.34834, lat: 40.3123123, tileSize: 16 })