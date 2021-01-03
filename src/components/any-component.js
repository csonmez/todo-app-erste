import {Component} from 'erste'

export default class AnyComponent extends Component {
    template({param}) {
        return `<h2>Component param: ${param}</h2>`
    }
}
