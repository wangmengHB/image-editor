import HeaderPanel from './view/header-panel';
import CanvasSpace from './view/canvas-space';
import FooterPanel from './view/footer-panel';
const styles = require('./index.less');





export default class ImageEditor {
  

  constructor(private container: HTMLElement) {


    this._setupView();

  }


  async loadImageSrc() {

  }


  private _setupView() {
    const headerPanel = new HeaderPanel();
    const canvasSpace = new CanvasSpace();
    const footerPanel = new FooterPanel();

    (window as any)._c = this.container;

    this.container.classList.add(styles['image-editor']);

    this.container.appendChild(headerPanel.view);
    this.container.appendChild(canvasSpace.view);
    this.container.appendChild(footerPanel.view);

  }






}