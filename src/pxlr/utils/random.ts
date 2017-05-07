export function randomInt(min: number, max?: number): number {
  if (arguments.length === 1) {
    max = min;
    min = 0;
  }
  if (max < min) {
    [ max, min ] = [ min, max ];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomElement(entities: any[]): any {
  if (!entities || !entities.length) {
    return null;
  }

  return entities[ randomInt(entities.length - 1) ];
}
