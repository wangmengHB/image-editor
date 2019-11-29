const styles = require('./index.less');
import { Button } from '../../widgets/button/button';



export default class HeaderPanel {

  private _view: HTMLElement;

  private _btnMap = new Map();

  constructor() {
    this._createView();
  }

  private _createView() {
    const el = document.createElement('div');
    el.classList.add(styles['header']);

    el.appendChild(this._createHeaderBtn('loadLocal', '加载本地图片'));
    el.appendChild(this._createHeaderBtn('loadJSON', '加载JSON'));
    el.appendChild(this._createHeaderBtn('exportJSON', '导出JSON'));
    el.appendChild(this._createHeaderBtn('exportImage', '生成新图片'));



    this._view = el;
  }


  get view() {
    return this._view;
  }


  private _createHeaderBtn(id, title) {
    const btnWraper = document.createElement('div');
    btnWraper.classList.add(styles['btn-wrapper']);
    const btn = new Button(btnWraper);
    btn.label = title;
    this._btnMap.set(id, btn);
    return btnWraper;
  }


}




