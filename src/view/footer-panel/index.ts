

export default class FooterPanel {

  private _view: HTMLElement;

  constructor() {
    this._createView();
  }

  private _createView() {
    const el = document.createElement('div');


    this._view = el;
  }


  get view() {
    return this._view;
  }


  


}




