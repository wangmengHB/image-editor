const styles = require('./index.less');


export default class CanvasSpace {

  private _view: HTMLElement;
  private _canvas: HTMLCanvasElement;

  constructor() {
    this._createView();
  }

  private _createView() {
    const el = document.createElement('div');
    el.classList.add(styles['work-space']);


    const canvas = document.createElement('canvas');
    canvas.classList.add(styles['work-canvas']);




    el.appendChild(canvas);

    this._canvas = canvas;
    this._view = el;
  }

  get canvas() {
    return this._canvas;
  }


  get view() {
    return this._view;
  }


  


}




