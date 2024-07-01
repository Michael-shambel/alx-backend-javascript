export default class Building {
  constructor(sqft = 0) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessege !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
