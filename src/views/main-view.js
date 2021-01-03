import { View } from 'erste'
import './main-view.css'
import AnyComponent from "../components/any-component";

export default class MainView extends View {
  constructor() {
    super();

    this.anyComponent = new AnyComponent({param: 23})
  }

  template() {
    return `
      <div class="main-view">
        <h1>Welcome to your erste app</h1>
        <span>${this.anyComponent}</span>
      </div>
    `
  }
}
